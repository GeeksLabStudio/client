import React from 'react';
// components
import SignUp from '../../components/SignUp';
// stores
import AuthStore from '../../stores/auth.store';
// services
import AuthService from '../../services/auth.service';
// css
require('./style.less');

export default class LoginPage extends React.Component {
  profileUpdateHandler(){
    AuthService.goto('/')
  }

  componentDidMount(){
    this.__profileUpdateHandler = ::this.profileUpdateHandler;
    AuthStore.on('profile:update', this.__profileUpdateHandler)
  }

  componentWillUnmount(){
    AuthStore.removeListener('profile:update', this.__profileUpdateHandler)
  }

  render() {
    return (
      <div className="page register">
        <div className="container">
          <SignUp/>
        </div>    
      </div>
    )
  }
}