import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const heroImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=80";

const plans = [
  {
    name: "Pro Plan",
    originalPrice: "$5.99",
    discountedPrice: "$2.99",
    period: "/month",
    discountText: "Save 50%!",
    features: [
      "Advanced threat detection & prevention",
      "Real-time security alerts",
      "Priority 24/7 technical support",
      "Weekly personalized security reports",
      "Access to premium cybersecurity resources",
      "Identity theft protection features"
    ],
    cta: "Secure Your Future Now",
    mostPopular: true,
  },
];

const cyberProtectImg =
  "https://images.pexels.com/photos/5380647/pexels-photo-5380647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const SubscribePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleSubscribeClick = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/payment')
    }, 1500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterMsg("Please enter your email address.");
      return;
    }
    setNewsletterMsg("Thanks for joining! Check your inbox for the latest cyber news.");
    setNewsletterEmail('');
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center bg-white text-gray-900 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* HERO IMAGE SECTION */}
      <section className="relative pt-20 min-h-[320px] md:min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Corporate cybersecurity datacenter"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 pointer-events-none select-none"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10131b]/80 via-[#1d253a]/60 to-[#222f40]/90 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg"
          >
            You Wouldn’t Leave Your Door Open — Don’t Leave Your Data Exposed.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.10 }}
            className="max-w-xl text-lg md:text-2xl font-medium text-white text-center mt-6"
          >
            Unlock advanced security, exclusive resources, and priority support tailored for your peace of mind.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.20 }}
            className="text-lg text-yellow-300 mt-4 font-semibold animate-pulse-slow"
          >
            Limited-time offer: Secure your future at an unbeatable price!
          </motion.p>
        </div>
      </section>

      {/* Info & Image Section */}
      <motion.div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mb-16 mt-12 relative z-10 p-4" variants={itemVariants}>
        <div className="md:w-1/2 mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-300">
          <img
            src={cyberProtectImg}
            alt="Why Cyber Protection"
            className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] border-4 border-blue-400"
          />
        </div>
        <div className="md:w-1/2 text-gray-800 space-y-5">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Why is Personal Cyber Protection Essential Today?</h3>
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
            <li>
              Rising Cybercrime: Daily, millions face sophisticated scams, phishing attacks, and malware designed to steal data and money.
            </li>
            <li>
              Identity Theft Epidemic: Your personal information is a prime target, leading to potential fraud, financial ruin, and reputational damage.
            </li>
            <li>
              Protecting Your Digital Privacy: Guard against intrusions into your private communications, photos, and online activities.
            </li>
            <li>
              Device Vulnerabilities: Laptops, phones, and smart devices are constant targets for ransomware and spyware.
            </li>
            <li>
              Social Media Security: Prevent account hijacking that can lead to impersonation and loss of valuable connections.
            </li>
          </ul>
          <p className="text-gray-700 mt-5 text-xl font-medium">
            Cyber protection is no longer just for corporations. Individuals face evolving threats that demand a proactive defense. Stay one step ahead with StorrSec.
          </p>
        </div>
      </motion.div>

      {/* Plans Section */}
      <div className="flex flex-col md:flex-row gap-10 mb-16 relative z-10">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={itemVariants}
            className={`relative bg-white rounded-3xl shadow-lg p-10 w-full md:w-[420px] border border-blue-200 flex flex-col items-center justify-between transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-xl ${
              plan.mostPopular ? "ring-4 ring-blue-500 scale-105 z-10" : ""
            }`}
          >
            {plan.mostPopular && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-extrabold px-6 py-2 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 flex items-center whitespace-nowrap">
                <span className="text-yellow-300 mr-2 text-lg">⭐</span> Most Popular Choice <span className="text-yellow-300 ml-2 text-lg">⭐</span>
              </span>
            )}
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">{plan.name}</h2>
            <div className="flex items-end mb-4">
              <span className="text-2xl text-gray-500 line-through mr-3">{plan.originalPrice}</span>
              <span className="text-5xl font-extrabold text-green-600 animate-pulse-fast">{plan.discountedPrice}</span>
              <span className="text-xl font-semibold text-gray-500 ml-2">{plan.period}</span>
            </div>
            <div className="text-md text-green-700 mb-8 font-medium italic">{plan.discountText}</div>
            <ul className="mb-10 space-y-3 text-lg">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-700">
                  <span className="bg-blue-600 rounded-full p-1.5 mr-3 flex-shrink-0">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={handleSubscribeClick}
              disabled={loading}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 text-white font-extrabold text-xl shadow-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                plan.cta
              )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Subscription Section */}
      <motion.div
        className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-2xl border border-blue-200 relative z-10 text-center mb-12"
        variants={itemVariants}
      >
        <form className="w-full flex flex-col items-center" onSubmit={handleNewsletterSubmit}>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed: Get Weekly Cyber Insights!</h3>
          <p className="text-gray-700 mb-6 text-lg">
            Subscribe to our free weekly newsletter for the latest cybersecurity news, critical scam alerts, and expert tips to keep you safe online.
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full rounded-lg px-5 py-3 mb-5 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 transition-colors duration-200 text-lg"
            required
            value={newsletterEmail}
            onChange={e => {
              setNewsletterEmail(e.target.value);
              if (newsletterMsg) setNewsletterMsg('');
            }}
          />
          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-gradient-to-r from-teal-600 to-green-600 text-white font-extrabold text-xl shadow-lg hover:from-teal-700 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-teal-300"
          >
            Join Our Cyber Community
          </button>
          {newsletterMsg && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 text-center text-md font-medium ${newsletterMsg.startsWith("Thanks") ? "text-green-700" : "text-red-700"}`}
            >
              {newsletterMsg}
            </motion.div>
          )}
        </form>
        <div className="mt-8 text-sm text-gray-600 text-center flex items-center justify-center">
          <span role="img" aria-label="lock" className="mr-2 text-xl">🔒</span> Your privacy is our priority. We'll never share your email.
        </div>
      </motion.div>

      {/* Tailwind CSS for Custom Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-fast {
          0%, 100% { transform: scale(1);}
          50% { transform: scale(1.03);}
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        .animate-pulse-fast {
          animation: pulse-fast 1.5s infinite ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default SubscribePage;
