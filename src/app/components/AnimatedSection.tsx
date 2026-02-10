import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const getInitialValues = () => {
    switch (direction) {
      case 'down':
        return { y: 50 };
      case 'left':
        return { x: -50 };
      case 'right':
        return { x: 50 };
      case 'up':
      default:
        return { y: 50 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialValues()}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  delay = 0
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
      style={hoverEffect ? { transition: 'transform 0.3s ease' } : {}}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  size?: 'small' | 'medium' | 'large';
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  duration = 6,
  delay = 0,
  size = 'medium'
}) => {
  const getAmplitude = () => {
    switch (size) {
      case 'small':
        return 5;
      case 'large':
        return 15;
      case 'medium':
      default:
        return 10;
    }
  };

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -getAmplitude(), 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};