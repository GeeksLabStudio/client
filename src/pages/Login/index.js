import React from 'react';
require('./style.less');

import SignIn from '../../components/SignIn';
import AuthStore from '../../stores/auth.store';


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

  componentDidMount(){
    this.__errorHandler = ::this.handleError;
    AuthStore.on('auth:error', this.__errorHandler)
  }

  componentWillUnmount(){
    AuthStore.removeListener('auth:error', this.__errorHandler)
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