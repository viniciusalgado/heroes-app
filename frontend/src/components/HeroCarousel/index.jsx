import React, { useEffect, useRef, useState } from 'react';
import HeroCard from '../HeroCard';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchBar from '../SearchBar';
import { CarouselContainer, CarouselItem, NavButtonLeft, NavButtonRight, SpinningContainer } from './styles';
import { useBattleHeroesContext } from '../../context/battleHeroesContext';

const MAX_VISIBILITY = 3;

const visibleFilter = ({ heroes, active }) => {
  const visibleHeroes = heroes.filter(hero => {
    return !!(hero.id < active + 2 && hero.id > active - 2);
  })
  console.log({heroes})
  console.log({active})
  console.log({visibleHeroes})
  return visibleHeroes || []
}

const HeroCarousel = ({ heroes, heroPosition }) => {
  const { setBattleHeroes } = useBattleHeroesContext()
  const [active, setActive] = useState(1);
  const [visibleCards, setVisibleCards] = useState(visibleFilter({ heroes, active: 1}))
  const count = heroes.length;
  const carouselRef = useRef(null);

  const handleSearch= (hero) => {
    const selectedHero = heroes.find(indexedHero => indexedHero.name === hero)
    setActive(selectedHero.id)

    setBattleHeroes((prev) => ({
      ...prev,
      [heroPosition]: selectedHero,
    }))
  }

  const handleLeftClick = () => {
    setActive(i => {
      if (i > 1) {
        let newActive = i - 1
        setVisibleCards(visibleFilter({ heroes, active: newActive}))
        return newActive
      }
      return i
    })
  }

  const handleRightClick = () => {
    setActive(i => {
      if (i < count) {
        let newActive = i + 1
        setVisibleCards(visibleFilter({ heroes, active: newActive}))
        return newActive
      }
      return i
    })
  }
  
  useEffect(() => {
    const carouselEl = carouselRef.current;
    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);
      setActive(prevActive => {
        let newActive = prevActive + delta;
        newActive = Math.max(1, Math.min(newActive, count));
        setVisibleCards(visibleFilter({ heroes, active: newActive}))
        return newActive;
      });
    };
    if (carouselEl) {
      carouselEl.addEventListener('wheel', handleScroll);
  
      return () => {
        carouselEl.removeEventListener('wheel', handleScroll);
      };
    }
  }, [heroes, count, setVisibleCards]);

  useEffect(() => {
    setBattleHeroes((prev) => ({
      ...prev,
      [heroPosition]: heroes[active],
    }))
  }, [active, heroPosition, heroes, setBattleHeroes])
  

  return (
    <CarouselContainer ref={carouselRef}>
      <SpinningContainer>
        {active > 1
          &&  <NavButtonLeft onClick={handleLeftClick}><ArrowBackIosIcon/></NavButtonLeft>}
        {visibleCards.map((hero) => (
          <CarouselItem 
            key={hero.id}
            active={active}
            index={hero.id}
            maxVisibility={MAX_VISIBILITY}
          >
            <HeroCard hero={hero} size='big'/>
          </CarouselItem>
        ))}
        {active < count
          && <NavButtonRight onClick={handleRightClick}><ArrowForwardIosIcon/></NavButtonRight>}
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