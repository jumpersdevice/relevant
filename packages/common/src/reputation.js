export const getReputation = communityMember =>
  communityMember.pagerank - communityMember.pagerankNeg;

export const probablySpam = communityMember => {
  const rep = getReputation(communityMember);
  if (rep >= 0) return false;
  const absRep = Math.abs(rep);
  return Math.random() * Math.max(60, absRep * 5) < absRep;
};
