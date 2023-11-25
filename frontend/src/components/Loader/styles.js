import { styled } from '@mui/material/styles'

export const Container = styled('div')({
  position: 'fixed',
  zIndex: 2000,
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Label = styled('font')({
  color: '#A0D4CD',
})

