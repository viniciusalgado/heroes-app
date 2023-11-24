import React from 'react'
import { Grid, Typography } from '@mui/material'
import { DetailsPaper } from './styles'
import { HeroImage } from '../HeroCard/styles'
import InfoStacks from './components/InfoStacks'

export default function HeroDetailsCard({ hero }) {
  return (
    <DetailsPaper>
      <Grid container padding='10px' flexDirection='column'>
        <Typography variant='h4'>{hero.name}</Typography>
        <Typography variant='h6'>{hero.biography['full-name']}</Typography>
        <Grid item container spacing={2}>
          <Grid item md={5}>
            <HeroImage src={hero.image.url} alt={hero.name} />
          </Grid>
          <Grid item md={7} container alignContent='center' justifyContent='flex-start'>
            <InfoStacks dataObject={hero.powerstats} spacing={1} />
          </Grid>
        </Grid>
        <Grid item md={12}>
          <InfoStacks dataObject={hero.biography} spacing={1} />
        </Grid>
        <Grid item md={12} justifyContent='flex-end' >
          <InfoStacks dataObject={hero.appearance} spacing={1} />
        </Grid>
      </Grid>
    </DetailsPaper>
  )
}