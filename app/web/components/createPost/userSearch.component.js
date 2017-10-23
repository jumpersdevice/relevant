import React, { Component } from 'react';
import Avatar from '../common/avatar.component';

if (process.env.BROWSER === true) {
  // require('./divider.css');
}

const USER_ELEMENT_HEIGHT = 38;

export default class UserSuggestion extends Component {
  componentDidMount() {
    this.updateScrollPosition();
  }
  componentDidUpdate() {
    this.updateScrollPosition();
  }
  updateScrollPosition() {
    const offset = Math.max(this.props.userSearchIndex - 1, 0) * USER_ELEMENT_HEIGHT;
    if (this.el) this.el.scrollTop = offset;
  }
  render() {
    if (!this.props.users || !this.props.users.length) {
      return null;
    }
    const selected = this.props.userSearchIndex;
    let inner = this.props.users.map((user, i) => (
      <button
        key={i}
        className={selected === i ? 'selected' : ''}
        onClick={() => this.props.onChange(user)}
      >
        <Avatar user={user} nolink />
        <span className="username">{user._id}</span>
      </button>
    ));
    return (
      <div
        ref={(el) => { this.el = el; }}
        className="userSuggestion"
      >
        {inner}
      </div>
    );
  }
}
