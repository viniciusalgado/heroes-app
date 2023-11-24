import React, { useState } from 'react';
import { Grid } from '@mui/material';
import HeroCard from '../HeroCard';
import { heroes } from '../../mock/heroesMock';
import HeroDetailsCard from '../HeroDetailsCard';
import { PageBackground } from '../../styles/global';

const OverviewPage = () => {
  const [selectedHero, setSelectedHero] = useState()

  const handleHeroClick = (hero) => {
    setSelectedHero(hero)
  }

  return (
    <PageBackground>
      <Grid container>
        <Grid item container md={8} padding='5px' spacing={1} flexWrap='wrap' alignContent='flex-start' justifyContent='flex-start'>
          {heroes.map((hero, i) => (
            <Grid item key={hero.id}>
              <HeroCard hero={hero} key={hero.id} size='small' handleHeroClick={handleHeroClick}/>
            </Grid>
          ))}
        </Grid>
        <Grid item container md={4} padding='5px'>
          <HeroDetailsCard hero={selectedHero}/>
        </Grid>
      </Grid>
    </PageBackground>
  )
};

export default OverviewPage;
