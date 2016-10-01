import React from 'react';
import {Link} from 'react-router';
import {Dropdown} from '../UI';
import AppStore from '../../stores/app.store';
import AppAction from '../../actions/app.action';
import AuthStore from '../../stores/auth.store';
import AuthAction from '../../actions/auth.action';

require('./style.less');

export default class NavBar extends React.Component {
  static propTypes = {}

  position = {
    navbar: app.ui.ControlPosition.NAVBAR
  }

  componentDidMount(){
    this.__onUiUpdate = ::this.UIupdate
    AppStore.on('ui:update', this.__onUiUpdate);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.__onUiUpdate)
  }

  state = {
    links: AppStore.getAvailablePages(this.position.navbar)
  }

  actions = {
    logout: AuthAction.logout
  }

  UIupdate(){
    let links = AppStore.getAvailablePages(this.position.navbar);

    this.setState({
      links
    })
  }

  get _headerLinks() {
    let _html = [];
    let _links = this.state.links;
    let _config = config.components.navbar;
    let _profile = AuthStore.profile;

    if (!_config.links || _links.length == 0) {
      return;
    }

    // if user is GUEST or dropdown is disabled
    if (_profile.role == 'GUEST' || !_config.dropdown) {
      _html.push(
        <div className="navbar-links" key="links">
          {this._links}
        </div>
      )
    } else { // if user is autificated
      // user image or placholder
      let _userImage = _profile.image ? <img className="image" src={_profile.image} /> : <i className="placeholder fa fa-user"/>;

      // get dropdown
      _html.push(
        <Dropdown links={this._links} key="dropdown">
          {_userImage}
        </Dropdown>
      )
      
      // welcome message
      _html.push(
        <div className="welcome" key="welcome">
          {`welcome , ${_profile.username}!`}
        </div>
      )
    }

    return _html;
  }

  get _links() {
    let _links = this.state.links;

    return _links.map((_link, i) => {
      // usual link
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
      } 

      // link with action
      else if (_link.action) { 
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