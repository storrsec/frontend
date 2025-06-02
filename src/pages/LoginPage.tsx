import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { LogIn, User, Mail } from 'lucide-react';
import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { loginWithOAuth } = useAuth();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/payment');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-16 flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                <p className="text-gray-600">
                  Access your Storrsec Security Dashboard
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your password"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <span>Loading...</span>
                    ) : (
                      <>
                        <LogIn size={18} className="mr-2" />
                        Sign in
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => loginWithOAuth('google')}
                  >
                    <FaGoogle className='w-4 h-4' />
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => loginWithOAuth('apple')}
                  >
                    <FaApple className='w-5 h-5' />
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => loginWithOAuth('facebook')}
                  >
                    <FaFacebook className='w-5 h-5' />
                  </button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-medium text-blue-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest Cybersecurity News</h2>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Mail size={20} className="text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Phishing Attacks on the Rise</h3>
                    <p className="text-sm text-gray-600">
                      Recent reports show a 30% increase in sophisticated phishing attempts targeting financial institutions.
                    </p>
                    <a href="#" className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                      Read more
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <User size={20} className="text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Identity Theft Prevention Tips</h3>
                    <p className="text-sm text-gray-600">
                      Learn how to protect yourself from the latest identity theft techniques with our expert guide.
                    </p>
                    <a href="#" className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
