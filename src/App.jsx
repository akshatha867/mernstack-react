import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Hello from "./pages/Hello";
import './App.css'
import { name } from './utils/constants';
import Greeting from './pages/Greeting';
import Conditions from './pages/Conditions';
import Arrays from './array/Arrays';
import Alert from './pages/Alert';
import Lists from './pages/Lists';
import Form from './pages/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Blog from './pages/Blog';
import NoPage from './pages/NoPage';
import Hooks from './pages/Hooks';
import Users from './pages/Users';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';


function App() {
  return(
      <>
      {/* <h1>Hello {name}</h1>
      <h1>React is better </h1>
  <Greeting/>
  
  {/* <Arrays/> */} 
 {/* <Alert/> */}
  {/* <Conditions/>
 <Lists/>
 <Form/> */}

 <BrowserRouter>
 <Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Greeting/>} />
<Route path="blog" element={<Blog/>} />
<Route path="list" element={<Lists/>} />
<Route path="login" element={<Form/>} />
<Route path="login_here" element={<Login/>} />
<Route path="hooks" element={<Hooks/>} />
<Route path="users" element={<Users/>} />
<Route path="my/profile" element={<MyProfile/>} />
<Route path="*" element={<NoPage/>} />

</Route>
 </Routes>
 </BrowserRouter>
  </>
  )


  
}
export default App;
