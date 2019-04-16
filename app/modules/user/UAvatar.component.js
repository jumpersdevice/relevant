import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ULink from 'modules/navigation/ULink.component';
import { Image, View } from 'modules/styled/uni';

class UAvatar extends Component {
  static propTypes = {
    user: PropTypes.object,
    size: PropTypes.number,
    noLink: PropTypes.bool,
    m: PropTypes.string,
    className: PropTypes.string,
    goToProfile: PropTypes.func,
    actions: PropTypes.object,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  render() {
    const { size, user, m, goToProfile, actions } = this.props;
    if (!user) return null;
    const profileLink = '/user/profile/' + this.props.user.handle;

    const image = user.image
      ? { uri: user.image }
      : require('app/public/img/default_user.jpg');
    const imageSize = size || 4;
    const AvatarImage = (
      <Image source={image} h={imageSize} w={imageSize} bradius={imageSize / 2} />
    );
    if (this.props.noLink) {
      return (
        <View style={this.props.style} className={this.props.className} m={m}>
          {AvatarImage}
        </View>
      );
    }
    return (
      <View style={this.props.style} className={this.props.className} m={m}>
        <ULink
          onPress={() => (goToProfile ? goToProfile(user) : actions.goToProfile(user))}
          onClick={e => e.stopPropagation()}
          to={profileLink}
        >
          {AvatarImage}
        </ULink>
      </View>
    );
  }
}

export default UAvatar;