import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface User {
  id: string;
  email: string;
  name: string;
  isSubscribed: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  loginWithOAuth: (provider: 'google' | 'apple' | 'facebook') => Promise<void>;
  logout: () => Promise<void>;
  completePayment: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get('http://localhost:4000/api/user/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (error: any) {
      console.error('fetchUser failed:', error.response?.data || error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await axios.post('http://localhost:4000/api/auth/login', { email, password });
    const { token } = res.data;
    localStorage.setItem('token', token);
    setLoading(true);
    await fetchUser();
  };

  const signup = async (name: string, email: string, password: string) => {
    await axios.post('http://localhost:4000/api/auth/register', { name, email, password });
    await login(email, password); // Auto-login after signup
  };

  const loginWithOAuth = async (provider: 'google' | 'apple' | 'facebook') => {
  if (provider === 'google') {
    window.location.href = 'http://localhost:4000/auth/google';
  } else {
    alert(`${provider} login not implemented yet`);
  }
};


  const logout = async () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/subscribe';
  };

  const completePayment = async () => {
    const token = localStorage.getItem('token');
    if (!user || !token) return;

    try {
      await axios.post(
        'http://localhost:4000/api/user/subscribe',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser({ ...user, isSubscribed: true });
    } catch (error: any) {
      console.error('Failed to mark subscription:', error.response?.data || error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        signup,
        loginWithOAuth,
        logout,
        completePayment,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
