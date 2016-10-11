import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as pages from './pages';
import AuthStore from './stores/auth.store';
import AppAction from './actions/app.action';

import {
  ProfileProvider
} from './components';

export default class Application extends React.Component {

  checkRequirements(nextState, replace){
    app.utils.log.debug('AppRouter:checkRequirements', nextState)

    if (!AuthStore.isAuthenticated){
      app.utils.log.error('AppRouter:checkRequirements failed. Reason: is not authenticated');
      AppAction.notify('You are not authenticated');
      replace('/login');
    } else
      return true
  }

  onEnterDefaultHandler(nextState, replace){
    app.utils.log.debug('AppRouter:onEnterDefaultHandler', nextState)

    let routes = nextState.routes;
    let config = routes[routes.length - 1].config;

    document.title = config.title;

    let access = AuthStore.checkPermissions(config.permissions);

    if (access) {
      return true
    } else {
      app.utils.log.error('AppRouter:checkRequirements failed. Reason: not right permission');
      AppAction.notify('You don\'t have permissions to enter this page');
      replace('/')
    }
  }

  render() {
    return <ProfileProvider>
      <Router history={browserHistory}>
        <Route path={app.config.pages.home.path} component={pages.Layout}>
          <IndexRoute
            component={pages.Home}
            config={app.config.pages.home}
            onEnter={::this.onEnterDefaultHandler}
          />

          <Route
            path={app.config.pages.profile.path}
            component={pages.Profile}
            config={app.config.pages.profile}
            onEnter={::this.onEnterDefaultHandler}
          />

          <Route
            path={app.config.pages.login.path}
            component={pages.Login}
            config={app.config.pages.login}
            onEnter={::this.onEnterDefaultHandler}
          />

          <Route
            path={app.config.pages.register.path}
            component={pages.Register}
            config={app.config.pages.register}
            onEnter={::this.onEnterDefaultHandler}
          />

          <Route
            path={app.config.pages.blog.path}
            component={pages.Blog}
            config={app.config.pages.blog}
            onEnter={::this.onEnterDefaultHandler}
          >
            <IndexRoute
              component={pages.BlogList}
              config={app.config.pages.blog}
              onEnter={::this.onEnterDefaultHandler}
            />
            <Route
              path={app.config.pages.blog.children.path}
              component={pages.BlogDetails}
              config={app.config.pages.blog.children}
              onEnter={::this.onEnterDefaultHandler}/>
          </Route>

          <Route
            path='/*'
            component={pages.NotFound}
          />
        </Route>
      </Router>
    </ProfileProvider>
  }
}