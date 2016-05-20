'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Linking,
  TouchableHighlight,
  LayoutAnimation,
  DeviceEventEmitter,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
var Button = require('react-native-button');
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth.actions';
import * as postActions from '../actions/post.actions';
import * as userActions from '../actions/user.actions';
require('../publicenv');
import { globalStyles, fullWidth, fullHeight } from '../styles/global';
import Post from '../components/post.component';
import * as investActions from '../actions/invest.actions';
import * as notifActions from '../actions/notif.actions';
import Notification from '../components/notification.component';
import Comment from '../components/comment.component';
import DiscoverUser from '../components/discoverUser.component';
import Shimmer from 'react-native-shimmer';

class Comments extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      comment: null,
      visibleHeight: Dimensions.get('window').height - 120
    }
  }

  componentDidMount() {
    var self = this;
    self.props.actions.getComments(self.props.posts.activePost);
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
  }

  keyboardWillShow (e) {
    let newSize = (Dimensions.get('window').height - e.endCoordinates.height) - 120
    this.setState({visibleHeight: newSize})
  }

  keyboardWillHide (e) {
    this.setState({visibleHeight: Dimensions.get('window').height - 120})
  }

  componentWillReceiveProps(next) {
    var self = this;
  }

  createComment() {
    var self = this;
    var commentObj = {
      post: self.props.posts.activePost,
      text: self.state.comment,
      user: self.props.auth.user._id
    }
    self.props.actions.createComment(self.props.auth.token, commentObj);
  }

  render() {
    var self = this;
    var comments = [];
    var commentsEl = null;
    if (self.props.posts.comments) {
      comments = self.props.posts.comments;
      commentsEl = comments.map(function(comment, i) {
        return (<Comment styles={styles} {...self.props} comment={comment} />)
      })
    }

    return (
      <View style={[{height: self.state.visibleHeight}]}>
        <ScrollView contentContainerStyle={[]} >
          {commentsEl}
        </ScrollView>
        <View style={styles.commentInputParent}>
          <TextInput style={[styles.commentInput, styles.font20]} placeholder='Enter comment...' multiline={false} onChangeText={(comment) => this.setState({"comment": comment})} value={self.state.comment} returnKeyType='done' />
          <TouchableHighlight style={styles.commentSubmit} onPress={self.createComment.bind(self)}>
            <Text style={[styles.font15, styles.active]}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts,
    user: state.user,
    router: state.routerReducer,
    online: state.online
   }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...investActions, ...authActions, ...postActions, ...userActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

const localStyles = StyleSheet.create({
  commentInputParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    height: 50,
    flex: 0.75,
    padding: 10,
  },
  commentSubmit: {
    flex: 0.25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

var styles = {...localStyles, ...globalStyles};


















