import React, { useEffect, useRef, useState } from 'react';
import HeroCard from '../HeroCard';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchBar from '../SearchBar';
import { CarouselContainer, CarouselItem, NavButtonLeft, NavButtonRight, SpinningContainer } from './styles';
import { useBattleHeroesContext } from '../../context/battleHeroesContext';

const MAX_VISIBILITY = 3;

const HeroCarousel = ({ heroes, heroPosition }) => {
  const { setBattleHeroes } = useBattleHeroesContext()
  const [active, setActive] = useState(2);
  const count = heroes.length;
  const carouselRef = useRef(null);

  const handleSearch= (hero) => {
    const selectedHero = heroes.find(indexedHero => indexedHero.name === hero)
    const index = heroes.findIndex(indexedHero => indexedHero.name === hero)
    setActive(index)

    setBattleHeroes((prev) => ({
      ...prev,
      [heroPosition]: selectedHero,
    }))
  }
  
  useEffect(() => {
    const carouselEl = carouselRef.current;
    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);
      setActive(prevActive => {
        let newActive = prevActive + delta;
        newActive = Math.max(0, Math.min(newActive, count - 1));
        return newActive;
      });
    };
    if (carouselEl) {
      carouselEl.addEventListener('wheel', handleScroll);
  
      return () => {
        carouselEl.removeEventListener('wheel', handleScroll);
      };
    }
  }, [count]);

  useEffect(() => {
    setBattleHeroes((prev) => ({
      ...prev,
      [heroPosition]: heroes[active],
    }))
  }, [active, heroPosition, heroes, setBattleHeroes])
  

  return (
    <CarouselContainer ref={carouselRef}>
      <SpinningContainer>
        {active > 0
          &&  <NavButtonLeft onClick={() => setActive(i => i - 1)}><ArrowBackIosIcon/></NavButtonLeft>}
        {heroes.map((hero, i) => (
          <CarouselItem 
            key={hero.id}
            active={active}
            index={i}
            maxVisibility={MAX_VISIBILITY}
          >
            <HeroCard hero={hero} size='big'/>
          </CarouselItem>
        ))}
        {active < count - 1
          && <NavButtonRight onClick={() => setActive(i => i + 1)}><ArrowForwardIosIcon/></NavButtonRight>}
      </SpinningContainer>
      <SearchBar suggestions={heroes} onSearch={handleSearch}/>
    </CarouselContainer>
  );
};

HeroCarousel.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({ url: PropTypes.string.isRequired})
  })).isRequired
};

export default HeroCarousel