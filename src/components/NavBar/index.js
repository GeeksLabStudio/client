import React from 'react';
import {Link} from 'react-router';
import AppAction from '../../actions/AppAction';
let _logoPath = require('../../assets/images/logo.png');

import AppStore from '../../stores/AppStore';

require('./style.less');

export default class NavBar extends React.Component {
  static propTypes = {}

  state = {
    links: AppStore.getAvailablePages()
  }

  componentDidMount(){
    this.__onUiUpdate = ::this.UIupdate
    AppStore.on('ui:update', this.__onUiUpdate);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.__onUiUpdate)
  }

  UIupdate(){
    let links = AppStore.getAvailablePages();

    this.setState({
      links
    })
  }

  get sideBarIcon() {
    return config.components.sidebar.enable? <span onClick={AppAction.toggleSidebar} className="menu fa fa-bars"></span> : null;
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