function SearchButton({ onBtnClick, title, id, btnClass }) {
  return (
    <button className={btnClass} id={id} onClick={onBtnClick}>
      {title}
    </button>
  );
}

export default SearchButton;
