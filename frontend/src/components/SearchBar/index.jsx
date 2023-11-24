import React, { useState } from 'react';
import { InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { HeroSearch } from './styles'

const SearchBar = ({ suggestions, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event, newValue) => {
    onSearch(newValue)
    setSearchQuery(newValue);
  };

  return (
    <HeroSearch
      freeSolo
      options={suggestions.map((option) => option.name)}
      value={searchQuery}
      onChange={handleSearchChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {params.InputProps.endAdornment}
                <InputAdornment position="end">
                <SearchIcon />
                </InputAdornment>
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchBar;
