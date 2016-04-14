'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  LinkingIOS,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
var Button = require('react-native-button');
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth.actions';
import * as postActions from '../actions/post.actions';
import * as userActions from '../actions/user.actions';
require('../publicenv');
import { globalStyles, fullWidth, fullHeight } from '../styles/global';
var postStyles = null;


class Post extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      expanded: false
    }
  }

  componentDidMount() {
    // this.calcMax(this);
  }



  openLink(url) {
      LinkingIOS.openURL(url)
  }

  toggleExpanded(bool) {
    this.setState({expanded: bool});
  }

  extractDomain(url) {
    console.log(url, 'extract url')
    var domain;
    if (url.indexOf("://") > -1) {
      domain = url.split('/')[2];
    } else {
      domain = url.split('/')[0];
    }
    domain = domain.split(':')[0];

    if (domain.indexOf('www.') > -1) {
      var noPrefix = domain.replace("www.","");
    } else {
      var noPrefix = domain;
    }
    return noPrefix;
  }

  // invest() {
  //   var invest = {
  //     postId: this.props.post._id,
  //     sign: 1,
  //     amount: 1
  //   };
  //   this.props.actions.invest(this.props.auth.token, invest);
  // }

  // initInvest() {
  //   var postId = this.props.post._id;

  // }

  render() {
    var self = this;
    var pickerStatus = self.state.pickerStatus;
    var post = null;
    var title = null;
    var description = null;
    var image = null;
    var link = null;
    var imageEl = null;
    var postUserImage = null;
    var postUserImageEl = null;
    var postUser = null;
    var postUserName = null;
    var body = null;
    var balance = null;
    var postStyles = this.props.styles;
    var user = null;
    var expanded = this.state.expanded;
    if (this.props.auth.user) user = this.props.auth.user;
    if (user && user.balance) balance = user.balance;
    var styles = {...localStyles, ...postStyles, ...globalStyles};

    if (this.props.post) {
      post = this.props.post;
      if (post.image) image = post.image;
      if (post.description) description = post.description;
      if (post.title) title = post.title;
      if (post.link) link = post.link;
      if (post.body) body = post.body;
      if (post.user) {
        postUser = post.user;
        if (postUser.image) postUserImage = postUser.image;
        if (postUser.name) postUserName = postUser.name;
      }
    }

    if (postUserImage) {
      postUserImageEl = (<Image source={{uri: postUserImage}} style={styles.userImage} />);
    }

    if (image) {
      imageEl = (<Image resizeMode={'cover'} source={{uri: image}} style={styles.postImage} />);
    }

    let investButtonString = "Invest";
    if( post.investors){
      var invested = post.investors.filter(el => {
        return el.user == user._id
      })
      if (invested.length) investButtonString = "UnInvest"
    }

    return (
        <View style={[styles.postContainer]}>
          <View style={styles.postHeader}>
            {postUserImageEl}
            <View style={styles.postInfo}>
              {postUserName ? <Text>posted by {postUserName}</Text> : null}
            </View>
          </View>
          {imageEl}
          <View style={styles.postBody}>
            <Text style={styles.font20}>{title ? title : 'Untitled'}</Text>
            {link ? <Text>from {self.extractDomain(link)}  <Text style={styles.active} onPress={self.openLink.bind(null, link)}>Open Article</Text></Text> : null}
            {body ? <Text>{body}</Text> : null}
            <Button style={styles.investButton} onPress={self.props.actions.openInvest.bind(self, self.props.post._id)}>Inve$t</Button>
            {!expanded ? <Text onPress={self.toggleExpanded.bind(this, true)}>Read more</Text> : null}
            {expanded ?
              <View>
                <Text onPress={self.toggleExpanded.bind(this, false)}>Read less</Text>
              </View>
            : null}
          </View>
        </View>
    );
  }
}

export default Post;

const localStyles = StyleSheet.create({
  postContainer: {
    marginBottom: 25,
    textAlign: 'left',
  },
  postBody: {
    padding: 15,
    textAlign: 'left'
  },
  postImage: {
    height: 200,
    width: fullWidth,
  },
  investButton: {
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 10
  },
  link: {
    flex: 1,
  },
  postInfo: {
    flex: 1,
    paddingLeft: 5
  }
});






