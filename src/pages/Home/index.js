import React from 'react';
// stores
import AuthStore from '../../stores/auth.store';
// components
import UserLanding from '../../components/UserLanding';

export default class HomePage extends React.Component {
	state = {
		authenticated: AuthStore.isAuthenticated
	}

	componentDidMount(){
    AuthStore.on('auth:update', this._userAuthUpdateHandler);
  }

  componentWillUnmount(){
    AuthStore.removeListener('auth:update', this._userAuthUpdateHandler);
  }

  _userAuthUpdateHandler = () => {
  	this.setState({
  		authenticated: AuthStore.isAuthenticated
  	})
  }

	get _landing(){
		return (
			<h1>{config.pages.home.title}</h1>
		)
	}

	get _userInfo(){
		return <UserLanding data={AuthStore.getProfile()}/>
	}

  render() {
  	let content = this.state.authenticated ? this._userInfo : this._landing;

    return (
    	<div className="page home">
    		{content}
	    </div>
    )
  }
}