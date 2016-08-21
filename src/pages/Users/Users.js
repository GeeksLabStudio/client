import React from 'react';
import {Link} from 'react-router';

export default class UsersPage extends React.Component {
  state = {
    users: [
      {
        id: 0,
        name: 'test1'
      },
        {
          id: 1,
          name: 'test2'
        },
        {
          id: 2,
          name: 'test333'
        },
        {
          id: 3,
          name: 'test4'
        }
    ]
  }
  
  render() {
    return <div>
      UserPage

      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>
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
