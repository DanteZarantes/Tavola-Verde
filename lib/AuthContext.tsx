'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface FullUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (user: User & { password: string }) => boolean;
  logout: () => void;
  updateProfile: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find((u: FullUser) => u.email === email && u.password === password);
    if (found) {
      const { password: _password, ...userData } = found;
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = (newUser: FullUser) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: FullUser) => u.email === newUser.email)) return false;
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    const { password: _password, ...userData } = newUser;
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updated = users.map((u: FullUser) => u.email === updatedUser.email ? { ...u, ...updatedUser } : u);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
