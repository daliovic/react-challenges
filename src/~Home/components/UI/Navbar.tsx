import React from 'react'
import logo from '../../../assets/graphics/MALogo.svg'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-none start-50 translate-middle-x position-absolute '>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-mdb-toggle='collapse'
          data-mdb-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <i className='fas fa-bars'></i>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <a className='navbar-brand mt-2 mt-lg-0' href='#'>
            <img src={logo} height='15' alt='MDB Logo' loading='lazy' />
          </a>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0 w-50 justify-content-around'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                HOME
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                ABOUT
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/resume'>
                RESUME
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/portfolio'>
                PORTFOLIO
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
