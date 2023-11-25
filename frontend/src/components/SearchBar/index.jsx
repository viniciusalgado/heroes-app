import React, { useState } from 'react'
import { InputAdornment, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { HeroSearch } from './styles'

const SearchBar = ({ suggestions, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(suggestions[0])

  const handleSearchChange = (event, newValue) => {
    onSearch(newValue)
    setSearchQuery(newValue)
  }

  return (
    <HeroSearch
      freeSolo
      options={suggestions}
      getOptionLabel={(option) => option.name}
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
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          {option.name}
        </li>
      )}
    />
  )
}

export default SearchBar
