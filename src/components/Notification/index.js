import React from 'react';
// store
import {AppStore, AuthStore} from '../../stores';
// material-ui
import {Snackbar} from 'material-ui';

export default class Notification extends React.Component {
  state = {
    message: false,
    open: false
  }

  componentDidMount(){
    AppStore.on('ui:notification', this.notificationHandler);
    AuthStore.on('auth:error', this.notificationHandler);
  }

  componentWillUnmount(){
    AuthStore.removeListener('auth:error', this.notificationHandler);
    AppStore.removeListener('ui:notification', this.notificationHandler);
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextState.message && nextState.message != this.state.message
  }

  // method that controls new incomed notification messages
  notificationHandler = notification => {
    this.setState({
      message: notification.message,
      open: true
    })

    setTimeout(() => {
      this.setState({
        message: false,
        open: false
      })
    }, 3100)
  }

  render() {
    return <Snackbar message={this.state.message} open={this.state.open} autoHideDuration={3000}/>
  }
}