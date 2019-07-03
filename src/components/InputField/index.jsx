import React from 'react';

export default function InputField({
  inputSign,
  inputType,
  placeholder,
  inputId
}) {
  return (
    <>
      <div className="col-md-4 input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
          <div className="input-group-text">{inputSign}</div>
        </div>
        <input
          type={inputType}
          className="form-control"
          id={inputId}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
