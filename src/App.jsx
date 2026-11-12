import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Hello from "./pages/Hello";
import './App.css'
import { name } from './utils/constants';
import Greeting from './pages/Greeting';
import Conditions from './pages/Conditions';


function App() {
  return(
      <>
      <h1>Hello {name}</h1>
      <h1>React is better </h1>
  <Greeting/>
  {/* <Conditions/> */}
  </>
  )


  
}
export default App;
