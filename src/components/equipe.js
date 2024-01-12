import React from 'react';
import '../App.css';
import '../App.css'; // Importe o arquivo de estilo
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'

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
            <a href="URL_DO_LINKEDIN" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="URL_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
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
            <a href="URL_DO_LINKEDIN" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="URL_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
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
            <a href="URL_DO_LINKEDIN" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="URL_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
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
