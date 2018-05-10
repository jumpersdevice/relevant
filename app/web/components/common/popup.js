import React, { Component } from 'react';

if (process.env.BROWSER === true) {
  require('./popup.css');
}

export default class Popup extends Component {
  state = {
    visible: false
  }

  hidePopup(e) {
    if (this.el === e.target) return;
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.hidePopup.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hidePopup.bind(this));
  }

  render() {
    let visible = this.state.visible;
    let popupOptions = (<div className={'popupOptions'}>
      {this.props.options.map(option => (
        <div key={option.text} onClick={option.action}>{option.text}</div>
      ))}
    </div>);
    if (!visible) popupOptions = null;

    return (
      <a
        ref={c => this.el = c}
        onClick={() => this.setState({ visible: !visible })}
        className={'popup'}
      >
        {this.props.children}
        {popupOptions}
      </a>
    );
  }
}
