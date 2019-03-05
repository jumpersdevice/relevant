import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewButton, BodyText, Divider, LinkFont } from 'modules/styled/uni';
import CoinStat from 'modules/stats/coinStat.component';
import { TWITTER_REWARD, EMAIL_REWARD } from 'server/config/globalConstants';
import ULink from 'modules/navigation/ULink.component';
import { colors } from 'app/styles';

class GetTokensModal extends Component {
  static propTypes = {
    actions: PropTypes.object,
    auth: PropTypes.object,
    mobile: PropTypes.bool,
    twitterButton: PropTypes.node
  };

  render() {
    const {
      auth: { user },
      actions: { sendConfirmation, showModal, push },
      mobile,
      twitterButton
    } = this.props;
    return (
      <View display="flex" fdirection="column">
        <View display="flex" fdirection="row" align="center">
          <BodyText c={colors.secondaryText} inline={1}>
            Connect your Relevant account with your Twitter account to earn{' '}
            <CoinStat inline={1} size={2} amount={TWITTER_REWARD} />{' '}
            {TWITTER_REWARD > 1 ? 'coins' : 'coin'}
          </BodyText>
        </View>
        {twitterButton}
        <Divider mt={4} />
        {user.confirmed ? (
          <View fdirection="column">
            <View display="flex" fdirection="row" align="center" mt={4}>
              <BodyText c={colors.secondaryText} inline={1}>
                Confirm your e-mail to earn{' '}
                <CoinStat inline={1} size={2} amount={EMAIL_REWARD} />{' '}
                {EMAIL_REWARD > 1 ? 'coins' : 'coin'}
              </BodyText>
            </View>
            <ULink
              to="#"
              onClick={sendConfirmation}
              onPress={sendConfirmation}
              external
              mr="auto"
              mobile={mobile}
            >
              <ViewButton mt={3} mobile={mobile}>
                <LinkFont c={colors.white}>Confirm E-mail</LinkFont>
              </ViewButton>
            </ULink>
            <Divider mt={4} />
          </View>
        ) : null}
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
      </View>
    );
  }
}

export default GetTokensModal;
