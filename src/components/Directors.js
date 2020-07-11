import React from 'react';
import { directors } from '../data';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Directors = () => {
  return (
    <div>
      <NavLink
        to="/directors"
        exact
        activeStyle={{
          background: 'darkblue'
        }}>
      Directors
      </NavLink>
      <div>
        Directors Page
      </div>
    </div>
  );
}

export default Directors
