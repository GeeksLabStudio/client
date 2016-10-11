import React from 'react';
import _ from 'lodash';

import AuthStore from '../../stores/auth.store';

export default class ProfileProvider extends React.Component {
  static propTypes = {
  };

  state = {
    profile: AuthStore.profile
  }

  componentDidMount(props){
    AuthStore.on('profile:update', this.handleProfileUpdate)
  }

  handleProfileUpdate = () => {
    let profile = AuthStore.profile

    this.setState({
      profile
    })
  }

  render() {
    let profile = this.state.profile;

    return _.isEmpty(profile) ? null : this.props.children
  }
}
