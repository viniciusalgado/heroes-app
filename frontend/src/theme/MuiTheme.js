import { createTheme } from '@mui/material/styles';

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
  typography: {
    fontFamily: 'Encode Sans',
    notAvailable: {
      color: 'red',
    },
    overline: {
      fontSize: '1.4rem'
    }
  },
});

export default MuiTheme;
