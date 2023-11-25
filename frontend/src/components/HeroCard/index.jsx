import React from 'react';
import PropTypes from 'prop-types';
import { useSelectedHeroContext } from '../../context/heroOptionsContext';
import { HeroCardContainer, HeroImage, HeroName } from './styles';

const HeroCard = ({ hero, size, handleHeroClick }) => {
  const { selectedHero } = useSelectedHeroContext()
  const arrayMatch = selectedHero ? hero.name === selectedHero.name : true
  const imageSource = size === 'big' ? hero.images.md : hero.images.sm

  return (
    <HeroCardContainer size={size} onClick={handleHeroClick ? () => handleHeroClick(hero) : ()=>{}}>
      <HeroImage src={imageSource} alt={hero.name} size={size} disabled={!arrayMatch}/>
      {size === 'big' ? <HeroName>{hero.name}</HeroName> : null}
    </HeroCardContainer>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image:  PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  }).isRequired,
  size: PropTypes.string.isRequired
};

export default HeroCard;
