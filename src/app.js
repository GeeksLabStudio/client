import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {pages} from './configs';

// Pages
import {
  Layout,
  Home,
  // >>>CLASS<<<
	Login,
} from './pages';

const routes = [
  // >>>ROUTES<<<
	<Route path={pages.login.path} component={Login}/>,
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