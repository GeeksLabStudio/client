import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as pages from './pages';
import AuthStore from './stores/auth.store'
import AppStore from './stores/app.store'

// Application class
export default class Application extends React.Component {

  checkRequirements(nextState, replace){

    app.utils.log.debug('AppRouter:checkRequirements', nextState)

    if (!AuthStore.isAuthenticated){
      app.utils.log.error('AppRouter:checkRequirements failed. Reason: is not authenticated');
      replace('/login');
    } else
      return true
  }

  onEnterDefaultHandler(nextState, replace){

    app.utils.log.debug('AppRouter:onEnterDefaultHandler', nextState)

    let routes = nextState.routes;
    let config = routes[routes.length - 1].config;

    // set document title
    document.title = config.title;

    let access = AuthStore.checkPermissions(config.permissions);

    if (access) {
      return true
    } else {
      app.utils.log.error('AppRouter:checkRequirements failed. Reason: not right permission');
      replace('/') //goto root /
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={pages.Layout} >
          <IndexRoute component={pages.Home} 
            config={app.config.pages.home} 
            onEnter={::this.onEnterDefaultHandler}
          />

          <Route path='/profile' 
            component={pages.Profile}
            config={app.config.pages.profile}
            onEnter={::this.onEnterDefaultHandler}
          />

          <Route path='/login' 
            component={pages.Login}
            config={app.config.pages.login}
            onEnter={::this.onEnterDefaultHandler}
          />

          <Route path='/*' 
            component={pages.NotFound}
          />
        </Route>
      </Router>
    )
  }
}