import React from 'react';
import {Link, browserHistory} from 'react-router';
// stores
import AppStore from '../../stores/app.store';
// actions
import AppAction from '../../actions/app.action';
import AuthAction from '../../actions/auth.action';
// material-ui
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';

export default class Header extends React.Component {
	componentDidMount(){
    AppStore.on('ui:update', this.UIupdateHandler);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.UIupdateHandler);
  }


  state = {
    links: AppStore.getAvailablePages(app.ui.ControlPosition.HEADER)
  }

  actions = {
    logout: AuthAction.logout
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
		    title={app.ui.appTitle}
        style={{zIndex: 1310}}
		    onLeftIconButtonTouchTap={AppAction.toggleSidebar}
		    onTitleTouchTap={this._redirectTo('/')}
		    iconElementRight={
          <IconMenu iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}>
            {this._links}
          </IconMenu>
        }
		  />
    )
  }
}