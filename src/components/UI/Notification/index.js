import React from 'react';
require('./style.less');

export default class Notification extends React.Component {
  static propTypes = {
    message: React.PropTypes.string
  }

  state = {
    messages: []
  }

  componentWillReceiveProps(newProps) {
    this._push(newProps.message);
  }

  _remove() {
    setTimeout(() => {
      let messages = this.state.messages;
      messages.splice(0, 1);

      this.setState({
        messages
      })
    }, 2500);
  }

  _push(message) {
    let messages = this.state.messages;

    messages.push(message);

    this.setState({
      messages
    })

    this._remove();
  }

  get _messages() {
    let messages = this.state.messages;

    return messages.map(function(el, i) {
      return (
        <div key={i} className="message">
          {el}
        </div>
      );
    })
  }

  render() {
    return (
      <div className="notifications">
        {this._messages}
      </div>
    )
  }
}