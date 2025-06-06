import React from "react";
import { motion } from "framer-motion";
import {
  Shield, Server, Bell, Zap, Fingerprint, UserCheck, Activity, AlertCircle, KeyRound, Database, Network, Cloud, Eye,
} from "lucide-react";

// HERO DATA
const hero = {
  title: "Fortify Your Future: Elite Cybersecurity for the Modern Enterprise",
  subtitle: "Your business is the target. We make it untouchable.",
  image: "/images/people.jpg",
};


// WHO WE ARE DATA (visual, split layout, not essay-style)
const whoWeAre = {
  title: "Who We Are",
  lead: "Built for Trust. Designed for Tomorrow.",
  points: [
    {
      icon: UserCheck,
      iconClass: "text-blue-600",
      label: "Certified Security Experts",
      desc: "Industry-certified professionals with real-world experience.",
    },
    {
      icon: Activity,
      iconClass: "text-purple-600",
      label: "Cutting-Edge Approach",
      desc: "Ahead of threats with advanced research and relentless curiosity.",
    },
    {
      icon: Shield,
      iconClass: "text-orange-600",
      label: "Business-First Commitment",
      desc: "True partner, aligning with your goals and compliance needs.",
    },
    {
      icon: AlertCircle,
      iconClass: "text-teal-600",
      label: "Rapid, Reliable Response",
      desc: "Always-on support and rapid incident response.",
    },
  ],
  image: "/images/soluti.jpg", // cybersecurity/monitoring/soc
};

// HOW WE WORK DATA
const howWeWorkSteps = [
  {
    icon: Shield,
    iconClass: "text-blue-600",
    title: "Assessment & Discovery",
    desc: "Comprehensive review of your security landscape, goals, and risks.",
  },
  {
    icon: Cloud,
    iconClass: "text-purple-600",
    title: "Tailored Strategy",
    desc: "Custom roadmap and solutions aligned to your operations.",
  },
  {
    icon: Bell,
    iconClass: "text-orange-600",
    title: "Implementation",
    desc: "Expert deployment with minimal disruption.",
  },
  {
    icon: Zap,
    iconClass: "text-teal-600",
    title: "Continuous Support",
    desc: "Ongoing monitoring, response, and improvement.",
  },
];

// WHAT WE OFFER DATA
const offerItems = [
  { icon: Shield, iconClass: "text-blue-600", title: "Vulnerability Assessment", desc: "Identify and fix weaknesses before attackers do." },
  { icon: Zap, iconClass: "text-purple-600", title: "Penetration Testing", desc: "Simulated attacks to uncover real-world risks." },
  { icon: Bell, iconClass: "text-orange-600", title: "Security Monitoring", desc: "24/7 monitoring and immediate threat response." },
  { icon: Cloud, iconClass: "text-blue-500", title: "Cloud Security", desc: "Protection for all your cloud assets." },
  { icon: KeyRound, iconClass: "text-teal-600", title: "Identity Management", desc: "Advanced authentication and access controls." },
  { icon: Database, iconClass: "text-red-600", title: "Data Protection", desc: "Encryption, access control, and data loss prevention." },
  { icon: Network, iconClass: "text-green-600", title: "Network Security", desc: "Defense for your network infrastructure." },
  { icon: Eye, iconClass: "text-yellow-600", title: "Security Awareness Training", desc: "Empower your team to recognize cyber threats." },
];

// === REUSABLE CARD COMPONENTS ===

/**
 * InfoCard component for displaying a title, description, and icon.
 * Features a subtle hover effect and rounded corners.
 */
const InfoCard = React.memo(
  ({ icon: Icon, iconClass, title, desc }: { icon: React.ElementType; iconClass?: string; title: string; desc: string }) => (
    <motion.article
      // Hover effects for scale, shadow, and translateY for a "lift" effect
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 28px 0 rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
      className="flex flex-col items-start p-6 md:p-8 border border-blue-100 rounded-2xl shadow-lg bg-gradient-to-br from-white via-blue-50 to-white transition-all duration-300 h-full group cursor-pointer"
      tabIndex={0} // Make the card focusable for accessibility
      aria-label={`${title}: ${desc}`} // Accessible label
    >
      <span
        className="mb-4 shadow-xl rounded-full p-3 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300"
        aria-hidden="true" // Hide from screen readers as text provides context
      >
        <Icon size={36} className={`${iconClass} transform group-hover:scale-110 transition-transform duration-300`} />
      </span>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
    </motion.article>
  )
);

/**
 * WhoWeArePoint component for displaying key points in the "Who We Are" section.
 * Features a subtle hover effect and rounded corners.
 */
const WhoWeArePoint = React.memo(
  ({ icon: Icon, iconClass, label, desc }: { icon: React.ElementType; iconClass: string; label: string; desc: string }) => (
    <motion.div
      // Hover effects for scale and shadow
      whileHover={{ y: -4, scale: 1.04, boxShadow: "0 6px 24px 0 rgba(0,76,255,0.15)", transition: { duration: 0.2 } }}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-blue-50/80 w-full h-full border border-blue-100 transition-all duration-300 cursor-pointer"
    >
      <span className={`mb-3 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md border border-blue-200 ${iconClass}`} aria-hidden="true">
        <Icon size={24} />
      </span>
      <div className="font-semibold text-blue-900 text-lg mb-1">{label}</div>
      <div className="text-gray-600 text-sm leading-relaxed">{desc}</div>
    </motion.div>
  )
);

/**
 * StepCard component for displaying steps in the "How We Work" section.
 * Features a subtle hover effect and rounded corners.
 */
const StepCard = React.memo(
  ({ icon: Icon, iconClass, title, desc }: { icon: React.ElementType; iconClass: string; title: string; desc: string }) => (
    <motion.div
      // Hover effects for scale and background color
      whileHover={{ scale: 1.03, backgroundColor: "#e0eaff", transition: { duration: 0.2 } }}
      className="flex flex-col items-center text-center bg-white shadow-sm rounded-xl p-6 border border-blue-100 w-full h-full transition-all duration-300 cursor-pointer"
    >
      <span className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 shadow-md border-2 border-blue-200 ${iconClass}`} aria-hidden="true">
        <Icon size={26} />
      </span>
      <div className="font-bold text-blue-900 text-lg mb-1">{title}</div>
      <div className="text-blue-800 text-sm leading-relaxed">{desc}</div>
    </motion.div>
  )
);

// ============ MAIN PAGE COMPONENT =============

const SolutionsPage: React.FC = () => (
  <div className="font-['Inter'] antialiased bg-[#f8fafc] relative overflow-hidden">
    {/* Animated Gradient Blobs for background visual interest */}
    <div className="pointer-events-none absolute z-0 top-[-120px] left-[-140px] w-[480px] h-[400px] rounded-full bg-gradient-to-tr from-blue-400 via-cyan-300 to-purple-300 opacity-20 blur-3xl animate-blob" />
    <div className="pointer-events-none absolute z-0 top-[60vh] right-[-180px] w-[380px] h-[300px] rounded-full bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 opacity-15 blur-2xl animate-blob animation-delay-3000" />

    {/* Hero Section */}
    <section className="relative overflow-hidden text-center py-20 pt-60 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,197,253,0.2),transparent_60%)]"></div>
      <div className="relative z-10 space-y-6 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          {hero.title.split(':').map((part, index) => (
            index === 0 ? part : <span key={index} className="text-blue-600">{part}</span>
          ))}
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          {hero.subtitle}
        </p>
        <div className="flex justify-center">
          <a href="#security-solutions" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
            🚀 Explore Solutions
          </a>
        </div>
      </div>
    </section>

    {/* WHO WE ARE SECTION */}
    <section className="py-20 md:py-28 bg-white relative z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text content and points */}
        <motion.div
          className="order-2 md:order-1" // Order for mobile vs desktop layout
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">
            {whoWeAre.title}
          </h2>
          <p className="text-lg md:text-xl text-blue-700 mb-8 font-semibold leading-relaxed">
            {whoWeAre.lead}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whoWeAre.points.map((point) => (
              <WhoWeArePoint
                key={point.label}
                icon={point.icon}
                iconClass={point.iconClass}
                label={point.label}
                desc={point.desc}
              />
            ))}
          </div>
        </motion.div>
        {/* Image */}
        <motion.div
          className="order-1 md:order-2 flex justify-center" // Order for mobile vs desktop layout
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={whoWeAre.image}
            alt="Cybersecurity operations and monitoring"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-blue-100 h-[330px] md:h-[450px] object-center"
            loading="lazy"
            style={{ minHeight: '230px' }}
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/3b82f6/ffffff?text=Who+We+Are'; }} // Fallback image
          />
        </motion.div>
      </div>
    </section>

    {/* STRENGTHS SECTION
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 via-white to-blue-100 border-y border-blue-100 z-10 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((s) => (
            <InfoCard key={s.title} icon={s.icon} iconClass={s.iconClass} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section> */}

    {/* HOW WE WORK SECTION */}
    <section className="py-20 md:py-28 bg-[#f8fafc] relative z-10">
      <div className="container mx-auto px-6">
        <div className="w-full mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3 tracking-tight">
            How We Work
          </h2>
          <div className="h-1.5 w-20 bg-blue-500 rounded-full mx-auto mb-8" />
          <p className="text-lg md:text-xl text-blue-700 font-medium max-w-2xl mx-auto">
            Our streamlined process ensures efficient and effective security solutions from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howWeWorkSteps.map((step) => (
            <StepCard key={step.title} icon={step.icon} iconClass={step.iconClass} title={step.title} desc={step.desc} />
          ))}
        </div>
      </div>
    </section>

    {/* WHAT WE OFFER SECTION */}
    <section id="security-solutions" className="py-24 md:py-32 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3 tracking-tight">Our Security Solutions</h2>
          <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto mb-6" />
          <p className="text-lg md:text-xl text-blue-700 font-medium max-w-3xl mx-auto">
            Comprehensive cybersecurity services. Enterprise-grade protection at every layer, tailored to your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {offerItems.map((offer) => (
            <InfoCard key={offer.title} icon={offer.icon} iconClass={offer.iconClass} title={offer.title} desc={offer.desc} />
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-16 md:py-24 bg-blue-700 text-white relative z-10 rounded-t-3xl"> {/* Changed background to blue-700 */}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
            Ready for a Security Consultation?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto"> {/* Adjusted text color for contrast */}
            Our security experts are ready to assess your specific needs and develop a tailored security strategy to protect your business.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>

    {/* Global Styles for Font and Animations */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
      }

      @keyframes blob {
        0%, 100% { transform: scale(1) translateY(0px); }
        50% { transform: scale(1.09) translateY(16px); }
      }
      .animate-blob { animation: blob 14s infinite ease-in-out; }
      .animation-delay-3000 { animation-delay: 3s; }
      
      /* Removed unused .animate-pulse-slow */
    `}</style>
  </div>
);

export default SolutionsPage;
