import React from 'react'

function Conditions() {
    let a=10;
    let b=20;
    let text="";
    if(a>b){
        text="A is greater";
    }else{
        text="B is greater";
    }
  return (
    <div>
      <h3>Result:{text}</h3>
      <p>{a>b?"A is greater":"B is greater"}</p>
    </div>
  )
}

export default Conditions;
