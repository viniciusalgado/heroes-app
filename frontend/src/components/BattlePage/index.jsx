import React, { useEffect, useState } from 'react'
import HeroCarousel from '../HeroCarousel'
import VsImage from '../../assets/vs-image.png'
import ImageButton from '../ImageButton'
import { PageBackground } from '../../styles/global'
import { FlexContainerButton, FlexContainerSpinners, VersusContainer, VersusImage } from './styles'
import FightDialog from '../FightDialog'
import HeroesQueries from '../../services/heroesQueries'
import { useSelectedHeroContext } from '../../context/heroOptionsContext'
import { useBattleHeroesContext } from '../../context/battleHeroesContext'
import { useLoaderContext } from '../../context/loaderContext'
import { useHeroesContext } from '../../context/heroesContext'

const BattlePage = () => {
  const { heroes } = useHeroesContext()
  const { setShowLoader } = useLoaderContext()
  const { setSelectedHero } = useSelectedHeroContext()
  const { battleHeroes } = useBattleHeroesContext()
  const [fightOpen, setFightOpen] = useState(false)
  const [ heroesForBattle, setHeroesForBattle ] = useState({})

  useEffect(() => {
    (async () => {
      if (battleHeroes?.firstHero?.id && battleHeroes?.secondHero?.id) {
        const firstHero = await HeroesQueries.getHero({ heroId: battleHeroes?.firstHero?.id})
        const secondHero = await HeroesQueries.getHero({ heroId: battleHeroes?.secondHero?.id})

        setHeroesForBattle({
          firstHero,
          secondHero 
        })

      }
    })()
  }, [battleHeroes?.firstHero?.id, battleHeroes?.secondHero?.id])  

  useEffect(() => {
    setSelectedHero('')
  }, [])

  useEffect(() => {
    setShowLoader(heroes.length === 0)
  }, [heroes.length])

  const handleFight = async () => {
    setShowLoader(true)
    if (battleHeroes?.firstHero?.id && battleHeroes?.secondHero?.id) {
      const firstHero = await HeroesQueries.getHero({ heroId: battleHeroes?.firstHero?.id})
      const secondHero = await HeroesQueries.getHero({ heroId: battleHeroes?.secondHero?.id})

      setHeroesForBattle({
        firstHero,
        secondHero 
      })
      setFightOpen(true)
      setShowLoader(false)
    }
  }
  
  return (
    <PageBackground>
      {
        heroes.length 
          && <>
            <FlexContainerSpinners>
              <HeroCarousel heroPosition='firstHero' />
              <VersusContainer> 
                <VersusImage src={VsImage} alt='Versus'/>
              </VersusContainer>
              <HeroCarousel heroPosition='secondHero' />
            </FlexContainerSpinners>
            <FlexContainerButton>
              <ImageButton onClick={handleFight} disabled={battleHeroes?.firstHero?.id === battleHeroes?.secondHero?.id}/>
            </FlexContainerButton>
          </>
      }
      <FightDialog open={fightOpen} onClose={() => setFightOpen(false)} heroesForBattle={heroesForBattle}/>
    </PageBackground>
  )
}

export default BattlePage
