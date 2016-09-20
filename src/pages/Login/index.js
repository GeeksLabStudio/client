import React from 'react';
require('./style.less');

import SignIn from '../../components/SignIn';
import AuthStore from '../../stores/auth.store';
import AuthService from '../../services/auth.service';

export default class LoginPage extends React.Component {
  static propTypes = {

  }

  state = {
    error: null
  }

  handleError(error) {
    let {
      message
    } = error;

    this.setState({
      error: {
        message
      }
    });
  }

  profileUpdateHandler(){
    AuthService.goto('/profile')
  }

  componentDidMount(){
    this.__errorHandler = ::this.handleError;
    this.__profileUpdateHandler = ::this.profileUpdateHandler;

    AuthStore.on('auth:error', this.__errorHandler)
    AuthStore.on('profile:update', this.__profileUpdateHandler)
  }

  componentWillUnmount(){
    AuthStore.removeListener('auth:error', this.__errorHandler)
    AuthStore.removeListener('profile:update', this.__profileUpdateHandler)
  }

  render() {
    return <div className={config.pages.login.class}>
      {this.messages}

      <h2>Sign In</h2>
      <SignIn
        error={this.state.error}
      />
    </div>
  }

}