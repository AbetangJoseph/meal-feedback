import React from 'react';
import './style.css';

export default function Button({ buttonType, buttonLabel, icon }) {
  return (
    <button id="button" type="button" className={buttonType}>
      {icon} {buttonLabel}
    </button>
  );
}
