import React from 'react';

export default function Button({ buttonType, buttonWidth, buttonLabel }) {
  return (
    <button type="button" class={buttonType} style={{ width: buttonWidth }}>
      {buttonLabel}
    </button>
  );
}
