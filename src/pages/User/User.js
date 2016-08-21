import React from 'react';
import {Link} from 'react-router';

export default class UserPage extends React.Component {
  render() {
    return <div>
      UsersPage: {this.props.params.userId}
  	</div>
  }
}