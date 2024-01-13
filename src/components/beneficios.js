import React from 'react';
import '../App.css'; 
import impacto from '../images/impactosocial.png'
import eficacia from '../images/eficacia.png'
import custos from '../images/custos.png'
import simbolo from '../images/simbolosaude.png'

const Beneficios = () => {
  return (
    <div id="apresentacao">
    <div className="seccao-container">
    <div className="imagem-container">
      <img src={simbolo} alt="simbolo" />
    </div>
    <div className="texto-container">
    <h2>
      <span style={{
        position: 'relative',
      }}>
        Triagem inteligente
        <span style={{
          content: ' ',
          position: 'absolute',
          bottom: '-4px',
          left: '0',
          width: '100%',
          height: '3px',
          background: 'linear-gradient(to right, #3498db 0%, #2ecc71 20%, #f1c40f 40%, #e67e22 60%, #e74c3c 80%)',
        }}></span>
      </span> para hospitais e clínicas de emergência
    </h2>
      <p>
      Uma solução embarcada, que pode ser instalada em um toten, cabine ou móvel.
      Ela é composta por um Kit de medição (esfignomanômetro, estetoscópio, termômetro e oxímetro) e um sistema tecnológico que usa o protocolo de Manchester e uma interação com o paciente (via chatbot) para definir a prioridade e necessidade de atendimento de forma autônoma. Além disso, também oferecemos equipamentos de impressão de pulseiras de atendimento.</p>
    </div>
    </div>
    <div className="beneficios-container">
      <div className="beneficio">
        <h4>Impacto social na saúde pública</h4>
        <img src={impacto} alt="Imagem 1" />
        <p>Ao melhorar a triagem em serviços de emergência, contribuímos para a eficiência do sistema de saúde, beneficiando toda a comunidade.</p>
      </div>

      <div className="beneficio">
        <h4>Transparência e eficácia</h4>
        <img src={eficacia} alt="Imagem 2" />
        <p>Resultados mensuráveis, demonstrando o impacto positivo da solução na eficiência e qualidade dos serviços de emergência.</p>
      </div>

      <div className="beneficio">
        <h4>Redução de custos hospitalares</h4>
        <img src={custos} alt="Imagem 3" />
        <p>Otimização dos recursos hospitalares, reduzindo custos operacionais e melhorando a rentabilidade.</p>
      </div>
    </div>

    </div>
  );
};

export default Beneficios;
