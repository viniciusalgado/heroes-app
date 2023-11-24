import { Dialog, DialogContent, Grid } from '@mui/material'
import React from 'react'
import HeroDetailsCard from '../HeroDetailsCard'
import { useBattleHeroesContext } from '../../context/battleHeroesContext'
import WinnerStamp from '../../assets/winner-stamp.png'
import { PageBackground } from '../../styles/global'
import { WinnerStampImage } from './styles'

const FightDialog = ({ open, onClose }) => {
  const { battleHeroes } = useBattleHeroesContext()
  const winner = () => {
    // if (battleHeroes.firstHero.powerstats.total > battleHeroes.secondHero.powerstats.total) {
    //   return 'left'
    // }
    return 'right'
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <PageBackground>
        <DialogContent>
          <Grid container padding={'10px'} spacing={4}>
            <Grid item md={6}>
              <HeroDetailsCard hero={battleHeroes?.firstHero}/>
            </Grid>
            <Grid item md={6}>
              <HeroDetailsCard hero={battleHeroes?.secondHero}/>
            </Grid>
          </Grid>
          <WinnerStampImage src={WinnerStamp} alt='Winner' winner={winner()}/>
        </DialogContent>
      </PageBackground>
    </Dialog>
  )
}

export default FightDialog
