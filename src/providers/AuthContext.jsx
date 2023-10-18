import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState("");

  const login = (userData) => {
    setIsLoggedIn(true);
    const userType = userData.user_type;
    const userId = userData.user_id;
    setUserId(userId);
    setUserType(userType);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType("");
    setIsAdmin(false);
    setUserId("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userType,
        login,
        logout,
        isAdmin,
        setIsAdmin,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
