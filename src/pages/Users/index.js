import React from 'react';
import {Link} from 'react-router';

export default class UsersPage extends React.Component{
    state = {
        users: [
            {
                name: 'test1'
            },
            {
                name: 'test2'
            },
            {
                name: 'test333'
            },
            {
                name: 'test4'
            }
        ]
    }
    render(){
        return <div>
                UserPage

                <ul>
                    {this.state.users.map(user => (
                        <li>
                            <Link to={`/user/${user.name}`}>
                                {user.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {this.props.children}
            </div>
    }
}