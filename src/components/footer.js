import React from 'react';
import '../App.css'; 
import botaofooter from '../images/botaofooter.png'
import instagramfooter from '../images/instagramfooter.png'
import linkedinfooter from '../images/linkedinfooter.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section-a">
        <h4>
          Se você enfrenta desafios como a sobrecarga nos serviços hospitalares, atendimentos não urgentes consumindo
          recursos valiosos, e a necessidade de uma triagem eficiente,{' '}
          <span style={{ color: '#E65775' }}>fale conosco.</span>
        </h4>
        <a href="https://wa.me/+558183643267" target="_blank" rel="noopener noreferrer">
          <img src={botaofooter} alt="Botão" className="button-image" />
        </a>
      </div>
      <div className="footer-section-b">
        <div className="social-icons">
          <h4>Nossas redes:</h4>
          <a href="https://wa.me/+558183643267" target="_blank" rel="noopener noreferrer">
          <img src={linkedinfooter} alt="Botão" className="button-image" />
          </a>
          <a href="https://www.instagram.com/gilberthealthtech/" target="_blank" rel="noopener noreferrer">
          <img src={instagramfooter} alt="Botão" className="button-image" />
          </a>        </div>
        <h4>&copy; 2023 Gilbert</h4>
      </div>
    </div>
  );
}

export default Footer;
