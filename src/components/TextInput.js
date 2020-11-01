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
        onChange={(event) => onTextChange(event.target.value)}
      />
    </label>
  );
}

export default TextInput;
