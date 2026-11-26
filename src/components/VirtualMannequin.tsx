'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { RotateCcw, ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { UserMeasurements } from '@/types';
import { calculateRecommendedSize } from '@/lib/engine';
import { BRANDS } from '@/lib/mockData';
import SizeBadge from './SizeBadge';

interface VirtualMannequinProps {
  userMeasurements?: UserMeasurements | null;
  selectedBrandId?: string;
}

type ViewMode = 'front' | 'back';
type TShirtStyle = 'regular' | 'oversized' | 'slim' | 'polo';
type PantsStyle = 'jeans' | 'formal' | 'joggers' | 'chinos';

const TSHIRT_COLORS = [
  { name: 'White', value: '#ffffff', border: '#e0e0e0' },
  { name: 'Black', value: '#000000', border: '#333333' },
  { name: 'Grey', value: '#808080', border: '#666666' },
  { name: 'Navy', value: '#1e3a5f', border: '#152a4a' },
  { name: 'Beige', value: '#f5f5dc', border: '#e0e0cc' },
];

const PANTS_COLORS = [
  { name: 'Black', value: '#000000', border: '#333333' },
  { name: 'Blue denim', value: '#004869', border: '#003049' },
  { name: 'Light denim', value: '#5a9bd5', border: '#3a7c9e' },
  { name: 'Grey', value: '#808080', border: '#666666' },
  { name: 'Beige', value: '#f5f5dc', border: '#e0e0cc' },
];

const TSHIRT_STYLES: { id: TShirtStyle; name: string }[] = [
  { id: 'regular', name: 'Regular Fit' },
  { id: 'oversized', name: 'Oversized' },
  { id: 'slim', name: 'Slim Fit' },
  { id: 'polo', name: 'Polo' },
];

const PANTS_STYLES: { id: PantsStyle; name: string }[] = [
  { id: 'jeans', name: 'Jeans' },
  { id: 'formal', name: 'Formal' },
  { id: 'joggers', name: 'Joggers' },
  { id: 'chinos', name: 'Chinos' },
];

export default function VirtualMannequin({ userMeasurements, selectedBrandId }: VirtualMannequinProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('front');
  const [tshirtColor, setTshirtColor] = useState(TSHIRT_COLORS[0].value);
  const [pantsColor, setPantsColor] = useState(PANTS_COLORS[0].value);
  const [tshirtStyle, setTshirtStyle] = useState<TShirtStyle>('regular');
  const [pantsStyle, setPantsStyle] = useState<PantsStyle>('jeans');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [internalSelectedBrandId, setInternalSelectedBrandId] = useState<string | undefined>(selectedBrandId);

  const brand = useMemo(() =>
    BRANDS.find(b => b.id === internalSelectedBrandId), [internalSelectedBrandId]
  );

  const tshirtSizeChart = brand?.sizeCharts?.tops || [];
  const pantsSizeChart = brand?.sizeCharts?.bottoms || [];

  const tshirtRecommendation = useMemo(() => {
    if (!userMeasurements || tshirtSizeChart.length === 0) return null;
    return calculateRecommendedSize(userMeasurements, tshirtSizeChart, userMeasurements.fitPreference);
  }, [userMeasurements, tshirtSizeChart]);

  const pantsRecommendation = useMemo(() => {
    if (!userMeasurements || pantsSizeChart.length === 0) return null;
    return calculateRecommendedSize(userMeasurements, pantsSizeChart, userMeasurements.fitPreference);
  }, [userMeasurements, pantsSizeChart]);

  const resetOutfit = () => {
    setTshirtColor(TSHIRT_COLORS[0].value);
    setPantsColor(PANTS_COLORS[0].value);
    setTshirtStyle('regular');
    setPantsStyle('jeans');
    setViewMode('front');
  };

  // Base mannequin SVG - premium full-body fashion mannequin shape
  const isBack = viewMode === 'back';

  const mannequinBody = isBack
    ? "M50,50 L50,450 L150,450 L150,50 Z M50,50 L25,100 L45,250 L155,250 L175,100 Z"
    : "M150,50 L150,450 L250,450 L250,50 Z M150,50 L175,100 L155,250 L55,250 L25,100 Z";

  // T-shirt paths for different styles - properly proportioned
  const tshirtPaths = {
    regular: isBack
      ? "M65,95 L50,115 L40,240 L60,245 L90,245 L95,240 L75,115 Z"
      : "M135,95 L150,115 L160,240 L140,245 L110,245 L105,240 L125,115 Z",
    oversized: isBack
      ? "M60,90 L40,120 L25,260 L55,265 L100,265 L110,260 L95,120 Z"
      : "M140,90 L155,120 L165,260 L135,265 L100,265 L90,260 L105,120 Z",
    slim: isBack
      ? "M70,95 L60,110 L52,230 L70,235 L92,235 L95,230 L85,110 Z"
      : "M130,95 L140,110 L148,230 L120,235 L108,235 L105,230 L115,110 Z",
    polo: isBack
      ? "M65,95 L50,115 L40,240 L60,245 L90,245 L95,240 L75,115 Z"
      : "M135,95 L150,115 L160,240 L140,245 L110,245 L105,240 L125,115 Z",
  };

  // Pants paths for different styles - proper separate legs, waistband
  const pantsPaths = {
    jeans: isBack
      ? "M78,200 L70,210 L60,480 L80,480 L80,450 L70,450 L72,430 L68,430 L68,210 Z M85,210 L92,210 L95,480 L115,480 L115,440 L105,440 L105,210 Z"
      : "M122,200 L130,210 L140,480 L120,480 L120,450 L130,450 L138,430 L142,430 L142,210 Z M115,210 L108,210 L105,480 L85,480 L85,440 L95,440 L95,210 Z",
    formal: isBack
      ? "M78,200 L70,210 L65,480 L78,480 L78,450 L72,450 L72,430 L68,430 L68,210 Z M88,210 L94,210 L98,480 L112,480 L112,450 L104,450 L104,210 Z"
      : "M122,200 L128,210 L132,480 L118,480 L118,450 L124,450 L122,440 L126,440 L126,210 Z M112,210 L106,210 L102,480 L88,480 L88,450 L96,450 L96,210 Z",
    joggers: isBack
      ? "M78,200 L70,210 L60,450 L70,455 L78,450 L78,430 L72,430 L74,410 L70,410 L70,210 Z M88,210 L96,210 L104,450 L96,455 L88,450 L88,430 L94,410 L96,410 L96,210 Z"
      : "M122,200 L130,210 L138,450 L130,455 L122,450 L122,430 L128,430 L126,410 L130,410 L130,210 Z M112,210 L104,210 L96,450 L104,455 L112,450 L112,430 L106,430 L104,410 L104,210 Z",
    chinos: isBack
      ? "M78,200 L73,210 L65,475 L80,475 L80,455 L74,455 L74,210 Z M85,210 L91,210 L95,475 L108,475 L108,455 L100,455 L100,210 Z"
      : "M122,200 L127,210 L132,475 L116,475 L116,455 L120,455 L120,210 Z M113,210 L107,210 L102,475 L88,475 L88,455 L94,455 L94,210 Z",
  };

  const getTshirtPath = () => tshirtPaths[tshirtStyle] || tshirtPaths.regular;
  const getPantsPath = () => pantsPaths[pantsStyle] || pantsPaths.jeans;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-4 transition-colors">
              <ChevronLeft size={18} /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight">Virtual Mannequin Studio</h1>
            <p className="text-white/50 mt-1">Customize your outfit and see size recommendations</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetOutfit}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors flex items-center gap-2 text-sm"
            >
              <RotateCcw size={16} /> Reset Outfit
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Mannequin Preview - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* View Toggle */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-light">Preview</h2>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('front')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'front'
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Front
                </button>
                <button
                  onClick={() => setViewMode('back')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'back'
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Back
                </button>
              </div>
            </div>

            {/* Mannequin SVG */}
            <div className="premium-card p-6 relative">
              <div className="relative w-full aspect-[3/5] flex items-center justify-center">
                <svg
                  viewBox="0 0 200 500"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  {/* Mannequin Body Outline - full human shape */}
                  <path
                    d={mannequinBody}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white/20"
                    fill="none"
                  />

                  {/* T-Shirt */}
                  <path
                    d={getTshirtPath()}
                    fill={tshirtColor}
                    stroke={tshirtColor === '#ffffff' ? '#e0e0e0' : tshirtColor === '#000000' ? '#333333' : 'transparent'}
                    strokeWidth={tshirtColor === '#ffffff' || tshirtColor === '#000000' ? 1 : 0}
                    className="transition-colors duration-300"
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                  />

                  {/* Polo collar detail */}
                  {tshirtStyle === 'polo' && (
                    <g fill={tshirtColor}>
                      {viewMode === 'front' ? (
                        <>
                          <ellipse cx="100" cy="105" rx="12" ry="4" />
                          <path d="M92,105 L92,115 L108,115 L108,105" />
                        </>
                      ) : (
                        <>
                          <ellipse cx="100" cy="105" rx="12" ry="4" />
                          <path d="M92,105 L92,115 L108,115 L108,105" />
                        </>
                      )}
                    </g>
                  )}

                  {/* Pants */}
                  <path
                    d={getPantsPath()}
                    fill={pantsColor}
                    stroke={pantsColor === '#ffffff' ? '#e0e0e0' : pantsColor === '#000000' ? '#333333' : 'transparent'}
                    strokeWidth={pantsColor === '#ffffff' || pantsColor === '#000000' ? 1 : 0}
                    className="transition-colors duration-300"
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                  />

                  {/* Jeans details - pocket rivets and stitching */}
                  {pantsStyle === 'jeans' && (
                    <g stroke="#ffd700" strokeWidth="0.8" fill="none" opacity="0.8">
                      {viewMode === 'front' ? (
                        <>
                          <circle cx="85" cy="230" r="1.5" />
                          <circle cx="115" cy="230" r="1.5" />
                          <path d="M80,250 Q85,255 90,250" />
                          <path d="M110,250 Q115,255 120,250" />
                          <line x1="95" y1="280" x2="105" y2="280" strokeDasharray="2 2" />
                        </>
                      ) : (
                        <>
                          <circle cx="85" cy="230" r="1.5" />
                          <circle cx="115" cy="230" r="1.5" />
                          <path d="M80,250 Q85,255 90,250" />
                          <path d="M110,250 Q115,255 120,250" />
                        </>
                      )}
                    </g>
                  )}

                  {/* Joggers details - elastic cuffs */}
                  {pantsStyle === 'joggers' && (
                    <g stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6">
                      <line x1="72" y1="440" x2="128" y2="440" strokeDasharray="3 2" />
                      <line x1="72" y1="442" x2="128" y2="442" strokeDasharray="3 2" />
                    </g>
                  )}

                  {/* Chinos details - pocket bags */}
                  {pantsStyle === 'chinos' && (
                    <g stroke="#0056b2" strokeWidth="0.6" fill="none" opacity="0.5">
                      {viewMode === 'front' ? (
                        <>
                          <path d="M80,230 Q85,235 90,230" />
                          <path d="M110,230 Q115,235 120,230" />
                        </>
                      ) : (
                        <>
                          <path d="M80,230 Q85,235 90,230" />
                          <path d="M110,230 Q115,235 120,230" />
                        </>
                      )}
                    </g>
                  )}

                  {/* Formal details - pleats */}
                  {pantsStyle === 'formal' && (
                    <g stroke="#333" strokeWidth="0.5" fill="none" opacity="0.7">
                      {viewMode === 'front' ? (
                        <>
                          <path d="M82,205 Q86,208 90,205" />
                          <path d="M110,205 Q114,208 118,205" />
                        </>
                      ) : (
                        <>
                          <path d="M82,205 Q86,208 90,205" />
                          <path d="M110,205 Q114,208 118,205" />
                        </>
                      )}
                    </g>
                  )}

                  {/* Leg separation line */}
                  <g stroke="currentColor" strokeWidth="0.5" opacity="0.4">
                    <line x1="100" y1="200" x2="100" y2="480" />
                  </g>
                </svg>

                {/* Measurement indicators overlay when user has measurements */}
                {userMeasurements && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ transform: 'scale(0.4)' }}
                  >
                    <svg viewBox="0 0 200 500" className="w-full h-full text-green-400/50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
                      <line x1="100" y1="40" x2="100" y2="480" />
                      <line x1="65" y1="140" x2="135" y2="140" />
                      <line x1="60" y1="110" x2="140" y2="110" />
                      <line x1="70" y1="210" x2="130" y2="210" />
                      <line x1="68" y1="260" x2="132" y2="260" />
                      <line x1="100" y1="280" x2="125" y2="480" />
                    </svg>
                  </motion.div>
                )}

                {/* Style labels */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
                  <span>T-Shirt: <span className="text-white capitalize">{tshirtStyle}</span></span>
                  <span>Pants: <span className="text-white capitalize">{pantsStyle}</span></span>
                </div>
              </div>

              {/* Size Recommendations Panel */}
              {(userMeasurements || brand) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="premium-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-light">Size Recommendations</h2>
                    <button
                      onClick={() => setShowRecommendations(!showRecommendations)}
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <Eye size={16} className={showRecommendations ? 'rotate-180' : ''} />
                      {showRecommendations ? 'Hide Details' : 'Show Details'}
                    </button>
                  </div>

                  <AnimatePresence>
                    {showRecommendations && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* T-Shirt Recommendation */}
                          <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-medium">T-Shirt ({tshirtStyle})</h3>
                              {brand && <span className="text-xs text-white/40 uppercase tracking-wider">{brand.logoText}</span>}
                            </div>
                            {tshirtRecommendation ? (
                              <SizeBadge recommendation={tshirtRecommendation} />
                            ) : (
                              <div className="p-4 bg-white/5 border border-dashed border-white/20 rounded-xl flex items-center justify-center text-muted text-sm">
                                {brand
                                  ? 'No size chart available for tops from this brand'
                                  : 'Select a brand and complete your profile to see recommendations'}
                              </div>
                            )}
                          </div>

                          {/* Pants Recommendation */}
                          <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-medium">Pants ({pantsStyle})</h3>
                              {brand && <span className="text-xs text-white/40 uppercase tracking-wider">{brand.logoText}</span>}
                            </div>
                            {pantsRecommendation ? (
                              <SizeBadge recommendation={pantsRecommendation} />
                            ) : (
                              <div className="p-4 bg-white/5 border border-dashed border-white/20 rounded-xl flex items-center justify-center text-muted text-sm">
                                {brand
                                  ? 'No size chart available for bottoms from this brand'
                                  : 'Select a brand and complete your profile to see recommendations'}
                              </div>
                            )}
                          </div>
                        </div>

                        {brand && userMeasurements && (
                          <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-sm text-white/70">
                            <p className="font-medium mb-2">How it works:</p>
                            <ul className="space-y-1 list-disc list-inside">
                              <li>Recommendations based on {brand.name} official size charts</li>
                              <li>Your fit preference: <span className="capitalize text-white">{userMeasurements.fitPreference}</span></li>
                              <li>Confidence score reflects measurement match accuracy</li>
                              <li>Always verify with brand's official guide before purchasing</li>
                            </ul>
                          </div>
                        )}

                        {!userMeasurements && (
                          <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-center">
                            <p className="text-yellow-400 text-sm">
                              Complete your profile measurements to unlock personalized size recommendations.
                            </p>
                            <a href="/profile" className="inline-block mt-2 text-yellow-400 hover:underline text-sm font-medium">
                              Go to Profile →
                            </a>
                          </div>
                        )}

                        {!brand && userMeasurements && (
                          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
                            <p className="text-blue-400 text-sm">
                              Select a brand from the Brands panel to see specific size recommendations.
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!showRecommendations && !userMeasurements && (
                    <div className="text-center text-white/50 py-4">
                      Complete your profile and select a brand to see size recommendations
                    </div>
                  )}
                </motion.div>
              )}

              {/* Empty state when no brand and no measurements */}
              {!userMeasurements && !brand && (
                <div className="text-center text-white/50 py-8">
                  <p className="text-white/50 text-sm">Select a brand to begin</p>
                  <a href="/brands" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Browse Brands →</a>
                </div>
              )}
            </div>

            {/* Front/Back view info */}
            <div className="mt-2 text-center text-white/40 text-sm">
              View: <span className="capitalize">{viewMode}</span>
            </div>
          </motion.div>

          {/* Controls Panel */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Brand Selector */}
            <div className="premium-card p-6 space-y-4">
              <h3 className="text-lg font-light">Select Brand</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {BRANDS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setInternalSelectedBrandId(b.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all flex items-center justify-between ${
                      internalSelectedBrandId === b.id
                        ? 'bg-white/10 border border-white/20'
                        : 'hover:bg-white/5 border border-white/10'
                    }`}
                  >
                    <span className="font-medium">{b.logoText}</span>
                    <span className="text-xs text-white/40 uppercase tracking-wider">
                      {b.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}
                    </span>
                  </button>
                ))}
              </div>
              {!internalSelectedBrandId && (
                <p className="text-xs text-white/40 text-center">No brand selected - showing generic fit</p>
              )}
            </div>

            {/* T-Shirt Color */}
            <div className="premium-card p-6 space-y-4">
              <h3 className="text-lg font-light flex items-center justify-between">
                T-Shirt Color
                <span className="text-xs text-white/40 uppercase tracking-wider">{TSHIRT_COLORS.find(c => c.value === tshirtColor)?.name}</span>
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {TSHIRT_COLORS.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setTshirtColor(color.value)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all relative ${
                      tshirtColor === color.value
                        ? 'border-white scale-110'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    aria-label={color.name}
                  >
                    {tshirtColor === color.value && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Pants Color */}
            <div className="premium-card p-6 space-y-4">
              <h3 className="text-lg font-light flex items-center justify-between">
                Pants Color
                <span className="text-xs text-white/40 uppercase tracking-wider">{PANTS_COLORS.find(c => c.value === pantsColor)?.name}</span>
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {PANTS_COLORS.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setPantsColor(color.value)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all relative ${
                      pantsColor === color.value
                        ? 'border-white scale-110'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    aria-label={color.name}
                  >
                    {pantsColor === color.value && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* T-Shirt Style */}
            <div className="premium-card p-6 space-y-4">
              <h3 className="text-lg font-light">T-Shirt Style</h3>
              <div className="grid grid-cols-2 gap-3">
                {TSHIRT_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setTshirtStyle(style.id)}
                    className={`p-4 rounded-lg border transition-all text-left ${
                      tshirtStyle === style.id
                        ? 'bg-white/10 border-white/30'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{style.name}</span>
                    <span className="font-medium text-sm">{style.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pants Style */}
            <div className="premium-card p-6 space-y-4">
              <h3 className="text-lg font-light">Pants Style</h3>
              <div className="grid grid-cols-2 gap-3">
                {PANTS_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setPantsStyle(style.id)}
                    className={`p-4 rounded-lg border transition-all text-left ${
                      pantsStyle === style.id
                        ? 'bg-white/10 border-white/30'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{style.name}</span>
                    <span className="font-medium text-sm">{style.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="premium-card p-6 space-y-3">
              <h3 className="text-lg font-light">Quick Actions</h3>
              <div className="space-y-2">
                <a
                  href="/profile"
                  className="block w-full p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors text-center text-sm"
                >
                  Update Measurements
                </a>
                <a
                  href="/brands"
                  className="block w-full p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors text-center text-sm"
                >
                  Browse All Brands
                </a>
                <a
                  href="/products"
                  className="block w-full p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors text-center text-sm"
                >
                  Shop Products
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}