/* eslint no-console: 0 */
import socketIO from 'socket.io';
import User from 'server/api/user/user.model';
import socketRedis from 'socket.io-redis';
import socketEvent from './socketEvent';

const { REDIS_URL, REDIS_KEY = 'socketio' } = process.env;

// TODO store list of clients in Mongo;
const clients = {};

export default function(server) {
  const redisAdapter = socketRedis(REDIS_URL, { key: REDIS_KEY });

  const io = socketIO(server, {
    transports: [
      'websocket',
      'flashsocket',
      'htmlfile',
      'xhr-polling',
      'jsonp-polling',
      'polling'
    ]
  });
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

    socket.on('pingResponse', () => {});

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
    emitToUser(data);
    cb();
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
}

function addClient(io, socket, currentUser) {
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
      io.emit('action', data);
    }
  };
}

function emitToUser(data) {
  const sockets = clients[data._id];
  if (!sockets) return;
  Object.keys(sockets).forEach(id => {
    const socket = sockets[id];
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
