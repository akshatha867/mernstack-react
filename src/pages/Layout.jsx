import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="blog">Blog</Link>
        </li>
        <li>
            <Link to="list">Lists</Link>
        </li>
       <li>
        <Link to="login">Login Here</Link>
       </li>
        <li>
        <Link to="hooks">Hooks</Link>
       </li>

      </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
