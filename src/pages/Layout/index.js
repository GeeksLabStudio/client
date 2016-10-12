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
  Loader
} from '../../components/UI';

require('./style.less');

export default class ApplicationLayout extends React.Component {

  render() {
    let stickyFooter = config.components.footer.sticky;

    return (
      <div className={stickyFooter ? 'app-body sticky-footer': 'app-body'}>
        <div className="page-content">
          <NavBar/>

          <Loader/>

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
    )
  }
}