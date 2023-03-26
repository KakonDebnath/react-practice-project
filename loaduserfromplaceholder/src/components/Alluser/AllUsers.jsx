import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './AllUsers.css'

const AllUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div className='gridStyle'>
            {
                users.map((user, index)=>
                <User user={user} key={index}></User>)
            }
        </div>
    );
};

export default AllUsers;