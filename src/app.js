import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {pages as pageConfig} from './configs';
import * as pages from './pages';

// Application class
export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  get routes() {
    return Object.keys(pageConfig).map(key => {
      let page = pageConfig[key];

      if (page.register) 
        return <Route path={page.path} key={page.name} component={pages[page.folder]}/>
    })
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={pages.Layout}>
          <IndexRoute component={pages.Home}/>
          {this.routes}
        </Route>
      </Router>
    )
  }
}