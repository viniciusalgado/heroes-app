import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Toolbar } from '@mui/material'
import SearchBar from '../SearchBar'
import { useSelectedHeroContext } from '../../context/heroOptionsContext'
import { HeroesAppBar, PageButton, ButtonsContainer } from './styles'
import { useHeroesContext } from '../../context/heroesContext'
import HeroesQueries from '../../services/heroesQueries'
import { useLoaderContext } from '../../context/loaderContext'

const Navbar = () => {
  const { setSelectedHero } = useSelectedHeroContext()
  const { setShowLoader } = useLoaderContext()
  const { heroes } = useHeroesContext()
  const location = useLocation()
  const navigate = useNavigate()

  const handleSearch = async (hero) => {
    setShowLoader(true)
    const auxHero = await HeroesQueries.getHero({ heroId: hero.id })
    setShowLoader(false)
    setSelectedHero(auxHero)
  }

  return (
    <HeroesAppBar position="static">
      <Toolbar>
        <ButtonsContainer>
          <PageButton onClick={() => navigate('/')}>Heroes Overview</PageButton>
          <PageButton onClick={() => navigate('/battle')}>Heroes Battle</PageButton>
        </ButtonsContainer>
        { location.pathname === '/' && <SearchBar suggestions={heroes} onSearch={handleSearch}/>}
      </Toolbar>
    </HeroesAppBar>
  )
}

export default Navbar
