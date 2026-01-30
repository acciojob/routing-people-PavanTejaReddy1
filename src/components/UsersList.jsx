import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UsersList() {
    const [users, setUsers] = useState([]);

    async function usersList() {
        const usersRes = await fetch("https://jsonplaceholder.typicode.com/users")
        const userData = await usersRes.json();
        setUsers(userData);
    }

    useEffect(()=>{
            usersList();
    }, [])
    
  return (
    <div>
        <h1>User List</h1>
        <ul>
            {users.map((user)=>{
                return <li><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            })}
        </ul>
    </div>
  )
}

export default UsersList

