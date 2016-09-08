import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Pages
import {
  Layout,
  Home,
  About,
  Users,
  User,
  PageNotFound
} from './pages';

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

          <Route path={config.pages.about.path} component={About}/>

          <Route path={config.pages.users.path} component={Users}>
            <Route path={config.pages.user.path} component={User}/>
          </Route>

          <Route path='*' component={PageNotFound}/>
        </Route>
      </Router>
    )
  }
}