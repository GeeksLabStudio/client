import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app';

import config from './config';

// Importing global less
require('./assets/app.global.less');

// Globals here
global.config = config;

// Rendering Application container
ReactDOM.render(<Application />, document.getElementById('approot'));