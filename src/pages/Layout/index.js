import React from 'react';
import {
  NavBar,
  SideBar,
  Footer
} from '../../components';

import {
  Popup,
  Notification,
  Breadcrumb,
  Loading
} from '../../components/UI';

import _ from 'lodash';
import AuthStore from '../../stores/auth.store';

require('./style.less');

export default class ApplicationLayout extends React.Component {

  state = {
    profile : AuthStore.profile
  }

  componentWillMount(){
    AuthStore.on('profile:update', () => {
      let profile = AuthStore.profile;

      this.setState({
        profile
      });
    })
  }

  render() {
    return !_.isEmpty(this.state.profile) ? this.content : <Loading />
  }

  get content(){
    let stickyFooter = config.components.footer.sticky;

    return <div className={stickyFooter ? 'app-body sticky-footer': 'app-body'}>
      <div className="page-content">
        <NavBar/>

        <SideBar/>

        <Breadcrumb
          routes={this.props.routes}
        />

        {this.props.children}
      </div>

      <Footer/>

      <Popup/>

      <Notification/>
    </div>
  }
}