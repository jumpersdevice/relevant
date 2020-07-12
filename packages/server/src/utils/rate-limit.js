import RateLimit from 'express-rate-limit';
import MongoStore from 'rate-limit-mongo';

const store = new MongoStore({
  uri: process.env.MONGO_URI,
  createTtlIndex: false
});

export const getLimiter = config =>
  new RateLimit({
    store,
    ...config
  });
