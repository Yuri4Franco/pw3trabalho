import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_id = localStorage.getItem('usuario_id');
    const token = localStorage.getItem('token');

    if (user_id && token) {
      setUser({ user_id, token });
    }
  }, []);

  const login = (user_id, token) => {
    localStorage.setItem('usuario_id', user_id);
    localStorage.setItem('token', token);
    setUser({ user_id, token });
  };

  const logout = () => {
    localStorage.removeItem('usuario_id');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
