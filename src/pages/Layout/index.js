import React from 'react';
import {Link} from 'react-router';

import Nav from '../../components/Nav';

export default class ApplicationLayout extends React.Component{
    render(){
        return <div>
                <Nav>
                    <Link to={'users'}>
                        Users
                    </Link>

                    <Link to='/about'>
                        About
                    </Link>
                </Nav>

                <div>
                    <i className='fa fa-cog' />
                    Core Application Component
                </div>


                <div>
                    {this.props.children}
                </div>
            </div>
    }
}