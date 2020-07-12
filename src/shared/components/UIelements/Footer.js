import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import { FooterNav } from './FooterNav';

import './Footer.css';

export const Footer = () => {
  return (
    <React.Fragment>
      <FooterNav className='footer-content'>Footer</FooterNav>
      <hr />
      <div className='footer-bottom'>
        <div className='footer-legal'>
          <h3>PRL</h3>
          <p>Premier Rec League Ltd. 2020</p>
        </div>
        <ul className='footer-social'>
          <li>
            <a href='https://www.instagram.com/?hl=en'>
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/?hl=en'>
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/?hl=en'>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
