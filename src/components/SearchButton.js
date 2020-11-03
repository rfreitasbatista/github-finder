import React from 'react';

function SearchButton({ onBtnClick, title, id, btnClass, disabled }) {
  return (
    <button
      className={btnClass}
      id={id}
      onClick={onBtnClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default SearchButton;
