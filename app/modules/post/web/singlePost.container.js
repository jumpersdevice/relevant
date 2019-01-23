import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as postActions from 'modules/post/post.actions';
import * as investActions from 'modules/post/invest.actions';
import Comments from 'modules/comment/web/comment.container';
import styled from 'styled-components/primitives';
import { sizing } from 'app/styles/globalStyles';
import PostComponent from './post.component';

const Wrapper = styled.View`
  flex: 1;
`;

const PostContainer = styled.View`
  padding: ${sizing.byUnit(4)};
  padding-bottom: 0;
`;


class SinglePostContainer extends Component {
  static propTypes = {
    actions: PropTypes.object,
    posts: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
  };

  static fetchData(dispatch, params) {
    if (!params.id || params.id === undefined) return null;
    return dispatch(postActions.getSelectedPost(params.id));
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.post = this.props.posts.posts[params.id];
    if (!this.post) {
      this.props.actions.getSelectedPost(params.id);
    }
  }

  render() {
    const { params } = this.props.match;
    this.post = this.props.posts.posts[params.id];
    if (!this.post) return null;
    const hasPost = this.post && this.post !== 'notFound';

    return (
      <Wrapper>
        {hasPost && (
          <div>
            <PostContainer>
              <PostComponent detailView post={this.post} {...this.props} />
            </PostContainer>
            <Comments post={this.post} {...this.props} />
          </div>
        )}
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
    posts: state.posts,
    user: state.user,
    investments: state.investments,
    myPostInv: state.investments.myPostInv,
    isAuthenticated: state.auth.isAuthenticated,
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        ...postActions,
        ...investActions
      },
      dispatch
    )
  })
)(SinglePostContainer);
