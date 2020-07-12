import React, { useContext } from 'react';
//The NavLink class from react-router-som is similar to Link for routing but it also gives us some additional features, eg. allow us to select active links in our navigation
import { NavLink } from 'react-router-dom';

import './NavLinks.css';
// import { authContext } from '../../context/auth-context';

export const NavLinks = () => {
  //useContext returns the value we passed into our provided. If there was no provider the default from our authcontext would be returned.
  // const auth = useContext(authContext);
  const auth = { isLoggedIn: false };

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/players' exact>
          Players
        </NavLink>
      </li>
      <li>
        <NavLink to='/referees' exact>
          Rerfees
        </NavLink>
      </li>
      <li>
        <NavLink to='/managers' exact>
          Managers
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/u1/places'>My Places</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/places/new'>New Place</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>LOGIN</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};
