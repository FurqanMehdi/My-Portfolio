import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../Images/title.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul
        className={isMobile ? 'navbar-links-mobile' : 'navbar-links'}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Projects
          </NavLink>
        </li>
        {/* 👇 New Skills link added here */}
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certificate"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Certificates
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Services
          </NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
