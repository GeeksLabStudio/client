import React from 'react';
import _ from 'lodash';

import AuthStore from '../../stores/auth.store';

export default class ProfileProvider extends React.Component {
  static propTypes = {
  };

  constructor(props){
    super(props);

    let isResolved = this.isResolved;

    this.state = {
      isResolved
    };
  }

  get isResolved(){
    let profile = AuthStore.profile;
    let resolved = !_.isEmpty(profile);

    app.utils.log.debug('ProfileProvider:isResolved', resolved)

    return resolved
  }

  componentDidMount(props){
    AuthStore.on('profile:update', this.handleProfileUpdate)
  }


  handleProfileUpdate = () => {
    let isResolved = this.isResolved;

    this.setState({
      isResolved
    });
  }

  render = () => (
    this.state.isResolved ? this.props.children : null
  )
}