import React from 'react';
import HeroCarousel from '../HeroCarousel';
import SupermanImg from '../../assets/1-a-bomb.jpg'

const App = () => {
  const heroes = [
    {
      name: 'Superman',
      image: SupermanImg,
      id: 0,
    },
    {
      name: 'Superman',
      image: SupermanImg,
      id: 1,
    },
    {
      name: 'Superman',
      image: SupermanImg,
      id: 2,
    },
    {
      name: 'Superman',
      image: SupermanImg,
      id: 3,
    },
    {
      name: 'Superman',
      image: SupermanImg,
      id: 4,
    },
    {
      name: 'Superman',
      image: SupermanImg,
      id: 5,
    },
    {
      name: 'Superman',
      image: SupermanImg,
      id: 6,
    }
  ];

  return (
    <div>
      <HeroCarousel heroes={heroes}/>
    </div>
  );
};

export default App;
