'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.loadFile = loadFile;
exports.renderToCanvas = renderToCanvas;
exports.downsample = downsample;
exports.loadImage = loadImage;
exports.MAX_FILE_SIZE = exports.MAX_IMAGE_DIMENSION = void 0;
var _exifreader = _interopRequireDefault(require('exifreader'));
var _dataUriToBuffer = _interopRequireDefault(require('data-uri-to-buffer'));
var MAX_IMAGE_DIMENSION = 1024;
exports.MAX_IMAGE_DIMENSION = MAX_IMAGE_DIMENSION;
var MAX_FILE_SIZE = 1024 * 400;
exports.MAX_FILE_SIZE = MAX_FILE_SIZE;
function loadFile(file) {
  return new Promise(function(resolve) {
    var reader = new FileReader();
    reader.onload = function(e) {
      return resolve(e.target.result);
    };
    reader.readAsArrayBuffer(file);
  });
}
function getScale(width, height, viewportWidth, viewportHeight, fillViewport) {
  function fitHorizontal() {
    return viewportWidth / width;
  }
  function fitVertical() {
    return viewportHeight / height;
  }
  fillViewport = !!fillViewport;
  var landscape = width / height > viewportWidth / viewportHeight;
  if (landscape) {
    if (fillViewport) {
      return fitVertical();
    }
    if (width > viewportWidth) {
      return fitHorizontal();
    }
  } else {
    if (fillViewport) {
      return fitHorizontal();
    }
    if (height > viewportHeight) {
      return fitVertical();
    }
  }
  return 1;
}
function applyRotation(canvas, ctx, deg) {
  var radians = deg * (Math.PI / 180);
  if (deg === 90) {
    ctx.translate(canvas.width, 0);
  } else if (deg === 180) {
    ctx.translate(canvas.width, canvas.height);
  } else if (deg === 270) {
    ctx.translate(0, canvas.height);
  }
  ctx.rotate(radians);
}
function base64ToUint8Array(string, start, finish) {
  start = start || 0;
  finish = finish || string.length;
  var binary = atob(string);
  var buffer = new Uint8Array(binary.length);
  for (var i = start; i < finish; i++) {
    buffer[i] = binary.charCodeAt(i);
  }
  return buffer;
}
function getOrientation(uri) {
  var base64String = uri.split(',')[1];
  var arr = base64ToUint8Array(base64String, 0, Math.pow(2, 17));
  try {
    var tags = _exifreader.default.load(arr.buffer);
    return tags.Orientation.value;
  } catch (err) {
    return 1;
  }
}
var orientationToTransform = {
  1: { rotation: 0, mirror: false },
  2: { rotation: 0, mirror: true },
  3: { rotation: 180, mirror: false },
  4: { rotation: 180, mirror: true },
  5: { rotation: 90, mirror: true },
  6: { rotation: 90, mirror: false },
  7: { rotation: 270, mirror: true },
  8: { rotation: 270, mirror: false }
};
function applyOrientationCorrection(canvas, ctx, uri) {
  var orientation = getOrientation(uri);
  if (orientation && orientation !== 1) {
    var rotation = orientationToTransform[orientation].rotation;
    var flipAspect = rotation === 90 || rotation === 270;
    if (flipAspect) {
      canvas.width = canvas.height + canvas.width;
      canvas.height = canvas.width - canvas.height;
      canvas.width -= canvas.height;
    }
    if (rotation > 0) {
      applyRotation(canvas, ctx, rotation);
    }
  }
}
function renderToCanvas(img, options) {
  if (!img) return null;
  options = options || {};
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var initialScale = options.scale || 1;
  var scale = getScale(
    img.width * initialScale,
    img.height * initialScale,
    MAX_IMAGE_DIMENSION,
    MAX_IMAGE_DIMENSION,
    true
  );
  scale *= initialScale;
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  var _options = options,
    correctOrientation = _options.correctOrientation;
  var jpeg = !!img.src.match(/data:image\/jpeg|\.jpeg$|\.jpg$/i);
  var hasDataURI = !!img.src.match(/^data:/);
  ctx.save();
  if (correctOrientation && jpeg && hasDataURI) {
    applyOrientationCorrection(canvas, ctx, img.src);
  }
  if (scale !== 1) {
    ctx.scale(scale, scale);
  }
  ctx.drawImage(img, 0, 0);
  ctx.restore();
  return canvas;
}
function downsample(img) {
  var resized = renderToCanvas(img, { correctOrientation: true });
  var buf;
  var dataURL;
  var quality = 0.8;
  do {
    dataURL = resized.toDataURL('image/jpeg', quality);
    buf = (0, _dataUriToBuffer.default)(dataURL);
    quality -= 0.05;
  } while (buf.length > MAX_FILE_SIZE && quality > 0.1);
  return dataURL;
}
function loadImage(file) {
  return new Promise(function(resolve, reject) {
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        reader.onload = null;
        reader.onerror = null;
        var dataURL = e.target.result;
        var buf = (0, _dataUriToBuffer.default)(dataURL);
        if (buf.length <= MAX_FILE_SIZE) {
          resolve(dataURL);
        } else {
          var img = new Image();
          img.onload = function() {
            img.onload = null;
            img.onerror = null;
            resolve(downsample(img));
          };
          img.onerror = function() {
            img.onload = null;
            img.onerror = null;
            reject();
          };
          img.src = dataURL;
        }
      };
      reader.onerror = function() {
        reader.onload = null;
        reader.onerror = null;
        reject();
      };
      reader.readAsDataURL(file);
    } else reject();
  });
}
//# sourceMappingURL=img.js.map
