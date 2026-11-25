'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserMeasurements } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  login: (email: string) => Promise<void>;
  signup: (name: string, email: string) => Promise<void>;
  logout: () => void;
  updateMeasurements: (measurements: UserMeasurements) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage on mount
    const savedUser = localStorage.getItem('sizeprofile_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('sizeprofile_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check if user exists in our "mock DB"
    const mockUsers = JSON.parse(localStorage.getItem('sizeprofile_db') || '[]');
    const existingUser = mockUsers.find((u: UserProfile) => u.email === email);

    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('sizeprofile_user', JSON.stringify(existingUser));
    } else {
        // For MVP demo purposes, auto-signup if not found
        await signup("Guest User", email);
    }
    setIsLoading(false);
  };

  const signup = async (name: string, email: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newUser: UserProfile = {
      id: Math.random().toString(36).substring(2, 9),
      email,
      name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const mockUsers = JSON.parse(localStorage.getItem('sizeprofile_db') || '[]');
    mockUsers.push(newUser);
    localStorage.setItem('sizeprofile_db', JSON.stringify(mockUsers));

    setUser(newUser);
    localStorage.setItem('sizeprofile_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sizeprofile_user');
  };

  const updateMeasurements = async (measurements: UserMeasurements) => {
    if (!user) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    const updatedUser = {
      ...user,
      measurements,
      updatedAt: new Date().toISOString()
    };

    // Update in "DB"
    const mockUsers = JSON.parse(localStorage.getItem('sizeprofile_db') || '[]');
    const userIndex = mockUsers.findIndex((u: UserProfile) => u.id === user.id);
    if (userIndex > -1) {
      mockUsers[userIndex] = updatedUser;
    } else {
      mockUsers.push(updatedUser);
    }
    localStorage.setItem('sizeprofile_db', JSON.stringify(mockUsers));

    setUser(updatedUser);
    localStorage.setItem('sizeprofile_user', JSON.stringify(updatedUser));
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, updateMeasurements }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
