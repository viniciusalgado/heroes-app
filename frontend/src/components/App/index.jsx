import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesWrapper from '../../routes/RoutesWrapper'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import '../../services/axios.service'
import MuiTheme from '../../theme/MuiTheme'
import Navbar from '../NavBar'
import { SelectedHeroContextProvider } from '../../context/heroOptionsContext'
import { BattleHeroesContextProvider } from '../../context/battleHeroesContext'
import { HeroesContextProvider } from '../../context/heroesContext'

const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <div id='app-main'>
          <HeroesContextProvider>
            <SelectedHeroContextProvider>
              <BattleHeroesContextProvider>
                <Navbar />
                <RoutesWrapper/>
              </BattleHeroesContextProvider>
            </SelectedHeroContextProvider>
          </HeroesContextProvider>
      </div>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
