import { styled } from '@mui/material';

export const WinnerStampImage = styled('img')(({ winner }) =>({
  width: '20%',
  height: 'auto',
  position: 'absolute',
  top: '70%',
  right: winner === 'right' ? '32%' : 'auto',
  left: winner === 'left' ? '0%' : 'auto',
}));
