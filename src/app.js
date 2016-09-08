import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

// Pages
import {
  Layout, // main layout
  About,
  Users,
  User,
  Login,
  PageNotFound
} from './pages';

// Application class
export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <Route path='about' component={About}/>
        <Route path='users' component={Users}>
          <Route path=":userId" component={User}/>
        </Route>

        <Route path='login' component={Login}/>
        <Route path='*' component={PageNotFound}/>
      </Route>
    </Router>
  }
}