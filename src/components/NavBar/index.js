import React from 'react';
import {Link} from 'react-router';
let _logoPath = require('../../assets/images/logo.png');

import AppStore from '../../stores/app.store';
import AppAction from '../../actions/app.action';

require('./style.less');

export default class NavBar extends React.Component {
  static propTypes = {}

  position = app.ui.ControlPosition.NAVBAR

  state = {
    links: AppStore.getAvailablePages(this.position)
  }

  componentDidMount(){
    this.__onUiUpdate = ::this.UIupdate
    AppStore.on('ui:update', this.__onUiUpdate);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.__onUiUpdate)
  }

  UIupdate(){
    let links = AppStore.getAvailablePages(this.position);

    this.setState({
      links
    })
  }

  get _headerLinks() {
    if (config.components.navbar.links) {
      return (
        <div className="navbar-links">
          {this._links}
        </div>
      )
    }
  }

  get _links() {
    return this.state.links.map(_link => {
      return <Link
          to={_link.path}
          key={_link.name}
          activeClassName='active'
          onlyActiveOnIndex={_link.path == '/'}
        >
        <i className={_link.icon}/>
        {_link.name}
      </Link>
    })
  }

  get _sidebarIcon() {
    let sideBar = app.config.components.sidebar.enable;
    return sideBar ? <span onClick={AppAction.toggleSidebar} className="menu fa fa-bars"></span> : null;
  }

  render() {
    return (
      <div className='navbar clear'>
        {this._sidebarIcon}



        {this._headerLinks}
      </div>
    )
  }
}
        // <Link to="/" className="logo">
        // <img src={_logoPath} />
        // </Link>