import React from 'react';
import {Link, browserHistory} from 'react-router';
// stores
import AppStore from '../../stores/app.store';
import AuthStore from '../../stores/auth.store';
// material-ui
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
// icons
import profile from 'material-ui/svg-icons/action/account-circle';
import home from 'material-ui/svg-icons/action/home';
import register from 'material-ui/svg-icons/social/person-add';
import login from 'material-ui/svg-icons/action/input';
import PenIcon from 'material-ui/svg-icons/content/create';

const listIncons = {home,register,login,profile}

// css
require('./style.less')

export default class Sidebar extends React.Component { 
  componentDidMount(){
    AppStore.on('ui:update', this.UIupdateHandler);
    AppStore.on('sidebar:toggle', this.sidebarToggleHandler);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.UIupdateHandler);
    AppStore.removeListener('sidebar:toggle', this.sidebarToggleHandler);
  }

  state = {
    show: false,
    links: AppStore.getAvailablePages(app.ui.ControlPosition.SIDEBAR)
  }

  UIupdateHandler = () => {
    let links = AppStore.getAvailablePages(app.ui.ControlPosition.SIDEBAR);

    this.setState({
      links
    })
  }

  sidebarToggleHandler = () => {
    let show = this.state.show;
    show = !show;

    this.setState({
      show
    })
  }

  _handleClose(show){
    this.setState({
      show
    })
  }

  _redirectTo(path){
    return () => {
      this.setState({show: false})
      browserHistory.push(path)
    }
  }

  get _links(){
    return this.state.links.map((_link, i) => {
      let _action = _link.action ? this.actions[_link.action] : this._redirectTo(_link.path);

      return (
        <ListItem 
          style={{padding: '5px 0', color: theme.palette.textColor}} 
          primaryText={_link.label} 
          key={i} 
          leftIcon={React.createElement(listIncons[_link.icon])}
          onClick={_action}
        />
      )
    })
  }

  get _userInfo(){
    if (AuthStore.isAuthenticated && AuthStore.profile) {
      let name = AuthStore.profile.name ? AuthStore.profile.name : '';
      let lastName = AuthStore.profile.lastName ? AuthStore.profile.lastName : '';
      let fullName = name || lastName ? `${name} ${lastName}` : 'User';
      let username = AuthStore.profile.username ? AuthStore.profile.username : '';
      // avatar or placeholder
      let avatar = AuthStore.profile.image 
        ? <Avatar size={85} src={AuthStore.profile.image}/> 
        : <profile style={{width: 70, height: 'auto'}}/>;

      return (
        <div className="user-info">
          {avatar}

          <div className="name">
            {fullName}
          </div>

          <div className="username">
            {username}
          </div>
        </div>
      )
    }
  }

	render() {
    return (
      <Drawer 
        docked={false}
        containerStyle={{paddingTop: 60}}
        onRequestChange={::this._handleClose}
        open={this.state.show}
      >
        <List>
          {this._userInfo}
          {this._links}
        </List>
      </Drawer>
    )
  }
}