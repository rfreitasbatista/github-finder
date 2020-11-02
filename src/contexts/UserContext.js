import { useState, createContext } from 'react';

export const UserInfoContext = createContext();

export const UserInfoValue = () => {
  const [userToSearch, setUserToSearch] = useState('');
  const [userName, setUserName] = useState('');
  const [repoData, setRepoData] = useState([]);
  const [warning, setWarning] = useState(false);
  const [resultSuccess, setResultSuccess] = useState(false);
  const [invalidText, setInvalidText] = useState(false);

  return {
    userToSearch,
    setUserToSearch,
    repoData,
    setRepoData,
    warning,
    setWarning,
    resultSuccess,
    setResultSuccess,
    userName,
    setUserName,
    invalidText,
    setInvalidText,
  };
};
