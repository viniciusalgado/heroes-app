import React from 'react'
import { Dialog, DialogContent, Grid } from '@mui/material'
import HeroDetailsCard from '../HeroDetailsCard'
import WinnerStamp from '../../assets/winner-stamp.png'
import { PageBackground } from '../../styles/global'
import { WinnerStampImage } from './styles'

const FightDialog = ({ open, onClose, heroesForBattle }) => {
  const winner = () => {
    if (heroesForBattle?.firstHero?.powerstats?.total > heroesForBattle?.secondHero?.powerstats?.total) {
      return 'left'
    }
    return 'right'
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <PageBackground>
        <DialogContent>
          <Grid container padding={'10px'} spacing={4}>
            <Grid item md={6}>
              <HeroDetailsCard hero={heroesForBattle?.firstHero}/>
            </Grid>
            <Grid item md={6}>
              <HeroDetailsCard hero={heroesForBattle?.secondHero}/>
            </Grid>
          </Grid>
          <WinnerStampImage src={WinnerStamp} alt='Winner' winner={winner()}/>
        </DialogContent>
      </PageBackground>
    </Dialog>
  )
}

export default FightDialog
