import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHighlight,
  InteractionManager,
  RefreshControl
} from 'react-native';
import { bindActionCreators } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { globalStyles } from '../styles/global';
import Post from '../components/post.component';
import * as postActions from '../actions/post.actions';

const localStyles = StyleSheet.create({
  thirstyHeader: {
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0',
    padding: 10,
    flexDirection: 'row'
  },
  messagesCount: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  recentNames: {
    flexDirection: 'row',
  },
  recentName: {
    color: 'gray'
  },
  readHeader: {
    marginBottom: 10
  },
});

let styles = { ...localStyles, ...globalStyles };

class Read extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderFeedRow = this.renderFeedRow.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.reload = this.reload.bind(this);
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.reload();
    });
  }

  componentWillReceiveProps(next) {
    if (next.posts.feed !== this.props.posts.feed) {
      let fd = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.feedData = fd.cloneWithRows(next.posts.feed);
    }
    if (this.props.posts.newFeedAvailable !== next.posts.newFeedAvailable) {
      if (next.posts.newFeedAvailable) console.log('newFeedAvailable');
    }
  }

  reload() {
    this.loadPosts(0);
  }

  loadMore() {
    const length = this.props.posts.feed.length;
    this.loadPosts(length);
  }

  loadPosts(length, _tag) {
    if (this.props.posts.loading) return;
    console.log('load more, skip: ', length);
    const tag = typeof _tag !== 'undefined' ? _tag : this.props.posts.tag;
    this.props.actions.getFeed(this.props.auth.token, length, tag);
  }

  goTo(view) {
    this.props.navigator.push({
      key: view.name,
      title: view.name,
      back: true
    });
  }

  renderFeedRow(rowData) {
    return (
      <Post post={rowData} {...this.props} styles={styles} />
    );
  }

  render() {
    let postsEl = null;
    let messagesCount = null;
    let recentMessages = [];
    let thirstyHeader = null;
    let messages = null;

    if (this.props.messages.index.length > 0) {
      messages = this.props.messages.index;
      for (let x = 0; x < 4; x++) {
        recentMessages.push(
          <Text
            key={x}
            style={styles.recentName}
          >
            {x < 3 ? `${this.props.messages.index[x].from.name} ` : `${this.props.messages.index[x].from.name}`}
          </Text>
        );
      }
    }

    if (this.feedData && this.props.posts.feed.length) {
      postsEl = (
        <ListView
          ref={(c) => { this.listview = c; }}
          enableEmptySections
          dataSource={this.feedData}
          renderRow={this.renderFeedRow}
          onEndReached={this.loadMore}
          onEndReachedThreshold={100}
          refreshControl={
            <RefreshControl
              refreshing={this.props.posts.loading}
              onRefresh={this.reload}
              tintColor="#000000"
              colors={['#000000', '#000000', '#000000']}
              progressBackgroundColor="#ffffff"
            />
          }
        />
      );
    }

    if (this.feedData && this.props.posts.feed.length === 0) {
      postsEl = (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={[{ fontWeight: '500' }, styles.darkGray]}>Nothing in yr feed bruh</Text></View>);
    }

    if (this.props.messages.count > 0) {
      messagesCount = (
        <Text style={[styles.white, styles.messagesCount]}>
          {this.props.messages.count + ' New'}
        </Text>
      );
    }

    if (this.props.messages.index && this.feedData) {
      thirstyHeader = (<TouchableHighlight underlayColor={'transparent'} onPress={messages ? () => this.goTo({ name: 'messages' }) : null}>
        <View style={[styles.thirstyHeader]}>
          <View style={{ paddingRight: 5 }}>
            <Text>👅💦</Text>
          </View>
          <View>
            <Text style={[{ fontWeight: '500' }, styles.darkGray]}>{messages ? 'Thirsty messages' : 'No messages'}</Text>
            <View style={styles.recentNames}>
              {recentMessages}
            </View>
          </View>
          <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row' }}>
            {messagesCount}
          </View>
        </View>
      </TouchableHighlight>);
    }

    return (
      <View style={[styles.fullContainer, { backgroundColor: 'white' }]}>
        {thirstyHeader}
        <Spinner color={'rgba(0,0,0,1)'} overlayColor={'rgba(0,0,0,0)'} visible={!this.feedData} />
        {postsEl}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts,
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...postActions,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Read);

