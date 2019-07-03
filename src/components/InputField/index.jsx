import React from 'react';

export default function InputField({
  inputSign,
  inputType,
  placeholder,
  inputId,
  inputName
}) {
  return (
    <>
      <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
          <div className="input-group-text">{inputSign}</div>
        </div>
        <input
          type={inputType}
          className="form-control"
          id={inputId}
          placeholder={placeholder}
          name={inputName}
        />
      </div>
    </>
  );
}
