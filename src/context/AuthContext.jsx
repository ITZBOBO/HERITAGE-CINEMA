import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const STORAGE_KEY_AUTH = 'heritage_cinema_user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_AUTH);
      return saved ? JSON.parse(saved) : {
        isLoggedIn: true,
        name: 'Alexander Vance',
        email: 'alex.vance@cinema.heritage',
        phone: '+1 (555) 918-2736',
        memberSince: '2024'
      };
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY_AUTH);
      }
    } catch (e) {
      console.error('Failed to sync auth with localStorage', e);
    }
  }, [user]);

  const signUp = ({ name, email, password, phone }) => {
    const newUser = {
      isLoggedIn: true,
      name,
      email,
      phone: phone || '+1 (555) 000-0000',
      memberSince: new Date().getFullYear().toString()
    };
    setUser(newUser);
    return { success: true };
  };

  const signIn = ({ email, password }) => {
    // Local demo authentication
    const authedUser = {
      isLoggedIn: true,
      name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Cinephile User',
      email,
      phone: '+1 (555) 839-2041',
      memberSince: '2024'
    };
    setUser(authedUser);
    return { success: true };
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
