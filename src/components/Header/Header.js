// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          {/* <Link to="/">Recipe App</Link> */}
          <a>Test</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
          <a>Test</a>
            </li>
            <li>
          <a>Test</a>
            </li><li>
          <a>Test</a>
            </li>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li> */}
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
