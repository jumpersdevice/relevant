'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.zIndex = exports.cursor = exports.position = exports.link = exports.flex = exports.border = exports.borderRadius = exports.background = exports.height = exports.width = exports.inheritcolor = exports.inheritfont = exports.display = exports.font = exports.margin = exports.padding = exports.color = void 0;
var _styledComponents = require('styled-components');
var _colors = require('./colors');
var _sizing = require('./sizing');
var _responsive = require('./responsive');
var color = (0, _styledComponents.css)(
  ['', ';', ';'],
  function(p) {
    return p.c ? 'color: '.concat(p.c, ';') : '';
  },
  function(p) {
    return p.c ? 'text-decoration-color: '.concat(p.c, ';') : '';
  }
);
exports.color = color;
var padding = (0, _styledComponents.css)(
  ['', ';', ';', ';', ';', ';'],
  function(p) {
    return p.p ? 'padding: '.concat((0, _sizing.size)(p.p)) : '';
  },
  function(p) {
    return p.pb ? 'padding-bottom: '.concat((0, _sizing.size)(p.pb)) : '';
  },
  function(p) {
    return p.pl ? 'padding-left: '.concat((0, _sizing.size)(p.pl)) : '';
  },
  function(p) {
    return p.pr ? 'padding-right: '.concat((0, _sizing.size)(p.pr)) : '';
  },
  function(p) {
    return p.pt ? 'padding-top: '.concat((0, _sizing.size)(p.pt)) : '';
  }
);
exports.padding = padding;
var margin = (0, _styledComponents.css)(
  ['', ';', ';', ';', ';', ';'],
  function(p) {
    return p.m ? 'margin: '.concat((0, _sizing.size)(p.m)) : '';
  },
  function(p) {
    return p.mb ? 'margin-bottom: '.concat((0, _sizing.size)(p.mb)) : '';
  },
  function(p) {
    return p.ml ? 'margin-left: '.concat((0, _sizing.size)(p.ml)) : '';
  },
  function(p) {
    return p.mr ? 'margin-right: '.concat((0, _sizing.size)(p.mr)) : '';
  },
  function(p) {
    return p.mt ? 'margin-top: '.concat((0, _sizing.size)(p.mt)) : '';
  }
);
exports.margin = margin;
var font = (0, _styledComponents.css)(
  ['', ';', ';', ';', ';', ';'],
  function(p) {
    return p.fs ? 'font-size: '.concat((0, _sizing.size)(p.fs)) : '';
  },
  function(p) {
    return p.lh ? 'line-height: '.concat((0, _sizing.size)(p.lh)) : '';
  },
  function(p) {
    return p.fw ? 'font-weight: '.concat(p.fw) : '';
  },
  function(p) {
    return p.ff ? 'font-family: '.concat(p.ff) : '';
  },
  function(p) {
    return p.td ? 'text-decoration: '.concat(p.td, '; }') : '';
  }
);
exports.font = font;
var display = (0, _styledComponents.css)(['', ';'], function(p) {
  return p.d ? 'display: '.concat(p.d) : '';
});
exports.display = display;
var inheritfont = (0, _styledComponents.css)(['', ';'], function(p) {
  return p.inheritfont
    ? "\n    font-size: 'inherit';\n    line-height: 'inherit';\n    font-family: 'inherit';"
    : '';
});
exports.inheritfont = inheritfont;
var inheritcolor = (0, _styledComponents.css)(['', ';'], function(p) {
  return p.inheritcolor ? "\n    color: 'inherit';" : '';
});
exports.inheritcolor = inheritcolor;
var width = (0, _styledComponents.css)(
  ['', ';', ';', ';'],
  function(p) {
    return p.w ? 'width: '.concat((0, _sizing.size)(p.w), ';') : '';
  },
  function(p) {
    return p.minwidth ? 'min-width: '.concat((0, _sizing.size)(p.minwidth), ';') : '';
  },
  function(p) {
    return p.maxWidth ? 'max-width: '.concat((0, _sizing.size)(p.maxWidth), ';') : '';
  }
);
exports.width = width;
var height = (0, _styledComponents.css)(
  ['', ';', ';', ';'],
  function(p) {
    return p.h ? 'height: '.concat((0, _sizing.size)(p.h), ';') : '';
  },
  function(p) {
    return p.minheight ? 'min-height: '.concat((0, _sizing.size)(p.minheight), ';') : '';
  },
  function(p) {
    return p.maxheight ? 'max-height: '.concat((0, _sizing.size)(p.maxheight), ';') : '';
  }
);
exports.height = height;
var background = (0, _styledComponents.css)(['', ';'], function(p) {
  return p.bg ? 'background: '.concat(p.bg, ';') : '';
});
exports.background = background;
var borderRadius = (0, _styledComponents.css)(['', ';'], function(p) {
  return p.bradius ? 'border-radius: '.concat((0, _sizing.size)(p.bradius), ';') : '';
});
exports.borderRadius = borderRadius;
var universalBorder = function universalBorder(side) {
  var c =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _colors.lineColor;
  var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1px';
  return '\n  border'
    .concat(side ? '-'.concat(side) : '', '-color: ')
    .concat(c, ';\n  border')
    .concat(side ? '-'.concat(side) : '', '-width: ')
    .concat((0, _sizing.size)(w), ';\n  border-style: solid;\n');
};
var border = (0, _styledComponents.css)(
  ['', ';', ';', ';', ';', ';'],
  function(p) {
    return p.br && universalBorder('right', p.bc, p.bw);
  },
  function(p) {
    return p.bl && universalBorder('left', p.bc, p.bw);
  },
  function(p) {
    return p.bt && universalBorder('top', p.bc, p.bw);
  },
  function(p) {
    return p.bb && universalBorder('bottom', p.bc, p.bw);
  },
  function(p) {
    return p.border && universalBorder('', p.bc, p.bw);
  }
);
exports.border = border;
var flex = (0, _styledComponents.css)(
  ['position:relative;', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';'],
  function(p) {
    return p.flex ? 'flex: '.concat((0, _responsive.responsiveHandler)(p.flex)) : '';
  },
  function(p) {
    return p.position
      ? 'position: '.concat((0, _responsive.responsiveHandler)(p.position))
      : '';
  },
  function(p) {
    return p.fdirection
      ? 'flex-direction: '.concat((0, _responsive.responsiveHandler)(p.fdirection))
      : '';
  },
  function(p) {
    return p.justify
      ? 'justify-content: '.concat((0, _responsive.responsiveHandler)(p.justify))
      : '';
  },
  function(p) {
    return p.align
      ? 'align-items: '.concat((0, _responsive.responsiveHandler)(p.align))
      : '';
  },
  function(p) {
    return p.shrink
      ? 'flex-shrink: '.concat((0, _responsive.responsiveHandler)(p.shrink))
      : '';
  },
  function(p) {
    return p.grow ? 'flex-grow: '.concat((0, _responsive.responsiveHandler)(p.grow)) : '';
  },
  function(p) {
    return p.wrap ? 'flex-wrap: wrap' : '';
  },
  function(p) {
    return p.inline ? '' : 'display: flex';
  },
  function(p) {
    return p.alignself
      ? 'align-self: '.concat((0, _responsive.responsiveHandler)(p.alignself))
      : '';
  }
);
exports.flex = flex;
var link = (0, _styledComponents.css)(
  ['', ';', ';', ';', ';', ';', ';'],
  function(p) {
    return p.color ? 'color: '.concat(p.color) : '';
  },
  function(p) {
    return p.hc ? '&:hover * { color: '.concat(p.hc, '; }') : '';
  },
  function(p) {
    return p.hc ? '&:hover * { fill: '.concat(p.hc, '; }') : '';
  },
  function(p) {
    return p.ac ? '&.active * { color: '.concat(p.ac, '; }') : '';
  },
  function(p) {
    return p.ac ? '&.active * { fill: '.concat(p.ac, '; }') : '';
  },
  function(p) {
    return p.td ? 'text-decoration: '.concat(p.td, '; }') : '';
  }
);
exports.link = link;
var position = (0, _styledComponents.css)(
  ['', ';', ';', ';', ';', ';'],
  function(p) {
    return p.absolute ? 'position: absolute;' : '';
  },
  function(p) {
    return p.top ? 'top: '.concat((0, _sizing.size)(p.top), '; }') : '';
  },
  function(p) {
    return p.left ? 'left: '.concat((0, _sizing.size)(p.left), '; }') : '';
  },
  function(p) {
    return p.bottom ? 'bottom: '.concat((0, _sizing.size)(p.bottom), '; }') : '';
  },
  function(p) {
    return p.right ? 'right: '.concat((0, _sizing.size)(p.right), '; }') : '';
  }
);
exports.position = position;
var cursor = (0, _styledComponents.css)(['', ';'], function(p) {
  return p.cursor && !p.mobile ? 'cursor: '.concat(p.cursor, '; }') : '';
});
exports.cursor = cursor;
var zIndex = (0, _styledComponents.css)(['', ';'], function(p) {
  return p.zIndex ? 'z-index: '.concat(p.zIndex) : '';
});
exports.zIndex = zIndex;
//# sourceMappingURL=mixins.js.map
