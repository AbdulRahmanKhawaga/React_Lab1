import React from 'react'
import './Portfolio.css'
import invoicesImg from '../../assets/images/invoices.PNG'
import worldOfWatchesImg from '../../assets/images/worldOfWatches.PNG'
import twitterCloningImg from '../../assets/images/twitter_cloning.PNG'
import lotelImg from '../../assets/images/Lotel.PNG'
import anemiaImg from '../../assets/images/anemia.PNG'
import youtubeCloningImg from '../../assets/images/youtube_cloning.PNG'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title text-center mb-5">Portfolio</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <div className="card-inner">
                <div className="card-front">
                  <h4 className="portfolio-title">
                    <i className="fas fa-paint-brush me-2"></i>Back-End/Laravel
                  </h4>
                </div>
                <div className="card-back">
                  <img src={invoicesImg} alt="Back-End/Laravel" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <div className="card-inner">
                <div className="card-front">
                  <h4 className="portfolio-title">
                    <i className="fas fa-mobile-alt me-2"></i>Front-end
                  </h4>
                </div>
                <div className="card-back">
                  <img src={worldOfWatchesImg} alt="Front-end" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <div className="card-inner">
                <div className="card-front">
                  <h4 className="portfolio-title">
                    <i className="fas fa-palette me-2"></i>Front-end
                  </h4>
                </div>
                <div className="card-back">
                  <img src={twitterCloningImg} alt="Front-end" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <div className="card-inner">
                <div className="card-front">
                  <h4 className="portfolio-title">
                    <i className="fas fa-code me-2"></i>Front-end
                  </h4>
                </div>
                <div className="card-back">
                  <img src={lotelImg} alt="Front-end" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <div className="card-inner">
                <div className="card-front">
                  <h4 className="portfolio-title">
                    <i className="fas fa-shopping-cart me-2"></i>AI
                  </h4>
                </div>
                <div className="card-back">
                  <img src={anemiaImg} alt="AI" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <div className="card-inner">
                <div className="card-front">
                  <h4 className="portfolio-title">
                    <i className="fas fa-code me-2"></i>Front-end
                  </h4>
                </div>
                <div className="card-back">
                  <img src={youtubeCloningImg} alt="Front-end" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
