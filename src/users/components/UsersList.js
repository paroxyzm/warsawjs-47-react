import React from 'react';

function UsersList({ users }) {
  return (
    <div className="users">
      {users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}
UsersList.defaultProps = {
  users: []
}

export default UsersList;
