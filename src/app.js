import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

// main layout
import Layout from './components/Pages/Layout'
// pages
import About from './components/Pages/About'
import Users from './components/Pages/Users'
import User from './components/Pages/User'

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
            </Route>
        </Router>
    }
}