import React, { useEffect, useState, useMemo } from 'react';
import zxcvbn from 'zxcvbn';
import { motion } from 'framer-motion';

interface PasswordStrengthMeterProps {
  password: string;
  onStrengthChange?: (score: number) => void;
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({
  password,
  onStrengthChange,
}) => {
  // Use useMemo to prevent unnecessary recalculations of zxcvbn
  const passwordAnalysis = useMemo(() => {
    return password ? zxcvbn(password) : null;
  }, [password]);

  const strength = passwordAnalysis ? passwordAnalysis.score : 0;
  const feedbackWarning = passwordAnalysis?.feedback.warning || '';
  const feedbackSuggestions = passwordAnalysis?.feedback.suggestions || [];

  useEffect(() => {
    // Notify parent component of strength change
    if (onStrengthChange) {
      onStrengthChange(strength);
    }
  }, [strength, onStrengthChange]);

  // Define strength levels with consistent data structure
  const strengthLevels = [
    { score: 0, message: 'Very Weak', color: 'bg-red-500', textColor: 'text-red-500', emoji: '😱', description: 'Extremely risky, easily guessed.' },
    { score: 1, message: 'Weak', color: 'bg-orange-500', textColor: 'text-orange-500', emoji: '😟', description: 'Still very vulnerable to cracking.' },
    { score: 2, message: 'Fair', color: 'bg-yellow-500', textColor: 'text-yellow-500', emoji: '😐', description: 'Could be stronger, consider improvements.' },
    { score: 3, message: 'Good', color: 'bg-blue-500', textColor: 'text-blue-500', emoji: '😊', description: 'Reasonably secure, but more is better.' },
    { score: 4, message: 'Strong', color: 'bg-green-500', textColor: 'text-green-500', emoji: '🔒', description: 'Excellent! Very hard to guess.' },
  ];

  const currentStrengthLevel = strengthLevels[strength] || strengthLevels[0];

  return (
    <div className="w-full">
      {/* Strength Indicator Bar */}
      <div className="flex h-2 mb-2 rounded-full bg-gray-200 overflow-hidden">
        {strengthLevels.map((level, index) => (
          <motion.div
            key={level.score}
            initial={{ width: 0 }}
            animate={{
              width: strength >= level.score ? '20%' : '0%',
            }}
            transition={{ duration: 0.3, delay: index * 0.05 }} // Stagger animation slightly
            className={`h-full ${strength >= level.score ? level.color : 'bg-gray-300'}`}
          />
        ))}
      </div>

      {password && (
        <div className="text-center">
          {/* Strength Message and Emoji */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center mb-1"
          >
            <span className="text-xl mr-2">{currentStrengthLevel.emoji}</span>
            <span className={`text-sm font-semibold ${currentStrengthLevel.textColor}`}>
              {currentStrengthLevel.message}
            </span>
          </motion.div>
          <p className="text-xs text-gray-500 mb-2">{currentStrengthLevel.description}</p>

          {/* Zxcvbn Warning */}
          {feedbackWarning && (
            <p className="text-sm mt-2 text-red-600 font-medium">{feedbackWarning}</p>
          )}

          {/* Suggestions for improvement */}
          {(strength < 4 && feedbackSuggestions.length > 0) && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm text-left">
              <p className="font-medium mb-2 text-blue-800">Tips for a stronger password:</p>
              <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                {feedbackSuggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
           {/* Fallback tips if zxcvbn doesn't provide suggestions but strength is low */}
           {(strength < 3 && feedbackSuggestions.length === 0) && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm text-left">
              <p className="font-medium mb-2 text-blue-800">Tips for a stronger password:</p>
              <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                <li>Use a mix of uppercase and lowercase letters.</li>
                <li>Include numbers and special characters (e.g., !@#$%^&*).</li>
                <li>Aim for at least 12 characters, longer is better.</li>
                <li>Avoid personal information or easily guessable patterns.</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;
