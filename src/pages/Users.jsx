import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Users() {
    const [user,setUser]=useState([]);
    const [error,setError]=useState();
    const [loading,setLoading]=useState(Boolean);

    let fetchUsers=async()=>{
        setLoading(true);
        try{
            let response=await axios.get("https://dummyjson.com/users");
            console.log("Users log",response.data);
            console.log("One user",response.data.users)

            setUser(response.data.users);
            setLoading(false);
        }
        catch(error){
            setError(error);
        }
    };
    // console.log(user);
    // useEffect(()=>{
    //     fetchUsers();
    // },[])


  return (
    <div>
      User
      {loading && <p>Loading..</p>}
      <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Bank currency</th>
            <th>Company</th>
        </tr>
        {user.map((item) => (
            <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.address.address}</td>
                <td>{item.bank.currency}</td>
                <td>{item.company.name}</td>

                <td>
                    <img src={item.image} />
                </td>
            </tr>
        ))}
      </table>
      <div>
        <button onClick={fetchUsers}>Load User</button>
      </div>
    </div>
  )
}

export default Users

