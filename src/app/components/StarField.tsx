import { motion } from 'framer-motion';
import React from 'react';

interface StarFieldProps {
  starCount?: number;
  className?: string;
}

export const StarField: React.FC<StarFieldProps> = ({ 
  starCount = 50, 
  className = '' 
}) => {
  // Generate random stars
  const stars = Array.from({ length: starCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    delay: Math.random() * 2,
    opacity: 0.2 + Math.random() * 0.8
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};