import React from 'react';
import '../App.css';
import dashboard from '../images/dashboard.png'

function Dashboard() {
    return (
      <div className="seccao-container">
        <div className="texto-container">
          <h2>
            <span style={{ color: '#E65775' }}>Monitore</span> os seus resultados
          </h2>
          <p>
            Acompanhe o progresso, meça o impacto. Nosso compromisso vai além de oferecer uma solução inovadora para triagens hospitalares. É sobre proporcionar a você uma visão detalhada e tangível dos resultados que alcança.
          </p>
          <p>
            Nosso dashboard exclusivo oferece uma análise abrangente e instantânea dos dados obtidos. Com ele, você terá acesso a uma visão holística do desempenho, traduzindo em números e métricas tangíveis o impacto positivo que nossa solução traz para a eficiência e qualidade dos serviços de emergência.
          </p>
        </div>
        <div className="imagem-container">
          <img src={dashboard} alt="dashboard" />
        </div>
      </div>
    );
  }

  export default Dashboard;                                              