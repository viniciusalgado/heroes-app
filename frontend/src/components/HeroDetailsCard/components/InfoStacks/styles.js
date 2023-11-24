
import { LinearProgress, Stack, styled } from '@mui/material';

export const DetailsStack = styled(Stack)({
  width: '100%'
});

export const StatProgressBar = styled(LinearProgress)(({ theme, value }) => ({
  height: 5,
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.5s ease',
  },
  '& .MuiLinearProgress-bar1Determinate': {
    backgroundColor: value > 50 ? theme.palette.success.main : theme.palette.error.main,
  },
}));