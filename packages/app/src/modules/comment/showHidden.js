import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments } from 'modules/comment/comment.actions';
import { colors } from 'styles';
import { View, BodyText, Divider, Box } from 'modules/styled/uni';
import ULink from 'modules/navigation/ULink.component';

ShowHidden.propTypes = {
  id: PropTypes.string
};

export function ShowHidden({ id }) {
  const [showAll, setShowAll] = useState();
  const dispatch = useDispatch();
  if (showAll) return null;
  return (
    <Box>
      <Divider flex={1} h={1} />
      <View m={'6 4 12 4'} fdirection={'row'} wrap>
        <BodyText>Some low-ranking comments may have been hidden. </BodyText>
        <ULink
          inline={1}
          onPress={() => {
            dispatch(getComments(id, { showHidden: true }));
            setShowAll({ showAll: true });
          }}
        >
          <BodyText c={colors.blue}>Show hidden comments</BodyText>
        </ULink>
      </View>
    </Box>
  );
}
