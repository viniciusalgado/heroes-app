import React from 'react';
import PropTypes from 'prop-types';
import { HeroCardContainer, HeroImage, HeroName } from './styles';

const HeroCard = ({ hero, size, handleHeroClick }) => {
  return (
    <HeroCardContainer size={size} onClick={() => handleHeroClick(hero)}>
      <HeroImage src={hero.image.url} alt={hero.name} size={size}/>
      {size === 'big' ? <HeroName>{hero.name}</HeroName> : null}
    </HeroCardContainer>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.string.isRequired
};

export default HeroCard;
