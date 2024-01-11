import React from 'react';
import '../App.css';
import sarahgilbert from '../images/sarahgilbert.png'

function Dashboard() {
    return (
      <div className="seccao-container">
        <div className="imagem-container">
          <img src={sarahgilbert} alt="sarahgilbert" />
        </div>
        <div className="texto-container">
          <h2>
            <span style={{ color: '#E65775' }}>Conheça</span> nossa inspiração
          </h2>
          <p>
          Demos o nome ao projeto de Gilbert em homenagem a Sarah Catherine Gilbert, especialista e professora vacinologia na Universidade de Oxford. Ela é especializada no desenvolvimento de vacinas contra o vírus influenza e patógenos virais emergentes. Em 30 de dezembro de 2020, a vacina para a Covid desenvolvida pela Universidade de Oxford, liderada por Sarah, foi aprovada para uso no Reino Unido.
          </p>
        </div>
      </div>
    );
  }

  export default Dashboard;                                              