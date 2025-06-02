import React from 'react';
import VideoHero from '../components/VideoHero';
import NewsCard from '../components/NewsCard';
import StatsCounter from '../components/StatsCounter';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';

const HomePage: React.FC = () => {
  // Placeholder for video URL - replace with actual video URL
  const videoUrl = "/videos/a.mp4";

  const [text] = useTypewriter({
    words: ['Detect', 'Defend', 'Defeat'],
    loop: true,
    delaySpeed: 1000,
  })
  
  const latestNewsItems = [
    {
      title: "Major Bank Breach Exposes Customer Data",
      description: "A significant data breach at a leading financial institution has compromised personal information of millions of customers worldwide.",
      image: "/images/finan.jpg",
      category: "Financial",
      date: "June 12, 2025",
    },
    {
      title: "Healthcare Provider Hit by Ransomware",
      description: "A large healthcare network is struggling to recover after a sophisticated ransomware attack encrypted patient records and disrupted services.",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Health",
      date: "May 28, 2025",
    },
    {
      title: "Government Agency Data Leak",
      description: "A federal agency has disclosed a significant data leak that may have exposed sensitive information of thousands of citizens.",
      image: "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Government",
      date: "May 15, 2025",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-blue-700">
      {/* Animated background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-6rem] left-1/2 transform -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-tr from-blue-400 via-indigo-400 to-teal-400 opacity-30 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-5rem] right-[-6rem] w-[400px] h-[200px] bg-gradient-to-br from-cyan-400 to-transparent opacity-20 blur-2xl rounded-full" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <VideoHero
          title="Securing Your Digital Future"
          subtitle={
            <span>
              Your trusted cybersecurity partner - <span className=' text-blue-300'>{text}</span>
            </span>
          }
          videoUrl={videoUrl}
        />
      </div>
      
      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img
                src="/images/net.jpg"
                alt="Cybersecurity"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Turning Uncertainty into Confidence</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At STORRSEC, we don’t wait for breaches—we architect adaptive 
                  defenses that anticipate tomorrow’s threats today. Think of us not 
                  as responders, but as the advance team forging a fortress around
                  your digital world.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We are dedicated to safeguarding your digital landscape with 
                  precision and care. With expertise in cybersecurity, we empower
                  businesses to achieve security and confidence in their operations
                  through targeted assessments and customized solutions. Begin
                  your journey toward a more secure, resilient future today.
                </p>
                <a
                  href="/solutions"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
                >
                  Explore Our Solutions
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Insights Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Cybersecurity Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed about the latest threats and vulnerabilities affecting different sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNewsItems.map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                date={item.date}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition-colors duration-300"
            >
              View All Insights
            </a>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
            <p className=" text-gray-500 mb-8 text-lg">
              Take the first step towards comprehensive cybersecurity protection for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/subscribe"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
              >
                Get Started
              </a>
              <a
                href="/solutions"
                className="inline-block bg-transparent border border-gray-400 font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default HomePage;
