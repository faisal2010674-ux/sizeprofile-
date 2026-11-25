'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { SizeRecommendation } from '../types';

interface SizeBadgeProps {
  recommendation: SizeRecommendation | null;
  isLoading?: boolean;
}

export default function SizeBadge({ recommendation, isLoading }: SizeBadgeProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse bg-white/10 h-16 w-full rounded-xl"></div>
    );
  }

  if (!recommendation) {
    return (
      <div className="p-4 bg-white/5 border border-dashed border-white/20 rounded-xl flex items-center justify-center text-muted text-sm">
        Complete your profile to see recommended size
      </div>
    );
  }

  const { recommendedSize, confidence, advice, isApproximate, alternativeSize } = recommendation;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-5 premium-card border-white/20 overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted block mb-1">Recommended Size</span>
          <span className="text-4xl font-bold">{recommendedSize}</span>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1.5 justify-end text-sm mb-1">
             <span className={confidence > 80 ? "text-green-400" : "text-yellow-400"}>
                {confidence}% Match
             </span>
             {confidence > 80 ? <CheckCircle2 size={14} className="text-green-400" /> : <AlertCircle size={14} className="text-yellow-400" />}
          </div>
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${confidence}%` }}
              className={`h-full ${confidence > 80 ? "bg-green-400" : "bg-yellow-400"}`}
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 bg-black/40 p-3 rounded-lg">
        <Info size={16} className="mt-0.5 text-muted shrink-0" />
        <p className="text-xs text-white/70 leading-relaxed">
          {advice} {alternativeSize && `Consider size ${alternativeSize} for a different fit.`}
        </p>
      </div>

      {isApproximate && (
        <p className="text-[10px] uppercase tracking-tighter text-muted mt-3 text-center">
          * This recommendation is an estimation based on brand size charts.
        </p>
      )}
    </motion.div>
  );
}
