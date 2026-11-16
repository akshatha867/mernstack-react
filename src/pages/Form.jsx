import React, { useState } from 'react'

function Form() {
  const[name,setName]=useState()
     let handleChange=(event)=>{
      setName(event.target.value);
           
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
    }
  return (
   
    <div>
      <p>On changing names: {name}</p>
        <form onSubmit={handleSubmit}>
              <label>Enter your name: </label>
              <input type="text" onChange={handleChange}/>
              <lable>Enter password:</lable>
              <input type="password" onChange={handleChange}/>
              <button >Submit</button>
        </form>
      
    </div>
  )
}

export default Form;
