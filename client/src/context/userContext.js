import React, { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userObj, setUserObj] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  function saveUserToStorage(newUserObj) {
    setUserObj(newUserObj);
    localStorage.setItem("user", JSON.stringify(newUserObj));
  }

  function deleteUser() {
    setUserObj(null);
    localStorage.removeItem("user");
  }

  const sharedValue = {
    userObj,
    setUserObj,
    saveUserToStorage,
    deleteUser,
  };

  return (
    <UserContext.Provider value={sharedValue}>{children}</UserContext.Provider>
  );
};
