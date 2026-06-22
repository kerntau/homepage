import { motion } from 'motion/react';
import React from 'react';

interface FadeInTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function FadeInText({ children, delay = 0, duration = 0.8 }: FadeInTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 15 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 20, 
        mass: 0.8,
        delay: delay,
        duration: duration
      }}
    >
      {children}
    </motion.div>
  );
}
