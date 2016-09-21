import React from 'react';
import {Link} from 'react-router';

require('./style.less');

import AppAction from '../../actions/app.action';

import AuthStore from '../../stores/auth.store';

export default class HomePage extends React.Component {

  state = {
    error: null,
    profile: AuthStore.getProfile()
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
    this.__profileUpdateHandler = ::this.profileUpdateHandler;

    AuthStore.on('auth:error', this.__errorHandler)
    AuthStore.on('profile:update', this.__profileUpdateHandler)
  }

  componentWillUnmount(){
    AuthStore.removeListener('auth:error', this.__errorHandler)
    AuthStore.removeListener('profile:update', this.__profileUpdateHandler)
  }

  profileUpdateHandler(){
    let profile = AuthStore.getProfile();

    this.setState({
      profile
    })
  }

  render() {
    return (
    	<div className={config.pages.home.class}>
        <h1> Welcome back </h1>

        <h3>Profile object:</h3>
        <pre style={{padding:10, backgroundColor: '#eee'}}>{JSON.stringify(this.state.profile, false, 2)}</pre>

	      <button onClick={AppAction.togglePopup}>popup</button>

        <button onClick={()=>{AppAction.notify('This is a test notification')}}>notify</button>
	    </div>
    )
  }
}