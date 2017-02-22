import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/*
  Log config to console
*/
app.utils.log.info('App:config', app)

/*
  for debugging
  to see all the logs
*/
app.utils.log.setLevel('trace');

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Application/>
  </MuiThemeProvider>
);

// Globals config
global.config = app.config;

// Rendering Application container
ReactDOM.render(<App/>, document.getElementById('approot'));