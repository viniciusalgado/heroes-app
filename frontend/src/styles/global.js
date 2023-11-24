import { Paper, styled } from '@mui/material';

export const PageBackground = styled(Paper)(() => ({
  backgroundColor: 'rgba( 135, 35, 35, 1)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  position: 'relative',
  borderRadius: 0,
}));
