import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  label,
  suffix = '',
  duration = 2,
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalDuration = duration * 1000;
    const incrementTime = totalDuration / end;

    let timer: number;

    const step = () => {
      start += 1;
      setCount(start);
      
      if (start < end) {
        timer = window.setTimeout(step, incrementTime);
      }
    };

    timer = window.setTimeout(step, incrementTime);

    return () => {
      clearTimeout(timer);
    };
  }, [value, duration, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-100px' }}
      onViewportEnter={() => setIsInView(true)}
      className="text-center"
    >
      <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
};

export default StatsCounter;