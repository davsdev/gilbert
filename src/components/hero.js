import React from 'react';
import '../App.css';
import totem from '../images/totem.png'


function Hero() {
    return (
      <div className="hero"> 
      <div className="seccao-container">
        <div className="texto-container-dashboard">
          <h1>
            <span style={{color: '#E65775'}}>Transformando</span> atendimentos em emergência
          </h1>
           <h3>
            Triagem, emergência, saúde e tecnologia.
          </h3>
          <p>
          Em um mundo onde até 82% dos atendimentos de emergência não são urgentes, apresentamos uma solução inovadora para aprimorar a triagem e transformar a experiência de saúde.
          </p>
        </div>
        <div className="imagem-container">
          <img src={totem} alt="totem" />
        </div>
      </div>
      </div> 
    );
  }

  export default Hero;     