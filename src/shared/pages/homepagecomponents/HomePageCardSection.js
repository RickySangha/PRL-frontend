import React from 'react';

import { HomePageCard } from './HomePageCard';

import soccer from '../../../assets/soccer.svg';
import manager from '../../../assets/manager.svg';
import referee from '../../../assets/referee.svg';

import './HomePageCardSection.css';

export const HomePageCardSection = (props) => {
  return (
    <div className={props.className}>
      <h2>The easiest to place to find and run sports leagues</h2>
      <ul className='homepagecardsection-list'>
        <HomePageCard
          key={1}
          to='players'
          image={soccer}
          name='Players'
          description='Play in a league...'
        />
        <HomePageCard
          key={2}
          to='referees'
          image={referee}
          name='Referees'
          description='Referee for a league...'
        />
        <HomePageCard
          key={3}
          to='managers'
          image={manager}
          name='Managers'
          description='Create and manage a league...'
        />
      </ul>
    </div>
  );
};
