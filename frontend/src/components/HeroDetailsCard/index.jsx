import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { DetailsPaper } from './styles'
import { HeroImage } from '../HeroCard/styles'
import InfoStacks from './components/InfoStacks'

export default function HeroDetailsCard({ hero, showText, clearHero }) {

  return (
    <DetailsPaper>
      {hero
        && <Grid container padding='10px' flexDirection='column'>
        {showText && <Button color='primary' onClick={clearHero}>Clear hero</Button>}
        <Typography variant='h4'>{hero.name}</Typography>
        <Typography variant='h6'>{hero.biography.fullName}</Typography>
        <Grid item container spacing={2}>
          <Grid item md={5}>
            <HeroImage src={hero.images.md} alt={hero.name} />
          </Grid>
          <Grid item md={7} container alignContent='center' justifyContent='flex-start'>
            <InfoStacks dataObject={hero.powerstats} spacing={1} />
          </Grid>
        </Grid>
        { showText
          && <>
            <Grid item md={12}>
              <InfoStacks dataObject={hero.biography} spacing={1} />
            </Grid>
            <Grid item md={12} justifyContent='flex-end' >
              <InfoStacks dataObject={hero.appearance} spacing={1} />
            </Grid>
          </>
        }
      </Grid>
      }
    </DetailsPaper>
  )
}
