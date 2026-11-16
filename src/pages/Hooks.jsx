import React, { useEffect, useState } from 'react'

function Hooks() {
    const [count,setCount] = useState(0)
    console.log(count)

    let handleCount =() =>{
        setCount(count +1)
    };
    let handleNumber =()=>{
        setCount(count -1)
    }

    useEffect(() =>{
        console.log("UserEffect loaded",count);   
    },[count]);

    useEffect(()=>{
        document.title= `Count changing:${count}`;
    },[count]);

    
  return (
    <div>
        <p>{count}</p>
        {/* <p>{count}</p> */}
      <button onClick={handleCount}>Count++</button>
      <button onClick={handleNumber}>Count--</button>
    </div>
  )
}

export default Hooks
