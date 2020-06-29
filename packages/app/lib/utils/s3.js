'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.toS3Advanced = toS3Advanced;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _alert = require('./alert');
var RNFetchBlob;
var Platform = {};
if (process.env.WEB !== 'true') {
  Platform = require('react-native-web').Platform;
  if (Platform.OS === 'android') {
    RNFetchBlob = require('rn-fetch-blob').default;
  }
}
function isDataURL(s) {
  return !!s.match(isDataURL.regex);
}
isDataURL.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
function dataURItoBlob(dataURI) {
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = unescape(dataURI.split(',')[1]);
  }
  var mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0];
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}
function uploadToS3(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _uploadToS.apply(this, arguments);
}
function _uploadToS() {
  _uploadToS = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee(
      uri,
      policy,
      signature,
      url,
      publicUrl,
      signedObjectName,
      AWS_ACCESS_KEY
    ) {
      var body, res, file;
      return _regenerator.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                body = new FormData();
                _context.prev = 1;
                if (
                  !(
                    Platform.OS === 'android' &&
                    (uri.match('http://') || uri.match('https://'))
                  )
                ) {
                  _context.next = 7;
                  break;
                }
                _context.next = 5;
                return RNFetchBlob.config({ fileCache: true, session: 'uploads' }).fetch(
                  'GET',
                  uri
                );
              case 5:
                res = _context.sent;
                uri = 'file://' + res.path();
              case 7:
                _context.next = 12;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);
                (0, _alert.Alert)().alert('Error uploading image ', _context.t0);
              case 12:
                file = { uri: uri, name: signedObjectName, type: 'image/jpeg' };
                if (isDataURL(uri)) {
                  file = dataURItoBlob(uri);
                }
                body.append('key', signedObjectName);
                body.append('AWSAccessKeyId', AWS_ACCESS_KEY);
                body.append('acl', 'public-read');
                body.append('success_action_status', '201');
                body.append('Content-Type', file.type);
                body.append('policy', policy);
                body.append('signature', signature);
                body.append('file', file);
                return _context.abrupt(
                  'return',
                  fetch(url, { method: 'POST', body: body })
                    .then(function(response) {
                      if (Platform.OS === 'android') {
                        RNFetchBlob.session('uploads').dispose();
                        if (response.status === 201) {
                          return { success: true, url: publicUrl };
                        }
                        return { success: false, response: response };
                      }
                      return { success: true, url: publicUrl };
                    })
                    .catch(function(error) {
                      if (Platform.OS === 'android') {
                        RNFetchBlob.session('uploads').dispose();
                      }
                      return { success: false, url: null, error: error };
                    })
                );
              case 23:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[1, 9]]
      );
    })
  );
  return _uploadToS.apply(this, arguments);
}
function executeOnSignedUrl(uri, fileName) {
  var extension = fileName || uri.substr(uri.length - 4);
  var signedPutUrl = process.env.API_SERVER + '/api/s3/sign';
  var signedObjectName = Math.random()
    .toString(36)
    .substr(2, 9);
  signedObjectName += '_' + extension;
  return fetch(
    signedPutUrl +
      '?s3_object_type=' +
      'multipart/form-data' +
      '&s3_object_name=' +
      signedObjectName,
    { credentials: 'include', method: 'GET' }
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(resJSON) {
      return uploadToS3(
        uri,
        resJSON.signature.s3Policy,
        resJSON.signature.s3Signature,
        resJSON.url,
        resJSON.publicUrl,
        signedObjectName,
        resJSON.AWS_ACCESS_KEY
      );
    })
    .catch(function(error) {
      return { success: false, url: null, error: error };
    });
}
function toS3Advanced(uri, fileName) {
  return executeOnSignedUrl(uri, fileName);
}
//# sourceMappingURL=s3.js.map
