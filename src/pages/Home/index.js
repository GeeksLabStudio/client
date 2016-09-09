import React from 'react';
import {Link} from 'react-router';
require('./style.less');

export default class HomePage extends React.Component{
  render() {
    return (
    	<div className={config.pages.home.class}>
	      Home page
	    </div> 
    )
  }
}