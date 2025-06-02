import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import {
  Shield, AlertCircle, ChevronRight, Bell, Users,
  Settings, Server, Database, Activity, Lock, FileText
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [securityScore, setSecurityScore] = useState(72);
  
  if (!user) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">Please log in to view your dashboard</p>
          <a
            href="/login"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Welcome back, {user.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600"
          >
            Your security dashboard and latest insights
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Security Score Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Your Security Score</h2>
                  <Shield size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-4xl font-bold text-gray-900">{securityScore}</div>
                    <div className="text-sm text-gray-600">out of 100</div>
                  </div>
                  
                  <div className="w-32 h-32 relative">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                        strokeDasharray="100, 100"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={securityScore > 70 ? "#10B981" : securityScore > 40 ? "#FBBF24" : "#EF4444"}
                        strokeWidth="3"
                        strokeDasharray={`${securityScore}, 100`}
                      />
                      <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill="#6B7280">Score</text>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Password Strength</span>
                      <span className="text-sm text-green-600">Strong</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">2FA Enabled</span>
                      <span className="text-sm text-red-600">Not Set</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Device Security</span>
                      <span className="text-sm text-yellow-600">Moderate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium flex items-center justify-center">
                  Improve Your Score
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
            
            {/* Recent Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">3 new</span>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="p-6 flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertCircle size={20} className="text-red-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-gray-900">Password Found in Data Breach</h3>
                      <span className="ml-3 text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Your email was found in a recent data breach. We recommend changing your password immediately.
                    </p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Take Action</a>
                  </div>
                </div>
                
                <div className="p-6 flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Bell size={20} className="text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-gray-900">Suspicious Login Attempt</h3>
                      <span className="ml-3 text-xs text-gray-500">Yesterday</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      We detected a login attempt from an unrecognized device in Berlin, Germany.
                    </p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Review Activity</a>
                  </div>
                </div>
                
                <div className="p-6 flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users size={20} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-gray-900">Software Update Available</h3>
                      <span className="ml-3 text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      A security update is available for your device. We recommend installing it as soon as possible.
                    </p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Update Now</a>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline flex items-center justify-center">
                  View All Alerts
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Your Profile</h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <div className="mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Premium Plan
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block p-3 rounded-md hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <Settings size={18} className="text-gray-500 mr-3" />
                    <span className="text-gray-700">Account Settings</span>
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-md hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <Bell size={18} className="text-gray-500 mr-3" />
                    <span className="text-gray-700">Notification Preferences</span>
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-md hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <Lock size={18} className="text-gray-500 mr-3" />
                    <span className="text-gray-700">Security Settings</span>
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-md hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <FileText size={18} className="text-gray-500 mr-3" />
                    <span className="text-gray-700">Subscription Details</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              </div>
              
              <div className="p-6 grid grid-cols-2 gap-4">
                <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex flex-col items-center text-center">
                  <Server size={24} className="text-blue-600 mb-3" />
                  <span className="text-sm font-medium text-gray-900">Scan Devices</span>
                </button>
                
                <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors flex flex-col items-center text-center">
                  <Database size={24} className="text-green-600 mb-3" />
                  <span className="text-sm font-medium text-gray-900">Backup Data</span>
                </button>
                
                <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors flex flex-col items-center text-center">
                  <Lock size={24} className="text-purple-600 mb-3" />
                  <span className="text-sm font-medium text-gray-900">Password Check</span>
                </button>
                
                <button className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors flex flex-col items-center text-center">
                  <Activity size={24} className="text-yellow-600 mb-3" />
                  <span className="text-sm font-medium text-gray-900">Activity Log</span>
                </button>
              </div>
            </motion.div>
            
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Weekly Newsletter</h2>
              </div>
              
              <div className="p-6">
                <h3 className="font-medium text-gray-900 mb-2">Latest Security Tips</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Check out our latest security tips and best practices to keep your digital life safe.
                </p>
                <a
                  href="#"
                  className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium text-center"
                >
                  Read Latest Issue
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;