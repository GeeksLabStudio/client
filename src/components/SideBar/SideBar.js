import React from 'react';
import {Link} from 'react-router';
import AppStore from '../../stores/AppStore';
import AppAction from '../../actions/AppAction';

export default class SideBar extends React.Component {
  static propTypes = {
    links: React.PropTypes.object,
    show: React.PropTypes.bool
  }

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

  get _sideBarItems() {
    let _links = [];

    for (let i in this.props.links) {
      let _link = this.props.links[i];

      if (_link.isActive) {
        let _icon = _link.icon ? 'fa ' + _link.icon : '';

        _links.push(
          <Link to={_link.path} key={i} className={_icon} activeClassName='active'>
            {_link.name}
          </Link>)
      }
    }

    return _links;
  }

  render() {
    let _className = this.state.show || this.props.show ? 'side-bar active' : 'side-bar';

    return <div className={_className}>
      <div className="top-bar">
        <span onClick={AppAction.toggleSidebar} className="fa fa-bars"></span>
      </div>

      {this._sideBarItems}
    </div>
  }
}