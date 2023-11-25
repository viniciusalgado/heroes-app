import { AppBar, Button, styled } from '@mui/material'

export const HeroesAppBar = styled(AppBar)({
  backgroundColor: 'rgba(102, 26, 26, 1)',
  boxShadow: 'none',
  borderRadius: 0,
})

export const ButtonsContainer = styled('div')({
  height: '100%',
  flexGrow: 1
})

export const PageButton = styled(Button)({
  height: '100%',
  color: 'white',
  margin: '0 10px',
})
