import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const onAddUser = (user) => {
    setUsers(prevUsers => [
      ...prevUsers,
      user,
    ]);
  }

  return (
    <div>
      <AddUser onAddUser={onAddUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
