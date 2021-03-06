import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { globalStyles, smallScreen } from 'app/styles/global';
import Percent from 'modules/stats/mobile/percent.component';
import { numbers } from 'app/utils';
import * as tooltipActions from 'modules/tooltip/tooltip.actions';

let styles;

class Stats extends Component {
  static propTypes = {
    type: PropTypes.string,
    discover: PropTypes.bool,
    parent: PropTypes.object,
    actions: PropTypes.object,
    // currentView: PropTypes.string,
    size: PropTypes.string,
    textStyle: PropTypes.object,
    topic: PropTypes.string,
    renderLeft: PropTypes.object,
    style: PropTypes.object,
    entity: PropTypes.object,
    auth: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.initTooltips = this.initTooltips.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.tooltipParent = {};
  }

  componentDidMount() {
    if (this.props.type === 'nav' && this.props.discover) {
      this.tooltipParent.topics = this.props.parent.title;
      setTimeout(() => this.initTooltips(), 1000);
    }
  }

  initTooltips() {
    ['relevance', 'coin', 'topics', 'earnings'].forEach(name => {
      this.props.actions.setTooltipData({
        name,
        toggle: () => this.toggleTooltip(name)
      });
    });
  }

  toggleTooltip(name) {
    // TODO test the onboarding here — might need this
    // console.log('toggle toolitp ', name);
    // if (
    //   (name === 'relevance' || name === 'coin') &&
    //   // this.props.currentView !== 'discover'
    // ) {
    //   return;
    // }
    if (this.props.type !== 'nav') return;
    if (!this.tooltipParent[name]) return;
    this.tooltipParent[name].measureInWindow((x, y, w, h) => {
      const parent = { x, y, w, h };
      if (x + y + w + h === 0) return;
      this.props.actions.setTooltipData({
        name,
        parent
      });
      this.props.actions.showTooltip(name);
    });
  }

  render() {
    const { type } = this.props;
    const entity = this.props.entity || this.props.auth.user;
    if (!entity) return null;

    let statsStyle = [
      { fontSize: 17, lineHeight: 17, height: 17 },
      styles.bebas,
      styles.quarterLetterSpacing
    ];
    let iconStyle = [];
    let coinStyle = [];

    if (this.props.size === 'small' || (smallScreen && type === 'nav')) {
      statsStyle = [
        { fontSize: 15, lineHeight: 15 },
        styles.bebas,
        styles.quarterLetterSpacing
      ];
      iconStyle = [{ width: 15, height: 15 }];
      coinStyle = [{ width: 15, height: 15 }];
    }
    if (this.props.size === 'tiny') {
      statsStyle = [
        { fontSize: 13, lineHeight: 13 },
        styles.bebas,
        styles.quarterLetterSpacing
      ];
      iconStyle = [{ width: 14, height: 14 }];
      // coinStyle = [{ width: 18, height: 15, marginBottom: -6 }];
    }

    const value = (
      <TouchableOpacity
        ref={c => (this.tooltipParent.coin = c)}
        onPress={() => this.toggleTooltip('coin')}
        style={styles.statInner}
      >
        <Image
          resizeMode={'contain'}
          style={[styles.coin, ...coinStyle]}
          source={require('public/img/relevantcoin.png')}
        />
        <Text style={[this.props.textStyle, statsStyle, styles.darkGrey]}>
          {numbers.abbreviateNumber(
            entity.value || entity.balance + entity.tokenBalance || 0
          )}
        </Text>
      </TouchableOpacity>
    );

    const percent = (
      <View style={styles.statInner}>
        <Percent fontSize={17} user={entity} />
      </View>
    );

    // This is in order to display topic relevance correctly
    entity.relevance = entity.relevance || {};
    const rank = this.props.topic
      ? entity[this.props.topic + '_relevance']
      : entity.relevance.pagerank || 0;
    const relevance = (
      <TouchableOpacity
        ref={c => (this.tooltipParent.relevance = c)}
        onPress={() => this.toggleTooltip('relevance')}
        style={styles.statInner}
      >
        <Image
          resizeMode={'contain'}
          style={[styles.r, ...iconStyle]}
          source={require('public/img/r.png')}
        />
        <Text style={[this.props.textStyle, statsStyle, styles.darkGrey]}>
          {numbers.abbreviateNumber(rank)}
        </Text>
      </TouchableOpacity>
    );

    const getLeft = () => {
      if (type === 'relevance') return null;
      if (type === 'value') return value;
      if (type === 'percent') return this.props.renderLeft || percent;
      if (type === 'nav') return value;
      return null;
    };

    const getRight = () => {
      if (type === 'value') return relevance;
      if (type === 'percent') return relevance;
      if (type === 'nav') return relevance;
      if (type === 'relevance') return relevance;
      return null;
    };

    const br = (
      <View style={styles.statInner}>
        <Text style={statsStyle}>{smallScreen ? '•' : ' • '}</Text>
      </View>
    );

    return (
      <View style={[styles.stats, this.props.style]}>
        {getLeft()}
        {getLeft() && !this.props.renderLeft ? br : null}
        {getRight()}
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  stats: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  statInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
});

styles = { ...globalStyles, ...localStyles };

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...tooltipActions
      },
      dispatch
    )
  };
}

export default connect(
  state => ({
    auth: state.auth
    // currentView: state.navigation.currentView
  }),
  mapDispatchToProps
)(Stats);
