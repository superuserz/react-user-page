import './App.css';
import AddUser from './components/users/AddUser';
import ShowUsers from './components/users/ShowUsers';
import { useState } from 'react';

// const INITIAL_USERS = [{
//   id: 1,
//   name: "admin",
//   age: "27"
// },
// {
//   id: 2,
//   name: "Manmeet Devgun",
//   age: "28"
// }]

const INITIAL_USERS = []


function App() {
  const [users, setUsers] = useState(INITIAL_USERS);

  const processSubmittedData = (data) => {
    data.id = users.length + 1;
    setUsers(prevData => {
      return [...prevData, data]
    })
  }

  return (
    <div>
      <AddUser processSubmittedData={processSubmittedData}></AddUser>
      <ShowUsers users={users}></ShowUsers>
    </div>
  );
}

export default App;
