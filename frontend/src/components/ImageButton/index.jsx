import React from 'react';
import PropTypes from 'prop-types';
import Fight from '../../assets/28608-6-fight.png'

const ImageButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
      <img src={Fight} alt='Fight' style={{ width: '80%', height: 'auto' }} />
    </button>
  );
};

ImageButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ImageButton;
