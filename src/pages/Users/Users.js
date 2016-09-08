import React from 'react';
import {Link} from 'react-router';

export default class UsersPage extends React.Component {
state = {
  users: [
    {id: 0, name: 'test1'},
    {id: 1, name: 'test2'},
    {id: 2, name: 'test3'}
  ]
}
  render() {
    return (
      <div  className={config.pages.user.class}>
        UserPage

        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.name}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>

        {this.props.children}
      </div>
    )
  }
}
