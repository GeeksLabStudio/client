import React from 'react';
import AppStore from '../../../stores/app.store';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./style.less');

export default class Notification extends React.Component {
  static propTypes = {
    message: React.PropTypes.string
  }

  state = {
    messages: []
  }

  componentDidMount(){
    this.__notificationHandler = ::this.notificationHandler;

    AppStore.on('ui:notification', this.__notificationHandler);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:notification', this.__notificationHandler);
  }


  // method that controls new incomed notification messages
  notificationHandler(notification){
    let {
      type,
      message
    } = notification;

    this._push(message)
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
        <ReactCSSTransitionGroup
          transitionName="notification"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

          {this._messages}

        </ReactCSSTransitionGroup>
      </div>
    )
  }
}