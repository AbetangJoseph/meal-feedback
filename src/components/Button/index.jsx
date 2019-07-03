import React from 'react';

export default function Button({ buttonType, buttonWidth, buttonLabel }) {
  return (
    <button type="button" className={buttonType} style={{ width: buttonWidth }}>
      {buttonLabel}
    </button>
  );
}
