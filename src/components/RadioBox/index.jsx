import React from 'react';

export default function RadioBox({ labelName, labelText, id }) {
  return (
    <>
      <div
        class="custom-control custom-radio custom-control-inline"
        style={{ marginBottom: '15px' }}
      >
        <input
          type="radio"
          class="custom-control-input"
          id={id}
          name={labelName}
        />
        <label class="custom-control-label" for={id}>
          {labelText}
        </label>
      </div>
    </>
  );
}
