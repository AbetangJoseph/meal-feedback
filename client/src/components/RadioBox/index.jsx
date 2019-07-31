import React from 'react';

export default function RadioBox({
  labelName,
  labelText,
  id,
  radioValue,
  onchange
}) {
  return (
    <>
      <div
        className="custom-control custom-radio custom-control-inline"
        style={{ marginBottom: '15px' }}
      >
        <input
          type="radio"
          id={id}
          className="custom-control-input"
          name={labelName}
          value={radioValue}
          onChange={onchange}
        />
        <label className="custom-control-label" htmlFor={id}>
          {labelText}
        </label>
      </div>
    </>
  );
}
