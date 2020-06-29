const errors = [
  'Address already exists',
  'You must upvote the post first',
  'Missing or used invite',
  'jwt malformed',
  'Failed to find request token in session',
  "Couldn't find user with this username",
  'You have used all of your available referrals - earn more reputation to get more!',
  'You cannot change your vote after 15m',
  "'to' parameter is not a valid address. please check documentation",
  'No user with this email exists',
  "Community undefined doesn't exist",
  'no such user',
  "You don't have enough tokens to bet",
  'you cannot change your vote after post payout',
  'A user with this twitter account already exists',
  "Community doesn't exist",
  'You cannot bet on this post',
  'Missing user when trying to claim tokens.',
  'Missing token claim amount.',
  'This address is already in use by',
  'No authorization token was found',
  'You can not upvote your own comment',
  'You can not downvote your own comment',
  'E11000 duplicate key error collection: relevant.users index:'
];

export const shouldSkip = errMsg => {
  const match = errors.find(errString => errMsg.match(errString));
  if (match) return true;
  return false;
};
