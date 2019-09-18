import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { colors } from 'app/styles';
import { numbers } from 'app/utils';
import {
  View,
  BodyText,
  Header,
  SecondaryText,
  Touchable,
  LinkFont
} from 'modules/styled/uni';
import CoinStat from 'modules/stats/coinStat.component';
import { CASHOUT_LIMIT } from 'server/config/globalConstants';
// import { parseBN } from 'app/utils/eth';
import Tooltip from 'modules/tooltip/tooltip.component';
import { showModal } from 'modules/navigation/navigation.actions';
// import { useTokenContract } from 'modules/contract/contract.hooks';

Balance.propTypes = {
  isWeb: PropTypes.bool
};

export function Balance({ isWeb }) {
  // Temporarily disable - don't want to trigger metamask popup here
  // useTokenContract();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const screenSize = useSelector(state => state.navigation.screenSize);

  // const userBalance = useBalance();

  if (!user) return null;
  const metaMaskTokens = user.tokenBalance;
  // userBalance && userBalance.phase === 'SUCCESS'
  // ? parseBN(userBalance.value)
  // : user.tokenBalance;
  const { airdropTokens, lockedTokens } = user;
  const stakingPower = user.balance
    ? Math.round(100 * (1 - lockedTokens / user.balance))
    : 0;

  return (
    <View m={['4 4 2 4', '2 2 0 2']}>
      {!screenSize ? (
        <View>
          <Header>Relevant Tokens</Header>
          <BodyText mt={2}>
            These are tokens you earned as rewards. Once you have more than{' '}
            {CASHOUT_LIMIT}, you can transfer them to your Ethereum account.
          </BodyText>
        </View>
      ) : null}
      <View br bl bt p="2" mt={2}>
        <View fdirection="row" justify="space-between" wrap>
          <BodyText mb={0.5}>Account Balance</BodyText>
          <SecondaryText mb={0.5}>{user.ethAddress[0]}</SecondaryText>
        </View>
        <View fdirection="row" align="center" display="flex" mt={2}>
          <CoinStat fs={4.5} lh={5} size={5} user={user} align="center" />
        </View>
      </View>
      <View border={1} p="2">
        <SecondaryText>
          {`Unclaimed REL: ${numbers.abbreviateNumber(user.balance)}`}
          {metaMaskTokens
            ? `   Metamask: ${numbers.abbreviateNumber(metaMaskTokens)}`
            : ''}
          {airdropTokens
            ? `   Airdrop Coins: ${numbers.abbreviateNumber(airdropTokens)}`
            : ''}
          {lockedTokens
            ? `   Locked Coins: ${numbers.abbreviateNumber(lockedTokens)}`
            : ''}
          {stakingPower ? `   Staking Power: ${stakingPower}%` : ''}
        </SecondaryText>
      </View>
      {isWeb ? (
        <View fdirection="row" mt={2} align="center">
          <Touchable onClick={() => dispatch(showModal('cashOut'))} td={'underline'}>
            <LinkFont c={colors.blue} mr={0.5}>
              Claim Tokens
            </LinkFont>
          </Touchable>
          <Tooltip
            info
            data={{
              text: `Once you earn more than ${CASHOUT_LIMIT} tokens you\ncan transfer them to your Metamask wallet\n(temporarily disabled)`
            }}
          />
        </View>
      ) : null}
      <Header mt={[9, 4]}>Recent Activity</Header>
      {!screenSize ? (
        <BodyText mt={2}>
          Your rewards for upvoting links and discussion threads that are relevant to the
          community.
        </BodyText>
      ) : null}
    </View>
  );
}

export default Balance;
