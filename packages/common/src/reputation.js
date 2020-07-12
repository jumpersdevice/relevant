export const getReputation = communityMember =>
  communityMember.pagerank - communityMember.pagerankNeg;

export const probablySpam = communityMember => {
  const rep = getReputation(communityMember);
  console.log(rep);
  if (rep >= 0) return false;
  return Math.random() * 100 < Math.abs(rep);
};
