import React from 'react';
import './style.css';

export default function Button({ buttonType, buttonLabel }) {
  return (
    <button id="button" type="button" className={buttonType}>
      {buttonLabel}
    </button>
  );
}
