import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Image, Divider, View, Box } from 'modules/styled/uni';
import ButtonContainer from 'modules/post/mobile/postButtons.container';
import { globalStyles, fullWidth, mainPadding } from 'app/styles/global';
import CommentBody from 'modules/comment/commentBody';
import PostInfo from './postInfo.component';

let styles;

Comment.propTypes = {
  post: PropTypes.object,
  link: PropTypes.object,
  singlePost: PropTypes.bool,
  focusInput: PropTypes.func,
  preview: PropTypes.bool,
  avatarText: PropTypes.func,
  isReply: PropTypes.bool,
  index: PropTypes.number
};

function Comment({
  post,
  index,
  preview,
  singlePost,
  isReply,
  avatarText,
  focusInput,
  link
}) {
  const userId = useSelector(state => state.auth?.user?._id);
  const user = useSelector(state => state.user.users?.[post?.user]);

  if (!post) return null;

  const hideButtons = preview;

  return (
    <Box
      key={post?._id + index}
      style={[
        styles.commentaryContainer,
        preview ? { width: 'auto', flex: 1 } : null,
        preview ? { marginHorizontal: 0, marginTop: 16 } : null
      ]}
    >
      {isReply && !preview ? <Divider /> : null}
      <Box style={[styles.commentary]}>
        <View flex={1} fdirection={'row'} m={`2 0 ${preview ? 0 : 2} 0`}>
          {isReply && !preview ? (
            <Image
              h={2}
              w={2}
              mt={1}
              mr={1}
              resizeMode={'contain'}
              source={require('public/img/reply.png')}
            />
          ) : null}
          <Box style={{ flex: 1 }}>
            <PostInfo
              big
              post={post}
              ownPost={userId === post?.user}
              singlePost={singlePost}
              user={user}
              avatarText={avatarText}
              preview={preview}
            />
            <Box
              style={[
                {
                  marginTop: preview && !post.link && !post.parentPost ? 0 : 8,
                  flex: 1,
                  justifyContent: 'center',
                  marginLeft: avatarText ? 6 * 8 : 0
                }
              ]}
            >
              <CommentBody
                community={'relevant'}
                comment={post}
                preview={preview}
                inMainFeed={!singlePost && !preview}
              />
            </Box>
            {!hideButtons && (
              <Box m={'2 0'}>
                <ButtonContainer
                  horizontal
                  post={post}
                  parentPost={post.parentPost ? post.parentPost : post}
                  comment={post}
                  link={link}
                  focusInput={focusInput}
                  singlePost={singlePost}
                />
              </Box>
            )}
          </Box>
        </View>
      </Box>
    </Box>
  );
}

const localStyles = StyleSheet.create({
  commentaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: fullWidth - mainPadding * 2,
    marginHorizontal: mainPadding
  },
  commentary: {
    flexGrow: 1,
    flexDirection: 'column'
  }
});

styles = { ...localStyles, ...globalStyles };

export default memo(Comment);
