import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <h5>Get In Touch</h5>
        <p className="mb-4">
          Ready to start a project or just want to chat? Feel free to reach out!
        </p>

        <ul className="contact-info">
          <li>
            <i className="fas fa-envelope"></i>
            <span>AbdulRahmanKh1010&#64;gmail.com</span>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <span>+20 101 8996 721</span>
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>Shebin-Elkom/Menofia/Egypt</span>
          </li>
        </ul>

        <div className="social-links justify-content-center">
          <a
            href="https://www.linkedin.com/in/abdulrahman-khawaga-7bab09273/"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/AbdulRahmanKhawaga" title="GitHub">
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.facebook.com/abdelrahaman.khawaga/"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2025 AbdulRahman Khawaga. All rights reserved.</p>
    </div>
  </div>
</footer>

  )
}
