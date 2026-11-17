import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [user,setUser]=useState([]);
    const [error,setError]=useState();
    const [success,setSuccess]=useState(Boolean);
    const [loading,setLoading]=useState(Boolean);

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    var userToken;
    let handleSubmit=async(e)=>{
        setLoading(true);
        e.preventDefault();

        try{
            let response=await axios.post("https://dummyjson.com/auth/login ",{
                username:username,
                password:password,
            });
            console.log("Login Response",response);
            console.log("User token",response.data.accessToken);

            userToken=response.data.accessToken;
            console.log(userToken);
            
            localStorage.setItem("my-user",userToken);
            setUser(response.data);
            setSuccess(true);
            setLoading(false);
            
        }catch(error){
            console.log(error);
            setError(error.message);
            
        }
    };
    let handleLogout = () => {
    localStorage.removeItem("my-user");
    setUsername("");
    setPassword("");
    setUser([]);
    setSuccess(false);
  };

  return (
    
<div className=" w-xl mx-auto min-h-screen bg-green-200 flex items-center justify-center p-4">

  <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">

    <h2 className="mb-6 text-center text-2xl font-bold text-slate-800">
      Login
    </h2>

    <form onSubmit={handleSubmit}>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Enter Your Username
        </label>

        <input
          type="text"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Enter Your Password
        </label>

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-slate-300 p-2 outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 p-2.5 font-medium text-white hover:bg-blue-700"
      >
        Login
      </button>

      {success && (
        <button
          type="button"
          onClick={handleLogout}
          className="mt-3 w-full rounded-md bg-red-500 p-2.5 text-white hover:bg-red-600"
        >
          Logout
        </button>
      )}

    </form>

    {error && (
      <p className="mt-4 text-center text-sm text-red-600">{error}</p>
    )}

    {success && (
      <p className="mt-4 text-center text-sm font-medium text-green-600">
        Welcome {user?.firstName}
      </p>
    )}

  </div>
</div>
  );
}

export default Login
