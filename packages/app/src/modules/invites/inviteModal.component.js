import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoinStat from 'modules/stats/coinStat.component';
import {
  View,
  SecondaryText,
  LinkFont,
  Divider,
  BodyText,
  Header,
  CTALink,
  Box,
  WarningBox
} from 'modules/styled/uni';
import { colors, sizing } from 'app/styles';
import styled from 'styled-components/primitives';
import ULink from 'modules/navigation/ULink.component';
import { REFERRAL_REWARD, PUBLIC_LINK_REWARD, MAX_AIRDROP } from '@r3l/common';
import { copyToClipBoard } from 'utils/text';
import { Animated } from 'react-native';

const ModalDivider = styled(Divider)`
  position: relative;
  margin: 0 -${sizing(6)};
`;

class InviteModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.position = new Animated.Value(0);
    this.color = colors.black;
  }

  componentDidMount() {
    const { auth, inviteList, actions } = this.props;
    const communityInvites = inviteList[auth.community] || [];

    if (!inviteList.length) {
      const skip = communityInvites.length;
      actions.getInvites(skip, 100, auth.community);
    }
  }

  animate = () => {
    this.position.setValue(0);
    this.color = this.position.interpolate({
      inputRange: [0, 1],
      // Green to blue, variables don't work for some reason
      outputRange: ['#7ED321', '#0000ff']
    });
    this.animation = Animated.timing(this.position, {
      toValue: 1,
      duration: 8000
    }).start();
  };

  generateInvite = async type => {
    const invite = {
      invitedBy: this.props.auth.user._id
    };
    if (type) {
      invite.type = type;
    }
    const { postInviteGeneration } = this.props;
    const newInvite = await this.props.actions.createInvite(invite);
    if (postInviteGeneration) {
      postInviteGeneration(newInvite);
    }
  };

  generateInviteUrl = ({ invite }) => {
    const origin =
      window && window.location ? window.location.origin : 'https://relevant.community';
    return `${origin}/${invite.community}?invitecode=${invite.code}`;
  };

  render() {
    const { auth, community, count, inviteList, invites, onShare } = this.props;
    const { user } = auth;
    const { userMemberships = [], communities } = community;

    if (!community.active)
      return (
        <WarningBox>
          Please join a community first. You can select one from the left navigation
          panel.
        </WarningBox>
      );

    const currentId = Object.keys(communities).find(
      key => communities[key].slug === community.active
    );
    const currentCommunity = communities[currentId] || {};

    const membership = userMemberships.find(m => m.communityId === currentCommunity._id);
    const showAdminInvite =
      user.role === 'admin' || (membership && membership.superAdmin);

    const publicInviteUrl = `/${auth.community}?invitecode=${auth.user.handle}`;
    const origin =
      window && window.location ? window.location.origin : 'https://relevant.community';

    const publicLink = `${origin}${publicInviteUrl}`;
    const communityInvites = inviteList[auth.community] || [];

    const invitesEl = communityInvites.map(_id => {
      const invite = invites[_id];
      const url = this.generateInviteUrl({ invite });
      // `${origin}/${invite.community}?invitecode=${invite.code}`;
      const now = new Date().getTime();
      const createdAt = Date.parse(invite.createdAt);
      const isNew = now - createdAt < 5000;
      let color = invite.redeemed ? colors.grey : colors.blue;
      if (isNew) {
        this.animate();
        color = this.color || colors.black;
      }
      return (
        <View mt={2} fdirection="column" key={_id}>
          <View fdirection="row" justify="space-between">
            <View fdirection="row" flex={1} mr={1}>
              <View flex={1}>
                <CTALink numberOfLines={1}>
                  <Animated.Text
                    onClick={() => copyToClipBoard(url)}
                    onPress={() =>
                      onShare({
                        title: 'Join Relevant',
                        message: 'Join Relevant',
                        url,
                        subject: 'Join Relevant'
                      })
                    }
                    style={{
                      color,
                      cursor: 'pointer'
                    }}
                  >
                    {url}
                  </Animated.Text>
                </CTALink>
              </View>
              <View ml={0.5} alignSelf="flex-end">
                <CTALink c={colors.grey}>
                  {invite.type === 'admin' ? 'mod' : null}
                </CTALink>
              </View>
            </View>
            <CTALink c={invite.redeemed ? colors.grey : colors.green}>
              {invite.redeemed ? 'redeemed' : 'available'}
            </CTALink>
          </View>
          <Divider pt={2} />
        </View>
      );
    });

    const url = publicLink;

    return (
      <View display="flex" fdirection="column">
        <View mt={6} display="flex" fdirection="column">
          <SecondaryText>Public Invite Link</SecondaryText>
          {PUBLIC_LINK_REWARD ? (
            <BodyText inline={1} mt={1}>
              You and each new users get{' '}
              <CoinStat size={2} amount={PUBLIC_LINK_REWARD} inline={1} /> coin
              {PUBLIC_LINK_REWARD === 1 ? '' : 's'} per signup via your public invite
              code.
            </BodyText>
          ) : null}
          <LinkFont
            mt={1}
            onClick={() => copyToClipBoard(url)}
            c={colors.blue}
            onPress={() =>
              onShare({
                title: 'Join Relevant',
                message: 'Join Relevant',
                url: publicLink,
                subject: 'Join Relevant'
              })
            }
          >
            {publicLink}
          </LinkFont>
        </View>
        <Divider pt={6} />
        <View display="flex" fdirection="column" mt={6}>
          <SecondaryText>
            Private Invite: Your have {count[community.active]} referral invite
            {count[community.active] > 1 ? 's' : ''} left.
          </SecondaryText>
          <Box mt={1} />
          {REFERRAL_REWARD ? (
            <BodyText inline={1}>
              Share your Reputation with trustworthy friends with your private invite
              codes. Earn <CoinStat size={2} amount={REFERRAL_REWARD} inline={1} /> coin
              {REFERRAL_REWARD === 1 ? '' : 's'} per signup.
            </BodyText>
          ) : null}
        </View>
        <ULink
          to={'#'}
          onPress={() => this.generateInvite()}
          onClick={() => this.generateInvite()}
          c={colors.blue}
        >
          <Box mt={1}></Box>
          <LinkFont c={colors.blue}>Click here to generate a new private link</LinkFont>
        </ULink>
        {showAdminInvite ? (
          <ULink
            to={'#'}
            onPress={() => this.generateInvite('admin')}
            onClick={() => this.generateInvite('admin')}
            c={colors.blue}
          >
            <Box mt={1} />
            <LinkFont mt={1} c={colors.blue}>
              Click here to generate moderator invite link
            </LinkFont>
          </ULink>
        ) : null}
        <ModalDivider pt={6} />
        <View mt={6} fdirection={'column'}>
          <Header>Private Invites</Header>
          {REFERRAL_REWARD && PUBLIC_LINK_REWARD ? (
            <BodyText inline={1} fdirection="row">
              Here’s how many coins you’ve made from invites so far:{' '}
              <CoinStat size={2} amount={user.referralTokens} inline={1} /> coin
              {user.referralTokens === 1 ? '' : 's'} (max amount is {MAX_AIRDROP})
            </BodyText>
          ) : null}
          <View mt={4} fdirection="column">
            {invitesEl}
          </View>
        </View>
      </View>
    );
  }
}

InviteModal.propTypes = {
  inviteList: PropTypes.object,
  invites: PropTypes.object,
  auth: PropTypes.object,
  community: PropTypes.object,
  actions: PropTypes.object,
  count: PropTypes.object,
  onShare: PropTypes.func,
  postInviteGeneration: PropTypes.func
};

export default InviteModal;
