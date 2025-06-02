import React from 'react';
import { motion } from 'framer-motion';

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  delay?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  image,
  category,
  date,
  delay = 0,
}) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'financial':
        return 'bg-green-100 text-green-800';
      case 'health':
        return 'bg-blue-100 text-blue-800';
      case 'government':
        return 'bg-purple-100 text-purple-800';
      case 'personal':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
            category
          )}`}
        >
          {category}
        </span>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-gray-500 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a
          href="#"
          className="text-blue-600 font-medium inline-flex items-center hover:underline"
        >
          Read more
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

export default NewsCard;