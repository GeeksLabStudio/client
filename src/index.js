import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app';

import config from './config';
require('./assets/app.global.less');


ReactDOM.render(<Application />, document.getElementById('approot'));