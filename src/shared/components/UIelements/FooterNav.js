import React from 'react';
import { NavLink } from 'react-router-dom';

import './FooterNav.css';

export const FooterNav = (props) => {
  return (
    <div className={props.className}>
      <div className='footer-content__nav'>
        <h4>Cities</h4>
        <ul className='footer-content__links'>
          <li>
            <NavLink to='/cities/surrey' exact>
              Surrey
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to='/cities/vancouver' exact>
              Vancouver
            </NavLink>
          </li>
          <li>
            <NavLink to='/cities/richmond' exact>
              Richmond
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='footer-content__nav'>
        <h4>Support</h4>
        <ul className='footer-content__links'>
          <li>
            <NavLink to='/support' exact>
              Help & Support
            </NavLink>
          </li>
          <li>
            <NavLink to='/support/players' exact>
              Playing
            </NavLink>
          </li>
          <li>
            <NavLink to='/support/referees' exact>
              Referring
            </NavLink>
          </li>
          <li>
            <NavLink to='/support/managers' exact>
              Managing
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='footer-content__nav'>
        <h4>About</h4>
        <ul className='footer-content__links'>
          <li>
            <NavLink to='/about' exact>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to='/careers' exact>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' exact>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
