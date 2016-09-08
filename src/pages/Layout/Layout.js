import React from 'react';

import {
  NavBar,
  SideBar
} from '../../components';

export default class ApplicationLayout extends React.Component {

  render() {
    return (
      <div className="app-body">
        <NavBar/>

        {config.components.sidebar.enable ? <SideBar/> : null}

        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}