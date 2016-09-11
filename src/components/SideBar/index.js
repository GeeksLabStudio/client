import React from 'react';
import {Link} from 'react-router';
import AppStore from '../../stores/AppStore';
import AppAction from '../../actions/AppAction';
require('./style.less');

export default class SideBar extends React.Component {
  static propTypes = {}

  state = {
    show: false,
    links: AppStore.getAvailablePages()
  }

  componentDidMount() {
    this.__sidebarToggleHandler = ::this.sidebarToggleHandler;
    this.__navigationUpdate = ::this.navigationUpdateHandler;

    AppStore.on('sidebar:toggle', this.__sidebarToggleHandler)
    AppStore.on('nav:update', this.__navigationUpdate)
  }

  componentWillUnmount(){
    AppStore.removeListener('sidebar:toggle', this.__sidebarToggleHandler)
    AppStore.removeListener('nav:update', this.__navigationUpdate)
  }

  sidebarToggleHandler() {
    let show = this.state.show;
    show = !show;

    this.setState({
      show
    })
  }

  navigationUpdateHandler() {
    let links = AppStore.getAvailablePages();

    this.setState({
      links
    })
  }


  get _links() {
    return this.state.links.map(_link => {

        return <Link
            to={_link.path}
            key={_link.name}
            className={_link.icon}
            activeClassName='active'
            onClick={AppAction.toggleSidebar}
            onlyActiveOnIndex={_link.path == '/'}>
          {_link.name}
        </Link>

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