import React, { useEffect, useRef, useState } from 'react';
import HeroCard from '../HeroCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchBar from '../SearchBar';
import { CarouselContainer, CarouselItem, NavButtonLeft, NavButtonRight, SpinningContainer } from './styles';

const MAX_VISIBILITY = 3;

const HeroCarousel = ({ heroes }) => {
  const [active, setActive] = useState(2);
  const count = heroes.length;
  const carouselRef = useRef(null);

  const handleSearch= (hero) => {
    const index = heroes.findIndex(indexedHero => indexedHero.name === hero)
    setActive(index)
  }
  
  useEffect(() => {
    const carouselEl = carouselRef.current;
    const handleScroll = (event) => {
      console.log('trigger')
      console.log({event})
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
            <HeroCard hero={hero} />
          </CarouselItem>
        ))}
        {active < count - 1
          && <NavButtonRight onClick={() => setActive(i => i + 1)}><ArrowForwardIosIcon/></NavButtonRight>}
      </SpinningContainer>
      <SearchBar suggestions={heroes} onSearch={handleSearch}/>
    </CarouselContainer>
  );
};

export default HeroCarousel