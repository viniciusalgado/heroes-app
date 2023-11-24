import React, { useEffect, useState } from 'react'
import HeroCarousel from '../HeroCarousel';
import VsImage from '../../assets/vs-image.png'
import ImageButton from '../ImageButton';
import { PageBackground } from '../../styles/global'
import { FlexContainerButton, FlexContainerSpinners, VersusContainer, VersusImage } from './styles';
import FightDialog from '../FightDialog';
import { useSelectedHeroContext } from '../../context/heroOptionsContext';

import { heroes } from '../../mock/heroesMock'

const BattlePage = () => {
  const { setSelectedHero } = useSelectedHeroContext()
  const [fightOpen, setFightOpen] = useState(false)

  useEffect(() => {
    setSelectedHero('')
  }, [setSelectedHero])

  const handleFight = () => {
    setFightOpen(true)
  }
  
  return (
    <PageBackground>
      <FlexContainerSpinners>
        <HeroCarousel heroes={heroes} heroPosition='firstHero' />
        <VersusContainer> 
          <VersusImage src={VsImage} alt='Versus'/>
        </VersusContainer>
        <HeroCarousel heroes={heroes} heroPosition='secondHero' />
      </FlexContainerSpinners>
      <FlexContainerButton>
        <ImageButton onClick={handleFight}/>
      </FlexContainerButton>
      <FightDialog open={fightOpen} onClose={() => setFightOpen(false)}/>
    </PageBackground>
  );
};

export default BattlePage
