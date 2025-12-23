import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const { id } = useParams();
    const [user, setuser] = useState({});
    const [loading, setLoading] = useState(false);

    async function getUserDetails(id) {
        setLoading(true);
        const userRes  = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userData = await userRes.json();
        setuser(userData);
        setLoading(false);
    }
  
    useEffect(()=>{
        getUserDetails(id);
    }, [id])

    if(loading) {
        return <div>Loading...</div>
    }

  return (
    <div>
        <h1>User Details</h1>
        <p>Name: {user.name}</p>
        <p>UserName: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
    </div>
  )
}

export default UserDetails
