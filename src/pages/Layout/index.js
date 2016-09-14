import React from 'react';
import {
  NavBar,
  SideBar
} from '../../components';

import {
  Popup,
  Notification
} from '../../components/UI';

require('./style.less');

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div className="app-body">
        <NavBar/>

        <SideBar/>

        <div className="page-content">
          {this.props.children}
        </div>

        <Popup />
      </div>
    )
  }
}