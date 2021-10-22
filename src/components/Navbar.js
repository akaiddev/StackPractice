import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <h1 className='logo'>
          <Link to='/'>Stack</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='/Home'>Home</Link>
            </li>
            <li>
              <Link to='/Feature'>Features</Link>
            </li>
            <li>
              <Link to='/Docs'>Docs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
