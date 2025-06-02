import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate('/user');
    } else {
      navigate('/');
    }
  };


  // Prevent rendering until loading is complete
  if (loading) return null;

  const navLinks = [
    ...(isAuthenticated
      ? [
          {
            to: '/user',
            label: (
              <span className="flex items-center gap-1">
                <UserIcon size={20} className="inline" /> My Page
              </span>
            ),
          },
        ]
      : []),
    { to: '/', label: 'Home' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/company', label: 'Company' },
    { to: '/services', label: 'Services' },
    { to: '/subscribe', label: 'Subscribe' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/70 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href={isAuthenticated ? "/user" : "/"}
            onClick={handleLogoClick}
            className="text-white font-bold flex items-center"
            aria-label="StorrSec Logo"
          >
            <img src="/images/logo.png" alt="Logo" className="w-44 object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-end items-center space-x-8">
            {navLinks.map(link =>
              <Link
                key={link.to}
                to={link.to}
                className="text-white hover:text-blue-700 transition-colors"
              >
                {link.label}
              </Link>
            )}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-cyan-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-cyan-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 py-4 bg-slate-800 rounded-md"
          >
            <div className="flex flex-col items-center space-y-2 px-4">
              {navLinks.map(link =>
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white hover:text-blue-700 transition-colors py-2 w-full text-center"
                >
                  {link.label}
                </Link>
              )}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-cyan-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors inline-block w-full text-center"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-cyan-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors inline-block w-full text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
