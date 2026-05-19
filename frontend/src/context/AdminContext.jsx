import React, { createContext, useState, useContext, useEffect } from 'react';
import { API_URL } from '../api/config';

const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export function AdminProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      // Verify token with backend
      verifyToken(storedToken);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async (storedToken) => {
    try {
      // Optional: You can add a token verification endpoint
      // For now, just check if token exists
      setIsAuthenticated(true);
      setToken(storedToken);
    } catch (err) {
      localStorage.removeItem('adminToken');
      setIsAuthenticated(false);
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const login = (newToken) => {
    localStorage.setItem('adminToken', newToken);
    setIsAuthenticated(true);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, token, login, logout, loading }}>
      {children}
    </AdminContext.Provider>
  );
}