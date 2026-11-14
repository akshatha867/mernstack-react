import React from 'react'
import MadeGoal from './MadeGoal';
import MissedGoal from './MissedGoal';

function Conditions() {
  //   let a=10;
  //   let b=20;
  //   let text="";
  //   if(a>b){
  //       text="A is greater";
  //   }else{
  //       text="B is greater";
  //   }
  // return (
  //   <div>
  //     <h3>Result:{text}</h3>
  //     <p>{a>b?"A is greater":"B is greater"}</p>
  //   </div>
  // )

  let isTrue=true;
  // if(isTrue){
  //   return <MadeGoal/>;
  // }else{
  //   return <MissedGoal/>
  // }
  // return(
  // <div>
  //   {isTrue && <MadeGoal/>}
  //   {!isTrue && <MissedGoal/>}
  // </div>
  // )}
//   return(

//   <div>{isTrue ? <MadeGoal/> : <MissedGoal/>} </div>
// )}
let number=20;
return(
  <div>
    {number>10 && <h3>Logical operator</h3>}
  </div>
)
}

export default Conditions;
