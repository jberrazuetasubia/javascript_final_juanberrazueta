import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.scss';

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
            <img className="logo" src="favicon.ico" alt="Logo" />
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <IconButton color="inherit" aria-label="close menu">
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" aria-label="open menu">
              <MenuIcon />
            </IconButton>
          )}
        </div>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/recipes" activeClassName="active">
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="sendRecipe" to="/send-recipe">Send your recipe</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
