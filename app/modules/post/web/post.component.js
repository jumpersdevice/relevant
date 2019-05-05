import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as postActions from 'modules/post/post.actions';
import * as investActions from 'modules/post/invest.actions';
import * as createPostActions from 'modules/createPost/createPost.actions';
import * as animationActions from 'modules/animation/animation.actions';
import { layout } from 'app/styles';
import SingleComment from 'modules/comment/web/singleComment.container';
import PostButtons from 'modules/post/postbuttons.component';
import PostInfo from 'modules/post/postinfo.component';
import { routing } from 'app/utils';
import { View, Text, Divider } from 'modules/styled/uni';
import get from 'lodash/get';

export class Post extends Component {
  static propTypes = {
    post: PropTypes.shape({
      data: PropTypes.object
    }),
    postState: PropTypes.object,
    repost: PropTypes.object,
    link: PropTypes.object,
    actions: PropTypes.object,
    auth: PropTypes.object,
    location: PropTypes.object,
    user: PropTypes.object,
    showDescription: PropTypes.bool,
    history: PropTypes.object,
    usersState: PropTypes.object,
    sort: PropTypes.string,
    noComments: PropTypes.bool,
    firstPost: PropTypes.object,
    comment: PropTypes.object,
    children: PropTypes.object,
    hideDivider: PropTypes.bool,
    hidePostButtons: PropTypes.bool,
    hideAvatar: PropTypes.bool,
    noLink: PropTypes.bool,
    preview: PropTypes.bool,
    avatarText: PropTypes.func,
    singlePost: PropTypes.bool,
    screenSize: PropTypes.number
  };

  deletePost() {
    // TODO: custom confirm
    // eslint-disable-next-line
    const okToDelete = confirm('Are you sure you want to delete this post?');
    if (!okToDelete) return;
    this.props.actions.deletePost(this.props.post);
  }

  editPost() {
    const { post, link = {} } = this.props;
    this.props.actions.clearCreatePost();
    const editPost = {
      edit: true,
      editPost: post,
      postBody: post.body,
      postCategory: post.category,
      allTags: post.tags,
      selectedTags: post.tags,
      // do we need these here?
      postImage: link.image,
      postUrl: link.url,
      urlPreview: {
        title: link.title,
        url: link.url,
        image: link.image,
        domain: link.domain
      }
    };
    this.props.actions.setCreatePostState(editPost);
    this.props.history.push(this.props.location.pathname + '#newpost');
  }

  render() {
    const {
      post,
      auth,
      sort,
      noComments,
      link,
      firstPost,
      hideDivider,
      hidePostButtons,
      comment,
      hideAvatar,
      noLink,
      preview,
      avatarText,
      singlePost,
      screenSize,
      actions = { actions }
    } = this.props;
    const { community: currentCommunity } = auth;
    if (!post) {
      return null;
    }
    const { community: postCommunity } = post;
    const community = postCommunity || currentCommunity;

    const isLink = post.type === 'link';

    if (post === 'notFound') {
      return (
        <View>
          <Text>Post not found</Text>
        </View>
      );
    }
    if (!post) return null;

    const parentPost = post.parentPost || post;
    const postUrl = routing.getPostUrl(community, parentPost);
    const renderComment = !noComments && comment;

    // TODO pass post buttons as prop to Post?
    const postEl = isLink ? (
      <View fdirection={'row'} m={[`4 4 ${renderComment ? 0 : 4} 0`, 0]}>
        {!hidePostButtons && !screenSize && (
          <View w={layout.POST_BUTTONS_WIDTH}>
            <PostButtons post={post} {...this.props} />
          </View>
        )}
        <View flex={1}>
          <PostInfo
            auth={auth}
            screenSize={screenSize}
            post={post}
            link={link}
            postUrl={postUrl}
            sort={sort}
            firstPost={firstPost}
            noLink={noLink}
            actions={actions}
            singlePost={singlePost}
            community={community}
          />
        </View>
      </View>
    ) : (
      <SingleComment
        hideAvatar={hideAvatar}
        comment={post}
        postUrl={postUrl}
        parentPost={post}
        hidePostButtons={hidePostButtons}
        additionalNesting={0}
        nestingLevel={0}
        hideBorder
        noLink={noLink}
        avatarText={avatarText}
        actions={actions}
        preview={preview}
        inMainFeed={!singlePost}
      />
    );

    const commentCommunity = get(comment, 'community') || community;
    const commentUrl = routing.getPostUrl(commentCommunity, parentPost);
    const additionalNesting =
      hidePostButtons || screenSize ? 0 : layout.POST_BUTTONS_NESTING_UNITS;
    const commentEl = renderComment ? (
      <SingleComment
        comment={comment}
        postUrl={commentUrl}
        parentPost={post}
        hidePostButtons={screenSize === 0}
        hideBorder
        additionalNesting={additionalNesting}
        nestingLevel={0}
        actions={actions}
        preview={preview}
        inMainFeed
      />
    ) : null;

    const previewEl = preview && link && (link.url || link.image) && (
      <View m={['4 0 0 0']}>
        <PostInfo
          auth={auth}
          screenSize={screenSize}
          post={post}
          link={link}
          community={community}
          postUrl={postUrl}
          sort={sort}
          firstPost={firstPost}
          noLink={noLink}
          actions={actions}
          preview={preview}
        />
      </View>
    );

    return (
      <View fdirection={'column'}>
        {previewEl}
        {isLink && previewEl ? <View mt={2} /> : postEl}
        {commentEl}
        {this.props.children}
        {hideDivider ? null : <Divider m={['0 4', 0]} screenSize={screenSize} />}
      </View>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      community: state.community.communities[state.community.active],
      usersState: state.user,
      auth: state.auth,
      earnings: state.earnings,
      myPostInv: state.investments.myPostInv,
      screenSize: state.navigation.screenSize
    }),
    dispatch => ({
      actions: bindActionCreators(
        {
          ...createPostActions,
          ...postActions,
          ...investActions,
          ...animationActions
        },
        dispatch
      )
    })
  )(Post)
);
