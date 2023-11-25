import { createTheme } from '@mui/material/styles'

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: 'rgba(102, 26, 26, 1)',
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
})

export default MuiTheme
