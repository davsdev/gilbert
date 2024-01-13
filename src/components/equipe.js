import React from 'react';
import '../App.css';
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'

/* Importe ou atualize abaixo as fotos da equipe */

import profile1 from '../images/profile1.jpeg';
import profile2 from '../images/profile2.png';
import profile3 from '../images/profile3.jpeg';


function Equipe() {
  return (
    <div id="equipe">
      
    <h1 style={{ textAlign: 'center' }}>
    <span style={{ color: '#E65775' }}>Conheça</span>{' '}
    <span style={{ color: '#515151' }}>o nosso time</span>
    </h1>
    <div className="card-container">
      <div className="card">
        <img src={profile1} alt="Profile" className="profile-img" />
        <div className="info-container">
          <h3>Laiza Vieira</h3>
          <h4>CEO</h4>
          <h5>Chief Executive Officer</h5>
          <div className="social-icons-equipe">
            <a href="https://www.linkedin.com/in/laiza-vieira-611b2754/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/laizavieira49/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={profile2} alt="Profile" className="profile-img" />
        <div className="info-container">
          <h3>Rogerio Alencar</h3>
          <h4>CTO</h4>
          <h5>Chief Technology Officer</h5>
          <div className="social-icons-equipe">
            <a href="https://www.linkedin.com/in/rogeriofilho/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/rogerioalencarfilho/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={profile3} alt="Profile" className="profile-img" />
        <div className="info-container">
          <h3>Thiago Silva</h3>
          <h4>COO</h4>
          <h5>Chief Operating Officer</h5>
          <div className="social-icons-equipe">
            <a href="https://www.linkedin.com/in/thiagosilvatj/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/thiagosilvatj_/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Equipe;
