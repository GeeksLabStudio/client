import React from 'react';
require('./style.less');

export default class PageNotFound extends React.Component {
  render() {
    return (
    	<div className="not-found-page">
        <h1>404 Page Not Found </h1>
      </div>
    )
  }
}