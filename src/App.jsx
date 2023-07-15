import React, { useState } from 'react';
import { useGetUserQuery } from './redux/userApi';
import { useGetUsersQuery } from './redux/UsersApi';


function App() {

  const [count,setCount]=useState('')
  const { data: usersData, isLoading} = useGetUsersQuery(count);
  // const { data: userData, error, isLoading: isUserLoading } = useGetUserQuery(); // Передача значения userId



  console.log(count);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
        <div>
          <select value={count} onChange={(e)=>setCount(e.target.value)}> 
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>

          </select>
        </div>

      <ul>
        {usersData.data.map((item) => (
          <li key={item.id}>{item.first_name}</li>
        ))}
      </ul>
      {/* {userData && <div>User: {userData.data.first_name}</div>}
      {error && <div>Error: {error.message}</div>} */}
    </div>
  );
}

export default App;