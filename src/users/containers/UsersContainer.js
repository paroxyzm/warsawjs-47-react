import React, { Component } from 'react';

import UsersList from '../components/UsersList'

class UsersContainer extends Component {

  state = {
    users: [] // [{id, name, username}, {id, name, username}]
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ users: data }));
  }

  render() {
    const { users } = this.state;
    return <UsersList users={users} />
  }
}

export default UsersContainer;
