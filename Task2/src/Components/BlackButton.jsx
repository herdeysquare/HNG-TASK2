import React from 'react';
import './BlackButton.css';

const BlackButton = ({ onClick, label }) => {
  return (
    <button className="custom-button2" onClick={onClick}>
      {label}
    </button>
  );
};

export default BlackButton;
