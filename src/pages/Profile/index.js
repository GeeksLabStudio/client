import React from 'react';
import AuthAction from '../../actions/auth.action';
import AuthService from '../../services/auth.service';
import AuthStore from '../../stores/auth.store';

require('./style.less');

export default class ProfilePage extends React.Component {
  static propTypes = {

  }

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

  profileUpdateHandler(){
    if (AuthStore.isAuthenticated){
      // if profile updated and you on ProfilePage
      // here we must fetch new profile data
      let profile = AuthStore.getProfile();

      this.setState({
        profile
      })
    }
    else
      AuthService.goto('/') // go to homepage
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
    return <div className={config.pages.profile.class}>
        <h2> Profile </h2>

        <p>
          username: <span style={{color: '#65a992'}}>{this.state.profile.username}</span>
        </p>

        <h3>Profile object:</h3>
        <pre style={{padding:10, backgroundColor: '#eee'}}>{JSON.stringify(this.state.profile, false, 2)}</pre>


        <button onClick={AuthAction.logout}>
          LOGOUT
        </button>

      </div>
  }
}