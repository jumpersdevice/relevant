'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = linkifyText;
exports.linkifyMatch = void 0;
var _linkifyIt = _interopRequireDefault(require('linkify-it'));
var _styles = require('../../styles');
var linkify = (0, _linkifyIt.default)();
var linkifyMatch = function linkifyMatch(text) {
  return linkify.match(text);
};
exports.linkifyMatch = linkifyMatch;
function linkifyText(text, community, omitUrl) {
  var matches = linkify.match(text);
  if (!matches) return text;
  var offset = 0;
  matches.forEach(function(match) {
    var index = match.index,
      lastIndex = match.lastIndex,
      txt = match.text,
      url = match.url,
      schema = match.schema;
    var prependToUrl = schema === '#' && !_styles.isNative ? '/'.concat(community) : '';
    if (text[index - 1] === '(' && text[lastIndex] === ')') return;
    if (omitUrl && omitUrl[omitUrl.length - 1] === '/')
      omitUrl = omitUrl.substring(0, omitUrl.length - 1);
    var link =
      omitUrl && omitUrl === url
        ? ''
        : '['
            .concat(txt, '](')
            .concat(prependToUrl)
            .concat(url, ') ');
    text = text.slice(0, index + offset) + link + text.slice(lastIndex + offset);
    offset += link.length - (lastIndex - index);
  });
  return text;
}
linkify.add('@', {
  validate: function validate(text, pos, self) {
    var tail = text.slice(pos);
    if (!self.re.handle) {
      self.re.handle = new RegExp(
        '^([a-zA-Z0-9_]){1,15}(?!_)(?=$|' + self.re.src_ZPCc + ')'
      );
    }
    if (self.re.handle.test(tail)) {
      if (pos >= 2 && tail[pos - 2] === '@') {
        return false;
      }
      return tail.match(self.re.handle)[0].length;
    }
    return 0;
  },
  normalize: function normalize(match) {
    _styles.isNative
      ? (match.url = '__user_profile__' + match.url.replace(/^@/, ''))
      : (match.url = '/user/profile/' + match.url.replace(/^@/, ''));
  }
});
linkify.add('#', {
  validate: function validate(text, pos, self) {
    var tail = text.slice(pos);
    if (!self.re.handle) {
      self.re.handle = new RegExp(
        '^([a-zA-Z0-9_]){1,15}(?!_)(?=$|' + self.re.src_ZPCc + ')'
      );
    }
    if (self.re.handle.test(tail)) {
      if (pos >= 2 && tail[pos - 2] === '@') {
        return false;
      }
      return tail.match(self.re.handle)[0].length;
    }
    return 0;
  },
  normalize: function normalize(match) {
    _styles.isNative
      ? (match.url = '__tag_link__' + match.url.replace(/^#/, ''))
      : (match.url = '/new/' + match.url.replace(/^#/, ''));
  }
});
//# sourceMappingURL=linkify.js.map
