import React from 'react';
import './About.css';

export default function About() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/files/AbdulRahman Mohamed Khawaga resume 28-06-2025.pdf'; 
    link.download = '/files/AbdulRahman Mohamed Khawaga resume 28-06-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="about-text">
              I specialize in designing and developing stylish, modern websites, web
              services, and online stores, ensuring that each project is tailored to
              meet the specific needs of my clients. With a keen eye for detail and
              a deep understanding of user experience design, I aim to create
              immersive and intuitive digital experiences that drive engagement and
              enhance usability.
            </p>
            <p className="about-text">
              My expertise lies in both front-end and back-end development, ensuring
              that each solution I create is both visually appealing and
              functionally robust. My background in computer science,
              bioinformatics, and AI allows me to integrate advanced technologies
              into my work, providing cutting-edge solutions for diverse industries.
            </p>
            <div className="text-center">
              <button className="btn btn-primary-custom" onClick={handleDownloadCV}>
                <i className="fas fa-download me-2"></i>Download CV
              </button>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="experience-item">
              <h4 className="experience-title">Full-Stack Development</h4>
              <h5 className="experience-company">Trainee at ITI</h5>
              <p className="experience-period">2025 - Present</p>
              <p>
                Building full-stack web apps using PHP, Laravel, and JavaScript
                frameworks with REST API and database integration.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="experience-item">
              <h4 className="experience-title">Front-end Instructor</h4>
              <h5 className="experience-company">
                Discovery Academy for science and Technolgy
              </h5>
              <p className="experience-period">2024 - 2025</p>
              <p>
                Taught HTML, CSS, JavaScript, and front-end tools through
                project-based sessions focused on responsive design.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="experience-item">
              <h4 className="experience-title">Back-end developer</h4>
              <h5 className="experience-company">Top Bussiness</h5>
              <p className="experience-period">2024 - 2025</p>
              <p>
                Developed secure back-end features with PHP & Laravel, optimized
                MySQL, and implemented APIs and authentication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
