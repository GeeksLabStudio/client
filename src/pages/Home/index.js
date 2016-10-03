import React from 'react';
require('./style.less');

export default class HomePage extends React.Component {
  render() {
    return (
    	<div className="home-page">
    		<h1>{config.pages.home.title}</h1>
	    </div>
    )
  }
}