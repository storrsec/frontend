import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  color = 'blue',
  delay = 0,
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    teal: 'bg-teal-50 text-teal-600 border-teal-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    red: 'bg-red-50 text-red-600 border-red-200',
  };
  
  const iconColorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 h-full flex flex-col"
    >
      <div className={`w-12 h-12 rounded-lg ${iconColorClass} flex items-center justify-center mb-4`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="mt-4">
        <a
          href="#"
          className="text-blue-600 font-medium flex items-center hover:underline"
        >
          Learn more
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
