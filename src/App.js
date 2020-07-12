import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { HomePage } from './shared/pages/HomePage';
import { MainNavigation } from './shared/components/navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Route path='/' exact component={HomePage} />
    </Router>
  );
}

export default App;
