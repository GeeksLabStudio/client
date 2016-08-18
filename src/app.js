import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

// main layout
import Layout from './pages/Layout'
// pages
import About from './pages/About'
import Users from './pages/Users'
import User from './pages/User'
import NotFound from './pages/PageNotFound'

export default class Application extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <Router history={browserHistory}>
            <Route path='/' component={Layout}>
                <Route path='about' component={About}/>
                <Route path='users' component={Users}>
                    <Route path="/user/:userId" component={User}/>
                </Route>

                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
    }
}