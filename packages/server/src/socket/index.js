/* eslint no-console: 0 */
import socketIO from 'socket.io';
import User from 'server/api/user/user.model';
import socketRedis from 'socket.io-redis';
import socketEvent from './socketEvent';

const { REDIS_URL, REDIS_KEY = 'socketio' } = process.env.REDIS_URL;

// TODO store list of clients in Mongo;
const clients = {};

export default function(server) {
  const redisAdapter = socketRedis(REDIS_URL, { key: REDIS_KEY });

  const io = socketIO(server);
  io.origins(['*:*']);

  function sendHeartbeat() {
    setTimeout(sendHeartbeat, 30000);
    io.sockets.emit('pingKeepAlive', { beat: 1 });
  }
  setTimeout(sendHeartbeat, 30000);

  registerEvents(io);

  io.adapter(redisAdapter).on('connection', socket => {
    socket.address =
      socket.request.connection.remoteAddress +
      ':' +
      socket.request.connection.remotePort;

    socket.connectedAt = new Date();

    socket.log = (...data) => {
      console.log(`SocketIO ${socket.nsp.name} [${socket.address}]`, ...data);
    };

    onConnect(socket, io);

    let currentUser = null;
    socket.emit('action', { type: 'socketId', payload: socket.id });

    socket.on('pingResponse', () => {
      // console.log('Pong received from client');
    });

    socket.on('action', action => {
      if (action.type === 'server/storeUser') {
        currentUser = action.payload;
        addClient(io, socket, currentUser);
      }
      if (action.type === 'server/logout') {
        currentUser = action.payload;
        removeClient(io, socket, currentUser);
      }
    });

    socket.on('disconnect', () => {
      removeClient(io, socket, currentUser);
    });
  });

  io.of('/').adapter.customHook = (data, cb) => {
    console.log('forwarding to', data._id);
    emitToUser(data);
    cb('forwarded message to ' + data._id);
  };
}

function removeClient(io, socket, currentUser) {
  if (!currentUser || !clients[currentUser]) return;

  const userSockets = clients[currentUser];
  delete userSockets[socket.id];

  if (Object.keys(userSockets).length === 0) {
    delete clients[currentUser];

    User.findOneAndUpdate({ _id: currentUser }, { online: false })
      .exec()
      .catch(err => console.log(err));
  }
  console.log('socket disconnected');
}

function addClient(io, socket, currentUser) {
  console.log('user connected ', currentUser);
  clients[currentUser] = clients[currentUser] || {};
  clients[currentUser][socket.id] = socket;

  const userSockets = clients[currentUser];

  // update online status and send socket
  if (Object.keys(userSockets).length === 1) {
    User.findOneAndUpdate({ _id: currentUser }, { online: true })
      .exec()
      .catch(err => console.log(err));
  }
}

function createListener(io) {
  return data => {
    if (data._id) {
      emitToUser(data);
      io.of('/').adapter.customRequest(data, err => {
        if (err) console.log(err);
      });
    } else {
      console.log('emit to all ', data.type);
      io.emit('action', data);
    }
  };
}

function emitToUser(data) {
  const sockets = clients[data._id];
  if (!sockets) return;
  Object.keys(sockets).forEach(id => {
    const socket = sockets[id];
    console.log('emit to ', data._id, ' ', data.type);
    socket.emit('action', data);
  });
}

function registerEvents(io) {
  const eventListener = socketEvent;
  const listener = createListener(io);
  eventListener.on('socketEvent', listener);
}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', data => {
    socket.log(JSON.stringify(data, null, 2));
  });
}
