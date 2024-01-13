import { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import '../navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" style={{ width: '250px' }} />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
            <Link to="hero" smooth={true} duration={1300}>
            Home
            </Link> 
            </li>
            <li>
            <Link to="apresentacao" smooth={true} duration={1300}>
            Nossa solução
            </Link>            
            </li>
            <li>
            <Link to="galeria" smooth={true} duration={1300}>
            Eventos
            </Link>             
            </li>
            <li>
            <Link to="equipe" smooth={true} duration={1300}>
            Contato
            </Link>            
            </li>
            <li>
            
            <a href="https://gilbert.satecnologia.com.br/" 
            activeClassName="active" 
            style={{
              color: '#FFFFFF',
              fontWeight: '600',
              backgroundColor: '#5B46D4',
              borderRadius: '25px',  
              padding: '10px'  
            }}>
            Login
            </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
