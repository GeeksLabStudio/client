import React from 'react';
import {
  NavBar,
  SideBar,
  Footer,
  MegaMenu
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

          <MegaMenu/>

          <SideBar/>

          <main>
            <Breadcrumb routes={this.props.routes} />
            {this.props.children}
          </main>
        </div>

        <Footer/>

        <Popup/>

        <Notification/>
      </div>
    )
  }
}