import React from 'react';
import {Link} from 'react-router';

require('./nav.less');

export default class Nav extends React.Component{
    render(){
        return <div className='navbar'>
                <Link to='/'>
                    Dev
                </Link>

                <div className='navbar-links'>
                    {this.props.children}
                </div>
            </div>
    }
}