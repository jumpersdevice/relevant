"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _globalConstants = require("./config/globalConstants");

var _mail = require("./utils/mail");

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

var _render = _interopRequireDefault(require("./render"));

var _auth = require("./auth/auth.service");

var _user = _interopRequireDefault(require("./api/user/user.controller"));

// eslint-disable-next-line import/named
function wwwRedirect(req, res, next) {
  if (req.headers.host.slice(0, 4) === 'www.') {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  }

  return next();
}

var reloadLimit = (0, _expressRateLimit.default)({
  windowMs: 1 * 60 * 1000,
  // 1 hour window
  max: 200000,
  // start blocking after 5 requests
  message: 'You refreshed too many times, please try again in 1 minute'
});

module.exports = app => {
  app.set('trust proxy', true);
  app.use(wwwRedirect); // API

  app.use('/api/user', require("./api/user"));
  app.use('/api/s3', require("./api/s3"));
  app.use('/auth', require("./auth"));
  app.use('/api/post', require("./api/post"));
  app.use('/api/subscription', require("./api/subscription"));
  app.use('/api/invest', require("./api/invest"));
  app.use('/api/tag', require("./api/tag"));
  app.use('/api/notification', require("./api/notification"));
  app.use('/api/comment', require("./api/comment"));
  app.use('/api/statistics', require("./api/statistics"));
  app.use('/api/earnings', require("./api/earnings"));
  app.use('/api/treasury', require("./api/treasury"));
  app.use('/api/list', require("./api/emailList"));
  app.use('/api/invites', require("./api/invites"));
  app.use('/api/email', require("./api/email"));
  app.use('/api/communityFeed', require("./api/communityFeed"));
  app.use('/api/community', require("./api/community"));
  app.get('/confirm/:user/:code', _user.default.confirm); // deprecate

  app.get('/user/confirm/:user/:code', _user.default.confirm);
  app.get('/user/:user/confirm/:code', _user.default.confirm); // TODO - check if community exists here and redirect if not
  // app.use('/home', (req, res) => res.redirect('/relevant/new'));
  // Default response middleware

  app.use((req, res, next) => {
    if (res.jsonResponse) {
      res.status(200).json(res.jsonResponse);
    } else next();
  }); // Error handler route
  // (need next for this to work)
  // eslint-disable-next-line

  app.use( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)(function* (err, req, res, next) {
      console.error(err); // eslint-disable-line

      yield (0, _mail.sendAdminAlert)(err);
      return res.status(500).json({
        message: err.message
      });
    });

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }());
  app.get('/', reloadLimit, (0, _auth.currentUser)(), _render.default);

  _globalConstants.BANNED_COMMUNITY_SLUGS.forEach(c => {
    app.get("/".concat(c, "/*"), (0, _auth.currentUser)(), _render.default);
    app.get("/".concat(c), (0, _auth.currentUser)(), _render.default);
  });

  app.get('/:community', reloadLimit, (0, _auth.currentUser)(), _render.default);
  app.get('/:community/post/:postId', reloadLimit, (0, _auth.currentUser)(), _render.default);
  app.get('/:community/post/:postId/:commentId', reloadLimit, (0, _auth.currentUser)(), _render.default);
  app.get('/:community/:feed', reloadLimit, (0, _auth.currentUser)(), _render.default);
  app.get('/:community/:feed/*', reloadLimit, (0, _auth.currentUser)(), _render.default);
  app.get('/*', reloadLimit, (0, _auth.currentUser)(), _render.default);
};
//# sourceMappingURL=routes.js.map