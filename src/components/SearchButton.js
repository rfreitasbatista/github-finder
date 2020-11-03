import React from 'react';
import PropTypes from 'prop-types';

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

SearchButton.propTypes = {
  onBtnClick: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  btnClass: PropTypes.string,
};

export default SearchButton;
