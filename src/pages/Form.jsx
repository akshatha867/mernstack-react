import React from 'react'

function Form() {
     let handleChange=(event)=>{
        console.log(event.target.value);   
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
    }
  return (
   
    <div>
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

export default Form
