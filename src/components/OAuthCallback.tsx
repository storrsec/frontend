import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard'); // or wherever your main page is
    } else {
      console.error('No token found in query');
      navigate('/login');
    }
  }, [location, navigate]);

  return <p>Processing login...</p>;
};

export default OAuthCallback;
