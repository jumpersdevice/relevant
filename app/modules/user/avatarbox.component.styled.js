import React from 'react';
import { View, Image, StyleSheet, Touchable, Text } from 'react-primitives';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import PropTypes from 'prop-types';
import { globalStyles, darkGrey } from 'app/styles/global';
import Stats from 'modules/stats/mobile/stats.component';
import styled, { css } from 'styled-components/primitives';

let styles;

const bebas = css`
  font-family: BebasNeueRelevantRegular;
  margin-bottom: -2px;
`;

const font17 = css`
  font-size: 17px;
  lineHeight: 17px;
`;

const Name = styled.Text`
  color: ${darkGrey};
  ${font17}
  ${bebas}
`;

export default function UserName(props) {
  let repostIcon;
  let handleEl;
  if (!props.user) return null;

  let imageSource;
  if (props.user && props.user.image) {
    imageSource = { uri: props.user.image };
  } else imageSource = require('app/public/img/default_user.jpg');

  let imageStyle = styles.userImage;
  if (props.big) imageStyle = styles.userImageBig;

  let stats;
  if (props.user && props.user.relevance && props.relevance !== false) {
    stats = <Stats entity={props.user} type={'relevance'} />;
  }
  let handle;
  if (props.user._id) {
    handle = (props.type !== 'invite' ? '@' : '') + props.user._id;
  }

  const rIcon = (
    <Image
      resizeMode={'contain'}
      style={[styles.smallR, { width: 10, height: 12, marginRight: 1 }]}
      source={require('app/public/img/icons/smallR.png')}
    />
  );

  if (handle) {
    handleEl = (
      <Text style={[styles.font10, styles.greyText]}>
        {handle} {props.postTime}
      </Text>
    );
    if (props.topic && props.topic.topic) {
      handleEl = (
        <View style={styles.textRow}>
          <Text style={[styles.font10, styles.greyText]}>
            {handle}
            {' • '}
          </Text>
          {rIcon}
          <Text style={[styles.font10, styles.greyText]}>
            {Math.round(props.topic.relevance)} in #{props.topic.topic}
          </Text>
        </View>
      );
    }
  }

  if (props.repost) {
    repostIcon = (
      <Image
        resizeMode={'contain'}
        source={require('app/public/img/reposted.png')}
        style={{ width: 15, height: 15, marginRight: 3, marginBottom: 14 }}
      />
    );
  }

  let twitterIcon;
  if (props.twitter) {
    twitterIcon = (
      <Icon
        borderRadius={0}
        name={'logo-twitter'}
        size={17}
        color={'#00aced'}
        style={styles.icon}
      />
    );
  }

  return (
    <Touchable
      onPress={() => props.setSelected(props.user)}
      // style={{ flex: 1 }}
    >
      <View style={styles.postInfo}>
        <Image source={imageSource} style={imageStyle} />
        {repostIcon}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              marginBottom: 2
            }}
          >
            <Name>
              {props.user.name} {twitterIcon}
            </Name>
            {stats}
          </View>
          {handleEl}
        </View>
      </View>
    </Touchable>
  );
}

UserName.propTypes = {
  topic: PropTypes.object,
  twitter: PropTypes.bool,
  type: PropTypes.string,
  user: PropTypes.object,
  big: PropTypes.bool,
  relevance: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repost: PropTypes.bool,
  postTime: PropTypes.string,
  setSelected: PropTypes.func
};

const localStyles = StyleSheet.create({
  icon: {
    marginLeft: 5
  },
  userImageBig: {
    height: 42,
    width: 42,
    borderRadius: 21,
    marginRight: 7
  },
  postInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

styles = { ...localStyles, ...globalStyles };
