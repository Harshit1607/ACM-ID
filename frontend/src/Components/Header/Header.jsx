import React from 'react'
import logo from '../../Assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <section id="header" className="header">
      <div className="header-acm-logo">
        <img src={logo} alt="ACM"/>
      </div>
      <div className='header-info'>
        <span>Dashboard</span>
      </div>
    </section>
  )
}

export default Header