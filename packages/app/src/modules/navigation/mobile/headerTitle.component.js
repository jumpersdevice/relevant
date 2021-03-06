import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { smallScreen } from 'app/styles/global';
import { Title, View } from 'modules/styled/uni';

const HeaderTitle = props => {
  const { navigation, auth, navigationOptions, community } = props;
  const { state } = navigation;
  const { params, routeName } = state;

  let title = params && params.title ? params.title.trim() : null;

  if (state.routeName === 'myProfileView' && auth.user) {
    title = auth.user.name;
  }

  let communityName;
  if (auth.community) {
    communityName =
      community.communities[auth.community] && community.communities[auth.community].name;
  }

  if (routeName === 'discoverView') {
    title = communityName || 'Communities';
  }

  let clipped = title || navigationOptions.title;

  if (title && title.length > 16) {
    clipped = title.substring(0, smallScreen ? 14 : 18);
    clipped += '...';
  }

  if (
    routeName === 'login' ||
    routeName === 'signup' ||
    routeName === 'imageUpload' ||
    routeName === 'twitterSignup'
  ) {
    return (
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 6,
          backgroundColor: 'transparent'
        }}
      >
        <Image
          source={require('public/img/logo.png')}
          resizeMode={'contain'}
          style={{ width: 120, height: 20, marginBottom: 2 }}
        />
      </View>
    );
  }

  return (
    <View
      ref={c => (this.title = c)}
      justify={'center'}
      align={'center'}
      alignSelf={'center'}
    >
      <TouchableOpacity>
        <Title>{clipped}</Title>
      </TouchableOpacity>
    </View>
  );
};

HeaderTitle.propTypes = {
  community: PropTypes.object,
  auth: PropTypes.object,
  navigation: PropTypes.object,
  navigationOptions: PropTypes.object
};

export default connect(state => ({ auth: state.auth, community: state.community }))(
  HeaderTitle
);
