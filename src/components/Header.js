import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {
  return (
    <nav className='nav'>
      <div className="center nav__wrapper">
        <h1>Where in the World ? </h1>
        <ul className='nav__links'>
            <li>
            <Link to='/' className='link'>All Continents</Link>
            </li>
            <li>
            <Link to='/independance' className='link'>Independent Countries</Link>
            </li>
            <li>
              <Link to='/search' className='link'>Search</Link>
            </li>
            <li>
              <Link to="/settings" className='link'>Settings</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header