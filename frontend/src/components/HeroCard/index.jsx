import React from 'react';
import PropTypes from 'prop-types';
import { HeroCardContainer, HeroImage, HeroName } from './styles';

const HeroCard = ({ hero }) => {
  return (
    <HeroCardContainer>
      <HeroImage src={hero.image} alt={hero.name} />
      <HeroName>{hero.name}</HeroName>
    </HeroCardContainer>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroCard;
