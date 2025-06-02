import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Briefcase, Award, Shield, CheckCircle } from 'lucide-react';

// Stats Counter
interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = Math.max(10, duration / end);

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
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-blue-700">{count}{suffix}</h3>
      <p className="text-lg md:text-xl text-blue-700/80">{label}</p>
    </motion.div>
  );
};

const CompanyPage: React.FC = () => (
  <div className="bg-[#f8fafc] relative overflow-x-hidden">
    {/* HERO */}
    <section className="relative min-h-[380px] md:min-h-[440px] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-blue-700">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="Corporate team"
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
          About Storrsec
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.10 }}
          className="max-w-xl text-lg md:text-2xl font-medium text-white text-center mt-6"
        >
          A leading cybersecurity company with a mission to make the digital world safer for everyone.
        </motion.p>
      </div>
    </section>

    {/* ABOUT US */}
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2018, Storrsec began with a simple yet powerful vision: to create a more secure digital environment for businesses and individuals alike. What started as a small team of passionate security experts has grown into a global cybersecurity leader.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our founders, with decades of experience in cybersecurity and software development, recognized that as technology evolved, so too did the threats facing it. They set out to build solutions that would not only address today's security challenges but anticipate tomorrow's.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Storrsec serves clients across industries and around the world, from Fortune 500 companies to small businesses and individuals. Our commitment to innovation, excellence, and client success drives everything we do.
              </p>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Storrsec Team"
                className="rounded-3xl shadow-2xl w-full border-4 border-blue-100"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* MISSION */}
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-xl text-blue-700 leading-relaxed">
              To empower organizations and individuals with the security solutions, knowledge, and tools they need to protect their digital assets and navigate the cyber landscape with confidence.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 mx-auto">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">Protect</h3>
            <p className="text-gray-700 text-center">
              Develop and implement cutting-edge security solutions that safeguard our clients' most valuable digital assets.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-6 mx-auto">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">Educate</h3>
            <p className="text-gray-700 text-center">
              Share our expertise and insights to help organizations build a strong security culture and make informed decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6 mx-auto">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">Innovate</h3>
            <p className="text-gray-700 text-center">
              Continuously research and develop new security technologies to stay ahead of evolving cyber threats.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* HOW WE WORK */}
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">How We Work</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Our approach combines deep technical expertise with a client-centered methodology to deliver exceptional security outcomes.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {[
            {
              title: "Assess",
              desc: "We begin by thoroughly evaluating your current security posture, identifying vulnerabilities, and understanding your specific needs and objectives.",
            },
            {
              title: "Plan",
              desc: "Based on our assessment, we develop a customized security strategy that addresses your specific risks and aligns with your business goals.",
            },
            {
              title: "Implement",
              desc: "Our security experts deploy the selected solutions, ensuring seamless integration with your existing systems and minimal disruption to operations.",
            },
            {
              title: "Monitor",
              desc: "Once implemented, we continuously monitor your security environment, detecting and responding to potential threats in real-time.",
            },
            {
              title: "Optimize",
              desc: "We regularly review and refine your security strategy, adapting to new threats and evolving business needs to ensure ongoing protection.",
            },
            {
              title: "Educate",
              desc: "Throughout our engagement, we provide training and knowledge transfer to help build your team's security capabilities and awareness.",
            },
          ].map((step, idx) => (
            <div className="flex" key={step.title}>
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  {idx + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHO WE WORK FOR */}
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Work For</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Our clients span industries, sizes, and geographies, but they all share a commitment to security excellence.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Enterprise Organizations</h3>
            <p className="text-gray-700 mb-4">
              We work with large corporations across financial services, healthcare, technology, and more to secure complex environments.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Comprehensive security programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Compliance and regulatory support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Enterprise-wide threat monitoring</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Small and Medium Businesses</h3>
            <p className="text-gray-700 mb-4">
              We provide tailored security solutions that protect smaller organizations without enterprise-level budgets.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Cost-effective security measures</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Managed security services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Security awareness training</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Individuals</h3>
            <p className="text-gray-700 mb-4">
              We help individuals protect their personal data, digital identities, and online privacy in an increasingly connected world.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Personal security assessments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Identity protection services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-2" />
                <span>Privacy enhancement solutions</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CERTIFICATIONS */}
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Certifications</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              We maintain the highest industry standards and certifications to ensure excellence in our security services.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "ISO 27001", description: "Information Security Management" },
            { name: "CISSP", description: "Certified Information Systems Security Professional" },
            { name: "SOC 2 Type II", description: "Service Organization Control" },
            { name: "CMMC Level 3", description: "Cybersecurity Maturity Model Certification" },
            { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
            { name: "CISA", description: "Certified Information Systems Auditor" },
            { name: "GDPR Compliant", description: "General Data Protection Regulation" },
            { name: "NIST CSF", description: "National Institute of Standards Framework" }
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl border border-blue-100 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{cert.name}</h3>
              <p className="text-blue-700 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="py-16 md:py-20 relative z-10 bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCounter value={97} label="Client Satisfaction" suffix="%" delay={0.1} />
          <StatsCounter value={250} label="Enterprise Clients" delay={0.2} />
          <StatsCounter value={5000} label="Threats Blocked Daily" suffix="+" delay={0.3} />
          <StatsCounter value={24} label="Hour Support" suffix="/7" delay={0.4} />
        </div>
      </div>
    </section>

    {/* CTA - Home Page Format */}
    <section className="py-16 md:py-24 bg-gray-50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Ready to Work Together?</h2>
          <p className="text-gray-500 mb-8 text-lg">
            Join the many organizations and individuals who trust Storrsec with their cybersecurity needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/subscribe"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get Started Today
            </a>
            <a
              href="/solutions"
              className="inline-block bg-transparent border border-gray-400 font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-colors duration-300"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CompanyPage;
