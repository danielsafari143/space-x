import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/img/planet.png';

const Navbar = () => (
  <header>
    <div className="header">
      <h1 className="title">
        <img src={planet} alt="logo" />
        Space Travelers
      </h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active link' : 'pending link')}
        >
          Rockets
        </NavLink>
        <NavLink className="link" to="/missions">Missions</NavLink>
        <hr className="nav-hr" />
        <NavLink className="link" to="/myprofile">My Profile</NavLink>
      </nav>
    </div>
    <hr className="header-hr" />
  </header>
);

export default Navbar;
