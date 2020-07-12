import React from 'react';
//Link component can be used to route to different urls
import { Link } from 'react-router-dom';
import { Card } from '../../components/UIelements/Card';

import './HomePageCard.css';

export const HomePageCard = (props) => {
  return (
    <li className='homepage-card'>
      <Card className='homepage-card__content'>
        <Link to={`/${props.to}`}>
          <div className='homepage-card__image'>
            <img src={props.image} alt='referee' />
          </div>
          <div className='homepage-card__info'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className='homepage-card__button'>Read More</div>
          </div>
        </Link>
      </Card>
    </li>
  );
};
