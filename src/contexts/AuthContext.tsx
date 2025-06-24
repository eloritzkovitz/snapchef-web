'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  profilePicture?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle?: () => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isAdmin = user?.role === 'admin';

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Verify token and get user data
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, []);

  // Fetch user data using the access token
  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/users/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        // Token invalid, remove it
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Store tokens
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        
        // Fetch user data
        await fetchUserData(data.accessToken);
        
        return true;
      } else {
        const errorData = await response.text();
        console.error('Login failed:', errorData);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Google Login
  const loginWithGoogle = async (): Promise<void> => {
    try {
      // Open Google OAuth in a new window
      const googleLoginUrl = `${NEXT_PUBLIC_BASE_URL}/api/auth/google`;
      const width = 500;
      const height = 600;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      const popup = window.open(
        googleLoginUrl,
        'GoogleLogin',
        `width=${width},height=${height},left=${left},top=${top}`
      );

      if (!popup) throw new Error('Failed to open popup');

      // Listen for a message from the popup with the token
      const tokenPromise = new Promise<string>((resolve, reject) => {
        const listener = (event: MessageEvent) => {          
          if (event.data?.accessToken) {
            resolve(event.data.accessToken);
            window.removeEventListener('message', listener);
            popup.close();
          }
        };
        window.addEventListener('message', listener);        
        setTimeout(() => {
          window.removeEventListener('message', listener);
          reject(new Error('Google login timed out'));
        }, 60000);
      });

      const accessToken = await tokenPromise;
      localStorage.setItem('accessToken', accessToken);
      await fetchUserData(accessToken);
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  const value = {
    user,
    login,
    loginWithGoogle,
    logout,
    loading,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}