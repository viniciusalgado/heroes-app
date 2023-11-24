import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { heroes } from '../../mock/heroesMock';
import SearchBar from '../SearchBar';
import { useSelectedHeroContext } from '../../context/heroOptionsContext';
import { StyledAppBar, StyledButton } from './styles';

const Navbar = () => {
  const { setSelectedHero } = useSelectedHeroContext()
  const location = useLocation()
  const navigate = useNavigate()

  const handleSearch = (hero) => {
    const selectedHero = heroes.find(h=> h.name === hero)
    setSelectedHero(selectedHero)
  }

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <div>
          <StyledButton onClick={() => navigate('/')}>Heroes Overview</StyledButton>
          <StyledButton onClick={() => navigate('/battle')}>Heroes Battle</StyledButton>
        </div>
        { location.pathname === '/' && <SearchBar suggestions={heroes} onSearch={handleSearch}/>}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
