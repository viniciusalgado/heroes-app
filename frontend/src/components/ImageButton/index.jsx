import React from 'react';
import Fight from '../../assets/28608-6-fight.png'

const ImageButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
      <img src={Fight} alt='Fight' style={{ width: '80%', height: 'auto' }} />
    </button>
  );
};

export default ImageButton;
