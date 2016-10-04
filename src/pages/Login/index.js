import React from 'react';
import SignIn from '../../components/SignIn';
import AuthStore from '../../stores/auth.store';
import AuthService from '../../services/auth.service';
require('./style.less');

export default class LoginPage extends React.Component {
  profileUpdateHandler(){
    AuthService.goto('/profile')
  }

  componentDidMount(){
    this.__profileUpdateHandler = ::this.profileUpdateHandler;
    AuthStore.on('profile:update', this.__profileUpdateHandler)
  }

  componentWillUnmount(){
    AuthStore.removeListener('profile:update', this.__profileUpdateHandler)
  }

  render() {
    return <div className="login-page">
      <h1>{config.pages.login.title}</h1>
      
      <SignIn/>
    </div>
  }
}