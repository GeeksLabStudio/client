import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import * as pages from './pages';

import AuthStore from './stores/auth.store'

// Application class
export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  checkRequirements(nextState, replace){
    if (!AuthStore.isAuthenticated)
      replace('/login')
    else
      return true
  }

  get routes() {
    let pageConfig = config.pages;

    return Object.keys(pageConfig).map(key => {
      let page = pageConfig[key];

      let onEnterHandler = (page.requestAuth) ? ::this.checkRequirements : null

      if (page.register)
        return <Route path={page.path} key={page.name} component={pages[page.folder]} onEnter={onEnterHandler} />
    })
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={pages.Layout}>
          <IndexRoute component={pages.Home}/>
          {this.routes}

          <Route path='/*' component={pages.Home} />
        </Route>
      </Router>
    )
  }
}