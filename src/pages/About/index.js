import React from 'react';
import {Link} from 'react-router';
require('./style.less');

export default class AboutPage extends React.Component{
  render() {
    return (
    	<div className={config.pages.about.class}>
	      About page
	    </div> 
    )
  }
}