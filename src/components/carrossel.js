import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import backButtonImage from '../images/bck.png';
import forwardButtonImage from '../images/fwd.png';
import '../App.css';

// Importe as imagens
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

function Carrossel() {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = 768;
      setShowArrows(window.innerWidth >= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
    width: '50px',
    height: '45px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const outerContainerStyle = {
    overflow: 'hidden',
    maxWidth: '70%',
    margin: '0 auto',
    padding: '10px 10px 60px',
  };

  const carouselContainerStyle = {
    borderRadius: '30px',
    overflow: 'hidden',
  };

  return (
    <div id="galeria">
      
    <div style={outerContainerStyle}>
      <h1 style={{ textAlign: 'center' }}>
        <span style={{ color: '#E65775' }}>Acompanhe</span>{' '}
        <span style={{ color: '#515151' }}>a nossa jornada</span>
      </h1>
      <div style={carouselContainerStyle}>
        <Carousel
          showArrows={showArrows} // Mostra ou oculta as setas
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          swipeable={true}
          emulateTouch={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            showArrows &&
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...buttonStyle, left: '20px' }}
              >
                <img src={backButtonImage} alt="Back" style={{ width: '100%', height: '100%' }} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            showArrows &&
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...buttonStyle, right: '20px' }}
              >
                <img
                  src={forwardButtonImage}
                  alt="Forward"
                  style={{ width: '100%', height: '100%' }}
                />
              </button>
            )
          }
        >
          <div>
            <img src={img1} alt="Teste 1" />
          </div>
          <div>
            <img src={img2} alt="Teste 2" />
          </div>
          <div>
            <img src={img3} alt="Teste 3" />
          </div>
        </Carousel>
      </div>
    </div>

    </div>
  );
}

export default Carrossel;
