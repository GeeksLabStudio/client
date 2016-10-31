import React from 'react';
import {Link} from 'react-router';
import AppStore from '../../stores/app.store';
require('./style.less');

export default class SocialNetworks extends React.Component {
  static propTypes = {
    links: React.PropTypes.object
  }

  position = {
    navbar: app.ui.ControlPosition.MEGAMENU
  }

  componentDidMount(){
    AppStore.on('ui:update', this.UIupdateHandler);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.UIupdateHandler)
  }

  state = {
    links: AppStore.getAvailablePages(this.position.navbar)
  }

  UIupdateHandler = () => {
    let links = AppStore.getAvailablePages(this.position.navbar);

    this.setState({
      links
    })
  }

  // get elements of dropdown
  _sublinksItem(_link, i) {
    let link;

    // if link
    if (_link.path) {
      link = <Link to={_link.path} className="item-link">
        {_link.label}
      </Link>
    } else {
      link = <div className="item-link">
        {_link.label}
      </div>
    }

    return (
      <div className="item" key={i}>
        {link}

        {this._sublinks(_link)}
      </div>
    )
  }

  // get inner elements
  _sublinks(_sublinks){
    if (_sublinks.submenu && _sublinks.submenu.length > 0) {
      let links = _sublinks.submenu.map((_link, i) => {
        return this._sublinksItem(_link, i)
      })

      return (
        <div className="sub-menu">
          {links}
        </div>
      )
    }
  }

  // top-level
  get _links() {
    let _links = this.state.links;

    return _links.map((_link, i) => {
      return (
        <div className="top-level" key={i}>
          {this._sublinksItem(_link, i)}          
        </div>
      )
    })
  }

  render() {
    if (this.state.links.length > 0) {
      return (
        <div className='mega-menu'>
          {this._links}
        </div>
      )
    } else {
      return null;
    }
  }
}