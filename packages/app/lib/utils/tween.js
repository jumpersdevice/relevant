'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.easing = exports.reset = exports.stop = exports.start = exports.remove = exports.update = exports.add = void 0;
var lerp = function lerp(n, a, b) {
  return (b - a) * n + a;
};
var tweens = [];
var lastT = 0;
var id = 0;
var animationFrame = 0;
var speed = 1;
var add = function add(tween) {
  tween.id = id++;
  tween.obj = tween.obj || {};
  if (tween.easing) {
    if (typeof tween.easing === 'string') {
      tween.easing = easing[tween.easing];
    }
  } else {
    tween.easing = easing.linear;
  }
  if (!('from' in tween) && !('to' in tween)) {
    tween.keys = [];
  } else if (!('from' in tween)) {
    tween.from = {};
    tween.keys = Object.keys(tween.to);
    tween.keys.forEach(function(prop) {
      tween.from[prop] = parseFloat(tween.obj[prop]);
    });
  } else {
    tween.keys = Object.keys(tween.from);
  }
  tween.delay = tween.delay || 0;
  tween.start = lastT + tween.delay;
  tween.done = false;
  tween.after = tween.after || [];
  tween.then = function(fn) {
    tween.after.push(fn);
    return tween;
  };
  tween.tick = 0;
  tween.skip = tween.skip || 1;
  tween.dt = 0;
  tweens.push(tween);
  return tween;
};
exports.add = add;
var update = function update(t) {
  var done = false;
  animationFrame = requestAnimationFrame(update);
  lastT = t * speed;
  if (tweens.length === 0) return;
  tweens.forEach(function(tween) {
    var dt = Math.min(1.0, (t - tween.start) / tween.duration);
    tween.tick++;
    if (dt < 0 || (dt < 1 && tween.tick % tween.skip !== 0)) return;
    var ddt = tween.easing(dt);
    tween.dt = ddt;
    tween.keys.forEach(function(prop) {
      var val = lerp(ddt, tween.from[prop], tween.to[prop]);
      if (tween.round) val = Math.round(val);
      if (tween.units) val = Math.round(val) + tween.units;
      tween.obj[prop] = val;
    });
    if (tween.update) {
      tween.update(tween.obj, dt);
    }
    if (dt === 1) {
      if (tween.finished) {
        tween.finished(tween);
      }
      if (tween.after.length) {
        var twn = tween.after.shift();
        twn.obj = twn.obj || tween.obj;
        twn.after = tween.after;
        add(twn);
      }
      if (tween.loop) {
        tween.start = t + tween.delay;
      } else {
        done = true;
        tween.done = true;
      }
    }
  });
  if (done) {
    tweens = tweens.filter(function(tween) {
      return !tween.done;
    });
  }
};
exports.update = update;
var remove = function remove(tween) {
  if (tween)
    tweens = tweens.filter(function(t) {
      return t.id !== tween.id;
    });
};
exports.remove = remove;
var start = function start() {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(update);
};
exports.start = start;
var stop = function stop() {
  cancelAnimationFrame(animationFrame);
};
exports.stop = stop;
var reset = function reset() {
  stop();
  tweens = [];
};
exports.reset = reset;
var easing = {
  linear: function linear(t) {
    return t;
  },
  circ_out: function circ_out(t) {
    return Math.sqrt(1 - (t -= 1) * t);
  },
  circ_in: function circ_in(t) {
    return -(Math.sqrt(1 - t * t) - 1);
  },
  circ_in_out: function circ_in_out(t) {
    t *= 2;
    return t < 1
      ? -0.5 * (Math.sqrt(1 - t * t) - 1)
      : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  quad_in: function quad_in(n) {
    return Math.pow(n, 2);
  },
  quad_out: function quad_out(n) {
    return n * (n - 2) * -1;
  },
  quad_in_out: function quad_in_out(n) {
    n *= 2;
    if (n < 1) {
      return Math.pow(n, 2) / 2;
    }
    return (-1 * (--n * (n - 2) - 1)) / 2;
  },
  cubic_bezier: function cubic_bezier(mX1, mY1, mX2, mY2) {
    function A(aA1, aA2) {
      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
    function B(aA1, aA2) {
      return 3.0 * aA2 - 6.0 * aA1;
    }
    function C(aA1) {
      return 3.0 * aA1;
    }
    function CalcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    return function(aX) {
      if (mX1 === mY1 && mX2 === mY2) return aX;
      return CalcBezier(aX, mY1, mY2);
    };
  }
};
exports.easing = easing;
//# sourceMappingURL=tween.js.map
