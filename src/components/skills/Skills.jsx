import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
<section id="skills" className="skills">
  <div className="container">
    <h2 className="section-title">Skills</h2>
    <div className="row">
      <div className="col-lg-6">
        <div className="skill-item">
          <div className="skill-name">
            <span><i className="fab fa-js me-2"></i>JavaScript</span>
            <span className="skill-percentage">88%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '88%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">
            <span><i className="fab fa-php me-2"></i>PHP</span>
            <span className="skill-percentage">90%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">
            <span><i className="fab fa-python me-2"></i>Python</span>
            <span className ="skill-percentage">85%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">
            <span><i className="fas fa-code me-2"></i>C++ / Java</span>
            <span className="skill-percentage">80%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="skill-item">
          <div className="skill-name">
            <span><i className="fab fa-html5 me-2"></i>HTML5 / CSS3</span>
            <span className="skill-percentage">92%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '92%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">
            <span><i className="fas fa-database me-2"></i>MySQL</span>
            <span className="skill-percentage">85%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">
            <span><i className="fab fa-git-alt me-2"></i>Git</span>
            <span className="skill-percentage">88%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '88%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">
            <span><i className="fab fa-laravel me-2"></i>Laravel</span>
            <span className="skill-percentage">84%</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '84%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
