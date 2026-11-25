'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import MeasurementForm from '@/components/MeasurementForm';
import SizeBadge from '@/components/SizeBadge';
import { calculateRecommendedSize } from '@/lib/engine';
import { BRANDS } from '@/lib/mockData';

interface BrandRecommendation {
  brand: typeof BRANDS[0];
  recommendation: ReturnType<typeof calculateRecommendedSize>;
}

export default function ProfilePage() {
  const { user, updateMeasurements, isLoading } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-light mb-4">Please sign in to view your profile</h1>
          <a href="/auth/login" className="text-white underline">Sign In</a>
        </motion.div>
      </div>
    );
  }

  const handleSave = async (measurements: any) => {
    await updateMeasurements(measurements);
  };

  // Get sample recommendations for each brand
  const brandRecommendations: BrandRecommendation[] = React.useMemo(() => {
    if (!user.measurements) return [];
    const measurements = user.measurements;
    return BRANDS.map(brand => {
      const sizeChart = brand.sizeCharts.tops || [];
      if (sizeChart.length === 0) return null;
      return {
        brand,
        recommendation: calculateRecommendedSize(measurements, sizeChart, measurements.fitPreference)
      };
    }).filter((r): r is BrandRecommendation => r !== null);
  }, [user.measurements]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2">Your Profile</h1>
          <p className="text-white/50">Manage your measurements and see size recommendations across brands.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Measurement Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="premium-card p-6">
              <h2 className="text-xl font-light mb-6">Body Measurements</h2>
              <MeasurementForm
                initialMeasurements={user.measurements || null}
                onSave={handleSave}
                readOnly={isLoading}
              />
            </div>

            {user.measurements && (
              <div className="premium-card p-6">
                <h2 className="text-xl font-light mb-6">Quick Size Reference</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {brandRecommendations.slice(0, 8).map(({ brand, recommendation }) => (
                    <div key={brand.id} className="bg-black/40 p-4 rounded-lg border border-white/10">
                      <div className="font-medium text-sm mb-2">{brand.logoText}</div>
                      <SizeBadge recommendation={recommendation} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: Profile Info & Brand Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="premium-card p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-light">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-white/50">{user.email}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Member since</span>
                  <span className="font-medium">{new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
                {user.measurements && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Fit Preference</span>
                      <span className="font-medium capitalize">{user.measurements.fitPreference}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Height</span>
                      <span className="font-medium">{user.measurements.height} cm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Chest</span>
                      <span className="font-medium">{user.measurements.chest} cm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Waist</span>
                      <span className="font-medium">{user.measurements.waist} cm</span>
                    </div>
                  </>
                )}
              </div>

              {!user.measurements && (
                <div className="pt-4 border-t border-white/10 text-center text-white/50 text-sm">
                  Complete your measurements to see personalized size recommendations.
                </div>
              )}
            </div>

            {/* Brand Recommendations */}
            {user.measurements && brandRecommendations.length > 0 && (
              <div className="mt-8 space-y-4">
                <h2 className="text-xl font-light">Your Size Across Brands</h2>
                <div className="space-y-3">
                  {brandRecommendations.map(({ brand, recommendation }) => (
                    <motion.div
                      key={brand.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="premium-card p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-lg tracking-tighter">{brand.logoText}</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">
                          {brand.categories.map((c: string) => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}
                        </span>
                      </div>
                      <SizeBadge recommendation={recommendation} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}