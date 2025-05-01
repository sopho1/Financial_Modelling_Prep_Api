import React from 'react'
import logo from './logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

interface Props {
     
}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
            <Link to="search" className="navbar-dashboard">
              Search
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <div>Login</div>
          <a
            href="#"
          >
            Signup
          </a>
        </div>
    </nav>
  )
}

export default Navbar