import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            <i className="fas fa-home"></i> All
          </NavLink>
        </li>
        <li>
          <NavLink to="/fullstack-development" activeClassName="active">
            <i className="fas fa-code"></i> Full Stack Development
          </NavLink>
        </li>
        <li>
          <NavLink to="/data-science" activeClassName="active">
            <i className="fas fa-database"></i> Data Science
          </NavLink>
        </li>
        <li>
          <NavLink to="/cyber-security" activeClassName="active">
            <i className="fas fa-shield-alt"></i> Cyber Security
          </NavLink>
        </li>
        <li>
          <NavLink to="/career" activeClassName="active">
            <i className="fas fa-briefcase"></i> Career
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
