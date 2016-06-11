'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  TouchableHighlight
} from 'react-native';
var Button = require('react-native-button');
import {reduxForm} from 'redux-form';
import Notification from './notification.component';

class Login extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      bool: false,
      notifText: null
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  login() {
    var self = this;
    this.props.actions.loginUser({email: self.state.email, password: self.state.password}).then(function(results) {
      if (results) {
        if (!results.status) {
          self.props.actions.setNotif(true, results.message, false)
        }
      }
    })
  }

  render() {
    var self = this;
    const { loginUser } = this.props.actions;
    var message = '';
    var styles = this.props.styles;
    this.props.auth.statusText ? message = this.props.auth.statusText : null;

    return (
      <View style={styles.center}>

        <View style={styles.marginTop}>
          <TextInput autoCapitalize='none' keyboardType='default' clearTextOnFocus={false} placeholder="email" onChangeText={(email) => this.setState({"email": email})} value={this.state.email} style={styles.input} />
        </View>

        <View style={styles.marginTop}>
          <TextInput autoCapitalize='none' secureTextEntry={true} keyboardType='default' clearTextOnFocus={false} placeholder="password" onChangeText={(password) => this.setState({"password": password})} value={this.state.password} style={styles.input} />
        </View>

        <View style={styles.margin}>
          <TouchableHighlight onPress={self.login.bind(this)} style={styles.genericButton}><Text style={styles.white}>Submit</Text></TouchableHighlight>
        </View>

      </View>
    );
  }
}


export default Login


