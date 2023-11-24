import { styled } from '@mui/system';

export const HeroCardContainer = styled('div')(({ theme }) => ({
  border: '1px solid #ddd',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  width: '23rem',
  height: '23rem',
  perspective: '500px',
  transformStyle: 'preserve-3d',
  [theme.breakpoints.up('sm')]: {
    height: '200',
  },
  [theme.breakpoints.up('md')]: {
    height: '300px',
  },
}));

export const HeroImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
});

export const HeroName = styled('div')({
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '5px 10px',
  borderRadius: '4px',
});