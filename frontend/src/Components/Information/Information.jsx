import React from 'react'
import './information.css'
import logo from '../../Assets/logo.png'
const Information = () => {
  return (
    <section id='info' className='main-page'>
      <div className="user-info-container">
        <div className="user-profile-icon">
          <img src={logo} alt="ACM"/>
        </div>
        <div className="user-info">
          <span>My Profile</span>
          <input placeholder='Name...'/>
          <input placeholder='Roll Number...'/>
          <input placeholder='Position...'/>
          <button>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Information