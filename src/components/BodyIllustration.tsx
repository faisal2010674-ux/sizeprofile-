'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BodyIllustrationProps {
  activeField?: string | null;
}

export default function BodyIllustration({ activeField }: BodyIllustrationProps) {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <svg
        viewBox="0 0 200 500"
        className="h-full w-auto text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {/* Human Body Outline - Stylized Thin Line */}
        <path
          d="M100,40 C115,40 125,50 125,65 C125,80 115,90 100,90 C85,90 75,80 75,65 C75,50 85,40 100,40 Z"
          className={activeField === 'height' ? 'text-white' : 'text-white/20'}
        /> {/* Head */}

        <path
          d="M75,90 L60,110 L40,200 L55,210 L65,150 L65,300 L75,480 L100,480 L125,480 L135,300 L135,150 L145,210 L160,200 L140,110 L125,90 Z"
          strokeLinejoin="round"
        />

        {/* Measurement Indicators */}

        {/* Height */}
        <motion.line
          x1="30" y1="40" x2="30" y2="480"
          stroke="currentColor"
          strokeDasharray="4 4"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: activeField === 'height' ? 1 : 0.1 }}
        />

        {/* Chest */}
        <motion.line
          x1="65" y1="140" x2="135" y2="140"
          stroke="currentColor"
          strokeWidth={activeField === 'chest' ? "3" : "1"}
          animate={{ opacity: activeField === 'chest' ? 1 : 0.3, scaleX: activeField === 'chest' ? 1.1 : 1 }}
        />

        {/* Shoulders */}
        <motion.line
          x1="60" y1="110" x2="140" y2="110"
          stroke="currentColor"
          strokeWidth={activeField === 'shoulders' ? "3" : "1"}
          animate={{ opacity: activeField === 'shoulders' ? 1 : 0.3, scaleX: activeField === 'shoulders' ? 1.1 : 1 }}
        />

        {/* Waist */}
        <motion.line
          x1="70" y1="210" x2="130" y2="210"
          stroke="currentColor"
          strokeWidth={activeField === 'waist' ? "3" : "1"}
          animate={{ opacity: activeField === 'waist' ? 1 : 0.3, scaleX: activeField === 'waist' ? 1.1 : 1 }}
        />

        {/* Hips */}
        <motion.line
          x1="68" y1="260" x2="132" y2="260"
          stroke="currentColor"
          strokeWidth={activeField === 'hips' ? "3" : "1"}
          animate={{ opacity: activeField === 'hips' ? 1 : 0.3, scaleX: activeField === 'hips' ? 1.1 : 1 }}
        />

        {/* Inseam */}
        <motion.line
          x1="100" y1="280" x2="125" y2="480"
          stroke="currentColor"
          strokeWidth={activeField === 'inseam' ? "3" : "1"}
          animate={{ opacity: activeField === 'inseam' ? 1 : 0.3 }}
        />
      </svg>

      {/* Dynamic Labels */}
      {activeField && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-10 bg-white text-black px-4 py-2 rounded-full text-sm font-medium tracking-wider"
        >
          {activeField.toUpperCase()}
        </motion.div>
      )}
    </div>
  );
}
