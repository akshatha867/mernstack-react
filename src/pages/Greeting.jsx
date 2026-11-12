import React from 'react'
import Conditions from './Conditions'
import NewComponent from './NewComponent';

function Greeting() {
    let greeting="Good morning";
  return (
    <div>
    
      <h3>Greeting Page</h3>
      <NewComponent message={greeting}/>
      {/* <Conditions/> */}
    </div>
  )
}

export default Greeting
