"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pagerank;

var _initMatrix = _interopRequireDefault(require("./initMatrix"));

// The PageTrust algorithm

/* eslint no-console: 0 */
function pagerank(nodes, params) {
  if (!params) params = {};
  if (!params.alpha) params.alpha = 0.95;
  if (!params.personalization) params.personalization = null;
  if (!params.max_iter) params.max_iter = 500;
  if (!params.tol) params.tol = 1.0e-6;
  if (!params.weight) params.weight = 'weight';
  if (!params.negative) params.negative = 'negative';
  if (!params.beta) params.beta = 2;
  if (!params.M) params.M = 1;
  if (!params.debug) params.debug = false;
  var now = new Date();
  var {
    g,
    N,
    dictionary,
    danglingNodes,
    degreeStore,
    personalization
  } = (0, _initMatrix.default)(nodes, params);
  var p = setupTrustSeed({
    personalization,
    N,
    dictionary,
    g
  });
  var danglingWeights = dictionary.danglingConsumer ? [] : initDanglingWeights(params.dangling, p, N);
  var x = initialRank({
    params,
    dictionary,
    nodes,
    N
  });
  params.debug && console.log('matrix setup time ', (new Date().getTime() - now) / 1000 + 's');
  var iter;
  var err;

  for (iter = 0; iter < params.max_iter; iter++) {
    // this enables garbage collector to free up memory between iterations
    ({
      x,
      err
    } = runLoop({
      x,
      p,
      g,
      N,
      danglingNodes,
      danglingWeights
    }, params));

    if (err < N * params.tol && iter > 1) {
      params.debug && console.log('iterations ', iter);
      params.debug && console.log(err);
      var elapsed = new Date().getTime() - now.getTime();
      params.debug && console.log('elapsed time: ', elapsed / 1000, 's');
      return formatOutput(x, dictionary, nodes, params, degreeStore);
    }
  }

  console.warn('pagerank: power iteration failed to converge in ' + params.iter_max + ' iterations.');
  return formatOutput(x, dictionary, nodes, params, degreeStore);
}

function setupTrustSeed(_ref) {
  var {
    N,
    dictionary,
    g,
    personalization
  } = _ref;
  // if we don't have a personalization vector, initial trust gets spread over all nodes
  if (!personalization || !Object.keys(personalization).length) return new Array(N).fill(1.0 / N);
  var p = new Array(N).fill(0);
  var keys = Object.keys(personalization);
  var degree = keys.reduce((prev, key) => prev + personalization[key], 0);
  keys.forEach(key => {
    p[dictionary[key]] = personalization[key] / degree;

    for (var j = 0; j < N; j++) {
      if (!g[dictionary[key]]) g[dictionary[key]] = {
        inputs: {}
      };
      if (!g[dictionary[key]].inputs[j]) g[dictionary[key]].inputs[j] = 0;
    }
  });
  return p;
}

function initDanglingWeights(danglingVector, p) {
  // TODO use a node to direct dangling nodes
  return danglingVector || p; // return new Array(N).fill(1.0 / N);
}

function initialRank(_ref2) {
  var {
    nodes,
    params,
    dictionary,
    N
  } = _ref2;
  var x = new Array(N).fill(0);
  var sum = 0;
  Object.keys(nodes).forEach(key => {
    var i = dictionary[key];
    var node = nodes[key];
    if (i === undefined || !node) return;
    x[i] = node.start || 0;
    sum += x[i];
  });
  params.debug && console.log('start sum ', sum);
  return x;
}

function runLoop(loopParams, params) {
  var {
    x
  } = loopParams;
  var {
    p,
    g,
    N,
    danglingNodes,
    danglingWeights
  } = loopParams;
  var xlast = [...x];
  x = new Array(N).fill(0);
  var danglesum = 0;
  danglingNodes.forEach(node => danglesum += xlast[node]);
  danglesum *= params.alpha; // Iterate through nodes;

  for (var i = 0; i < N; i++) {
    var upvotes = g[i] ? Object.keys(g[i].inputs) || [] : [];

    for (var key = 0; key < upvotes.length; key++) {
      var j = upvotes[key];
      x[i] += params.alpha * g[i].inputs[j] * xlast[j];
    } // random jump to the seed vector


    x[i] += (1.0 - params.alpha) * p[i]; // add the weights from dangling nodes to make sure sum is 1

    x[i] += danglesum * (danglingWeights[i] || 0);
  } // normalize


  var sum = x.reduce((prev, next) => prev + next, 0);
  var err = 0.0;
  x.forEach((el, i) => {
    el /= sum || 1;
    err += Math.abs(el - xlast[i]);
    return el;
  });

  if (params.debug) {
    console.log('sum', sum);
    var {
      heapUsed
    } = process.memoryUsage();
    var mb = Math.round(100 * heapUsed / 1048576) / 100;
    console.log('Iter - program is using', mb, 'MB of Heap.');
  }

  return {
    x,
    err
  };
}

function formatOutput(x, dictionary, nodes, params, degreeStore) {
  var result = {};
  Object.keys(nodes).forEach((node, i) => result[node] = {
    rank: x[i],
    degree: degreeStore[node]
  });
  return result;
}
//# sourceMappingURL=pagerank.js.map