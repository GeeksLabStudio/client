import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app';

/*
  Log config to console
*/
app.utils.log.info('App:config', app)

/*
  for debugging
  to see all the logs
*/
app.utils.log.setLevel('trace')

// Importing app less
require('./assets/app.less');

// Globals config
global.config = app.config;

// Rendering Application container
ReactDOM.render(<Application/>, document.getElementById('approot'));