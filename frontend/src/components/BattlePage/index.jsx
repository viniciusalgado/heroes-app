import React from 'react'
import HeroCarousel from '../HeroCarousel';
import VsImage from '../../assets/vs-41942.png'
import ImageButton from '../ImageButton';
import { PageBackground } from '../../styles/global'
import { FlexContainerButton, FlexContainerSpinners, VersusContainer, VersusImage } from './styles';

import { heroes } from '../../mock/heroesMock'
const BattlePage = () => {

  const handleFight = () => {

  }
  
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
        <ImageButton onClick={handleFight}/>
      </FlexContainerButton>
    </PageBackground>
  );
};

export default BattlePage
