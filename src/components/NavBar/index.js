import React from 'react';
import {Link} from 'react-router';
import AppStore from '../../stores/app.store';
import AppAction from '../../actions/app.action';
import AuthStore from '../../stores/auth.store';
import AuthAction from '../../actions/auth.action';

require('./style.less');

export default class NavBar extends React.Component {
  static propTypes = {}

  position = {
    navbar: app.ui.ControlPosition.NAVBAR,
    dropdown: app.ui.ControlPosition.DROPDOWN
  }

  componentDidMount(){
    this.__onUiUpdate = ::this.UIupdate
    AppStore.on('ui:update', this.__onUiUpdate);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.__onUiUpdate)
  }

  state = {
    links: AppStore.getAvailablePages(this.position.navbar),
    dropdown: AppStore.getAvailablePages(this.position.dropdown)
  }

  actions = {
    logout: AuthAction.logout
  }

  UIupdate(){
    let links = AppStore.getAvailablePages(this.position.navbar);
    let dropdown = AppStore.getAvailablePages(this.position.dropdown);

    this.setState({
      links,
      dropdown
    })
  }

  get _headerLinks() {
    let _html = [];
    let _links = this.state.links;
    let _dropdownLinks = this.state.dropdown;
    let _profile = AuthStore.profile;

    if (config.components.navbar.dropdown && _dropdownLinks.length > 0) {
      let _userImage = _profile.image ? <img className="image" src={_profile.image} /> : <i className="placeholder fa fa-user"/>;

      _html.push(
        <div className="dropdown" key="dropdown">
          {_userImage}

          <i className="arrow fa fa-angle-down"/>

          <div className="links">
            {this._links(_dropdownLinks)}
          </div>
        </div>
      )
    }

    if (config.components.navbar.links && _links.length > 0) {
       _html.push(
        <div className="navbar-links" key="links">
          {this._links(_links)}
        </div>
      )
    } 

    if (_profile.role != 'GUEST') {
      _html.push(
        <div className="welcome" key="welcome">
          {`welcome , ${_profile.username}!`}
        </div>
      )
    }

    return _html;
  }

  _links(links) {
    return links.map((_link, i) => {
      if (_link.path) {
        return (
          <Link
            to={_link.path}
            key={i}
            activeClassName='active'
            onlyActiveOnIndex={_link.path == '/'}
          >
            <i className={_link.icon}/>
            {_link.label}
          </Link>
        )
      } else if (_link.action) {
        return (
          <span
            key={i}
            onClick={this.actions[_link.action]}
          >
            <i className={_link.icon}/>
            {_link.label}
          </span>
        )
      }
    })
  }

  get _sidebarIcon() {
    let sideBar = app.config.components.sidebar.enable;
    return sideBar ? <span onClick={AppAction.toggleSidebar} className="menu fa fa-bars"></span> : null;
  }

  render() {
    return (
      <div className='navbar'>
        {this._sidebarIcon}
        {this._headerLinks}
      </div>
    )
  }
}