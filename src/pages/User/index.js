import React from 'react';
import {Link} from 'react-router';
require('./style.less');

export default class UserPage extends React.Component {
  render() {
    return (
	    <div className={config.pages.user.class}>
	      UsersPage: {this.props.params.userId}
	  	</div>
	  )
  }
}