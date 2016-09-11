import React from 'react';
require('./style.less');

import SignIn from '../../components/SignIn';

export default class LoginPage extends React.Component {
  static propTypes = {

  }

  render() {
    return <div className={config.pages.login.class}>
      {this.messages}

      <h2>Sign In</h2>
      <SignIn />
    </div>
  }

}