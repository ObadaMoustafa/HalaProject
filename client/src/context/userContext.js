import React, { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userObj, setUserObj] = useState(null);

  const sharedValue = {
    userObj,
    setUserObj,
  };

  return (
    <UserContext.Provider value={sharedValue}>{children}</UserContext.Provider>
  );
};
