import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div className="header">
      <h1 className="title">Space Travelers</h1>
      <nav>
        <NavLink className="link" to="/">Rockets</NavLink>
        <NavLink className="link" to="/missions">Missions</NavLink>
        <hr className="nav-hr" />
        <NavLink className="link" to="/myprofile">My Profile</NavLink>
      </nav>
    </div>
    <hr className="header-hr" />
  </header>
);

export default Navbar;
