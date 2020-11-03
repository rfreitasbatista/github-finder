import React from 'react';

function TextInput({ name, label, onTextChange, value, inputClass }) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type="text"
        className={inputClass}
        id={name}
        name={name}
        value={value}
        onChange={onTextChange}
      />
    </label>
  );
}

export default TextInput;
