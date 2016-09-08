import React from 'react';
import {Link} from 'react-router';
import AppAction from '../../actions/AppAction';
let _logoPath = require('../../assets/images/logo.png');

export default class NavBar extends React.Component {
  static propTypes = {}

  get sideBarIcon() {
    if (config.components.sidebar.enable) {
      return <span onClick={AppAction.toggleSidebar} className="fa fa-bars"></span>;
    }
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
    let _links = config.pages;

    return Object.keys(_links).map((key, i) => {
      let _link = _links[key];

      if (_link.header) {
        let _icon = _link.icon ? 'fa ' + _link.icon : '';

        return (
          <Link 
            to={_link.path}
            key={key}
            activeClassName='active'
            className={_icon}
          >
            {_link.name}
          </Link>
        )
      }
    })
  }

  render() {
    return (
      <div className='navbar clear'>
        {this.sideBarIcon}

        <Link to="/" className="logo">
          <img src={_logoPath} />
        </Link>

        {this._headerLinks}
      </div>
    )
  }
}