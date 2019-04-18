import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { Image, LinkFont, SecondaryText, View, Button } from 'modules/styled/uni';
import { colors } from 'app/styles';
import ULink from 'modules/navigation/ULink.component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showModal } from 'modules/navigation/navigation.actions';

const twitterIcon = require('app/public/img/icons/twitter_white.png');
const redditIcon = require('app/public/img/icons/reddit.png');

class SignupSocial extends Component {
  static propTypes = {
    location: PropTypes.object,
    actions: PropTypes.object,
    auth: PropTypes.object
  };

  render() {
    const { location, auth } = this.props;
    let { redirect } = queryString.parse(location.search);
    if (!redirect) redirect = location.pathname;
    const { invitecode } = auth;

    return (
      <View display="flex" fdirection="column" align-items="flex-start">
        <SecondaryText>Sign up for Relevant.</SecondaryText>
        <View display="flex" fdirection="row" align="center" mt={7}>
          <ULink
            to={`/auth/twitter?invitecode=${invitecode}&redirect=${redirect}`}
            external
            mr={4}
          >
            <Button bg={colors.twitterBlue}>
              <Image resizeMode={'contain'} source={twitterIcon} w={3} h={3} mr={1.5} />
              Sign up with Twitter
            </Button>
          </ULink>
          <ULink
            to={`/auth/reddit?invitecode=${invitecode}&redirect=${redirect}`}
            external
            mr={4}
          >
            <Button bg={colors.redditColor}>
              <Image resizeMode={'contain'} source={redditIcon} w={3} h={3} mr={1.5} />
              Sign up with Reddit
            </Button>
          </ULink>
          <a
            onClick={e => {
              e.preventDefault();
              // this.setState({ provider: 'email' });
              this.props.actions.showModal('signupEmail');
            }}
          >
            <LinkFont c={colors.blue}>Sign up with Email</LinkFont>
          </a>
        </View>
        <LinkFont mt={4}>
          Already registered?{' '}
          <a onClick={() => this.props.actions.showModal('login')}>Sign In</a>
        </LinkFont>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  auth: state.auth,
  initialValues: {},
  enableReinitialize: true
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      showModal
    },
    dispatch
  )
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupSocial)
);
