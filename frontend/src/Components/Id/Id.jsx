import React from 'react';
import logo from '../../Assets/logo.png';
import acmw from '../../Assets/acm-w.svg';
import { useSelector } from 'react-redux';
import './Id.css';

const Id = () => {
  const { qrCodeData, user } = useSelector(state => state);

  return (
    <section id="id" className="main-page">
      <div className="card-container">
        <div className="card-header">
          <img src={logo} alt="ACM BVP Logo" className="acm-logo" />
        </div>
        <div className="card-body">
          <h1 className="name">{user.name}</h1>
          <p className="role">{user.position}</p>
        </div>
        <div className="card-qr">
          <img src={qrCodeData} alt="QR Code" className="qr-code" />
        </div>
        <div className="card-footer">
          <img src={acmw} alt="ACM-W Logo" className="acm-w-logo" />
        </div>
      </div>
    </section>
  );
};

export default Id;
