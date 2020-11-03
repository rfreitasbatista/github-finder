import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import SearchButton from '../SearchButton';
import { UserInfoContext } from '../../contexts/UserContext';
import { userRepoFetch } from '../../services/githubAPI';
import './SearchBar.scss';

function SearchBar({ formClass }) {
  const {
    setRepoData,
    setUserToSearch,
    userToSearch,
    setWarning,
    setResultSuccess,
    setUserName,
    invalidText,
    setInvalidText,
  } = useContext(UserInfoContext);
  const noUserFound = () => {
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
      setUserToSearch('');
    }, 5000);
  };

  const handleChange = (event) => {
    setUserToSearch(event.target.value);
    if (event.target.value.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
      setInvalidText(false);
    } else {
      setInvalidText(true);
    }
  };

  const getUserRepos = (event) => {
    event.preventDefault();
    if (userToSearch.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
      setInvalidText(false);
      userRepoFetch(userToSearch, noUserFound).then((data) => {
        if (data) {
          setResultSuccess(true);
          setRepoData(data);
          setUserName(userToSearch);
          setUserToSearch('');
        } else {
          setResultSuccess(false);
          noUserFound();
        }
      });
    } else {
      setInvalidText(true);
    }
  };

  return (
    <form className={formClass}>
      <TextInput
        inputClass="search-bar"
        name="user"
        value={userToSearch}
        onTextChange={(event) => handleChange(event)}
        label=""
      />
      <SearchButton
        btnClass="search-btn"
        id="user-search-btn"
        onBtnClick={getUserRepos}
        title="Search"
      />
      {invalidText && (
        <p className="invalid-username">Please, insert a valid username</p>
      )}
    </form>
  );
}

SearchBar.propTypes = {
  formClass: PropTypes.string,
};

export default SearchBar;
