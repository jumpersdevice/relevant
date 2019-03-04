import React, { Component } from 'react';
import { InteractionManager } from 'react-native';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as createPostActions from 'modules/createPost/createPost.actions';
import * as tagActions from 'modules/tag/tag.actions';
import TagSelection from './tagSelection.component';

class Categories extends Component {
  static propTypes = {
    createPost: PropTypes.object,
    actions: PropTypes.object,
    tags: PropTypes.array,
    community: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.setTopic = this.setTopic.bind(this);
  }

  componentWillMount() {
    // TODO check this works
    InteractionManager.runAfterInteractions(() => {
      if (!this.props.tags.length) this.props.actions.getParentTags();
    });

    if (this.props.createPost.postCategory) {
      this.selectedTopic = this.props.createPost.postCategory;
    }
  }

  setTopic(topic) {
    if (this.props.createPost.postCategory === topic) {
      this.selectedTopic = null;
      this.props.actions.setPostCategory(null);
    } else {
      this.selectedTopic = topic;
      this.props.actions.setPostCategory(topic);
    }
    return null;
  }

  render() {
    const { createPost, actions, community } = this.props;
    let communityTags = [];
    if (community) {
      const activeCommunity = get(community.communities, community.active, {}) || {};
      communityTags = get(activeCommunity, 'topics', []);
      // || [].map(t => t._id);
    }
    // const { selectedTopic } = this;
    // let tagSelection;
    if (!this.props.tags) {
      return null;
    }
    return (
      <TagSelection
        topic={null}
        communityTags={communityTags}
        actions={actions}
        createPost={createPost}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    createPost: state.createPost,
    community: state.community,
    user: state.user,
    tags: state.tags.parentTags
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...createPostActions,
        ...tagActions
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
