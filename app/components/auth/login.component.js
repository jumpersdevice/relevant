import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  AlertIOS,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { globalStyles } from '../../styles/global';

let localStyles;
let styles;

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.back = this.back.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      bool: false,
      notifText: null,
      username: null,
      password: null,
    };
  }

  componentWillUnmount() {
    this.props.actions.setAuthStatusText();
  }

  login() {
    if (!this.state.username) {
      AlertIOS.alert('must enter username');
      return;
    }

    if (!this.state.password) {
      AlertIOS.alert('must enter password');
      return;
    }
    this.userInput.blur();
    this.passInput.blur();
    dismissKeyboard();
    this.props.actions.loginUser({ name: this.state.username, password: this.state.password });
  }

  back() {
    this.props.actions.pop(this.props.navigation.main);
  }

  render() {
    styles = { ...localStyles, ...globalStyles };

    return (
      <KeyboardAvoidingView
        behavior={'padding'}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          keyboardDismissMode={'interactive'}
          scrollEnabled={false}
          contentContainerStyle={styles.fieldsParent}
        >

          <View style={styles.fieldsInner}>

            <View style={styles.fieldsInputParent}>
              <TextInput
                ref={c => this.userInput = c}
                autoCorrect={false}
                autoCapitalize={'none'}
                // keyboardType={'email-address'}
                clearTextOnFocus={false}
                placeholder="username"
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
                style={styles.fieldsInput}
              />
            </View>

            <View style={styles.fieldsInputParent}>
              <TextInput
                ref={c => this.passInput = c}
                autoCapitalize={'none'}
                autoCorrect={false}
                secureTextEntry
                keyboardType={'default'}
                clearTextOnFocus={false}
                placeholder="password"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                style={styles.fieldsInput}
              />
            </View>
            <Text
              onPress={() => this.props.actions.push({
                key: 'forgot',
                title: 'Forgot Pass',
                back: true
              }, 'auth')
              }
              style={[styles.active, styles.forgot]}
            >
              reset password
            </Text>

          </View>

          <TouchableHighlight
            onPress={this.login}
            underlayColor={'transparent'}
            style={[styles.largeButton]}
          >
            <Text style={styles.largeButtonText}>
              sign in
            </Text>
          </TouchableHighlight>

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  actions: React.PropTypes.object,
};

localStyles = StyleSheet.create({
  forgot: {
    textAlign: 'center',
    marginTop: 5
  }
});


export default Login;
