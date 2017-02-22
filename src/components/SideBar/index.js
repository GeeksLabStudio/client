import React from 'react';
import {Link, browserHistory} from 'react-router';

import AppStore from '../../stores/app.store';

// material-ui
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
      browserHistory.push(path)
    }
  }

  get _links(){
    return this.state.links.map((_link, i) => {
      let _action = _link.action ? this.actions[_link.action] : this._redirectTo(_link.path);

      return <MenuItem primaryText={_link.label} key={i} onClick={_action}/>
    })
  }

	render() {
    return (
      <Drawer 
        docked={false}
        onRequestChange={::this._handleClose}
        open={this.state.show}
      >
        {this._links}
      </Drawer>
    )
  }
}