
import { Autocomplete, styled } from '@mui/material';

export const HeroSearch = styled(Autocomplete)({
  width: '70%',
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'red',
  },
  backgroundColor: 'rgba(255, 255, 255, 0.8)'
});
