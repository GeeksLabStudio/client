import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app';
import {debug, layout, pages, components} from './configs';

// Importing app less
require('./assets/app.less');

/*
  Temp solution !!!
  App global vars
*/

global.app = {
  actions: {
    auth: {
      login: {
        success: 'AUTH_LOGIN_SUCCESS',
        error: 'AUTH_LOGIN_ERROR'
      },
      logout: {
        success: 'AUTH_LOGOUT_SUCCESS',
        error: 'AUTH_LOGOUT_ERROR'
      }
    }
  },

  ui: {
    ControlPosition: {
      NAVBAR: 'navbar',
      SIDEBAR: 'sidebar',
      FOOTER: 'footer'
    }
  }
}

// Globals config
global.config = {
  debug,
  layout,
  pages,
  components
};

// Rendering Application container
ReactDOM.render(<Application/>, document.getElementById('approot'));
