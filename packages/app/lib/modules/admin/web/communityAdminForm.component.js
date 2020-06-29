'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _reactRouter = require('react-router');
var _redux = require('redux');
var _utils = require('../../../utils');
var _reactRedux = require('react-redux');
var _community = require('../../community/community.actions');
var _selectField = _interopRequireDefault(require('../../form/selectField.component'));
var _createSelectField = _interopRequireDefault(
  require('../../form/createSelectField.component')
);
var _asyncAdminField = _interopRequireDefault(
  require('../../form/asyncAdminField.component')
);
var _reduxformimageupload = _interopRequireDefault(
  require('../../styled/form/reduxformimageupload.component')
);
var _reduxformfield = _interopRequireDefault(
  require('../../styled/form/reduxformfield.component')
);
var _checkbox = _interopRequireDefault(require('../../styled/form/checkbox'));
var _reduxForm = require('redux-form');
var _web = require('../../styled/web');
var _uni = require('../../styled/uni');
var _validators = require('../../form/validators');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/communityAdminForm.component.js';
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var CommunityAdminForm = (function(_Component) {
  (0, _inherits2.default)(CommunityAdminForm, _Component);
  var _super = _createSuper(CommunityAdminForm);
  function CommunityAdminForm() {
    var _this;
    (0, _classCallCheck2.default)(this, CommunityAdminForm);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'deleteCommunity',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(e) {
            var _this$props, initialValues, close, success;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    e.preventDefault();
                    (_this$props = _this.props),
                      (initialValues = _this$props.initialValues),
                      (close = _this$props.close);
                    if (
                      !window.confirm(
                        'Are you sure you want to delete this community: '.concat(
                          initialValues.name,
                          '?'
                        )
                      )
                    ) {
                      _context.next = 7;
                      break;
                    }
                    _context.next = 5;
                    return _this.props.actions.deleteCommunity(initialValues);
                  case 5:
                    success = _context.sent;
                    if (success && close) close();
                  case 7:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'submit',
      (function() {
        var _ref2 = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee2(values) {
            var history, community, image, isUpdate;
            return _regenerator.default.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      history = _this.props.history;
                      _context2.prev = 1;
                      community = _objectSpread({}, values);
                      if (
                        !(
                          community.image &&
                          community.image.preview &&
                          community.image.fileName
                        )
                      ) {
                        _context2.next = 8;
                        break;
                      }
                      _context2.next = 6;
                      return _utils.s3.toS3Advanced(
                        community.image.preview,
                        community.image.fileName
                      );
                    case 6:
                      image = _context2.sent;
                      community.image = image.url;
                    case 8:
                      isUpdate = _this.props.isUpdate;
                      if (!isUpdate) {
                        _context2.next = 13;
                        break;
                      }
                      _this.props.actions.updateCommunity(community);
                      _context2.next = 16;
                      break;
                    case 13:
                      _context2.next = 15;
                      return _this.props.actions.createCommunity(community);
                    case 15:
                      history.push('/'.concat(community.slug, '/new'));
                    case 16:
                      _context2.next = 20;
                      break;
                    case 18:
                      _context2.prev = 18;
                      _context2.t0 = _context2['catch'](1);
                    case 20:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              null,
              [[1, 18]]
            );
          })
        );
        return function(_x2) {
          return _ref2.apply(this, arguments);
        };
      })()
    );
    return _this;
  }
  (0, _createClass2.default)(CommunityAdminForm, [
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          handleSubmit = _this$props2.handleSubmit,
          initialValues = _this$props2.initialValues;
        var imageProps = { p: 2, w: 9, h: 9, bg: _styles.colors.blue, bradius: '50%' };
        var customFields = initialValues.customParams
          ? [
              {
                name: 'customParams.auth.points',
                label: 'REQUIRED FOR POSTING: Added Points of Interest',
                component: _reduxformfield.default,
                type: 'number'
              },
              {
                name: 'customParams.auth.tokens',
                label: 'REQUIRED FOR POSTING: FOAM token balance',
                component: _reduxformfield.default,
                type: 'number'
              }
            ]
          : [];
        var FORM_FIELDS = [
          {
            name: 'image',
            component: _reduxformimageupload.default,
            placeholder: '/img/blueR.png',
            imageComponent: _react.default.createElement(
              _uni.Image,
              (0, _extends2.default)({ mt: 1, bg: _styles.colors.blue }, imageProps, {
                __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 25 }
              })
            ),
            type: 'file-upload',
            label: 'Community Image',
            validate: []
          },
          {
            name: 'name',
            label: 'Name',
            component: _reduxformfield.default,
            type: 'text',
            validate: [_validators.required]
          },
          {
            name: 'slug',
            label: _react.default.createElement(
              _web.View,
              {
                fdirection: 'column',
                __source: { fileName: _jsxFileName, lineNumber: 125, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.black,
                  __source: { fileName: _jsxFileName, lineNumber: 126, columnNumber: 13 }
                },
                'Slug (cannot be changed in the future)'
              ),
              _react.default.createElement(
                _uni.SecondaryText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 13 }
                },
                'Determines the url of the community, ex: relevant.community/',
                '<slug>'
              )
            ),
            placeholder: 'slug',
            component: _reduxformfield.default,
            type: 'text',
            validate: [_validators.required]
          },
          {
            name: 'description',
            component: _reduxformfield.default,
            type: 'text',
            label: 'Description',
            validate: [_validators.required]
          },
          {
            name: 'topics',
            component: _createSelectField.default,
            type: 'text',
            label: 'Tags',
            validate: []
          },
          { name: 'sectionTitle', text: 'Admins & Moderators' },
          {
            name: 'superAdmins',
            component: _asyncAdminField.default,
            type: 'text',
            label: _react.default.createElement(
              _web.View,
              {
                fdirection: 'column',
                __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.black,
                  __source: { fileName: _jsxFileName, lineNumber: 161, columnNumber: 13 }
                },
                'Admins'
              ),
              _react.default.createElement(
                _uni.SecondaryText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 162, columnNumber: 13 }
                },
                'Users with admin priveleges (ability to edit community parameters and add or remove moderators)'
              )
            ),
            validate: []
          },
          {
            name: 'admins',
            component: _asyncAdminField.default,
            type: 'text',
            label: _react.default.createElement(
              _web.View,
              {
                fdirection: 'column',
                __source: { fileName: _jsxFileName, lineNumber: 175, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.black,
                  __source: { fileName: _jsxFileName, lineNumber: 176, columnNumber: 13 }
                },
                'Moderators'
              ),
              _react.default.createElement(
                _uni.SecondaryText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 177, columnNumber: 13 }
                },
                "Users that will have high reputation by default (but not necessarily admin priveleges)',"
              )
            ),
            validate: []
          },
          { name: 'sectionTitle', text: 'Community Settings' },
          {
            name: 'defaultPost',
            label: 'Default Post Type',
            component: _selectField.default,
            options: ['link', 'text']
          }
        ].concat(customFields, [
          {
            name: 'betEnabled',
            label: 'Enable Betting',
            component: _checkbox.default,
            type: 'checkbox'
          },
          {
            name: 'hidden',
            label: 'Unlisted (anyone with link can still see and join the community)',
            component: _checkbox.default,
            type: 'checkbox'
          }
        ]);
        return _react.default.createElement(
          _web.View,
          {
            display: 'flex',
            fdirection: 'column',
            m: '0 4',
            mb: 16,
            __source: { fileName: _jsxFileName, lineNumber: 212, columnNumber: 7 }
          },
          _react.default.createElement(
            _web.Form,
            {
              onSubmit: handleSubmit(this.submit),
              fdirection: 'column',
              key: 'community-admin-form',
              __source: { fileName: _jsxFileName, lineNumber: 213, columnNumber: 9 }
            },
            FORM_FIELDS.map(function(field, index) {
              if (field.name === 'sectionTitle')
                return _react.default.createElement(
                  _react.Fragment,
                  {
                    key: field.text + index,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 17
                    }
                  },
                  _react.default.createElement(
                    _web.Title,
                    {
                      mt: 4,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 19
                      }
                    },
                    field.text
                  )
                );
              return _react.default.createElement(
                _reduxForm.Field,
                (0, _extends2.default)({}, field, {
                  key: index,
                  __source: { fileName: _jsxFileName, lineNumber: 225, columnNumber: 20 }
                })
              );
            }),
            _react.default.createElement(
              _web.View,
              {
                justify: 'flex-end',
                mt: 3,
                fdirection: 'row',
                __source: { fileName: _jsxFileName, lineNumber: 227, columnNumber: 11 }
              },
              initialValues._id
                ? _react.default.createElement(
                    _web.Button,
                    {
                      ml: 2,
                      c: _styles.colors.white,
                      bg: _styles.colors.red,
                      onClick: this.deleteCommunity,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 229,
                        columnNumber: 15
                      }
                    },
                    'Delete'
                  )
                : null,
              _react.default.createElement(
                _web.Button,
                {
                  ml: 2,
                  c: _styles.colors.white,
                  type: 'submit',
                  __source: { fileName: _jsxFileName, lineNumber: 238, columnNumber: 13 }
                },
                'Submit'
              )
            )
          )
        );
      }
    }
  ]);
  return CommunityAdminForm;
})(_react.Component);
(0, _defineProperty2.default)(CommunityAdminForm, 'propTypes', {
  actions: _propTypes.default.object,
  handleSubmit: _propTypes.default.func,
  isUpdate: _propTypes.default.bool,
  initialValues: _propTypes.default.object,
  close: _propTypes.default.func,
  history: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state, ownProps) {
  var close = ownProps.close,
    history = ownProps.history;
  var slug = (0, _get.default)(ownProps, 'match.params.slug') || state.auth.community;
  if ((0, _get.default)(ownProps, 'match.path') === '/admin/community/new') slug = null;
  if ((0, _get.default)(ownProps, 'match.path') === '/communities/new') slug = null;
  var community = (0, _get.default)(state.community, 'communities.'.concat(slug), {});
  var isUpdate = !!Object.keys(community).length;
  var admins = (0, _get.default)(community, 'admins', []).map(function(m) {
    return m.embeddedUser.handle;
  });
  var superAdmins = (0, _get.default)(community, 'superAdmins', []).map(function(m) {
    return m.embeddedUser.handle;
  });
  var initialValues = _objectSpread(
    _objectSpread({}, community),
    {},
    { admins: admins, superAdmins: superAdmins }
  );
  return {
    routing: state.routing,
    community: state.community,
    isUpdate: isUpdate,
    initialValues: initialValues,
    enableReinitialize: true,
    close: close,
    history: history
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        updateCommunity: _community.updateCommunity,
        createCommunity: _community.createCommunity,
        deleteCommunity: _community.deleteCommunity
      },
      dispatch
    )
  };
};
var _default = (0, _reactRouter.withRouter)(
  (0, _reactRedux.connect)(
    mapStateToProps,
    mapDispatchToProps
  )((0, _reduxForm.reduxForm)({ form: 'communityAdmin' })(CommunityAdminForm))
);
exports.default = _default;
//# sourceMappingURL=communityAdminForm.component.js.map
