import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app';

import config from './config';

// Importing global less
require('./assets/app.global.less');

// Globals here
global.config = config;

// Rendering Application container
ReactDOM.render(<Application/>, document.getElementById('approot'));

/*
  Temp solution !!!
  App global vars
*/

global.app = {
  actions: {
    auth: {
      login: {
        succes: 'AUTH_LOGIN_SUCCESS',
        error: 'AUTH_LOGIN_ERROR'
      },
      logout: {
        succes: 'AUTH_LOGOUT_SUCCESS',
        error: 'AUTH_LOGOUT_ERROR'
      }
    }
  }
}