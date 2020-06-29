import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View, SmallText, Touchable } from 'modules/styled/uni';
import { colors } from 'styles';

HiddenPost.propTypes = {
  onPress: PropTypes.func
};

function HiddenPost({ onPress }) {
  return (
    <View fdirection="row">
      <SmallText>This post is hidden because it got too many downvotes. </SmallText>
      <Touchable onPress={onPress}>
        <SmallText c={colors.blue}>Show post.</SmallText>
      </Touchable>
    </View>
  );
}

export default memo(HiddenPost);
