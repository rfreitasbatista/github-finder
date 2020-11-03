import React from 'react';
import PropTypes from 'prop-types';

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

TextInput.propTypes = {
  onTextChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  inputClass: PropTypes.string,
};

export default TextInput;
