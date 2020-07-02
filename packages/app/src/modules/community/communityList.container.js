import React from 'react';
import ULink from 'modules/navigation/ULink.component';
import { View, BodyText } from 'modules/styled/uni';
import CommunityList from 'modules/community/communityList.component';
import { colors } from 'styles';
import { ScrollView } from 'react-native';

export default () => (
  <ScrollView flex={1} fdirection="column" style={{ backgroundColor: colors.white }}>
    <CommunityList />
    <View m={'6 4 12 4'} fdirection={'row'}>
      <ULink inline={1} external to="mailto:info@relevant.community">
        <BodyText c={colors.blue}>Get in touch </BodyText>
      </ULink>
      <BodyText>if you'd like to start your own community</BodyText>
    </View>
  </ScrollView>
);
