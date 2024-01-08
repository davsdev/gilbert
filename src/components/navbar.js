import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">Nossa solução</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">Eventos</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">Contato</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
