import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage} from '../pages';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <PeoplePage />
    </div>
  );
};

export default App;
