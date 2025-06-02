import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { CheckCircle, Shield, Lock } from 'lucide-react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

const PaymentPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const stripe = await stripePromise;

      const res = await axios.post('http://localhost:4000/api/payments/create-checkout-session');

      await stripe?.redirectToCheckout({ sessionId: res.data.id });
    } catch (err: any) {
      console.error(err);
      setError('Payment processing failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Complete Your Subscription
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600"
            >
              Secure payment to activate your Storrsec security services
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment</h2>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                    <p>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? 'Redirecting to Stripe...' : 'Pay $3.28/month with Stripe'}
                    </button>
                  </div>
                </form>

                <div className="mt-6 flex items-center justify-center">
                  <Lock size={16} className="text-gray-500 mr-2" />
                  <p className="text-sm text-gray-500">
                    Secure payment processed with bank-level encryption
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:w-1/3"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Order Summary</h3>
                  <p className="text-sm text-gray-600">Advanced Security Plan</p>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subscription fee</span>
                      <span className="font-medium">$2.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">$0.29</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between font-semibold">
                        <span>Total (monthly)</span>
                        <span>$3.28</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <h4 className="font-medium text-gray-900">What's included:</h4>
                    <ul className="space-y-3">
                      {[
                        'All Basic Protection features',
                        'Advanced identity theft monitoring',
                        'Dark web surveillance',
                        'Social media account protection',
                        'Priority 24/7 support',
                        'Up to 3 devices covered',
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-md flex items-start">
                    <Shield size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Your subscription includes our 30-day money-back guarantee. Cancel anytime.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
