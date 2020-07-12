import React from 'react';

import { SearchBar } from './SearchBar';

import './Banner.css';

export const Banner = (props) => {
  return (
    <div className={props.className}>
      <div className='banner-backdrop'>
        <div className='banner-items'>
          <h1>PlayPRL</h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
