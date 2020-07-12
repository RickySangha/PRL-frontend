import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import './SideDrawer.css';

export const SideDrawer = (props) => {
  const drawer = (
    <motion.aside
      className='side-drawer'
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
    >
      {props.children}
    </motion.aside>
  );

  return ReactDOM.createPortal(drawer, document.getElementById('drawer-hook'));
};
