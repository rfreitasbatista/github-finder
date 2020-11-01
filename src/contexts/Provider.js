import React from 'react';
import { UserInfoContext, UserInfoValue } from './UserContext';

function Provider({ children }) {
  return <UserInfoContext.Provider value={UserInfoValue()}>{children}</UserInfoContext.Provider>;
}

export default Provider;
