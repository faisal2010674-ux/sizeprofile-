'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Info, CheckCircle2, AlertCircle, ChevronLeft } from 'lucide-react';
import { SizeRecommendation } from '@/types';
import { calculateRecommendedSize } from '@/lib/engine';
import { BRANDS } from '@/lib/mockData';
import { useAuth } from '@/context/AuthContext';

const SIZE_CHART_SUMMARIES = {
  tops: {
    header: 'Tops Size Chart',
    description: 'Find your fit based on chest and waist measurements',
  },
  bottoms: {
    header: 'Bottoms Size Chart',
    description: 'Find your fit based on waist and inseam measurements',
  }
};

function BrandDetailContent({ brandId }: { brandId: string }) {
  const { user } = useAuth();
  const userMeasurements = user?.measurements || null;

  const brand = useMemo(() => BRANDS.find(b => b.id === brandId), [brandId]);
  const [selectedSection, setSelectedSection] = useState<'tops' | 'bottoms'>('tops');

  if (!brand) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light mb-4">Brand Not Found</h1>
            <p className="text-white/50">The requested brand is not available.</p>
            <Link href="/brands" className="text-white underline">Go back to brands list</Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const sizeCharts = {
    tops: brand.sizeCharts?.tops || [],
    bottoms: brand.sizeCharts?.bottoms || [],
  };

  const handleSizeRecommendation = (measurements: any, category: 'tops' | 'bottoms') => {
    const sizeChart = sizeCharts[category];
    if (!sizeChart || sizeChart.length === 0) return null;
    return calculateRecommendedSize(measurements, sizeChart, measurements.fitPreference);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Link href="/brands" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ChevronLeft size={18} /> Back to All Brands
            </Link>
            <span className="text-2xl font-bold tracking-tighter text-white">{brand.logoText}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/50">
            <span>Category:
              <button
                onClick={() => setSelectedSection('tops')}
                className={`px-3 py-1 rounded ${
                  selectedSection === 'tops'
                    ? 'bg-white/20 border border-white/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                Tops
              </button>
              <button
                onClick={() => setSelectedSection('bottoms')}
                className={`px-3 py-1 rounded ${
                  selectedSection === 'bottoms'
                    ? 'bg-white/20 border border-white/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                Bottoms
              </button>
            </span>
          </div>
        </motion.div>

        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card p-6 mb-8"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-light tracking-tighter mb-4">{selectedSection === 'tops' ? 'Tops' : 'Bottoms'} Size Chart</h2>
              <p className="text-white/50 mb-6">{brand.description}</p>

              <div className="space-y-3 text-sm text-white/60">
                {sizeCharts[selectedSection].map((entry, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-white/10">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{entry.size}</span>
                      <span className="text-xs text-white/40">{entry.chestMin}-{entry.chestMax} cm chest</span>
                    </div>
                    {selectedSection === 'bottoms' && (
                      <div className="flex justify-between items-center text-xs text-white/50">
                        <span>Waist: {entry.waistMin}-{entry.waistMax} cm</span>
                        <span>Inseam: {entry.inseamMin}-{entry.inseamMax} cm</span>
                      </div>
                    )}
                    {selectedSection === 'tops' && (
                      <div className="flex justify-between items-center text-xs text-white/50">
                        <span>Shoulders: {entry.shouldersMin}-{entry.shouldersMax} cm</span>
                        <span>Height: {entry.heightMin}-{entry.heightMax?.toString() || 'N/A'} cm</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Recommendations</h3>
                <p className="text-white/50 text-sm">{SIZE_CHART_SUMMARIES[selectedSection].description}</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Quick Size Guide</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <div key={size} className="p-2 rounded text-center text-xs text-white/50">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Size Recommendation Tool */}
        {(userMeasurements || brand) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="premium-card p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-light">
                Your {selectedSection} Recommendation
                {brand.logoText}
              </h2>
              {userMeasurements && (
                <button
                  onClick={() => {
                    const mem = localStorage.getItem('sizeprofile_user');
                    if (mem) {
                      const user = JSON.parse(mem);
                      if (user.measurements) {
                        const recommendation = handleSizeRecommendation(user.measurements, selectedSection as 'tops' | 'bottoms');
                        if (recommendation) {
                          alert(`Recommended ${selectedSection}: ${recommendation.recommendedSize} (${recommendation.confidence}% match)`);
                        }
                      }
                    }
                  }}
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  Calculate
                </button>
              )}
            </div>

            {userMeasurements && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Your Measurements</h3>
                    <p className="text-white/60 text-sm">
                      Chest: {userMeasurements.chest} cm
                    </p>
                    {selectedSection === 'bottoms' && (
                      <p className="text-white/60 text-sm">
                        Waist: {userMeasurements.waist} cm
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Recommendation</h3>
                    {brand.sizeCharts?.[selectedSection] && brand.sizeCharts[selectedSection]!.length > 0 ? (
                      <SizeRecommendationUI recommendation={handleSizeRecommendation(userMeasurements, selectedSection as 'tops' | 'bottoms')} />
                    ) : (
                      <p className="text-white/50 text-sm">No size chart data available for {selectedSection} from this brand.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {!userMeasurements && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-white/50 py-8"
              >
                <p className="text-sm mb-4">
                  Complete your profile measurements to see personalized recommendations.
                </p>
                <Link href="/profile" className="inline-block px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors">
                  Go to Profile →
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Available Sizes Note */}
        {!userMeasurements && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-8 text-center text-white/50"
          >
            <p className="text-sm mb-4">
              To get personalized size recommendations, <Link href="/profile" className="underline text-white/50 hover:text-white">create your profile</Link> with your body measurements.
            </p>
            <p className="text-xs">
              All size charts are based on publicly available brand guidelines. Always refer to official brand size guides for final purchase decisions.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

interface SizeRecommendationUIProps {
  recommendation: ReturnType<typeof calculateRecommendedSize> | null;
}

function SizeRecommendationUI({ recommendation }: SizeRecommendationUIProps) {
  if (!recommendation) {
    return <p className="text-white/50 text-sm">No recommendation available</p>;
  }

  const { recommendedSize, confidence, advice, isApproximate, alternativeSize, alternativeReason } = recommendation;

  return (
    <div className="p-4 rounded-lg border border-white/20">
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold">{recommendedSize}</span>
        <span className={`text-sm ${confidence > 80 ? 'text-green-400' : 'text-yellow-400'}`}>
          {confidence}% Match
        </span>
      </div>
      <p className="text-white/70 text-sm leading-relaxed">
        {advice}
      </p>
      {alternativeSize && alternativeReason && (
        <p className="text-xs text-white/50 mt-2">
          {alternativeReason}
          <span className="ml-1 text-white/60 capitalize">{alternativeSize}</span>
        </p>
      )}
      {isApproximate && (
        <p className="text-[10px] uppercase tracking-tighter text-white/40 mt-2">
          * Estimation based on size chart data
        </p>
      )}
    </div>
  );
}

export default function BrandDetailClient({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = useParams();
  const brandId = Array.isArray(resolvedParams.id) ? resolvedParams.id[0] : resolvedParams.id || '';

  return <BrandDetailContent brandId={brandId} />;
}