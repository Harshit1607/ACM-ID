import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import './Footer.css'

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="social-icons">
        <a
          href="https://www.instagram.com/acm_bvp"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
        </a>
        <a
          href="https://twitter.com/acmbvp"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
        </a>
        <a
          href="https://in.linkedin.com/organization-guest/company/acmbvp"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin" />
        </a>
        <a
          href="https://github.com/acmbvp"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon github" />
        </a>
        <a
          href="https://www.facebook.com/acmbvp"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
        </a>
      </div>

      <h1 className="heading">COPYRIGHT © {new Date().getFullYear()}</h1>
      <p className="sub-heading">
        Powered by <a href="https://bvcoe.acm.org/">ACM BVP</a>. All rights
        reserved.
      </p>
      <p className="sub-heading credit">
        Created by{" "}
        <a
          href=" "
          target="_blank"
          rel="noopener noreferrer"
          className="credit-link underline"
        >
          Harshit Bareja
        </a>
      </p>
    </section>
  )
}

export default Footer