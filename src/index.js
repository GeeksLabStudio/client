import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app';
import {debug, layout, pages, components} from './configs';

// Importing app less
require('./assets/app.less');

// Globals config
global.config = {
	debug,
  layout,
  pages,
  components
};

// Rendering Application container
ReactDOM.render(<Application/>, document.getElementById('approot'));