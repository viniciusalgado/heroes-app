import { Grid, Paper, styled } from '@mui/material';
import backgroundImage from '../../assets/background-image.jpg';

export const FlexContainerSpinners = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
});

export const FlexContainerButton = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30vh',
});

export const VersusContainer = styled('div')({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center'
});

export const VersusImage = styled('img')({
  width: '70%',
  height: 'auto',
});

export const PageBackground = styled(Paper)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  position: 'relative',
});
