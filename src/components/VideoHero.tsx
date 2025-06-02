import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  videoUrl: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaLink = '/subscribe',
  secondaryCtaText = 'Learn More',
  secondaryCtaLink = '/solutions',
  videoUrl,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.8,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-70' : 'opacity-0'
          }`}
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link
              to={ctaLink}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              {ctaText}
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link
              to={secondaryCtaLink}
              className="inline-block bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-colors duration-300"
            >
              {secondaryCtaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
