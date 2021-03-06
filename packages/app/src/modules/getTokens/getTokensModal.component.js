import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  HoverButton,
  BodyText,
  Divider,
  LinkFont,
  SecondaryText,
  ViewButton,
  Box
} from 'modules/styled/uni';
import CoinStat from 'modules/stats/coinStat.component';
import {
  TWITTER_REWARD,
  EMAIL_REWARD
  // REDDIT_REWARD
} from '@r3l/common';
import ULink from 'modules/navigation/ULink.component';
import { colors } from 'app/styles';
import { exchangeLink, tokenEnabled } from 'modules/wallet/price.context';
import { goToUrl } from 'modules/navigation/navigation.actions';

GetTokensModal.propTypes = {
  actions: PropTypes.object,
  auth: PropTypes.object,
  mobile: PropTypes.bool,
  twitterButton: PropTypes.node
  // redditButton: PropTypes.node
};

function GetTokensModal({
  auth: { user },
  actions: { sendConfirmation },
  mobile,
  twitterButton
  // redditButton
}) {
  return (
    <Box>
      {tokenEnabled() && (
        <Fragment>
          <BodyText mt={2} mb={3} inline={1}>
            You can buy and sell tokens on the Uniswap Exchange
          </BodyText>
          <UniswapButton />
          <Divider mt={4} />
        </Fragment>
      )}
      {(!user.confirmed || user?.role === 'admin') && (
        <View fdirection="column" justify={'space-between'}>
          <View fdirection="row" align="center" mt={4}>
            <BodyText inline={1}>
              Confirm your e-mail to get{' '}
              <CoinStat inline={1} size={2} amount={EMAIL_REWARD} /> *non-redeemable*{' '}
              {EMAIL_REWARD > 1 ? 'coins' : 'coin'}
            </BodyText>
          </View>
          <ULink
            to="#"
            onClick={sendConfirmation}
            onPress={sendConfirmation}
            external
            mr={['auto', 0]}
            mobile={mobile}
            fel
          >
            <ViewButton w={[22, 'auto']} mt={3} mobile={mobile}>
              <LinkFont c={colors.white}>Confirm E-mail</LinkFont>
            </ViewButton>
          </ULink>
          <SecondaryText mt={2}>
            *these coins cannot be cashed out, but can be used to earn curation rewards
          </SecondaryText>
          <SecondaryText mt={1}>
            *if you don't see a confirmation email in your inbox, please check your spam
            folder
          </SecondaryText>
          <Divider mt={4} />
        </View>
      )}

      {(!user.twitterId || user?.role === 'admin') && (
        <Box>
          <View fdirection={'row'} align="center" mt={4}>
            <BodyText inline={1}>
              Connect your Relevant account with your Twitter to get{' '}
              <CoinStat
                inline={1}
                size={2}
                amount={user.confirmed ? TWITTER_REWARD : TWITTER_REWARD + EMAIL_REWARD}
              />{' '}
              *non-redeemable* {TWITTER_REWARD > 1 ? 'coins' : 'coin'}
            </BodyText>
          </View>
          {twitterButton}
          <SecondaryText mt={2}>
            *these coins cannot be cashed out, but can be used to earn curation rewards
          </SecondaryText>
          <Divider mt={4} />
        </Box>
      )}
      {/*
      {!user.redditId && redditButton && (
        <View>
          <View mt={4} fdirection="row" align="center">
            <BodyText c={colors.secondaryText} inline={1}>
              Connect your Relevant account with your Reddit account to earn{' '}
              <CoinStat inline={1} size={2} amount={REDDIT_REWARD} />{' '}
              {REDDIT_REWARD > 1 ? 'coins' : 'coin'}
            </BodyText>
          </View>
          {redditButton}
          <Divider mt={4} />
        </View>
       <View mt={4}>
        <ULink
          to="#"
          onClick={() => showModal('invite')}
          onPress={() => push('invites')}
          external
          mr="auto"
          mobile={mobile}
        >
          <LinkFont c={colors.blue}>Invite Friends</LinkFont>
        </ULink>
      </View>
      */}
    </Box>
  );
}

function UniswapButton() {
  const dispatch = useDispatch();
  const uniIcon = require('public/img/uniswap.png');
  const exchageUrl = exchangeLink();

  return (
    <ULink to={exchageUrl} external mr={['auto', 0]} target="_blank">
      <HoverButton
        w={[22, 'auto']}
        bg={colors.uniswap}
        m={0}
        c={colors.white}
        onPress={() => dispatch(goToUrl(exchageUrl))}
      >
        <View fdirection="row" justify={'center'} align="center">
          <Image resizeMode="contain" source={uniIcon} w={3} h={3} mr={1.5} />
          <LinkFont c={colors.white}>Uniswap Exchange</LinkFont>
        </View>
      </HoverButton>
    </ULink>
  );
}

export default GetTokensModal;
