import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

// Pages
import {
    Layout, // main layout
    About,
    Users,
    User,
    NotFound
} from './pages';

// Application class
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