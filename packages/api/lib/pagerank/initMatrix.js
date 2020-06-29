"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initMatrix;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ADMIN_MAX_POWER_VOTES = 50;

function initMatrix(nodes, params) {
  var nodeIds = Object.keys(nodes);
  var dictionary = {};
  nodeIds.forEach((key, i) => dictionary[key] = i);
  var N = nodeIds.length;
  var g = {};
  var danglingNodes = [];
  var degreeStore = {};
  var personalization = {};
  nodeIds.forEach((nodeId, i) => {
    var node = nodes[nodeId];
    if (!node.degree) danglingNodes.push(i);
    var {
      degree
    } = node;
    degreeStore[nodeId] = degree;

    if (params.personalization[nodeId]) {
      // this is usually 1 but can be adjusted via custom params
      var customWeight = params.personalization[nodeId];
      var adminWeight = customWeight / (1 + Math.E ** (6 - degree * 10 / ADMIN_MAX_POWER_VOTES));
      personalization[nodeId] = adminWeight;
    }

    g[i] = g[i] || {
      inputs: {}
    }; // compute incoming weights for edge targets of el

    Object.keys(node.inputs).forEach(id => {
      if (!nodes[id]) return;
      var w = node.inputs[id];
      var {
        degree: d
      } = nodes[id]; // normalize

      g[i].inputs = g[i].inputs || {};
      g[i].inputs[dictionary[id]] = w / d;
    });
  }); // add Hypothetical Nodes
  // Hypothetical Nodes that consumes dangling nodes

  var danglingInputs = {};
  danglingNodes.forEach(dNode => danglingInputs[dNode] = 1);
  var danglingId = dictionary.danglingConsumer;

  if (g[danglingId]) {
    g[danglingId].inputs = _objectSpread({
      [danglingId]: 1
    }, danglingInputs);
  }

  if (params.debug) {
    console.log('number of nodes', N); // eslint-disable-line

    var {
      heapUsed
    } = process.memoryUsage();
    var mb = Math.round(100 * heapUsed / 1048576) / 100;
    console.log('Matrix - program is using', mb, 'MB of Heap.'); // eslint-disable-line
  }

  return {
    g,
    N,
    dictionary,
    danglingNodes,
    degreeStore,
    personalization
  };
}
//# sourceMappingURL=initMatrix.js.map