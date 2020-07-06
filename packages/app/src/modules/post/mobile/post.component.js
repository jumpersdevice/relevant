import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import PostInfo from 'modules/post/postinfo.mobile.component';
import ButtonContainer from 'modules/post/mobile/postButtons.container';
import { Box } from 'modules/styled/uni';
import Commentary from './commentary.component';
// import HiddenPost from 'modules/post/hidden';
// import { MINIMUM_RANK, MINIMUM_DOWNVOTES_NEW, MINIMUM_REP_NEW } from '@r3l/common';

Post.propTypes = {
  link: PropTypes.object,
  post: PropTypes.object,
  commentary: PropTypes.array,
  singlePost: PropTypes.bool,
  hideDivider: PropTypes.bool,
  preview: PropTypes.bool,
  noLink: PropTypes.bool
};

function Post(props) {
  const { link, commentary, singlePost, hideDivider, preview, noLink, post } = props;
  const separator = <Box style={[{ height: 30, backgroundColor: 'rgba(0,0,0,.03)' }]} />;

  // const [showPost, setShowPost] = useState(false);
  // const hidePost =
  //   post?.data?.pagerank <= MINIMUM_REP_NEW ||
  //   (post?.data?.downvotes < MINIMUM_DOWNVOTES_NEW &&
  //     post?.data?.pagerank < MINIMUM_RANK);

  // if (hidePost && !showPost) {
  //   return (
  //     <Box>
  //       <Box mt={1} mb={1} ml={[0, 2]}>
  //         <HiddenPost onPress={() => setShowPost(true)} />
  //       </Box>
  //       {!hideDivider ? separator : null}
  //     </Box>
  //   );
  // }

  const blocked = <Box style={{ height: StyleSheet.hairlineWidth }} />;

  if (!post || !post._id) return blocked;

  const isLinkPost = link && (link.url || link.image);
  const renderComment = commentary && commentary.length;

  const commentaryEl = renderComment ? (
    <Commentary
      isReply
      isLinkPost={isLinkPost}
      preview={preview}
      post={post}
      link={link}
      singlePost={singlePost}
      commentary={commentary || [post]}
    />
  ) : null;

  const postEl = isLinkPost ? (
    <Box m={preview ? '4 0 0 0' : 0}>
      <PostInfo
        key={link._id}
        post={post}
        link={link}
        singlePost={singlePost}
        preview={preview}
        noLink={noLink}
      />
      {!preview && (
        <Box m={2}>
          <ButtonContainer horizontal post={post} singlePost={singlePost} link={link} />
        </Box>
      )}
    </Box>
  ) : (
    <Commentary
      preview={preview}
      post={post}
      link={link}
      singlePost={singlePost}
      commentary={[post]}
    />
  );

  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box>
        {postEl}
        {commentaryEl || (preview && isLinkPost ? <Box mt={2} /> : null)}
      </Box>
      {!singlePost && !hideDivider ? separator : null}
    </Box>
  );
}

export default memo(Post);
