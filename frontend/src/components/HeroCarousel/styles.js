
import { styled, Button } from '@mui/material'

export const CarouselContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  fontFamily: 'Montserrat, sans-serif',
  flexGrow: 1,
})

export const SpinningContainer = styled('div')({
  position: 'relative',
  width: '23rem',
  height: '23rem',
  perspective: '300px',
  transformStyle: 'preserve-3d',
  alignItems: 'center',
  margin: '5px'
})

export const CarouselItem = styled('div')(({ active, index }) => {
  const isActive = index === active ? 1 : 0
  const absOffset = Math.abs(active - index) / 3

  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: `rotateY(${(active - index) / 3 * 50}deg) scaleY(${1 + Math.abs(active - index) / 3 * -0.4}) translateZ(${Math.abs(active - index) / 3 * -30}rem) translateX(${Math.sign(active - index) * -5}rem)`,
    transition: 'all 0.3s ease-out',
    display: 'flex',
    alignItems: 'center',
    filter: `blur(${absOffset * 1}rem)`,
    pointerEvents: isActive ? 'auto' : 'none',  
  }
})

export const NavButtonLeft = styled(Button)({
  color: 'white',
  fontSize: '5rem',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  zIndex: 2,
  cursor: 'pointer',
  userSelect: 'none',
  background: 'rgba(0, 0, 0, 0.5)',
  border: 'unset',
  transform: 'translateX(-100%) translatey(-100%)',

  '&.right': {
    right: 0,
    transform: 'translateX(100%) translatey(-50%)',
  },
})

export const NavButtonRight = styled(Button)({
  color: 'white',
  fontSize: '5rem',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  zIndex: 2,
  cursor: 'pointer',
  userSelect: 'none',
  background: 'rgba(0, 0, 0, 0.5)',
  border: 'unset',
  right: 0,
  transform: 'translateX(100%) translatey(-100%)',
})