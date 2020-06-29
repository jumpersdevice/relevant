import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PostButtons from 'modules/post/vote-buttons/postbuttons.container';
import ButtonRow from 'modules/post/mobile/buttonRow';
import { View } from 'modules/styled/uni';

ButtonContainer.propTypes = {
  singlePost: PropTypes.bool,
  focusInput: PropTypes.func,
  link: PropTypes.object,
  comment: PropTypes.object,
  setupReply: PropTypes.func,
  post: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  parentPost: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  horizontal: PropTypes.bool
};

function ButtonContainer({
  post,
  horizontal,
  singlePost,
  focusInput,
  link,
  comment,
  parentPost,
  setupReply
}) {
  return (
    <View fdirection={'row'} justify={'space-between'} align={'center'}>
      <PostButtons post={post} horizontal={horizontal} />
      <ButtonRow
        post={post}
        singlePost={singlePost}
        link={link}
        comment={comment}
        focusInput={focusInput}
        parentPost={parentPost}
        setupReply={setupReply}
      />
    </View>
  );
}

export default memo(ButtonContainer);
