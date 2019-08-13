import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Home = () => {
  return (
    <div>
    <NavLink
      to="/"
      exact
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    </div>
  );
};

export default Home;
