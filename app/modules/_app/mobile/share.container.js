import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, AppState, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modalbox';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShareExtension from 'react-native-share-extension';
import { StackViewStyleInterpolator } from 'react-navigation-stack';

import * as createPostActions from 'modules/createPost/createPost.actions';
import * as navigationActions from 'modules/navigation/navigation.actions';
import * as authActions from 'modules/auth/auth.actions';
import * as postActions from 'modules/post/post.actions';

import Auth from 'modules/auth/mobile/auth.component';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import UrlComponent from 'modules/createPost/mobile/url.component';
import Categories from 'modules/createPost/mobile/categories.component';

import HeaderLeft from 'modules/navigation/mobile/headerLeft.component';
import CreatePostHeaderRight from 'modules/createPost/mobile/createPostHeaderRight.component';
import HeaderTitle from 'modules/navigation/mobile/headerTitle.component';
import { transitionConfig, setTopLevelNavigator, withProps } from 'app/utils/nav';

import { text, token, post } from 'app/utils';
import { fullWidth, fullHeight, darkGrey, IphoneX } from 'app/styles/global';

const KBView = KeyboardAvoidingView;
let style;

export const ShareStack = createStackNavigator(
  {
    createPostUrl: {
      screen: withProps(UrlComponent),
      params: {
        title: 'Share On Relevant',
        left: 'Close',
        next: 'Next',
        share: true
      }
    },
    createPostTags: {
      screen: withProps(Categories),
      params: {
        title: 'Post Category',
        share: true
      }
    },
    shareAuth: {
      screen: withProps(Auth),
      params: {
        left: 'Close',
        share: true
      }
    }
  },
  {
    initialRouteName: 'createPostUrl',
    headerLayoutPreset: 'center',
    cardOverlayEnabled: true,
    cardShadowEnabled: true,

    transitionConfig: () => ({
      transitionSpec: transitionConfig,
      screenInterpolator: sceneProps =>
        StackViewStyleInterpolator.forHorizontal(sceneProps)
    }),

    defaultNavigationOptions: props => ({
      gesturesEnabled: true,
      gestureResponseDistance: {
        horizontal: fullWidth
      },
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: darkGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 45,
        marginTop: Platform.OS === 'ios' ? (IphoneX ? -40 : -20) : 0
      },
      headerTitle: <HeaderTitle {...props} />,
      headerRight: <CreatePostHeaderRight {...props} />,
      headerLeft: <HeaderLeft {...props} />
    })
  }
);

const ShareAppContainer = createAppContainer(ShareStack);

class ShareContainer extends Component {
  static propTypes = {
    actions: PropTypes.object
  };

  state = {
    token: null
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: true,
      type: '',
      value: '',
      data: {}
    };
    this.closeModal = this.closeModal.bind(this);
    AppState.addEventListener('change', this.handleAppStateChange.bind(this));
  }

  componentWillMount() {
    const community = 'relevant';
    this.props.actions.setCommunity(community);
    token
    .get()
    .then(tk => {
      this.setState({ token: tk });
      if (!tk) this.props.actions.replace('shareAuth');
    })
    .catch(() => {
      // console.warn(e);
    });
  }

  async componentDidMount() {
    try {
      this.props.actions.getUser();
      const data = await ShareExtension.data();
      this.data = data;
      this.setState({
        type: data.type,
        value: data.value,
        data
      });

      let url = data.url || data.value;
      if (url) {
        const words = text.getWords(url);
        url = words.find(word => post.URL_REGEX.test(word));
      }
      this.props.actions.setCreatePostState({
        postUrl: url || null,
        postBody: data.selection || !url ? data.value : '',
        createPreview: {}
      });
    } catch (e) {
      // console.log('share extension error', e);
    }
  }

  handleAppStateChange(currentAppState) {
    if (currentAppState === 'extension' && !this.state.token) {
      token.get().then(tk => {
        this.setState({ token: tk });
        if (tk) this.props.actions.replace('createPostUrl');
      });
    }
  }

  onClose() {
    ShareExtension.close();
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <Modal
        backdrop
        style={{
          backgroundColor: 'transparent',
          flex: 1
        }}
        swipeToClose={false}
        animationType={'fade'}
        position="top"
        transparent
        isOpen={this.state.isOpen}
        onClosed={this.onClose}
      >
        <KBView
          behavior={'padding'}
          style={{
            alignItems: 'center',
            flex: 1,
            maxHeight: fullHeight * 0.9
          }}
        >
          <View style={style.modalBody}>
            <ShareAppContainer
              ref={navigatorRef => {
                setTopLevelNavigator(navigatorRef);
              }}
              // navigation={this.props.navigation}
              screenProps={{ close: this.closeModal, share: true }}
            />
          </View>
        </KBView>
      </Modal>
    );
  }
}

style = StyleSheet.create({
  modalBody: {
    borderRadius: 10,
    backgroundColor: 'white',
    flexGrow: 1,
    flex: 1,
    width: fullWidth * 0.95,
    marginTop: fullHeight * 0.05,
    marginBottom: 30,
    padding: 0,
    overflow: 'hidden',
    paddingBottom: 0
  }
});

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...authActions,
        ...postActions,
        ...navigationActions,
        ...createPostActions
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareContainer);
