import React from 'react';
import PropTypes from 'prop-types';
import { UserInfoContext, UserInfoValue } from './UserContext';

function Provider({ children }) {
  return (
    <UserInfoContext.Provider value={UserInfoValue()}>
      {children}
    </UserInfoContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
