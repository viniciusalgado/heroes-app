import React from 'react';
import PropTypes from 'prop-types';
import Fight from '../../assets/fight-image.png'
import { Button } from '@mui/material';
import { FightImage } from './styles'

const ImageButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <FightImage src={Fight} alt='Fight' />
    </Button>
  );
};

ImageButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ImageButton;
