import React from 'react';

import {
  NavBar,
  SideBar
} from '../../components';


export default class ApplicationLayout extends React.Component {

  get _sideBar() {
    if (config.sideBar.isActive) {
      let _links = config.sideBar.links;
      return <SideBar links={_links} />
    }
  }

  render() {
    let _sideBar = config.sideBar.isActive;
    let _pages = config.pages;

    return <div className="app-body">
      <NavBar links={_pages} sideBar={_sideBar} />

      {this._sideBar}

      <div className="page-content">
        {this.props.children}
      </div>
    </div>
  }
}