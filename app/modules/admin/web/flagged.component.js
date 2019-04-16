import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from 'modules/post/post.actions';
import PostComponent from 'modules/post/web/post.component';

class Flagged extends Component {
  static propTypes = {
    actions: PropTypes.object,
    auth: PropTypes.object,
    flagged: PropTypes.object,
    metaPosts: PropTypes.object,
    posts: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.props.actions.getFlaggedPosts();
  }

  deletePost(post) {
    this.props.actions.deletePost(post);
  }

  render() {
    const { flagged, metaPosts, posts } = this.props;
    let flaggedPosts = [];
    flagged.forEach(m => {
      const meta = metaPosts[m];
      if (!meta) return;
      meta.commentary.forEach(p => flaggedPosts.push(p));
    });
    flaggedPosts = flaggedPosts.map(p => posts[p]);
    flaggedPosts = flaggedPosts.filter(p => p);

    const deleteEl = post => {
      if (
        post.user._id === this.props.auth.user._id ||
        this.props.auth.user.role === 'admin'
      ) {
        return (
          <button style={{ margin: 'auto' }} onClick={() => this.deletePost(post)}>
            Delete
          </button>
        );
      }
      return null;
    };

    const postsEl = flaggedPosts.map(p => (
      <div>
        <PostComponent key={p._id} {...this.props} flagged={p.flagged} post={p} />
        {deleteEl(p)}
      </div>
    ));

    return (
      <div className={'postContainer'}>
        <h2>Flagged Posts</h2>
        {postsEl}
      </div>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
    flagged: state.posts.flagged,
    posts: state.posts.posts,
    all: state.posts
  }),
  dispatch => ({
    actions: bindActionCreators(postActions, dispatch)
  })
)(Flagged);