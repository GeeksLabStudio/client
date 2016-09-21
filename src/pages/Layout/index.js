import React from 'react';
import {
  NavBar,
  SideBar
} from '../../components';

import {
  Popup,
  Notification,
  Breadcrumb
} from '../../components/UI';

require('./style.less');

export default class ApplicationLayout extends React.Component {
 render() {
    return (
      <div className="app-body">
        <NavBar/>

        <SideBar/>

        <div className="page-content">
          <Breadcrumb
            routes={this.props.routes}
          />

          {this.props.children}
        </div>

        <Popup/>

        <Notification/>
      </div>
    )
  }
}