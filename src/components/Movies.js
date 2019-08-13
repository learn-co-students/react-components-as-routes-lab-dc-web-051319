import React from 'react';
import { movies } from '../data';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Movies = () => {
  return (
    <div>
    <NavLink
      to="/movies"
      exact
      activeStyle={{
        background: 'darkblue'
      }}
    >Movies</NavLink>
    </div>
  );
};

export default Movies;
