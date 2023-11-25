import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { DetailsPaper } from './styles'
import { HeroImage } from '../HeroCard/styles'
import InfoStacks from './components/InfoStacks'
import { useSelectedHeroContext } from '../../context/heroOptionsContext'

export default function HeroDetailsCard({ hero, showText }) {
  const { selectedHero, setSelectedHero } = useSelectedHeroContext()

  return (
    <DetailsPaper>
      {hero
        && <Grid container padding='10px' flexDirection='column'>
        {showText && <Button color='primary' onClick={() => setSelectedHero('')}>Clear hero</Button>}
        <Typography variant='h4'>{selectedHero.name}</Typography>
        <Typography variant='h6'>{selectedHero.biography['full-name']}</Typography>
        <Grid item container spacing={2}>
          <Grid item md={5}>
            <HeroImage src={selectedHero.images.md} alt={selectedHero.name} />
          </Grid>
          <Grid item md={7} container alignContent='center' justifyContent='flex-start'>
            <InfoStacks dataObject={selectedHero.powerstats} spacing={1} />
          </Grid>
        </Grid>
        { showText
          && <>
            <Grid item md={12}>
              <InfoStacks dataObject={selectedHero.biography} spacing={1} />
            </Grid>
            <Grid item md={12} justifyContent='flex-end' >
              <InfoStacks dataObject={selectedHero.appearance} spacing={1} />
            </Grid>
          </>
        }
      </Grid>
      }
    </DetailsPaper>
  )
}
