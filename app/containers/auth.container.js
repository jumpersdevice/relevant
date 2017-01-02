import React, { Component } from 'react';
import {
  NavigationExperimental,
  Easing
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Auth from '../components/auth/auth.component';
import Login from '../components/auth/login.component';
import SignUp from '../components/auth/signup.component';
import ImageUpload from '../components/auth/imageUpload.component';
import * as authActions from '../actions/auth.actions';
import * as navigationActions from '../actions/navigation.actions';
import Card from '../components/nav/card.component';

import { globalStyles, localStyles } from '../styles/global';

const NativeAnimatedModule = require('NativeModules').NativeAnimatedModule;

const {
  Transitioner: NavigationTransitioner,
} = NavigationExperimental;

let styles;

class AuthContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.renderScene = this.renderScene.bind(this);
    this.back = this.back.bind(this);
  }

  renderScene(props) {
    let component = props.scene.route.component;

    switch (component) {
      case 'auth':
        return <Auth {...this.props} />;

      case 'login':
        return <Login {...this.props} />;

      case 'signup':
        return <SignUp {...this.props} />;

      case 'imageUpload':
        return <ImageUpload {...this.props} />;

      default:
        return <Auth {...this.props} />;
    }
  }

  back() {
    let scene = 'home';
    if (this.props.navigation.index > 0) scene = 'auth';
    this.props.actions.pop(scene);
  }

  configureTransition() {
    const easing = Easing.bezier(0.0, 0, 0.58, 1);
    return {
      duration: 200,
      easing,
      useNativeDriver: !!NativeAnimatedModule ? true : false
    };
  }

  render() {
    let scene = this.props.navigation;

    return (<NavigationTransitioner
      style={{ backgroundColor: 'white' }}
      navigationState={scene}
      configureTransition={this.configureTransition}
      render={transitionProps => (
        <Card
          {...transitionProps}
          renderScene={this.renderScene}
          back={this.back}
          {...this.props}
          header
          share={this.props.share}
        />)}
    />);
  }

}

styles = { ...localStyles, ...globalStyles };

function mapStateToProps(state) {
  return {
    auth: state.auth,
    navigation: state.navigation.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...authActions,
        ...navigationActions
      },
      dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
