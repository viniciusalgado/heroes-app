
import { Autocomplete, styled } from '@mui/material'

export const HeroSearch = styled(Autocomplete)({
  width: '300px',
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'red',
  },
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
})
