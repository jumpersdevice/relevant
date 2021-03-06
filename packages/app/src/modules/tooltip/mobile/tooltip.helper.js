import React from 'react';
import { Text, Image, View, StyleSheet, Platform } from 'react-native';
import { globalStyles, fullWidth } from 'app/styles/global';
import { numbers } from 'app/utils';

let styles;

/* eslint react/prop-types: 0 */

exports.data = {};
exports.text = {};

// list of tooltips to initalize on app load
exports.tooltips = [
  'relevance',
  'coin',
  'topics',
  'subscriptions',
  'activity',
  'shareTip',
  'vote'
];

exports.data.default = {
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 1,
  verticalOffset: 15
};

exports.data.relevance = {
  name: 'relevance',
  vertical: 'bottom',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};

function renderRow(props, txt) {
  return (
    <View key={txt} style={{ flexDirection: 'row' }}>
      <Text allowFontScaling={false} style={[props.style]}>
        {'\u2022'}
      </Text>
      <Text allowFontScaling={false} style={[props.style, styles.ul]}>
        {txt}
      </Text>
    </View>
  );
}

exports.text.relevance = function relevance(props) {
  if (!props.auth.user) return null;

  const data = [
    'Your reputation score reflects your contributions to the community.',
    'Your reputation goes down when you post spam.'
  ];

  const dataEl = data.map(txt => renderRow(props, txt));
  const { user } = props.auth;
  const rel = user.relevance ? user.relevance.pagerank || 0 : 0;

  return (
    <View>
      <View style={[styles.textRow]}>
        <Text allowFontScaling={false} style={[props.style, styles.title]}>
          This is your Reputation:{' '}
        </Text>
        <Image
          resizeMode={'contain'}
          style={[styles.r, { width: 19, height: 16, marginBottom: 1 }]}
          source={require('public/img/rWhite.png')}
        />
        <Text
          allowFontScaling={false}
          style={[
            styles.bebas,
            props.style,
            Platform.OS === 'android' ? { marginBottom: 0 } : null,
            styles.title
          ]}
        >
          {numbers.abbreviateNumber(rel)}
        </Text>
      </View>
      <View style={styles.ulParent}>{dataEl}</View>
    </View>
  );
};

exports.data.coin = {
  name: 'coin',
  vertical: 'bottom',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};

exports.text.coin = function coin(props) {
  if (!props.auth.user) return null;

  const data = [
    'Get coins by upvoting quality links. ',
    "The more coins you have, the more rewards you'll be able to earn"
  ];

  const dataEl = data.map(txt => renderRow(props, txt));

  return (
    <View>
      <View allowFontScaling={false} style={[styles.textRow]}>
        <Text style={[props.style, styles.title]}>These are your coins: </Text>
        <Image
          resizeMode={'contain'}
          style={[styles.r, { width: 20, height: 18, marginBottom: 1 }]}
          source={require('public/img/relevantcoin.png')}
        />
        <Text
          allowFontScaling={false}
          style={[
            styles.bebas,
            props.style,
            Platform.OS === 'android' ? { marginBottom: 0 } : null,
            styles.title
          ]}
        >
          {numbers.abbreviateNumber(
            props.auth.user.balance + props.auth.user.tokenBalance
          )}
        </Text>
      </View>
      <View style={styles.ulParent}>{dataEl}</View>
    </View>
  );
};

exports.data.topics = {
  name: 'topics',
  vertical: 'bottom',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};

exports.text.topics = function topics(props) {
  if (!props.auth.user) return null;
  return (
    <Text style={[props.style, { textAlign: 'center' }]}>
      Press on Discover to toggle specific topics
    </Text>
  );
};

exports.data.subscriptions = {
  name: 'subscriptions',
  vertical: 'bottom',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};

exports.text.subscriptions = function subscription(props) {
  if (!props.auth.user) return null;
  return (
    <Text allowFontScaling={false} style={[props.style, { textAlign: 'center' }]}>
      When you upvote a post, you subscribe to the next 3 posts from the author
    </Text>
  );
};

exports.data.vote = {
  name: 'vote',
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 1,
  verticalOffset: 15
};

exports.text.vote = function vote(props) {
  if (!props.auth.user) return null;

  const data = [
    'Upvote articles and that are worth reading, downvote spam.',
    "Voters will earn coins based on the article's ranking after 3 days"
  ];

  const dataEl = data.map(txt => renderRow(props, txt));

  return (
    <View>
      <Text allowFontScaling={false} style={[props.style, styles.title]}>
        Was it worth reading?
      </Text>
      <View style={styles.ulParent}>{dataEl}</View>
    </View>
  );
};

exports.data.activity = {
  name: 'activity',
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 0
};

exports.text.activity = function activity(props) {
  if (!props.auth.user) return null;

  let data = [
    'When others upvote your posts your Relevance goes up',
    'You earn more Relevance from users that are more Relevant than you'
  ];

  if (props.type && props.type.match('partial')) {
    data = [
      'You earn Relevance when you are one of the first to upvote a quality article',
      'For best results find new posts no one upvoted yet'
    ];
  }

  const dataEl = data.map(txt => renderRow(props, txt));

  return (
    <View>
      <Text allowFontScaling={false} style={[props.style, styles.title]}>
        Relevance
      </Text>
      <View style={styles.ulParent}>{dataEl}</View>
    </View>
  );
};

exports.data.shareTip = {
  name: 'shareTip',
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 4,
  noButton: true
};

exports.text.shareTip = function shareTip() {
  const width = fullWidth / 2.4;
  const Video = require('react-native-video').default;
  return (
    <View style={styles.videoTip}>
      <View style={{ flex: 1 }}>
        <View style={styles.ol}>
          <Text
            allowFontScaling={false}
            style={[styles.textP, { fontWeight: 'bold', fontSize: 14 }]}
          >
            Enable posting from Chrome, Safari and other apps:
          </Text>
        </View>
        <View style={styles.ol}>
          <Text allowFontScaling={false} style={styles.textP}>
            1{' '}
          </Text>
          <Text allowFontScaling={false} style={styles.textP}>
            Tap on share icon
          </Text>
        </View>

        <View style={styles.ol}>
          <Text allowFontScaling={false} style={styles.textP}>
            2{' '}
          </Text>
          <Text allowFontScaling={false} style={styles.textP}>
            Tap on 'More'
          </Text>
        </View>

        <View style={styles.ol}>
          <Text allowFontScaling={false} style={styles.textP}>
            3{' '}
          </Text>
          <Text allowFontScaling={false} style={styles.textP}>
            Find and toggle Relevant app
          </Text>
        </View>

        <View style={styles.ol}>
          <Text allowFontScaling={false} style={styles.textP}>
            4{' '}
          </Text>
          <Text allowFontScaling={false} style={styles.textP}>
            Rearrange Relevant icon as you like
          </Text>
        </View>
      </View>
      <View style={{ flex: 0, width, height: width + 40, overflow: 'hidden' }}>
        <Video
          resizeMode={'contain'}
          source={require('public/img/shareTip.mp4')}
          style={{ width, height: (width * 16) / 9, bottom: 0, position: 'absolute' }}
          repeat
        />
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  ol: {
    flexDirection: 'row',
    paddingRight: 15
  },
  tooltipText: {
    fontSize: 15
  },
  title: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  textP: {
    fontSize: 12,
    flex: 0,
    marginBottom: 10,
    color: 'white'
  },
  videoTip: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ul: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  ulParent: {
    flexDirection: 'column',
    marginTop: 20
  }
});

styles = { ...globalStyles, ...localStyles };
