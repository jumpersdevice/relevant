import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ActionSheetIOS,
} from 'react-native';
import { globalStyles, fullWidth, fullHeight } from '../styles/global';
import InvestModal from './investModal.component.js';
import Share from 'react-native-share';

let styles;

class PostButtons extends Component {
  constructor(props, context) {
    super(props, context);
    this.onShare = this.onShare.bind(this);
    this.goToPost = this.goToPost.bind(this);
    this.state = {
      editing: false,
      modalVisible: false,
      expanded: false,
    };

    this.linkMenu = {
      buttons: [
        'Share',
        'Irrelevant',
        'Repost Commentary',
        'Repost Link',
        'Cancel',
      ],
      cancelIndex: 4,
    };

    this.menu = {
      buttons: [
        'Share',
        'Irrelevant',
        'Repost Commentary',
        'Cancel',
      ],
      cancelIndex: 3,
    };

    this.ownerMenu = {
      myPost: true,
      buttons: [
        'Share',
        'Edit',
        'Delete',
        'Cancel',
      ],
      destructiveIndex: 2,
      cancelIndex: 3,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
    this.openComments = this.openComments.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  componentDidMount() {
    if (this.props.post.user && this.props.auth.user) {
      if (this.props.post.user === this.props.auth.user._id) {
        this.menu = this.ownerMenu;
        this.myPost = true;
      } else if (this.props.post.link) {
        this.menu = this.linkMenu;
      }
    }
  }

  goToPost() {
    console.log('go to post');
    this.props.navigator.goToPost(this.props.post);
  }

  showActionSheet() {
    if (this.myPost) {
      ActionSheetIOS.showActionSheetWithOptions({
        options: this.menu.buttons,
        cancelButtonIndex: this.menu.cancelIndex,
        destructiveButtonIndex: this.menu.destructiveIndex,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.onShare();
            break;
          case 1:
            this.toggleEditing();
            break;
          case 2:
            this.deletePost();
            break;
          default:
            return;
        }
      });
    } else {
      ActionSheetIOS.showActionSheetWithOptions({
        options: this.menu.buttons,
        cancelButtonIndex: this.menu.cancelIndex,
        destructiveButtonIndex: this.menu.destructiveIndex,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.onShare();
            break;
          case 1:
            this.irrelevant();
            break;
          case 2:
            this.repostCommentary();
            break;
          case 3:
            if (this.props.post.link) this.repostUrl();
            else return;
            break;
          default:
            return;
        }
      });
    }
  }

  toggleModal(bool) {
    if (!bool) bool = !this.state.modalVisible;
    this.setState({ modalVisible: bool });
  }

  onShare() {
    const self = this;
    Share.open({
      title: 'Relevant',
      url: self.props.post.link ? self.props.post.link : 'http://relevant-community.herokuapp.com/',
      subject: 'Share Link',
      message: self.props.post.title ? 'Relevant post: ' + self.props.post.title : 'Relevant post:'
    }, (e) => {
      console.log(e);
    });
  }

  toggleEditing() {
    this.props.actions.setCreaPostState({
      postBody: this.props.post.body,
      nativeImage: true,
      postUrl: this.props.post.link,
      postImage: this.props.post.image,
      urlPreview: {
        image: this.props.post.image,
        title: this.props.post.title ? this.props.post.title : 'Untitled',
        description: this.props.post.description,
      },
      edit: true,
      editPost: this.props.post,
    });
    this.props.navigator.push({
      key: 'createPost',
      back: true,
      title: 'Edit Post',
      next: 'Update'
    }, 'home');
  }

  repostCommentary() {
    this.props.actions.setCreaPostState({
      postBody: '',
      repost: this.props.post._id,
      repostBody: this.props.post.body,
      urlPreview: {
        image: this.props.post.image,
        title: this.props.post.title ? this.props.post.title : 'Untitled',
        description: this.props.post.description,
      }
    });
    this.props.actions.push({
      key: 'createPost',
      back: true,
      title: 'Create Post',
      next: 'Post'
    }, 'home');
  }

  repostUrl() {
    this.props.actions.setCreaPostState({
      postBody: '',
      nativeImage: true,
      postUrl: this.props.post.link,
      postImage: this.props.post.image,
      urlPreview: {
        image: this.props.post.image,
        title: this.props.post.title ? this.props.post.title : 'Untitled',
        description: this.props.post.description,
      }
    });
    this.props.actions.push({
      key: 'createPost',
      back: true,
      title: 'Create Post',
      next: 'Next'
    }, 'home');
  }

  openComments() {
    // this.props.actions.setSelectedPost(this.props.post._id);
    this.props.navigator.goToComments(this.props.post);
  }

  deletePost() {
    this.props.actions.deletePost(this.props.auth.token, this.props.post);
  }

  irrelevant() {
    // self.props.actions.irrelevant(self.props.auth.token, self.props.post._id);
    this.props.actions.invest(this.props.auth.token, -50, this.props.post, this.props.auth.user)
    .then((results) => {
      if (results) {
        console.log('irrelevant!');
        // this.props.actions.triggerAnimation('invest');
      } else {
        console.log('irrelevant failed');
      }
    });
  }

  toggleExpanded() {
    const self = this;
    self.setState({ expanded: !self.state.expanded });
  }

  render() {
    const self = this;
    let commentString = 'Add comment';
    let investButtonEl = null;
    const expanded = this.props.expanded;
    let post = this.props.post;
    let investable = false;
    let comments = null;
    if (post) {
      if (post.comments) comments = post.comments;
    }

    if (post && post.user && this.props.auth.user) {
      if (post.user !== this.props.auth.user._id) {
        investable = true;
      }
    }

    if (post && post.commentCount) {
      if (post.commentCount === 1) commentString = '1 Comment';
      else commentString = post.commentCount + ' Comments';
    }

    if (investable) {
        investButtonEl = (<TouchableWithoutFeedback
          onPress={() => self.toggleModal()}
          style={[styles.postButton, { marginRight: 5, backgroundColor: '#F0F0F0' }]}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          >
            <Text style={[styles.font10, styles.postButtonText]}>
              Invest
            </Text>
            <Text style={styles.font10}>💰</Text></View>
        </TouchableWithoutFeedback>);
    }

    return (<View style={styles.postButtons}>
      {investButtonEl}

      <TouchableHighlight underlayColor={'transparent'} style={[styles.postButton, { marginRight: 5 }]} onPress={this.goToPost}>
        <Text style={[styles.font10, styles.postButtonText]}>
         Read more
        </Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'transparent'} style={[styles.postButton, { marginRight: 5 }]} onPress={() => self.openComments()}>
        <Text style={[{ marginRight: 5 }, styles.font10, styles.postButtonText]}>
          {commentString}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor={'transparent'} style={styles.postButton} onPress={() => self.showActionSheet()}>
        <Text style={[styles.font10, styles.postButtonText]}>
          ...
        </Text>
      </TouchableHighlight>

      <InvestModal toggleFunction={this.toggleModal} post={this.props.post} visible={this.state.modalVisible} />
    </View>);
  }
}

export default PostButtons;

const localStyles = StyleSheet.create({
  postButtons: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  postButton: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  postButtonText: {
    color: '#808080'
  },
});

styles = { ...globalStyles, ...localStyles };

