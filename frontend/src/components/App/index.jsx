import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from '../../routes/RoutesWrapper';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import MuiTheme from '../../theme/MuiTheme'
import Navbar from '../NavBar';
import { SelectedHeroContextProvider } from '../../context/heroOptionsContext';
import { BattleHeroesContextProvider } from '../../context/battleHeroesContext';

const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <div id='app-main'>
        <SelectedHeroContextProvider>
          <BattleHeroesContextProvider>
            <Navbar />
            <RoutesWrapper/>
          </BattleHeroesContextProvider>
        </SelectedHeroContextProvider>
      </div>
    </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
