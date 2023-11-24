import React from 'react'
import HeroCarousel from '../HeroCarousel';
import SupermanImg from '../../assets/1-a-bomb.jpg'
import VsImage from '../../assets/vs-41942.png'
import { FlexContainerButton, FlexContainerSpinners, PageBackground, VersusContainer, VersusImage } from './styles';
import ImageButton from '../ImageButton';

const BattlePage = () => {
  const heroes = [
    {
      name: 'Iron Man',
      image: SupermanImg,
      id: 0,
    },
    {
      name: 'Captain America',
      image: SupermanImg,
      id: 1,
    },
    {
      name: 'Thor',
      image: SupermanImg,
      id: 2,
    },
    {
      name: 'Hulk',
      image: SupermanImg,
      id: 3,
    },
    {
      name: 'Black Widow',
      image: SupermanImg,
      id: 4,
    },
    {
      name: 'Hawkeye',
      image: SupermanImg,
      id: 5,
    },
    {
      name: 'Spider-Man',
      image: SupermanImg,
      id: 6,
    }
  ];
  
  return (
    <PageBackground>
      <FlexContainerSpinners>
        <HeroCarousel heroes={heroes}/>
        <VersusContainer> 
          <VersusImage src={VsImage} alt='Versus'/>
        </VersusContainer>
        <HeroCarousel heroes={heroes}/>
      </FlexContainerSpinners>
      <FlexContainerButton>
        <ImageButton />
      </FlexContainerButton>
    </PageBackground>
  );
};

export default BattlePage
