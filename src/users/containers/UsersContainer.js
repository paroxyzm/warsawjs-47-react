import React, { Component, useState, useEffect } from 'react';

import UsersList from '../components/UsersList'

function UsersContainer() {

  // const result = useState([]);
  // result[0] // data: []
  // result[1] // fn, for modify result[0]
  // changeData = result[1]
  // changeData([1, 2, 3, 4])
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, []);

  return <UsersList users={users} />
}

// class UsersContainer extends Component {

//   state = {
//     users: [] // [{id, name, username}, {id, name, username}]
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => this.setState({ users: data }));
//   }

//   render() {
//     const { users } = this.state;
//     return <UsersList users={users} />
//   }
// }

export default UsersContainer;
