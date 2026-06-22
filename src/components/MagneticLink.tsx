import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { useRef } from 'react';

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  id?: string;
  className?: string;
}

export default function MagneticLink({ children, href, id, className = "" }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Springs for smooth physics-based magnetic tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Middle center coordinates
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Vector from center to mouse position
    const dx = clientX - centerX;
    const dy = clientY - centerY;

    // Restrain maximum displacement to exactly 5px as requested
    const maxDisplacement = 6;
    const distance = Math.hypot(dx, dy);
    
    let moveX = 0;
    let moveY = 0;

    if (distance > 0) {
      // Calculate pulling direction
      const factor = Math.min(distance / 50, 1.0); // 50px boundary area
      moveX = (dx / distance) * maxDisplacement * factor;
      moveY = (dy / distance) * maxDisplacement * factor;
    }

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    // Return smoothly to center absolute [0, 0]
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      id={id}
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-block transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.a>
  );
}
