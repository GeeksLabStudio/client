import React from 'react';
import {Link} from 'react-router';
import AppAction from '../../actions/AppAction';
require('./style.less');

export default class HomePage extends React.Component {
  render() {
    return (
    	<div className={config.pages.home.class}>
	      <button onClick={AppAction.togglePopup}>popup</button>
	    </div> 
    )
  }
}