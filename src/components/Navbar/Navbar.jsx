// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaUser, FaBriefcase, FaLaptopCode, FaFileAlt, FaStar, FaBars, FaTimes } from 'react-icons/fa'; // FaStar as placeholder for special button

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          HS. {/* Your Initials */}
        </Link>

        <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={mobileOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" activeClassName="active" exact onClick={closeMobileMenu}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
              <FaUser /> About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
              <FaBriefcase /> Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
              <FaLaptopCode /> Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
              <FaFileAlt /> Resume
            </NavLink>
          </li>
          <li className="nav-item">
            {/* Placeholder for a special link or button like the star in example */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="nav-links special-link" onClick={closeMobileMenu}>
              <FaStar /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;