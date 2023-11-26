import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import HeroCard from '../HeroCard'
import HeroDetailsCard from '../HeroDetailsCard'
import { useSelectedHeroContext } from '../../context/heroOptionsContext'
import { useHeroesContext } from '../../context/heroesContext'
import HeroesQueries from '../../services/heroesQueries'
import { PageBackground } from '../../styles/global'
import { useLoaderContext } from '../../context/loaderContext'

const OverviewPage = () => {
  const { heroes } = useHeroesContext()
  const { selectedHero, setSelectedHero } = useSelectedHeroContext()
  const { setShowLoader } = useLoaderContext()

  useEffect(() => {
    setShowLoader(heroes.length === 0)
  }, [heroes.length])
  

  const handleHeroClick = async (hero) => {
    setShowLoader(true)
    const auxHero = await HeroesQueries.getHero({ heroId: hero.id })
    setShowLoader(false)
    setSelectedHero(auxHero)
  }

  const clearHero = () => setSelectedHero('')

  return (
    <PageBackground>
      <Grid container>
        <Grid item container md={8} padding='5px' spacing={1} flexWrap='wrap' alignContent='flex-start' justifyContent='flex-start'>
          {heroes.length && heroes.map((hero, i) => (
            <Grid item key={hero.id}>
              <HeroCard hero={hero} key={hero.id} size='small' handleHeroClick={handleHeroClick}/>
            </Grid>
          ))}
        </Grid>
        <Grid item container md={4} padding='5px'>
          <HeroDetailsCard hero={selectedHero} showText={true} clearHero={clearHero}/>
        </Grid>
      </Grid>
    </PageBackground>
  )
}

export default OverviewPage
