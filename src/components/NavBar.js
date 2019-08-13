import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home'
import Directors from './Directors'
import Movies from './Movies'
import Actors from './Actors'

const NavBar = () => {
  return (
    <div>
      <Home/>
      <Directors/>
      <Movies/>
      <Actors/>
    </div>
  );
};

export default NavBar;
