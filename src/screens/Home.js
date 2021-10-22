import React from 'react';
import Cli from '../components/Cli';
import Cloud from '../components/Cloud';
import Languages from '../components/Languages';
import Showcase from '../components/Showcase';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <>
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />
    </>
  );
};

export default Home;