import React from 'react';

export default function RadioBox({ labelName, labelText, id }) {
  return (
    <>
      <div
        className="custom-control custom-radio custom-control-inline"
        style={{ marginBottom: '15px' }}
      >
        <input
          type="radio"
          className="custom-control-input"
          id={id}
          name={labelName}
        />
        <label className="custom-control-label" htmlFor={id}>
          {labelText}
        </label>
      </div>
    </>
  );
}
