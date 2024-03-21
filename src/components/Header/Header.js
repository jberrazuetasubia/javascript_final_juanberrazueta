// Header.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <Link to="/">
            <img className='logo' src="favicon.ico" />
          </Link>

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
              <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>Home</NavLink>
            </li>

            <li>
              <NavLink to="/about-us" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              } >About Us</NavLink>
            </li>
            <div  className='recipeButton'>
              <li className='recipeText' >
                <NavLink to="/send-recipe" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                } >Send your recipe</NavLink>
              </li>
            </div>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
