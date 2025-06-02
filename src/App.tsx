import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import CompanyPage from './pages/CompanyPage';
import SubscribePage from './pages/SubscribePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import PaymentPage from './pages/PaymentPage';
import ServicesPage from './pages/ServicesPage';
import { AuthProvider } from './context/AuthContext';
import UserPage from './pages/UserPage';
import ScrollToTop from './components/ScrollToTop'; // <-- import here
import OAuthCallback from './components/OAuthCallback';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop /> {/* <-- place here */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/subscribe" element={<SubscribePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/oauth-callback" element={<OAuthCallback />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
