import React, { useState, useRef, useEffect } from 'react'
import './information.css'
import logo from '../../Assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setQr } from '../../Redux/idActions';
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

const Information = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [position, setPosition] = useState("");

  const qrRef = useRef()

  const dispatch = useDispatch();

  const {user} = useSelector(state=>state);
  const data = JSON.stringify(user)

  const handleName = (e) => {
    const text =  e.target.value;
    setName(text);
  }
  const handleRoll = (e) => {
    const text = e.target.value;
    setRoll(text);
  }
  const handlePosition = (e) => {
    const text = e.target.value;
    setPosition(text);
  }
  const handleSubmit = () => {
    const emptyFieldRegex = /^$/;

    if (emptyFieldRegex.test(name.trim()) || emptyFieldRegex.test(roll.trim()) || emptyFieldRegex.test(position.trim())) {
      alert('Fill all the required details');
      return; // Exit the function if any field is empty
    }
    dispatch(setUser(name.toUpperCase(), roll.toUpperCase(), position.toUpperCase()))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    };

    // Attach the event listener to the whole page
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [name, roll, position]); // Add dependencies to rerun the effect if the state changes

  useEffect(() => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      const imageURL = canvas.toDataURL('image/png'); // Convert canvas to base64 image (PNG format)
      // Automatically dispatch the action to store the QR code data in Redux
      dispatch(setQr(imageURL));

      // Get the SVG element (from QRCodeSVG component)
      const svgElement = qrRef.current.querySelector('svg');
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;
      console.log(svgUrl);
    }
  }, [data, dispatch]); // Re-run effect if `data` changes

  return (
    <section id='info' className='main-page'>
      <div className="user-info-container">
        <div className="user-profile-icon">
          { user ?
              <div ref={qrRef}>
              <QRCodeCanvas value={data} />
              <QRCodeSVG value={data} style={{ display: 'none' }} />
              </div>
            : <img src={logo} alt="ACM"/>
          }
        </div>
        <div className="user-info">
          <span>My Profile</span>
          <input placeholder='Name...' value={name} onChange={(e)=>handleName(e)}/>
          <input placeholder='Roll Number...' value={roll} onChange={(e)=>handleRoll(e)}/>
          <input placeholder='Position...' value={position} onChange={(e)=>handlePosition(e)}/>
          <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Information