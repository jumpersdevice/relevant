const htmlToText = require('html-to-text');

const dummyKey = 'XXXXXXXXXXXXXXXXXXXXXXX';
const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY || dummyKey,
  domain: process.env.MAILGUN_DOMAIN || dummyKey
});

// mailgun.domains.updateTracking('mail.relevant.community', 'click', { active: true })
//   .then(msg => console.log(msg)) // logs response data
//   .catch(err => console.log(err)); // logs any error

exports.test = () => {
  const data = {
    from: 'Relevant <noreply@mail.relevant.community>',
    to: 'slava@4real.io',
    subject: 'Message from relevant',
    text: 'Test message from relevant!'
  };
  exports.send(data);
};

exports.send = data => {
  const text = htmlToText.fromString(data.html);
  data = { ...data, text };
  // console.log('env ', process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve();
  }
  return mailgun
  .messages()
  .send(data)
  .catch(err => {
    // console.log('mail error ', err);
    throw err;
  });
};

exports.mailgun = mailgun;