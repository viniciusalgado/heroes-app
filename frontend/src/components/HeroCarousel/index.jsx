import React, { useEffect, useRef, useState } from 'react';
import HeroCard from '../HeroCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CarouselContainer, CarouselItem, NavButtonLeft, NavButtonRight, SpinningContainer } from './styles';

const MAX_VISIBILITY = 3;

const HeroCarousel = ({ heroes }) => {
  const [active, setActive] = useState(2);
  const count = heroes.length;
  const carouselRef = useRef(null);

  
  useEffect(() => {
    const carouselEl = carouselRef.current;
    const handleScroll = (event) => {
      console.log('trigger')
      console.log({event})
      // Determine scroll direction
      const delta = Math.sign(event.deltaY);
      setActive(prevActive => {
        // Calculate new active index based on scroll direction
        let newActive = prevActive + delta;
        // Ensure new index is within bounds
        newActive = Math.max(0, Math.min(newActive, count - 1));
        return newActive;
      });
    };
    if (carouselEl) {
      // Add event listener for wheel scroll
      carouselEl.addEventListener('wheel', handleScroll);
  
      // Cleanup the event listener on unmount
      return () => {
        carouselEl.removeEventListener('wheel', handleScroll);
      };
    }
  }, [count]);

  return (
    <CarouselContainer ref={carouselRef}>
      <SpinningContainer>
        <NavButtonLeft onClick={() => setActive(i => i - 1)}><ArrowBackIosIcon/></NavButtonLeft>
        {heroes.map((hero, i) => (
          <CarouselItem 
            key={hero.id} 
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointerEvents': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            <HeroCard hero={hero} />
          </CarouselItem>
        ))}
        <NavButtonRight onClick={() => setActive(i => i + 1)}><ArrowForwardIosIcon/></NavButtonRight>
      </SpinningContainer>
    </CarouselContainer>
  );
};

export default HeroCarousel