import React, { useEffect, useRef, useState } from 'react'
import HeroCard from '../HeroCard'
import PropTypes from 'prop-types'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SearchBar from '../SearchBar'
import { CarouselContainer, CarouselItem, NavButtonLeft, NavButtonRight, SpinningContainer } from './styles'
import { useBattleHeroesContext } from '../../context/battleHeroesContext'
import { useHeroesContext } from '../../context/heroesContext'

const MAX_VISIBILITY = 3

const visibleFilter = ({ heroes, active }) => {
  if (heroes.length) {
    const activeIndex = heroes.findIndex((hero) => hero.id === active)

    const startIndex = Math.max(0, activeIndex - 1)
    const endIndex = Math.min(heroes.length, activeIndex + 2)

    const visibleHeroes = heroes.slice(startIndex, endIndex)
    return visibleHeroes
  }

  return []
}


const HeroCarousel = ({ heroPosition }) => {
  const { setBattleHeroes } = useBattleHeroesContext()
  const { heroes } = useHeroesContext()
  const [active, setActive] = useState(heroes[0]?.id)
  const [visibleCards, setVisibleCards] = useState(visibleFilter({ heroes, active: 1}))
  const count = heroes.length
  const carouselRef = useRef(null)

  const handleSearch= (hero) => {
    if (hero) {
      setActive(hero.id)
      setVisibleCards(visibleFilter({ heroes, active: hero.id }))
    }
  }

  const handleLeftClick = () => {
    const currentIndex = heroes.findIndex(hero => hero.id === active)
    if (currentIndex > 0) {
      const newActive = heroes[currentIndex - 1].id
      setActive(newActive)
      setVisibleCards(visibleFilter({ heroes, active: newActive }))
    }
  }

  const handleRightClick = () => {
    const currentIndex = heroes.findIndex(hero => hero.id === active)
    if (currentIndex < count - 1) {
      const newActive = heroes[currentIndex + 1].id
      setActive(newActive)
      setVisibleCards(visibleFilter({ heroes, active: newActive }))
    }
  }
  
  useEffect(() => {
    const selectedHero = heroes.find(indexedHero => indexedHero.id === active)
    setBattleHeroes((prev) => ({
      ...prev,
      [heroPosition]: selectedHero,
    }))

    const carouselEl = carouselRef.current
    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY)
      const currentIndex = heroes.findIndex(hero => hero.id === active)
      let newIndex = currentIndex + delta
      newIndex = Math.max(0, Math.min(newIndex, count - 1))
      const newActive = heroes[newIndex].id

      setActive(newActive)
      setVisibleCards(visibleFilter({ heroes, active: newActive }))
    }
    if (carouselEl) {
      carouselEl.addEventListener('wheel', handleScroll)
  
      return () => {
        carouselEl.removeEventListener('wheel', handleScroll)
      }
    }
  }, [active])
  
  return (  
    <CarouselContainer ref={carouselRef}>
      <SpinningContainer>
        {active > 1
          &&  <NavButtonLeft onClick={handleLeftClick}><ArrowBackIosIcon/></NavButtonLeft>}
        {visibleCards.map((hero) => (
          <CarouselItem 
            key={hero.id}
            active={active}
            index={hero.id}
            maxVisibility={MAX_VISIBILITY}
          >
            <HeroCard hero={hero} size='big'/>
          </CarouselItem>
        ))}
        {active < count
          && <NavButtonRight onClick={handleRightClick}><ArrowForwardIosIcon/></NavButtonRight>}
      </SpinningContainer>
      <SearchBar suggestions={heroes} onSearch={handleSearch}/>
    </CarouselContainer>
  )
}

HeroCarousel.propTypes = {
  heroPosition: PropTypes.string.isRequired,
}

export default HeroCarousel