
import { styled, Button } from '@mui/material';

export const CarouselContainer = styled('div')({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  fontFamily: 'Montserrat, sans-serif',
});

export const SpinningContainer = styled('div')({
  position: 'relative',
  width: '23rem',
  height: '23rem',
  perspective: '500px',
  transformStyle: 'preserve-3d',
  // Add more styles as needed
});

export const CarouselItem = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transform: 'rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -30rem)) translateX(calc(var(--direction) * -5rem))',
  filter: 'blur(calc(var(--abs-offset) * 1rem))',
  transition: 'all 0.3s ease-out',
  // Add more styles as needed
});

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
});

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
});