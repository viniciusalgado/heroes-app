import { styled } from '@mui/system'

export const HeroCardContainer = styled('div')(({ theme, size }) => ({
  borderRadius: size === 'big' ? '8px' : '0.1px',
  cursor: 'pointer',
  textAlign: 'center',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  width: size === 'big' ? '23rem' : '5rem',
  height: size === 'big' ? '23rem' : '10rem',
  perspective: '500px',
  transformStyle: 'preserve-3d'
}))

export const HeroImage = styled('img')(({ size, disabled }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: size === 'big' ? '8px' : '0.1px',
  filter: disabled ? 'brightness(20%)' : 'brightness(100%)'
}))


export const HeroName = styled('div')({
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '5px 10px',
  borderRadius: '4px',
})