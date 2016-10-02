import React from 'react';
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
      let profile = AuthStore.getProfile();

      this.setState({
        profile
      })
    }
    else
      AuthService.goto('/')
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
    return (
      <div className="profile-page">
        <h1>Profile</h1>

        <div className="photo">
          <img src={this.state.profile.image} />
        </div>

        <div className="info">
          <div className="row name">
            {this.state.profile.name} {this.state.profile.lastName}
          </div>
          <div className="row user-name">
            {this.state.profile.username}
          </div>
          <div className="row role">
            {this.state.profile.role}
          </div>
        </div>
      </div>
    )
  }
}