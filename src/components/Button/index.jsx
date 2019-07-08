import React from 'react';
import './style.css';

export default function Button({
  buttonType,
  buttonLabel,
  icon,
  click,
  cardName,
  isDisabled
}) {
  return (
    <button
      id="button"
      type="submit"
      onClick={click}
      className={buttonType}
      name={cardName}
      disabled={isDisabled}
    >
      {icon} {buttonLabel}
    </button>
  );
}
