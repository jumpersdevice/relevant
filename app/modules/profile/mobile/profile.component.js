import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ActionSheetIOS,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import RNBottomSheet from 'react-native-bottom-sheet';
import { globalStyles, mainPadding, greyText } from 'app/styles/global';
import { numbers } from 'app/utils';
import Percent from 'modules/stats/mobile/percent.component';
import StatRow from 'modules/stats/mobile/statRow.component';
// import CoinStat from 'modules/stats/coinStat.component';
import Bio from './bio.component';

const defaultImg = require('app/public/img/default_user.jpg');

let ActionSheet = ActionSheetIOS;

if (Platform.OS === 'android') {
  ActionSheet = RNBottomSheet;
  ActionSheet.showActionSheetWithOptions = RNBottomSheet.showBottomSheetWithOptions;
}

let styles;

class ProfileComponent extends Component {
  static propTypes = {
    actions: PropTypes.object,
    user: PropTypes.object,
    isOwner: PropTypes.bool,
    scrollTo: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    this.setTag = this.setTag.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
    this.initTooltips = this.initTooltips.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip() {
    this.props.actions.createToggleAction('relevance', this.tooltipParent);
  }

  initTooltips() {
    this.props.actions.setTooltipData({
      name: 'relevance',
      toggle: () => this.toggleTooltip()
    });
  }

  showActionSheet(id) {
    ActionSheet.showActionSheetWithOptions(
      {
        options: ['Block User', 'Cancel'],
        cancelButtonIndex: 1,
        destructiveIndex: 0
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            this.props.actions.updateBlock(id);
            break;
          default:
        }
      }
    );
  }

  setTag(tag) {
    if (!this.props.actions) return;
    this.props.actions.selectTag({ _id: tag.replace('#', '') });
    this.props.actions.changeTab('discover');
    this.props.actions.resetRoutes('discover');
  }

  setCat(cat) {
    if (!this.props.actions) return;
    this.props.actions.selectTag({
      _id: cat,
      category: true,
      categoryName: cat.replace('_category_tag', '')
    });
    this.props.actions.changeTab('discover');
    this.props.actions.resetRoutes('discover');
  }

  goToTopic(tag) {
    const name = tag.replace('#', '').trim();
    const topic = {
      _id: name,
      categoryName: '#' + name
    };
    this.props.actions.goToTopic(topic);
  }

  render() {
    const { user } = this.props;
    let userImage = null;
    let relevance = 0;
    let balance = null;
    let userImageEl = null;

    if (user) {
      if (user.image) userImage = user.image;
      if (user.relevance) relevance = user.relevance.pagerank || 0;
      if (user) balance = (user.balance + user.tokenBalance).toFixed(0);
    }

    if (userImage) {
      userImageEl = <Image source={{ uri: userImage }} style={styles.uploadAvatar} />;
    } else {
      userImageEl = <Image source={defaultImg} style={styles.uploadAvatar} />;
    }

    let optionsEl;

    if (!this.props.isOwner) {
      optionsEl = (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            paddingVertical: 10,
            paddingHorizontal: 15
          }}
          onPress={() => this.showActionSheet(user._id)}
        >
          <Icon name="ios-more" size={24} color={greyText} />
        </TouchableOpacity>
      );
    }

    const statEls = [
      {
        el: (
          <TouchableOpacity
            onPress={() => this.toggleTooltip()}
            ref={c => (this.tooltipParent = c)}
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-end'
            }}
          >
            <Image
              resizeMode={'contain'}
              style={[styles.r, { width: 24, height: 22 }]}
              source={require('app/public/img/r.png')}
            />
            <Text style={[styles.largeNumber]}>
              {numbers.abbreviateNumber(relevance)}{' '}
            </Text>
          </TouchableOpacity>
        )
      },
      {
        el: (
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
            <Percent fontSize={25} user={user} />
          </View>
        )
      },
      {
        el: (
          <View style={styles.textRow}>
            <Image
              resizeMode={'contain'}
              style={[styles.coin, { width: 23, height: 23 }]}
              source={require('app/public/img/relevantcoin.png')}
            />
            <Text style={[styles.largeNumber]}>
              {numbers.abbreviateNumber(balance) || 0}
            </Text>
          </View>
        )
      }
    ];

    return (
      <View
        style={[
          {
            padding: mainPadding,
            paddingBottom: 0,
            backgroundColor: 'white'
          }
        ]}
      >
        {userImageEl}
        {optionsEl}

        <StatRow elements={statEls} />

        {user.bio !== '' || this.props.isOwner ? (
          <Bio
            scrollTo={this.props.scrollTo}
            user={user}
            actions={this.props.actions}
            isOwner={this.props.isOwner}
          />
        ) : null}

        <View style={[styles.break, { marginTop: 0, marginHorizontal: 0 }]} />
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  uploadAvatar: {
    height: 170,
    width: 170,
    borderRadius: 170 / 2,
    resizeMode: 'cover',
    alignSelf: 'center'
  },
  textRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  }
});

styles = { ...globalStyles, ...localStyles };

export default ProfileComponent;