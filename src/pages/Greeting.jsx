import React from 'react'
import Conditions from './Conditions'
import NewComponent from './NewComponent';
import style from '../myStyle.module.css';

function Greeting() {
    let greeting="Good morning";

    let myStyle={
      color:"blue",
      backgroundColor:"pink",
      fontFamily:"Times New Roman"
    }
  return (
    <div>
    
      <h3 style={{color:"black",backgroundColor:"blue"}}>Greeting Page</h3>

      <p style={myStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos voluptas adipisci iure voluptatibus natus saepe, sit fugiat, esse sint perspiciatis repellat nihil cum eveniet voluptate porro soluta dolor rerum id.</p>

      <h3 className={style.message}>Hello</h3>
      <NewComponent message={greeting}/>
      {/* <Conditions/> */}
    </div>
  )
}

export default Greeting
