import React from 'react';
import {Link} from 'react-router';
import AppStore from '../../stores/AppStore';
import AppAction from '../../actions/AppAction';

export default class SideBar extends React.Component {
  static propTypes = {}

  state = {
    show: false
  }

  componentDidMount() {
    AppStore.on('sidebar:toggle', ::this._sidebarToggleHandler)
  }

  _sidebarToggleHandler() {
    let show = this.state.show;
    show = !show;

    this.setState({
      show
    })
  }

  get _links() {
    let _links = config.pages;

    return Object.keys(_links).map((key, i) => {
      let _link = _links[key];

      if (_link.sideBar) {
        let _icon = _link.icon ? 'fa ' + _link.icon : '';

        return (
          <Link 
            to={_link.path} 
            key={i} 
            className={_icon} 
            activeClassName='active'
            onClick={AppAction.toggleSidebar}
          >
            {_link.name}
          </Link>
        )
      }
    })   
  }

  render() {
    let _className = this.state.show || this.props.show ? 'side-bar active' : 'side-bar';
    
    return (
      <div className={_className}>
        <div className="top-bar">
          <span onClick={AppAction.toggleSidebar} className="fa fa-bars"></span>
        </div>

        {this._links}
      </div>
    )
  }
}