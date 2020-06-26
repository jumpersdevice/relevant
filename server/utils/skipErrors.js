const errors = [
  'Address already exists',
  'You must upvote the post first',
  'Missing or used invite',
  'jwt malformed',
  'Failed to find request token in session',
  "Couldn't find user with this username",
  'You have used all of your available referrals - earn more reputation to get more!',
  'You cannot change your vote after 15m',
  "'to' parameter is not a valid address. please check documentation"
];

export const shouldSkip = errMsg => {
  const match = errors.find(errString => errMsg.match(errString));
  if (match) return true;
  return false;
};