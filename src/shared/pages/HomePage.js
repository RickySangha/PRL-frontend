import React from 'react';

import { Banner } from '../components/UIelements/Banner';
import { HomePageCardSection } from './homepagecomponents/HomePageCardSection';
import { Footer } from '../../shared/components/UIelements/Footer';

import './HomePage.css';

export const HomePage = () => {
  return (
    <main>
      <Banner className='homepage-banner' />
      <HomePageCardSection className='homepage-cardsection' />
      <Footer />
    </main>
  );
};
