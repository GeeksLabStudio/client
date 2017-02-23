import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './assets/theme';

require('./assets/reset.less');
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
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <Application/>
  </MuiThemeProvider>
);

// Globals config
global.config = app.config;
global.theme = theme;

// Rendering Application container
ReactDOM.render(<App/>, document.getElementById('approot'));