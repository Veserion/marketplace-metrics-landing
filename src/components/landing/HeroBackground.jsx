import React from 'react';
import { motion } from 'framer-motion';

// Animated gradient spheres that float and pulse
const spheres = [
  {
    size: 700,
    initialX: '60%',
    initialY: '-10%',
    animateX: ['60%', '55%', '65%', '58%', '60%'],
    animateY: ['-10%', '5%', '-5%', '10%', '-10%'],
    color: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 70%)',
    duration: 18,
  },
  {
    size: 550,
    initialX: '-10%',
    initialY: '30%',
    animateX: ['-10%', '0%', '-5%', '5%', '-10%'],
    animateY: ['30%', '40%', '25%', '45%', '30%'],
    color: 'radial-gradient(circle, rgba(139,92,246,0.30) 0%, rgba(139,92,246,0) 70%)',
    duration: 22,
  },
  {
    size: 400,
    initialX: '40%',
    initialY: '60%',
    animateX: ['40%', '50%', '35%', '45%', '40%'],
    animateY: ['60%', '55%', '70%', '58%', '60%'],
    color: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0) 70%)',
    duration: 15,
  },
];

export default function HeroBackground() {
  return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {spheres.map((s, i) => (
            <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: s.size,
                  height: s.size,
                  left: s.initialX,
                  top: s.initialY,
                  background: s.color,
                  borderRadius: '50%',
                  filter: 'blur(80px)',
                }}
                animate={{
                  left: s.animateX,
                  top: s.animateY,
                  opacity: [0.7, 1, 0.5, 0.9, 0.7],
                  scale: [1, 1.08, 0.95, 1.05, 1],
                }}
                transition={{
                  duration: s.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
            />
        ))}
      </div>
  );
}