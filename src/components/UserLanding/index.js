import React from 'react';
import Moment from 'moment';
// material-ui
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
// stores
import AuthStore from '../../stores/auth.store';
// icons
import Account from 'material-ui/svg-icons/action/account-circle';
import DateIcon from 'material-ui/svg-icons/action/date-range';
import Heart from 'material-ui/svg-icons/action/favorite';
// css
require('./style.less');

export default class UserLanding extends React.Component {
	get _avatar(){
		// avatar or placeholder
    return (
    	AuthStore.profile.image 
      ? <img src={AuthStore.profile.image} />
      : <Account />
     )
	}

	get _userName(){
		let _user = this.props.data;
		let name = _user.name ? _user.name : '';
		let lastName = _user.lastName ? _user.lastName : '';
    let fullName = name || lastName ? `${name} ${lastName}` : 'User';
    let username = _user.username ? _user.username : '';

		return {fullName, username}
	}

	render() {
    let _user = this.props.data;

    return (
      <div className="user-landing">
      	<div className="container">
      		<div className="avatar">{this._avatar}</div>
      		<h3 className="full-name">{this._userName.fullName}</h3>
      		<div className="username">{this._userName.username}</div>
      		<div className="date">{Moment(_user.birthday).format('Do MMM YYYY')}</div>

      		<BottomNavigation>
	          <BottomNavigationItem
	            label="Subscribers 100"
	            icon={<Account/>}
	          />
	          <BottomNavigationItem
	            label="Likes 900"
	            icon={<Heart/>}
	          />
	          <BottomNavigationItem
	            label="Programs 8"
	            icon={<DateIcon/>}
	          />
	        </BottomNavigation>
      	</div>

      	<div className="container info">
      		{_user.info}
      	</div>
      </div>
    )
  }
}
