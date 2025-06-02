import React, { useEffect, useState, ChangeEvent, createContext, useContext } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Bell,
  User as UserIcon,
  Calendar,
  Newspaper,
  Shield,
  MonitorSmartphone,
  Radar,
  Cloud,
  Camera,
  Trash,
  Mail,
  Phone,
  Hash,
  Edit2,
  Save,
  XCircle,
} from "lucide-react";
import { BrowserRouter, useNavigate } from "react-router-dom"; // Import BrowserRouter

// Define the User type for consistency
type User = {
  name: string;
  email: string;
  contact?: string;
  plan: string;
  expiryDate: string;
  customerId?: string;
  avatarUrl?: string;
};

// Create a simple AuthContext for the mock
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock useAuth for demonstration purposes. In a real app, this would be imported.
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Simple AuthProvider for the mock
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "123-456-7890",
      plan: "Premium",
      expiryDate: "2025-12-31", // Example expiry date
      customerId: "CUST12345",
      avatarUrl: "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=John+Doe",
    }
  );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


type Subscription = {
  status: 'active' | 'inactive';
  startDate?: string; // ISO string
};

const cardGradient = "bg-gradient-to-br from-blue-500/10 via-blue-400/10 to-blue-300/10 backdrop-blur-md";
const sectionBg = "bg-white/95 backdrop-blur-sm"; // Slightly transparent white with blur
const sectionTitle = "text-2xl md:text-3xl font-bold text-gray-900 mb-6";

function getDaysRemaining(expiryDate: string): number {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const diff = expiry.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// --- Password Strength Meter Logic (unchanged, for brevity) ---
const getPasswordStrength = (password: string) => {
  let score = 0;
  if (!password) return 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (password.length >= 16) score++;
  return Math.min(score, 5);
};
const strengthLabels = [
  'Empty',
  'Very Weak',
  'Weak',
  'Moderate',
  'Strong',
  'Very Strong'
];
const strengthColors = [
  'bg-gray-200',
  'bg-red-400',
  'bg-orange-400',
  'bg-yellow-400',
  'bg-green-400',
  'bg-green-600'
];
const PasswordStrengthMeter: React.FC<{
  password: string;
  onStrengthChange?: (strength: number) => void;
}> = ({ password, onStrengthChange }) => {
  const strength = getPasswordStrength(password);
  React.useEffect(() => { if (onStrengthChange) onStrengthChange(strength); }, [strength]);
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {[1,2,3,4,5].map((bar) => (
          <div
            key={bar}
            className={`h-2 w-full rounded transition-all duration-300 ${strength >= bar ? strengthColors[bar] : 'bg-gray-200'}`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>{strengthLabels[Math.max(0, strength)]}</span>
        {password && (
          <span>
            {strength < 3 && (
              <span className="text-orange-700 font-medium">Too Weak</span>
            )}
            {strength === 3 && (
              <span className="text-yellow-700 font-medium">Could Improve</span>
            )}
            {strength > 3 && (
              <span className="text-green-700 font-medium">Good!</span>
            )}
          </span>
        )}
      </div>
      <ul className="text-xs text-gray-500 list-disc pl-5">
        <li className={password.length >= 8 ? "text-green-700" : ""}>At least 8 characters</li>
        <li className={/[A-Z]/.test(password) ? "text-green-700" : ""}>Uppercase letter</li>
        <li className={/[a-z]/.test(password) ? "text-green-700" : ""}>Lowercase letter</li>
        <li className={/[0-9]/.test(password) ? "text-green-700" : ""}>Number</li>
        <li className={/[^A-Za-z0-9]/.test(password) ? "text-green-700" : ""}>Special character</li>
      </ul>
    </div>
  );
};
// --- End Password Strength Meter ---

// Mock updateUserDetails to simulate backend update
const updateUserDetails = async (details: any) => {
  return new Promise((resolve) => setTimeout(() => resolve(details), 1000));
};

const accountThreats = [
  {
    type: "Data Breach",
    message: "Your email was found in a recent data breach.",
    action: "Change your password",
    time: "2 hours ago",
    icon: <AlertCircle size={24} className="text-red-600" />,
  },
  {
    type: "Suspicious Login",
    message: "Login attempt from an unrecognized device (Berlin, Germany).",
    action: "Review Activity",
    time: "Yesterday",
    icon: <Bell size={24} className="text-yellow-600" />,
  },
];

const securityFeatures = [
  {
    icon: <Shield size={38} />,
    color: "bg-blue-100 text-blue-600",
    title: "Comprehensive Protection",
    description:
      "Multi-layered security protects you from malware, phishing, identity theft, and breaches.",
  },
  {
    icon: <Radar size={38} />,
    color: "bg-yellow-100 text-yellow-600",
    title: "Threat Intelligence",
    description:
      "Stay ahead of cyber threats with real-time intelligence and early warning systems.",
  },
  {
    icon: <Cloud size={38} />,
    color: "bg-teal-100 text-teal-600",
    title: "Cloud Security",
    description: "Secure all your cloud environments and devices with adaptive protection.",
  },
  {
    icon: <MonitorSmartphone size={38} />,
    color: "bg-purple-100 text-purple-600",
    title: "Endpoint Protection",
    description: "Safeguard your devices from ransomware and cyber attacks.",
  },
];

const DEFAULT_AVATAR =
  "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=User";

// Mock news data
const news = [
  {
    title: "New Phishing Scam Targets Online Shoppers",
    description: "Beware of fake delivery notifications designed to steal your credentials.",
    publishedAt: "2025-05-28T10:00:00Z",
    url: "#",
  },
  {
    title: "Ransomware Attack Hits Major Healthcare Provider",
    description: "Patient data potentially compromised in a sophisticated cyber attack.",
    publishedAt: "2025-05-27T15:30:00Z",
    url: "#",
  },
  {
    title: "How to Secure Your Smart Home Devices",
    description: "Expert tips on protecting your IoT gadgets from cyber vulnerabilities.",
    publishedAt: "2025-05-26T08:15:00Z",
    url: "#",
  },
];


// StatsCounter component (moved here for self-containment)
interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // milliseconds
    const incrementTime = (duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="text-center text-white"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-blue-300">
        {count}{suffix}
      </h3>
      <p className="text-lg md:text-xl text-blue-100">{label}</p>
    </motion.div>
  );
};


const UserPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth(); // useAuth is now mocked above

  // Subscription logic
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  // Password Strength Meter state
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);


  useEffect(() => {
    // Simulate fetching subscription info from backend
    const fetchSubscription = async () => {
      // Mock API call
      const data: Subscription = { status: 'active', startDate: '2025-05-01T00:00:00Z' }; // Example active subscription
      // const data: Subscription = { status: 'inactive' }; // Example inactive subscription
      setSubscription(data);

      if (data.status === 'active' && data.startDate) {
        const start = new Date(data.startDate);
        const now = new Date();
        // Calculate days remaining in a 30-day cycle from start date
        const daysSinceStart = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        const daysRemainingInCycle = 30 - (daysSinceStart % 30); // Days left until next 30-day mark
        setDaysLeft(daysRemainingInCycle > 0 ? daysRemainingInCycle : 0);
      } else {
        setDaysLeft(0); // If inactive or no start date, 0 days left
      }
    };
    fetchSubscription();
  }, []);

  // Profile picture state
  const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || DEFAULT_AVATAR);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Editable user details state
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    contact: user?.contact || "",
  });
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  // Sync form with user when entering Edit mode or user data changes
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        contact: user.contact || "",
      });
      setAvatarUrl(user.avatarUrl || DEFAULT_AVATAR);
    }
  }, [user]);

  // Handle avatar upload
  const handleAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Please select an image file.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setUploadError("Image size should be less than 2MB.");
      return;
    }

    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = function (ev) {
        if (ev.target && typeof ev.target.result === "string") {
          setAvatarUrl(ev.target.result);
          // In a real app, you'd send this to a backend for storage
          // setForm((f) => ({ ...f, avatarUrl: ev.target!.result as string })); // This line is not needed if avatarUrl is managed separately
        }
        setUploading(false);
      };
      reader.onerror = function () {
        setUploadError("Failed to read image file.");
        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setUploadError("Upload failed.");
      setUploading(false);
    }
  };

  // Handle avatar delete (reset to default)
  const handleAvatarDelete = () => {
    setAvatarUrl(DEFAULT_AVATAR);
    setUploadError(null);
    // setForm((f) => ({ ...f, avatarUrl: DEFAULT_AVATAR })); // This line is not needed if avatarUrl is managed separately
  };

  // Go to subscribe page if expired clicked
  const handleExpiredClick = () => {
    navigate("/subscribe");
  };

  const handleEdit = () => {
    setIsEdit(true);
    setSaveMsg("");
  };

  const handleCancel = () => {
    setIsEdit(false);
    setSaveMsg("");
    if (user) {
      setForm({
        name: user.name,
        email: user.email,
        contact: user.contact || "",
      });
      setAvatarUrl(user.avatarUrl || DEFAULT_AVATAR);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg("");
    const updated = {
      ...user,
      ...form,
      avatarUrl, // Include the current avatarUrl from state
    };
    await updateUserDetails(updated); // Simulate API call
    if (setUser) setUser(updated); // Update global user context
    setIsEdit(false);
    setSaving(false);
    setSaveMsg("Profile updated!");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white mb-2">Access Denied</h2>
          <p className="text-blue-100">Please log in to view your page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-950 to-gray-800 relative overflow-hidden">
      {/* Background Elements (similar to SubscribePage for consistency) */}
      <div className="absolute inset-0 z-0 opacity-80">
        {/* Subtle dark blue radial gradient */}
        <div className="absolute inset-0 bg-radial-gradient-dark-blue opacity-50 animate-fade-in"></div>

        {/* Animated grid of interconnected nodes/lines */}
        <div className="absolute inset-0 bg-dots-grid-pattern opacity-15 animate-fade-in" style={{ backgroundSize: '60px 60px' }}></div>

        {/* Dynamic Glowing Lines / Network effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 rounded-full h-1"
              initial={{
                width: '0%',
                y: `${Math.random() * 100}vh`,
                x: `${Math.random() * 100}vw`,
                rotate: Math.random() * 360,
                opacity: 0,
              }}
              animate={{
                width: '100%',
                opacity: 0.1,
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transformOrigin: 'top left',
              }}
            />
          ))}
        </div>

        {/* Very subtle binary rain */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-green-400 text-xs font-mono"
              initial={{ y: -50, opacity: 0.05, x: Math.random() * window.innerWidth }}
              animate={{ y: window.innerHeight + 50, opacity: 0.02 }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            >
              {Array.from({ length: Math.floor(Math.random() * 15) + 3 }).map(() => (Math.random() > 0.5 ? '1' : '0'))}
            </motion.span>
          ))}
        </div>

        {/* Main content darkening overlay */}
        <div className="absolute inset-0 bg-gradient-to-radial from-transparent via-gray-950/70 to-gray-950 opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10"> {/* Ensure content is above background */}

        {/* Subscription Info (added section) */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4 text-white">Subscription Status</h1>
          {subscription && subscription.status === 'active' && typeof daysLeft === 'number' ? (
            <div className="mb-4 text-green-700 bg-green-100 rounded p-4">
              <span>Your subscription is active.</span>
              <br />
              <span>Days left: <b>{daysLeft}</b></span>
            </div>
          ) : (
            <div className="mb-4 text-gray-600 bg-gray-100 rounded p-4">
              <span>You do not have an active subscription.</span>
            </div>
          )}
        </div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">
              Welcome, {user.name}
            </h1>
            <p className="text-blue-100 text-lg">Your personalized security dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-90 shadow text-lg font-medium text-blue-700">
              <Calendar size={24} className="mr-2" />
              <span>
                {user.expiryDate && getDaysRemaining(user.expiryDate) > 0 ? (
                  <>
                    {getDaysRemaining(user.expiryDate)} day{getDaysRemaining(user.expiryDate) !== 1 ? "s" : ""} left
                  </>
                ) : (
                  <span
                    className="text-red-600 cursor-pointer underline font-semibold"
                    onClick={handleExpiredClick}
                    title="Go to subscribe"
                  >
                    Expired
                  </span>
                )}
              </span>
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 font-semibold text-blue-800 shadow">
              {user.plan}
            </span>
          </div>
        </motion.div>

        {/* USER DETAILS & FEATURES */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-2xl shadow-2xl p-8 ${cardGradient} flex flex-col items-center relative overflow-hidden`}
          >
            {/* Floating rings */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-blue-300/30 to-blue-100/0 blur-2xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-tr from-teal-400/30 to-blue-100/0 blur-2xl z-0" />

            <div className="flex items-center w-full">
              <div className="relative w-24 h-24 mr-8 z-10 group">
                <img
                  src={avatarUrl}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-blue-400/30 ring-4 ring-white/40 transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = DEFAULT_AVATAR; }} // Fallback
                />
                {isEdit && (
                  <div className="absolute bottom-0 right-0 flex space-x-1">
                    <label
                      htmlFor="avatar-upload"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 border-2 border-white shadow cursor-pointer transition"
                      title="Change profile picture"
                    >
                      <Camera size={18} />
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarChange}
                        disabled={uploading}
                      />
                    </label>
                    <button
                      type="button"
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 border-2 border-white shadow transition"
                      title="Delete profile picture"
                      onClick={handleAvatarDelete}
                      disabled={uploading || avatarUrl === DEFAULT_AVATAR}
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                )}
                {uploading && (
                  <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center rounded-full">
                    <span className="text-blue-700 text-xs font-semibold">Uploading...</span>
                  </div>
                )}
              </div>
              <div className="space-y-2 z-10 w-full max-w-xs">
                <div className="flex items-center font-extrabold text-2xl text-blue-900 mb-1">
                  <UserIcon size={20} className="mr-2 text-blue-400" />
                  {isEdit ? (
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-blue-200 rounded px-2 py-1 text-blue-900 font-bold"
                      placeholder="Full Name"
                    />
                  ) : (
                    <span className="truncate">{user.name}</span>
                  )}
                </div>
                <div className="flex items-center text-blue-600">
                  <Mail size={18} className="mr-2" />
                  {isEdit ? (
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-blue-200 rounded px-2 py-1 text-blue-700"
                      placeholder="Email"
                    />
                  ) : (
                    <span className="truncate">{user.email}</span>
                  )}
                </div>
                <div className="flex items-center text-blue-600">
                  <Phone size={18} className="mr-2" />
                  {isEdit ? (
                    <input
                      type="text"
                      name="contact"
                      value={form.contact}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-blue-200 rounded px-2 py-1 text-blue-700"
                      placeholder="Contact"
                    />
                  ) : (
                    <span className="truncate">{user.contact || "N/A"}</span>
                  )}
                </div>
                <div className="flex items-center text-xs text-blue-400 font-mono">
                  Plan: <span className="ml-1 text-blue-800 font-semibold">{user.plan}</span>
                </div>
                {user.customerId && (
                  <div className="flex items-center text-xs text-blue-400 font-mono">
                    <Hash size={16} className="mr-2" />
                    Customer ID: <span className="ml-1 text-blue-800 font-semibold">{user.customerId}</span>
                  </div>
                )}
                {uploadError && (
                  <div className="text-xs text-red-600 mt-2">{uploadError}</div>
                )}
                {saveMsg && (
                  <div className="text-green-600 text-xs mt-2">{saveMsg}</div>
                )}
              </div>
            </div>
            {/* EDIT/SAVE/CANCEL BUTTONS */}
            <div className="flex gap-2 mt-6 ml-32 w-full max-w-xs">
              {isEdit ? (
                <>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow font-semibold text-sm disabled:opacity-60"
                  >
                    <Save size={16} /> {saving ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={handleCancel}
                    disabled={saving}
                    className="flex items-center gap-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded shadow font-semibold text-sm"
                  >
                    <XCircle size={16} /> Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-1 p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 shadow font-semibold text-sm"
                  title="Edit profile"
                  aria-label="Edit profile"
                >
                  <Edit2 size={22} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`${sectionBg} rounded-2xl shadow-xl p-8`}
          >
            <h2 className={sectionTitle}>Your Security Features</h2>
            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center rounded-xl p-4 ${feat.color} bg-opacity-70 shadow hover:shadow-lg transition-transform hover:-translate-y-1`}
                >
                  <div className="mb-1 animate-pulse">{feat.icon}</div>
                  <div className="font-bold mt-2 text-sm text-gray-800 text-center">
                    {feat.title}
                  </div>
                  <div className="text-xs text-gray-600 text-center">{feat.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Password Strength Meter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-8 md:py-12 bg-white/95 rounded-2xl shadow-xl mb-12"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                How Strong Is Your Password?
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Test your password strength with our security tool. Strong passwords are your first line of defense against unauthorized access.
              </p>
              <div className="mb-8">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter a password to test
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Type your password here..."
                />
              </div>
              <PasswordStrengthMeter
                password={password}
                onStrengthChange={setPasswordStrength}
              />
              {passwordStrength < 3 && password.length > 0 && (
                <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-lg">
                  <p className="text-orange-800 text-sm font-medium mb-2">
                    Your password may not be strong enough
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    Weak passwords are the most common entry point for cyber attacks. Protect yourself with our premium security services.
                  </p>
                  <a
                    href="/subscribe"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 text-sm"
                  >
                    Subscribe to Storrsec Security
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* THREATS & NEWS */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`${sectionBg} rounded-2xl shadow-lg p-8`}
          >
            <div className="flex items-center mb-4">
              <AlertCircle size={28} className="text-red-500 mr-2 animate-bounce-custom" /> {/* Custom bounce animation */}
              <h2 className={sectionTitle}>Account Threats</h2>
            </div>
            {accountThreats.length === 0 && (
              <div className="text-green-600 text-center font-semibold py-8">
                No active threats detected 🎉
              </div>
            )}
            {accountThreats.map((threat, idx) => (
              <div
                key={idx}
                className="flex items-start mb-4 bg-gradient-to-r from-red-100/60 to-white/60 p-4 rounded-lg border-l-4 border-red-300 shadow-sm hover:shadow transition"
              >
                <div className="mr-4 animate-pulse-custom">{threat.icon}</div> {/* Custom pulse animation */}
                <div>
                  <div className="font-semibold text-red-800">{threat.type}</div>
                  <div className="text-gray-700 text-sm">{threat.message}</div>
                  <div className="text-blue-700 text-xs font-semibold mt-1">{threat.action}</div>
                  <div className="text-gray-400 text-xs mt-1">{threat.time}</div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`${sectionBg} rounded-2xl shadow-lg p-8`}
          >
            <div className="flex items-center mb-4">
              <Newspaper size={28} className="text-blue-500 mr-2 animate-pulse-custom" /> {/* Custom pulse animation */}
              <h2 className={sectionTitle}>Cyber Fraud News</h2>
            </div>
            {news.length === 0 ? (
              <div className="text-gray-400 text-center py-4">
                No news available right now.
              </div>
            ) : (
              news.map((article, idx) => (
                <div
                  key={idx}
                  className="mb-6 bg-gradient-to-r from-blue-50/60 to-white/60 p-4 rounded-lg shadow-sm hover:shadow-lg transition"
                >
                  <div className="font-semibold text-gray-900">{article.title}</div>
                  <div className="text-gray-600 text-sm">{article.description}</div>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 text-xs hover:underline font-semibold mt-1 inline-block"
                    >
                      Read more →
                    </a>
                  )}
                </div>
              ))
            )}
          </motion.div>
        </div>
      </div>
      {/* Custom CSS for animations and background patterns */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bounce-custom {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-custom {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in {
          animation: fade-in 2s ease-out forwards;
        }
        .animate-bounce-custom {
          animation: bounce-custom 1s infinite ease-in-out;
        }
        .animate-pulse-custom {
          animation: pulse-custom 2s infinite ease-in-out;
        }

        .bg-radial-gradient-dark-blue {
            background-image: radial-gradient(circle at center, rgba(10, 20, 50, 0.6) 0%, rgba(0, 0, 0, 0.9) 80%);
        }
        .bg-dots-grid-pattern {
          background-image:
            radial-gradient(circle at center, rgba(66, 153, 225, 0.1) 1px, transparent 1px),
            linear-gradient(to right, rgba(66, 153, 225, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(66, 153, 225, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center center;
        }
      `}</style>
    </div>
  );
};

// Default export wrapped in BrowserRouter and AuthProvider for Canvas preview
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserPage />
      </AuthProvider>
    </BrowserRouter>
  );
}
