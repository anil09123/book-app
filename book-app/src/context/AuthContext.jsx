import React, { createContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; 

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null
  );

  const loginUser = async (username, password) => {
    const res = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access)); 
      localStorage.setItem('authTokens', JSON.stringify(data));
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
  };

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
