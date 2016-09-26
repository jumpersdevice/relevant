'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  PushNotificationIOS,
  ScrollView,
  AlertIOS
} from 'react-native';

var FileUpload = require('NativeModules').FileUpload;
import { connect } from 'react-redux';
var Button = require('react-native-button');
import * as authActions from '../actions/auth.actions';
import * as postActions from '../actions/post.actions';
import * as tagActions from '../actions/tag.actions';
import { bindActionCreators } from 'redux';
var ImagePickerManager = require('NativeModules').ImagePickerManager;
import * as utils from '../utils';
import { pickerOptions } from '../utils/pickerOptions';
import * as animationActions from '../actions/animation.actions';
import { globalStyles, fullWidth, fullHeight } from '../styles/global';
import Post from '../components/post.component';
import * as subscriptionActions from '../actions/subscription.actions';
import * as investActions from '../actions/invest.actions';
import Notification from '../components/notification.component';
import ProfileComponent from '../components/profile.component';
import InvestAnimation from '../components/investAnimation.component';

class Profile extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      investAni: [],
    }
  }

  componentWillMount() {
    var self = this;
    self.props.actions.getUserPosts(0, 5, self.props.auth.user._id);
  }

  componentWillReceiveProps(next) {
    var self = this;
  }

  render() {
    var self = this;
    var user = null;
    var userImage = null;
    var name = null;
    var relevance = 0;
    var balance = 0;
    var userImageEl = null;
    var postsEl = null;
    var profileEl = null;

    if (self.props.auth.user) {
      profileEl = (<ProfileComponent {...self.props} user={self.props.auth.user} styles={styles} />);
      if (self.props.auth.user.posts) {
        if (self.props.auth.user.posts.length > 0) {
          var posts = null;

          posts = self.props.auth.user.posts;

          postsEl = posts.map(function(post, i) {
            return (<Post key={i} post={post} {...self.props} styles={styles} />);
          });
        } else {
           postsEl = (<View style={styles.padding10}><Text>No posts yet 😔</Text></View>)
         }
      } else {
        postsEl = (<View style={styles.padding10}><Text>No posts yet 😔</Text></View>)
      }
    }

    return (
      <View style={styles.fullContainer}>
      <ScrollView style={styles.fullContainer}>
        {profileEl}
        <View>
          {postsEl}
        </View>
      </ScrollView>
      </View>
    );
  }
}

export default Profile


const localStyles = StyleSheet.create({
  postsHeader: {
    padding: 10
  },
  uploadAvatar: {
    height: 100,
    width: 100,
    resizeMode: 'cover'
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  insideRow: {
    flex: 1,
  },
  insidePadding: {
    paddingLeft: 10,
    paddingRight: 10
  },
  pictureWidth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
});

var styles = {...localStyles, ...globalStyles};

