import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <NavLink to="/">My Profile</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/rockets">Rockets</NavLink>
    </nav>
  </header>
);

export default Navbar;
