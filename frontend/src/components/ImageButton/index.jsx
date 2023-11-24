import React from 'react';
import PropTypes from 'prop-types';
import Fight from '../../assets/fight-image.png'

const ImageButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
      <img src={Fight} alt='Fight' style={{ width: '50%', height: 'auto' }} />
    </button>
  );
};

ImageButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ImageButton;
