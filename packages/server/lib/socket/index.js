"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _socket = _interopRequireDefault(require("socket.io"));

var _user = _interopRequireDefault(require("../api/user/user.model"));

var _socketEvent = _interopRequireDefault(require("./socketEvent"));

/* eslint no-console: 0 */
// TODO store list of clients in Mongo;
var clients = {};

function _default(server) {
  var io = (0, _socket.default)();
  io.origins(['*:*']);
  io.attach(server);
  registerEvents(io);

  function sendHeartbeat() {
    setTimeout(sendHeartbeat, 30000);
    io.sockets.emit('pingKeepAlive', {
      beat: 1
    });
  }

  setTimeout(sendHeartbeat, 30000);
  io.on('connection', socket => {
    socket.address = socket.request.connection.remoteAddress + ':' + socket.request.connection.remotePort;
    socket.connectedAt = new Date();

    socket.log = function () {
      for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
        data[_key] = arguments[_key];
      }

      console.log("SocketIO ".concat(socket.nsp.name, " [").concat(socket.address, "]"), ...data);
    };

    onConnect(socket, io);
    var currentUser = null;
    socket.emit('action', {
      type: 'socketId',
      payload: socket.id
    });
    socket.on('pingResponse', () => {// console.log('Pong received from client');
    });
    socket.on('action', action => {
      if (action.type === 'server/storeUser') {
        currentUser = action.payload;
        addClient(socket, currentUser);
      }

      if (action.type === 'server/logout') {
        currentUser = action.payload;
        removeClient(socket, currentUser);
      }
    });
    socket.on('disconnect', () => {
      removeClient(socket, currentUser);
    });
  });
}

function removeClient(socket, currentUser) {
  if (!currentUser || !clients[currentUser]) return;
  var userSockets = clients[currentUser];
  delete userSockets[socket.id];

  if (Object.keys(userSockets).length === 0) {
    delete clients[currentUser];

    _user.default.findOneAndUpdate({
      _id: currentUser
    }, {
      online: false
    }).exec().catch(err => console.log(err));
  }

  console.log('socket disconnected');
}

function addClient(socket, currentUser) {
  console.log('user connected ', currentUser);
  clients[currentUser] = clients[currentUser] || {};
  clients[currentUser][socket.id] = socket;
  var userSockets = clients[currentUser]; // update online status and send socket

  if (Object.keys(userSockets).length === 1) {
    _user.default.findOneAndUpdate({
      _id: currentUser
    }, {
      online: true
    }).exec().catch(err => console.log(err));
  }
}

function createListener(io) {
  return data => {
    if (data._id) {
      var sockets = clients[data._id];
      if (!sockets) return;
      Object.keys(sockets).forEach(id => {
        var socket = sockets[id];
        console.log('emit to ', data._id, ' ', data.type);
        socket.emit('action', data);
      });
    } else {
      console.log('emit to all ', data.type);
      io.emit('action', data);
    }
  };
}

function registerEvents(io) {
  var eventListener = _socketEvent.default;
  var listener = createListener(io);
  eventListener.on('socketEvent', listener);
} // When the user connects.. perform this


function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', data => {
    socket.log(JSON.stringify(data, null, 2));
  });
}
//# sourceMappingURL=index.js.map