import React from 'react'
import logo from '../../Assets/logo.png'
import './Header.css'
import { useDispatch } from 'react-redux';
import { getHome } from '../../Redux/idActions';

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getHome());
  }
  return (
    <section id="header" className="header">
      <div className="header-acm-logo">
        <img src={logo} alt="ACM" onClick={()=>handleClick()}/>
      </div>
      <div className='header-info'>
        <span onClick={()=>handleClick()}>Dashboard</span>
      </div>
    </section>
  )
}

export default Header