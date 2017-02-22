import React from 'react';
import {Link, browserHistory} from 'react-router';

import AppStore from '../../stores/app.store';
import AppAction from '../../actions/app.action';
import AuthStore from '../../stores/auth.store';
import AuthAction from '../../actions/auth.action';

// material-ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import IconMenu from 'material-ui/IconMenu';

export default class Header extends React.Component {
	componentDidMount(){
    AppStore.on('ui:update', this.UIupdateHandler);
    AppStore.on('title:update', this.titleUpdateHandler);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.UIupdateHandler);
    AppStore.removeListener('title:update', this.titleUpdateHandler);
  }


  state = {
    links: AppStore.getAvailablePages(app.ui.ControlPosition.HEADER)
  }

  actions = {
    logout: AuthAction.logout
  }

  titleUpdateHandler = title => {
  	this.setState({
  		title: title
  	})
  }

  UIupdateHandler = () => {
    let links = AppStore.getAvailablePages(app.ui.ControlPosition.HEADER);

    this.setState({
      links
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
      <AppBar
		    title={this.state.title ? this.state.title : document.title}
		    onLeftIconButtonTouchTap={AppAction.toggleSidebar}
		    onTitleTouchTap={this._redirectTo('/')}
		    iconElementRight={
		    	<IconMenu iconButtonElement={<IconButton><AccountIcon/></IconButton>}>
		    		{this._links}
		    	</IconMenu>
		    }
		  />
    )
  }
}