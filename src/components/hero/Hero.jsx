import React from 'react';
import './Hero.css';
import '../navbar/Navbar.css';
import AbdulRahmanPhoto from '../../assets/images/AbdulRahmanKhawagaPhoto2.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="hero-content fade-in-up">
              <h1>AbdulRahman Khawaga</h1>
              <p className="subtitle">Full Stack Developer</p>
              <a href="#contact" className="btn btn-primary-custom">
                <i className="fas fa-envelope me-2"></i>Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="hero-image text-center d-flex justify-content-end">
              <img
                src={AbdulRahmanPhoto}
                alt="AbdulRahman Khawaga"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
