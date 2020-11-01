import React, { useContext } from 'react';
import TextInput from '../TextInput';
import SearchButton from '../SearchButton';
import { UserInfoContext } from '../../contexts/UserContext';
import { userRepoFetch } from '../../services/githubAPI';

function SearchBar({ formClass }) {
  const {
    setRepoData,
    setUserToSearch,
    userToSearch,
    setWarning,
    setResultSuccess,
    setUserName,
  } = useContext(UserInfoContext);

  const noUserFound = () => {
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
      setUserToSearch('');
    }, 5000);
  };

  const getUserRepos = (event) => {
    event.preventDefault();
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
  };

  return (
    <form className={formClass}>
      <TextInput
        inputClass="search-bar"
        name="user"
        value={userToSearch}
        onTextChange={setUserToSearch}
        label=""
      />
      <SearchButton
        btnClass="search-btn"
        id="user-search-btn"
        onBtnClick={getUserRepos}
        title="Search"
      />
    </form>
  );
}

export default SearchBar;
