import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { MainHeader } from './MainHeader';
import { NavLinks } from './NavLinks';
import { SideDrawer } from './SideDrawer';
import svg from '../../../assets/icons/burger-icon.svg';
import './MainNavigation.css';

export const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openCloseDrawer = () => {
    setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen);
  };

  return (
    <MainHeader>
      <h1>PRL</h1>
      <button
        onClick={openCloseDrawer}
        className='main-navigation__menuopen-btn'
      >
        <img src={svg} />
      </button>
      <nav className='main-navigation__header-nav'>
        <NavLinks />
      </nav>
      <AnimatePresence>
        {isDrawerOpen && (
          <SideDrawer>
            <button
              onClick={openCloseDrawer}
              className='main-navigation__menuclose-btn'
            >
              <img src={svg} />
            </button>
            <nav className='main-navigation__drawer-nav'>
              <NavLinks />
            </nav>
          </SideDrawer>
        )}
      </AnimatePresence>
    </MainHeader>
  );
};
