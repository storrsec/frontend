import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, MonitorSmartphone, Radar, CheckCircle, GraduationCap, Lightbulb, UserCheck, BookOpen } from 'lucide-react';

// Data for the new "Why Kids Need Cyber Education" section
const cyberEducationContent = {
  title: "Empowering the Next Generation: Why Kids Need Cyber Education",
  subtitle: "In today's digital world, children are exposed to online risks more than ever. Our programs equip them with the knowledge and skills to navigate the internet safely and responsibly.",
  image: "/images/school.jpg", // Kids learning on tablet
  points: [
    {
      heading: "Protection from Online Dangers",
      text: "Teach kids to recognize and avoid phishing scams, cyberbullying, and inappropriate content.",
      icon: <Shield size={24} className="text-red-500" />
    },
    {
      heading: "Responsible Digital Citizenship",
      text: "Foster critical thinking about online privacy, digital footprints, and respectful online interactions.",
      icon: <UserCheck size={24} className="text-blue-500" />
    },
    {
      heading: "Understanding Technology",
      text: "Demystify how the internet works and introduce basic concepts of data security in an engaging way.",
      icon: <Lightbulb size={24} className="text-yellow-500" />
    }
  ]
};

const educationBenefits = [
  {
    icon: <CheckCircle size={20} className="text-green-500 mt-1 mr-2" />,
    text: "Age-Appropriate Curriculum",
  },
  {
    icon: <CheckCircle size={20} className="text-green-500 mt-1 mr-2" />,
    text: "Interactive & Engaging Lessons",
  },
  {
    icon: <CheckCircle size={20} className="text-green-500 mt-1 mr-2" />,
    text: "Certified & Experienced Educators",
  },
  {
    icon: <CheckCircle size={20} className="text-green-500 mt-1 mr-2" />,
    text: "Practical, Real-World Scenarios",
  },
  {
    icon: <CheckCircle size={20} className="text-green-500 mt-1 mr-2" />,
    text: "Parent Resources & Workshops",
  },
  {
    icon: <CheckCircle size={20} className="text-green-500 mt-1 mr-2" />,
    text: "Flexible Online Learning Options",
  },
];

const educationPlans = [
  {
    name: "Cyber Explorers",
    gradeRange: "Grades 1-5",
    description: "Foundational concepts for young digital citizens.",
    features: [
      "2 classes/month (45 min each)",
      "Basic online safety rules",
      "Identifying safe websites",
      "Privacy basics (not sharing personal info)",
      "Recognizing simple scams",
      "Interactive games & stories"
    ],
    image: "", // Kids learning
    cta: "Enroll Explorers",
  },
  {
    name: "Digital Navigators",
    gradeRange: "Grades 5-7",
    description: "Building on basics with deeper dives into online risks.",
    features: [
      "4 classes/month (60 min each)",
      "Understanding cyberbullying & reporting",
      "Strong password creation & management",
      "Social media safety & digital footprint",
      "Phishing & malware awareness",
      "Introduction to online privacy settings"
    ],
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Enroll Navigators",
  },
  {
    name: "Future Cyber Leaders",
    gradeRange: "Grades 7-10",
    description: "Advanced topics for responsible and secure online presence.",
    features: [
      "8 classes/month (75 min each)",
      "Advanced phishing & social engineering",
      "Data privacy & encryption concepts",
      "Cyber ethics & responsible online behavior",
      "Understanding deepfakes & misinformation",
      "Introduction to cybersecurity careers",
      "Online reputation management"
    ],
    image: "",
    cta: "Enroll Leaders",
  },
];

const ServicesPage: React.FC = () => (
  <div className="bg-[#f8fafc] relative overflow-x-hidden">
    {/* HERO */}
    <section className="relative min-h-[380px] md:min-h-[540px] flex items-center justify-center overflow-hidden">
      <img
        src="/images/kid.jpg"
        alt="Cyber education background with school elements"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 pointer-events-none"
        loading="lazy"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/1260x750/cccccc/333333?text=Image+Not+Found'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-b z-10" />
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-30"
        width="1400"
        height="300"
        viewBox="0 0 1400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: 'none' }}
      >
        <ellipse
          cx="700"
          cy="120"
          rx="600"
          ry="90"
          fill="url(#services-header-bg-gradient)"
          opacity="0.45"
        />
        <defs>
          <linearGradient
            id="services-header-bg-gradient"
            x1="0"
            y1="0"
            x2="1400"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" />
            <stop offset="0.45" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative z-20 w-full flex flex-col items-center px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"
        >
          Cyber Education for Young Minds
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-blue-100 mb-8"
        >
          Equipping children with essential digital literacy and cybersecurity skills for a safer online future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#education-plans"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Our Programs
          </a>
        </motion.div>
      </div>
    </section>

    {/* Why Kids Need Cyber Education */}
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src={cyberEducationContent.image || "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&w=800&q=80"}
              alt="Kids learning cyber safety"
              className="rounded-2xl shadow-xl w-full object-cover h-auto max-h-[450px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{cyberEducationContent.title}</h2>
            <p className="text-lg text-blue-700 mb-8 leading-relaxed">{cyberEducationContent.subtitle}</p>
            <div className="space-y-6">
              {cyberEducationContent.points.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">{point.heading}</h3>
                    <p className="text-gray-700">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* How We Serve Cyber Education */}
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">How Storrsec Delivers Cyber Education</h2>
            <p className="text-xl text-blue-700">
              Our approach is designed to be engaging, effective, and tailored to each child's learning journey.
            </p>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationBenefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-blue-100 flex items-start shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {benefit.icon}
              <span className="text-blue-900 text-lg font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Cyber Education Plans */}
    <section id="education-plans" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Choose Your Cyber Education Plan</h2>
          <p className="text-xl text-blue-700 mb-8">
            Select the perfect program for your child's age group and learning pace.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-br from-blue-100 via-white to-blue-50 text-blue-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center relative"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-blue-600 text-lg font-semibold mb-4">{plan.gradeRange}</p>
              <div className="mb-6 w-full h-48 overflow-hidden rounded-lg shadow-md bg-white flex items-center justify-center">
                <img
                  src={plan.image || "https://placehold.co/600x400/cccccc/333333?text=No+Image"}
                  alt={`${plan.name} program`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
                />
              </div>
              <p className="text-blue-700 mb-6">{plan.description}</p>
              <ul className="mb-8 space-y-2 text-blue-900 text-left w-full">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-1 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-auto w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-md transition-colors duration-300"
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA - Home Page Format */}
    <section className="py-16 md:py-24 bg-gray-50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Ready to Empower Your Child?</h2>
          <p className="text-gray-500 mb-8 text-lg">
            Start their cybersecurity journey today with Storrsec's interactive education programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="#education-plans"
              className="inline-block bg-transparent border border-gray-400 font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-colors duration-300"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
