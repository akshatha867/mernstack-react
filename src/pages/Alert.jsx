import React from 'react'

function Alert() {
    // let Greet=()=>{
    //     alert("Hii")
    // }
    let Greet=(e)=>{
        alert(e);
    }
  return (
    <div>
        {/* <button onClick={Greet}>Say Hii</button> */}
      <button onClick={()=>{
        Greet("Hello akshatha");
      }}>
        Say hello
      </button>
    </div>
  )
}

export default Alert
