import React from 'react';
import {Link} from 'react-router';
import AppAction from '../../actions/AppAction';
let _logoPath = require('../../assets/images/logo.png');

export default class NavBar extends React.Component {
  static propTypes = {
    links: React.PropTypes.object.isRequired,
    sideBar: React.PropTypes.bool.isRequired
  }

  get sideBarIcon() {
    if (this.props.sideBar) {
      return <span onClick={AppAction.toggleSidebar} className="fa fa-bars"></span>;
    }
  }

  get _links() {
    let _keys = Object.keys(this.props.links);
    return _keys.map((key) => {
      let _link = this.props.links[key];

      if (_link.isActive)
        return <Link to={_link.path}
                key={key}
                activeClassName='active'
                className={_link.icon ? 'fa ' + _link.icon : ''}>
                  {_link.name}
             </Link>
    })
  }

  render() {
    return <div className='navbar clear'>
      {this.sideBarIcon}

      <img src={_logoPath} className="logo" />

      <div className="navbar-links">
        {this._links}
      </div>
    </div>
  }
}