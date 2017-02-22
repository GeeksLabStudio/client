import React from 'react';
import SignUp from '../../components/SignUp';
import AuthStore from '../../stores/auth.store';
import AuthService from '../../services/auth.service';

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
    return <div className="page register">
      <h1>{config.pages.register.title}</h1>
      
      <SignUp/>
    </div>
  }
}