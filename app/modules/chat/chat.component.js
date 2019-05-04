import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as postActions from 'modules/post/post.actions';
import * as chatActions from 'modules/chat/chat.actions';
import * as investActions from 'modules/post/invest.actions';
// import Comments from 'modules/comment/web/comment.container';
// import get from 'lodash.get';
import { View } from 'modules/styled/uni';
// import PostComponent from './post.component';

class ChatContainer extends Component {
  static propTypes = {
    actions: PropTypes.object,
    posts: PropTypes.object,
    match: PropTypes.object,
    // location: PropTypes.object,
    // comments: PropTypes.object,
    auth: PropTypes.object
  };

  static fetchData(dispatch, params) {
    if (!params.id || params.id === undefined) return null;
    return dispatch(postActions.getSelectedPost(params.id));
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    const { params } = this.props.match;
    const post = this.props.posts.posts[params.id];
    if (!post) {
      this.props.actions.getSelectedPost(params.id);
    }
  };

  componentDidUpdate(prevProps) {
    // TODO this is not needed if we don't wipe post reducer
    // when switching communities
    if (prevProps.auth.community !== this.props.auth.community) this.getPost();
  }

  render() {
    const { params } = this.props.match;
    const { posts } = this.props;
    const post = posts.posts[params.id];
    if (!post) return null;
    const hasPost = post && post !== 'notFound';

    // console.log(comments);

    // const firstPostId = get(comments.childComments, `${post._id}.0`);
    // const firstPost = posts.posts[firstPostId];
    // const link = posts.links[post.metaPost];

    return (
      <View mb={20}>
        {hasPost && (
          <div>
            {/*
            <View>
              <PostComponent
                noComments
                link={link}
                post={post}
                firstPost={firstPost}
                {...this.props}
                hideDivider
                singlePost
              />
            </View>
            <Comments post={post} {...this.props} />
            */}
          </div>
        )}
      </View>
    );
  }
}

export default connect(
  state => ({
    comments: state.comments,
    auth: state.auth,
    posts: state.posts,
    user: state.user,
    investments: state.investments,
    myPostInv: state.investments.myPostInv,
    isAuthenticated: state.auth.isAuthenticated
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        ...chatActions,
        ...postActions,
        ...investActions
      },
      dispatch
    )
  })
)(ChatContainer);
