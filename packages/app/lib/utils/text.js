'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.getTextData = getTextData;
exports.getMentions = getMentions;
exports.getTags = getTags;
exports.getWords = getWords;
exports.stripHTML = stripHTML;
exports.copyToClipBoard = copyToClipBoard;
exports.childIsString = childIsString;
exports.getTitle = exports.NAME_PATTERN = exports.Linkify = void 0;
var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));
var _alert = require('./alert');
var _linkify = require('../modules/comment/linkify');
var LinkifyContainer;
if (process.env.WEB !== 'true') {
  LinkifyContainer = require('../modules/text/mobile/textBody.component').default;
} else {
  LinkifyContainer = require('linkifyjs/react');
}
var Linkify = LinkifyContainer;
exports.Linkify = Linkify;
function getTextData(postBody) {
  var matches = (0, _linkify.linkifyMatch)(postBody) || [];
  var tags = matches
    .filter(function(m) {
      return m.schema === '#';
    })
    .map(function(m) {
      return m.text.replace('#', '');
    });
  var mentions = matches
    .filter(function(m) {
      return m.schema === '@';
    })
    .map(function(m) {
      return m.text.replace('@', '');
    });
  var urls = matches.filter(function(m) {
    return m.schema !== '#' && m.schema !== '@';
  });
  var url = urls[0];
  return { url: url, mentions: mentions, tags: tags };
}
function getMentions(words) {
  return words
    .map(function(word) {
      if (word.match(/^@\S+/g)) {
        var mention = word.replace(/@/g, '');
        return mention !== '' ? mention : null;
      }
      return null;
    })
    .filter(function(el) {
      return el !== null;
    });
}
function getTags(words) {
  return words
    .map(function(word) {
      if (word.match(/^#\S+/g)) {
        var tag = word.replace(/#/g, '').trim();
        return tag !== '' ? tag : null;
      }
      return null;
    })
    .filter(function(el) {
      return el !== null;
    });
}
function getWords(text) {
  var res = text
    .replace(/[,.!?](?!\b)|[\s+]/g, function(a) {
      return '__WRD_SPLT__' + a + '__WRD_SPLT__';
    })
    .split(/__WRD_SPLT__/);
  return res;
}
var NAME_PATTERN = /^[a-zA-Z0-9-_]+$/;
exports.NAME_PATTERN = NAME_PATTERN;
var HTML_REGEX = new RegExp(/<[^>]*>/gm);
function stripHTML(text) {
  return (text || '').replace(HTML_REGEX, '');
}
function copyToClipBoard(url) {
  var el = document.createElement('textarea');
  el.value = url;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  (0, _alert.Alert)().alert('Link copied to clip board ^_^', 'success');
}
function childIsString(children) {
  var isString = typeof children === 'string';
  var isArray = (0, _typeof2.default)(children) === 'object' && children.length;
  var isTextArray =
    isArray &&
    children.find(function(el) {
      return typeof el !== 'string';
    });
  var renderString = !children || !children.$$typeof || isTextArray || isString;
  return renderString;
}
var getTitle = function getTitle(text) {
  var headerMatch = /^#+(.*)$/;
  var lines = text.split('\n');
  var noEmptyLines = lines.filter(function(line) {
    return line.length > 0;
  });
  if (noEmptyLines.length === 0) return {};
  var firstLine = noEmptyLines[0];
  var match = firstLine.match(headerMatch);
  if (match == null) {
    var limit = 60;
    if (firstLine.length <= limit) return { titleText: firstLine, isHeading: false };
    var titleText = firstLine.substr(0, firstLine.lastIndexOf(' ', limit)) + '...';
    return { titleText: titleText, isHeading: false };
  }
  var title = match && match[1];
  return { titleText: title.trim(), isHeading: true };
};
exports.getTitle = getTitle;
//# sourceMappingURL=text.js.map
