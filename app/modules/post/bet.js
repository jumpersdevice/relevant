import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  HoverButton,
  SecondaryText,
  LinkFont,
  SmallText,
  Header
} from 'modules/styled/uni';
import { getTimestamp, abbreviateNumber as toFixed } from 'utils/numbers';
import { colors, size } from 'styles';
import { VOTE_COST_RATIO } from 'server/config/globalConstants';
import CoinStat from 'modules/stats/coinStat.component';
import { bet, getPostInvestments } from 'modules/post/invest.actions';
import { hideModal } from 'modules/navigation/navigation.actions';
import { computeShares } from 'app/utils/post';
import { computePostPayout } from 'app/utils/rewards';
import { useCommunity } from 'modules/community/community.selectors';
import { PieChart } from 'modules/stats/piechart';

export function Bet() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const post = useSelector(state => state.navigation.modalData);
  const earnigns = useSelector(state =>
    state.earnings.pending.map(e => state.earnings.entities[e])
  );
  const earning = earnigns.find(e => e.post === post._id);
  const title = earning ? 'Increase Your Bet' : 'Bet On This Post';

  if (!user) return null;

  const time = getTimestamp(post.data.payoutTime).toLowerCase();
  const totalBalance = user.balance + user.tokenBalance;
  const maxBet = totalBalance - user.lockedTokens;

  const defaultAmount = Math.max(maxBet * VOTE_COST_RATIO, 0);
  const [amount, setAmount] = useState(defaultAmount);

  const plusAmount = () =>
    setAmount(a => {
      const largeStep = (maxBet - defaultAmount) / 5;
      const smallStep = defaultAmount / 5;
      const err = defaultAmount / 100;
      return a + smallStep <= defaultAmount + err
        ? a + smallStep
        : Math.min(a + largeStep, maxBet);
    });

  const minusAmount = () =>
    setAmount(a => {
      const largeStep = (totalBalance - user.lockedTokens - defaultAmount) / 5;
      const smallStep = defaultAmount / 5;
      const err = defaultAmount / 100;
      if (a - smallStep <= 0 + err) return a;
      return a - largeStep >= defaultAmount - err
        ? a - largeStep
        : Math.max(0, a - smallStep);
    });

  const placeBet = () => {
    dispatch(hideModal());
    dispatch(bet({ postId: post._id, stakedTokens: amount }));
  };

  const power = (100 * amount) / maxBet;

  return (
    <View>
      <Header>{title}</Header>
      <SmallText mt={1}>Payout: {time}</SmallText>

      <View mt={4} fdirection="row" justify="space-between" align={'center'}>
        <CircleButton onPress={minusAmount}>–</CircleButton>
        <View pr={1}>
          <CoinStat
            align={'center'}
            fs={4.5}
            lh={4.5}
            spaceBetween={1}
            c={colors.black}
            amount={amount}
          />
        </View>
        <CircleButton onPress={plusAmount}>+</CircleButton>
      </View>

      <View mt={2}>
        <View h={0.5} fdirection={'row'}>
          <View w={`${power}%`} bg={colors.blue} />
          <View w={`${100 - power}%`} bg={colors.lightBorder} />
        </View>
        <SecondaryText alignself={'center'} mt={0.5}>
          Available Coins: <SmallCoinStat amount={maxBet - amount} />
        </SecondaryText>
      </View>

      <View mt={4}>
        <PotentialRewards post={post} amount={amount} earning={earning} />
      </View>

      <HoverButton mt={3} onPress={placeBet}>
        Bet {toFixed(amount)} Coins
      </HoverButton>

      <SmallText mt={2}>
        If this post ranks highly you will win some coins, if not you will get your coins
        back.
      </SmallText>
    </View>
  );
}

PotentialRewards.propTypes = {
  post: PropTypes.object,
  earning: PropTypes.object,
  amount: PropTypes.number
};

function PotentialRewards({ post, amount, earning }) {
  const community = useCommunity();

  const investments = useSelector(state =>
    (state.investments.posts[post._id] || [])
      .map(_id => state.investments.investments[_id])
      .filter(inv => inv.amount > 0 && inv.investor !== state.auth.user._id)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostInvestments(post._id));
  }, []);

  const existingShares = earning ? earning.shares : 0;
  const existingStake = earning ? earning.stakedTokens : 0;

  const bets = investments.length;
  const users = bets > 1 ? 'users' : 'user';
  const invText = investments.length
    ? `${bets} ${users} bet a total of ${toFixed(
      post.data.totalShares - existingStake
    )} coins on this post`
    : 'You are the first to bet on this post!';

  const shares = computeShares({ post, stakedTokens: amount });
  const postRewards = computePostPayout(post.data, community);
  const shareOfRewards = (shares + existingShares) / (post.data.shares + shares);
  const shareOfRewardsPercent = shareOfRewards * 100;
  const potentialRewards = postRewards * shareOfRewards;
  const showPie = shareOfRewards !== 1;

  const shareEl = showPie && (
    <SmallText inline={1}>
      {' ( '}
      <Text style={{ top: 2 }} inline={1} mb={-0.5}>
        <PieChart
          w={size(1.5)}
          h={size(1.5)}
          percent={100 - shareOfRewardsPercent}
          strokeWidth={30}
          color={colors.blue}
        />
      </Text>{' '}
      {toFixed(shareOfRewardsPercent)}% )
    </SmallText>
  );

  return (
    <Fragment>
      <SmallText>{invText}</SmallText>
      <SmallText inline={1} mt={0.25}>
        Your estimated rewards: <SmallCoinStat amount={potentialRewards} />
        {shareEl}
      </SmallText>
    </Fragment>
  );
}

CircleButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
};

function CircleButton({ children, onPress }) {
  return (
    <HoverButton
      border={1}
      bc={colors.blue}
      w={8}
      h={8}
      minwidth={'auto'}
      bradius={4}
      bg={colors.white}
      onPress={onPress}
    >
      <LinkFont c={colors.blue} fs={2.5} lh={2.5}>
        {children}
      </LinkFont>
    </HoverButton>
  );
}

SmallCoinStat.propTypes = {
  amount: PropTypes.number
};

function SmallCoinStat({ amount }) {
  return (
    <CoinStat size={1.5} fs={1.5} secondary c={colors.black} inline={1} amount={amount} />
  );
}

export default Bet;
