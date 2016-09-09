import React from 'react';
require('./style.less');

export default class PageNotFound extends React.Component {
  render() {
    return (
    	<div className={config.pages.notFound.class}>
	      404 not found
	    </div> 
    )
  }
}