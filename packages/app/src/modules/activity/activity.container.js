import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfScroll from 'modules/listview/web/infScroll.component';
import * as postActions from 'modules/post/post.actions';
import * as userActions from 'modules/user/user.actions';
import * as notifActions from 'modules/activity/activity.actions';
import * as navigationActions from 'modules/navigation/navigation.actions';
import SingleActivity from 'modules/activity/activity.component';
import PostComponent from 'modules/post/web/post.component';

class Activity extends Component {
  static propTypes = {
    auth: PropTypes.object,
    notif: PropTypes.object,
    actions: PropTypes.object,
    reload: PropTypes.number,
    screenSize: PropTypes.number
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      view: 0
    };
    this.renderRow = this.renderRow.bind(this);
    this.getViewData = this.getViewData.bind(this);
    this.load = this.load.bind(this);
    this.needsReload = new Date().getTime();
    this.hasMore = true;

    // TODO should set it here and not on server
    this.pageSize = 20;
    this.ready = false;
  }

  componentDidMount() {
    if (this.props.auth.user && this.props.notif.count) {
      this.props.actions.markRead();
    }
    this.ready = true;
    this.load(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.reload !== prevProps.reload) {
      this.props.actions.markRead();
      this.load(0, 0);
    }
  }

  load(page, length) {
    if (!this.ready) return;
    this.hasMore = page * this.pageSize <= length;
    if (this.hasMore) {
      this.props.actions.getActivity(length, this.pageSize);
    }
  }

  renderRow(rowData) {
    const { screenSize, actions } = this.props;
    return (
      <SingleActivity
        PostComponent={PostComponent}
        key={rowData._id}
        singleActivity={rowData}
        screenSize={screenSize}
        actions={actions}
      />
    );
  }

  getViewData(props) {
    return { data: props.notif.personal, loaded: props.notif.loaded };
  }

  render() {
    const { data } = this.getViewData(this.props);
    const activity = data.map(a => this.renderRow(a));
    const { length } = activity;
    return (
      <div>
        <InfScroll
          className={'activityContainer'}
          data={data}
          loadMore={p => this.load(p, length)}
          hasMore={this.hasMore}
          useWindow
        >
          {activity}
        </InfScroll>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    notif: state.notif,
    loaded: state.user.loaded,
    online: state.user.online,
    stats: state.stats,
    error: state.error.activity,
    posts: state.posts,
    screenSize: state.navigation.screenSize,

    // TODO how do we deal with these?
    // refresh: state.navigation.activity.refresh,
    reload: state.navigation.reload
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...postActions,
        ...notifActions,
        ...userActions,
        ...navigationActions
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
