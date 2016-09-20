import React from 'react';
import {Link} from 'react-router';

require('./style.less');

import AppAction from '../../actions/app.action';

export default class HomePage extends React.Component {
  render() {
    return (
    	<div className={config.pages.home.class}>
        <h1> Welcome back </h1>

	      <button onClick={AppAction.togglePopup}>popup</button>

        <button onClick={()=>{AppAction.notify('This is a test notification')}}>notify</button>
	    </div>
    )
  }
}