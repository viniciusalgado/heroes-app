import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from '../../routes/RoutesWrapper';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import MuiTheme from '../../theme/MuiTheme'

const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <div id='app-main'>
        <RoutesWrapper/>
      </div>
    </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
