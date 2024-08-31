import React from 'react'
import logo from '../../Assets/logo.png'
import { useSelector } from 'react-redux'
import './Id.css'

const Id = () => {
  const {qrCodeData} = useSelector(state=>state)
  return (
    <section id="id" className="main-page">
      <div className="card-container">
        <div className="card-header">
          <img src={logo} alt="ACM BVP Logo" className="acm-logo" />
        </div>
        <div className="card-body">
          <h1 className="name">HARSHIT BAREJA</h1>
          <p className="role">WEB MASTER</p>
        </div>
        <div className="card-qr">
          <img src={qrCodeData} alt="QR Code" className="qr-code" />
        </div>
        <div className="card-footer">
          <img src="/path-to-your-logo/acm-w-logo.png" alt="ACM-W Logo" className="acm-w-logo" />
        </div>
      </div>
    </section>
  )
}

export default Id