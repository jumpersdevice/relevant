import React, { useRef, memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getPostType } from 'app/utils/post';
import { View, Image } from 'modules/styled/uni';
import { useCommunity } from 'modules/community/community.selectors';
import { sizing } from 'styles';
import PostButton from './postbutton';
import PostRank from './postrank';
import { useVoteAnimation, useCastVote } from './button.hooks';

const coinImage = require('public/img/relevantcoin.png');

PostButtons.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    id: PropTypes.string,
    data: PropTypes.object,
    user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    myVote: PropTypes.object,
    parentPost: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.string,
    url: PropTypes.string
  }),
  color: PropTypes.string,
  horizontal: PropTypes.bool
};

export default memo(PostButtons);

function PostButtons({ post, color, horizontal }) {
  const investButton = useRef();
  const community = useCommunity();
  const userId = useSelector(state => state.auth?.user?.userId);
  const betEnabled = useSelector(
    state => state.auth.user?.notificationSettings?.bet?.manual
  );

  const canBet = useMemo(() => getCanBet({ post, community, betEnabled }), [
    betEnabled,
    community,
    post
  ]);

  useVoteAnimation({ post, investButton, horizontal });
  const castVote = useCastVote({ post, userId, community, canBet });

  const tooltipData = useMemo(() => getTooltipData(post), [post]);
  const voteStatus = useMemo(() => getVoteStatus(userId, post), [userId, post]);
  if (!post || post === 'notFound') return null;

  return (
    <View
      ref={investButton}
      onLayout={() => {}}
      align="center"
      fdirection={horizontal ? 'row' : 'column'}
      style={{ opacity: 1 }} // need this to make animations work on android
    >
      <View>
        {canBet && (
          <Image
            w={1.6}
            h={1.6}
            position={'absolute'}
            style={{ top: sizing(-0.1), right: sizing(-0.4) }}
            source={coinImage}
          />
        )}
        <PostButton
          canBet={canBet}
          tooltipData={tooltipData}
          key={`${post.id}-up`}
          imageSet="UPVOTE"
          isActive={voteStatus.up}
          alt="upvote"
          color={color}
          onPress={e => castVote(e, voteStatus.vote, 1)}
        />
      </View>
      <PostRank horizontal={horizontal} color={color} post={post} />
      <PostButton
        tooltipData={tooltipData}
        key={`${post.id}-down`}
        imageSet="DOWNVOTE"
        isActive={voteStatus.down}
        alt="downvote"
        color={color}
        onPress={e => castVote(e, voteStatus.vote, -1)}
      />
    </View>
  );
}

function getVoteStatus(userId, post) {
  const ownPost = userId != null && userId === post?.user;
  const vote = ownPost ? true : post.myVote;
  return {
    vote,
    up: vote && vote.amount > 0,
    down: vote && vote.amount < 0
  };
}

function getTooltipData(post) {
  const postType = getPostType({ post });
  const tipText =
    postType === 'link'
      ? 'Upvote articles that are worth reading, downvote spam.'
      : `Upvote quality ${postType}s and downvote spam`;

  return {
    text: tipText,
    position: 'right',
    desktopOnly: true
  };
}

function getCanBet({ post, community, betEnabled }) {
  if (!post) return false;
  const now = new Date();
  const communityBetIsEnabled = community && community.betEnabled;
  return (
    betEnabled &&
    communityBetIsEnabled &&
    post.data &&
    post.data.eligibleForReward &&
    now.getTime() < new Date(post.data.payoutTime).getTime()
  );
}
