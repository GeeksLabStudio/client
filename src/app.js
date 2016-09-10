import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {pages} from './configs';

// Pages
import {
  Layout,
  Home,
  PageNotFound,
  // >>>CLASS<<<
} from './pages';

const routes = [
  // >>>ROUTES<<<
];

// Application class
export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home}/>
          {routes}
        </Route>
      </Router>
    )
  }
}