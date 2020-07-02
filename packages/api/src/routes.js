import { sendAdminAlert } from 'server/utils/mail';
// import rateLimit from 'express-rate-limit';
// eslint-disable-next-line import/named
import userController from './api/user/user.controller';

function wwwRedirect(req, res, next) {
  if (req.headers.host.slice(0, 4) === 'www.') {
    const newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  }
  return next();
}

// const reloadLimit = rateLimit({
//   windowMs: 1 * 60 * 1000, // 1 hour window
//   max: 200000, // start blocking after 5 requests
//   message: 'You refreshed too many times, please try again in 1 minute',
// });

module.exports = app => {
  app.set('trust proxy', true);
  app.use(wwwRedirect);

  // API
  app.use('/api/user', require('./api/user'));
  app.use('/api/s3', require('./api/s3'));
  app.use('/auth', require('./auth'));
  app.use('/api/post', require('./api/post'));
  app.use('/api/subscription', require('./api/subscription'));
  app.use('/api/invest', require('./api/invest'));
  app.use('/api/tag', require('./api/tag'));
  app.use('/api/notification', require('./api/notification'));
  app.use('/api/comment', require('./api/comment'));
  app.use('/api/statistics', require('./api/statistics'));
  app.use('/api/earnings', require('./api/earnings'));
  app.use('/api/treasury', require('./api/treasury'));
  app.use('/api/list', require('./api/emailList'));
  app.use('/api/invites', require('./api/invites'));
  app.use('/api/email', require('./api/email'));
  app.use('/api/communityFeed', require('./api/communityFeed'));
  app.use('/api/community', require('./api/community'));
  app.get('/confirm/:user/:code', userController.confirm); // deprecate
  app.get('/user/confirm/:user/:code', userController.confirm);
  app.get('/user/:user/confirm/:code', userController.confirm);

  // TODO - check if community exists here and redirect if not
  // app.use('/home', (req, res) => res.redirect('/relevant/new'));

  // Default response middleware
  app.use((req, res, next) => {
    if (res.jsonResponse) {
      res.status(200).json(res.jsonResponse);
    } else next();
  });

  // Error handler route
  // (need next for this to work)
  // eslint-disable-next-line
  app.use(async (err, req, res, next) => {
    console.error(err); // eslint-disable-line
    await sendAdminAlert(err);
    return res.status(500).json({ message: err.message });
  });

  app.get('/', async (req, resp) => resp.send('Nothing to see. Move along.'));
};
