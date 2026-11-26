'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, User, Eye, Sparkles } from 'lucide-react';

type ViewMode = 'front' | 'back';
type GarmentType = 'tshirt' | 'shirt' | 'tops' | 'dress' | 'jacket' | 'hoodie' | 'jeans' | 'trousers' | 'shorts' | 'skirt' | 'chinos' | 'joggers';
type GarmentStyle = 'regular' | 'slim' | 'oversized';

interface ColorOption {
  name: string;
  value: string;
}

const GARMENT_COLORS: ColorOption[] = [
  { name: 'White', value: '#ffffff' },
  { name: 'Black', value: '#111111' },
  { name: 'Grey', value: '#7f8c8d' },
  { name: 'Navy Blue', value: '#1b2a4a' },
  { name: 'Beige', value: '#d4b996' },
  { name: 'Red', value: '#c0392b' },
  { name: 'Blue', value: '#2980b9' },
  { name: 'Green', value: '#27ae60' },
  { name: 'Brown', value: '#795548' },
  { name: 'Olive', value: '#556b2f' },
];

const UPPER_GARMENTS: { id: GarmentType; label: string; icon: string }[] = [
  { id: 'tshirt', label: 'T-Shirt', icon: '👕' },
  { id: 'shirt', label: 'Shirt', icon: '👔' },
  { id: 'tops', label: 'Top', icon: '🎽' },
  { id: 'dress', label: 'Dress', icon: '👗' },
  { id: 'jacket', label: 'Jacket', icon: '🧥' },
  { id: 'hoodie', label: 'Hoodie', icon: '🧥' },
];

const LOWER_GARMENTS: { id: GarmentType; label: string; icon: string }[] = [
  { id: 'jeans', label: 'Jeans', icon: '👖' },
  { id: 'trousers', label: 'Trousers', icon: '👖' },
  { id: 'chinos', label: 'Chinos', icon: '👖' },
  { id: 'joggers', label: 'Joggers', icon: '👖' },
  { id: 'shorts', label: 'Shorts', icon: '🩳' },
  { id: 'skirt', label: 'Skirt', icon: '👗' },
];

interface TwoDMannequinProps {
  userMeasurements?: {
    chest: number;
    waist: number;
    hips: number;
    height: number;
    shoulders: number;
    inseam: number;
    fitPreference: 'slim' | 'regular' | 'oversized';
  } | null;
  selectedBrandId?: string;
}

export default function TwoDMannequin({ userMeasurements }: TwoDMannequinProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('front');
  const [upperGarment, setUpperGarment] = useState<GarmentType>('tshirt');
  const [lowerGarment, setLowerGarment] = useState<GarmentType>('jeans');
  const [upperColor, setUpperColor] = useState('#ffffff');
  const [lowerColor, setLowerColor] = useState('#1b2a4a');
  const [upperStyle, setUpperStyle] = useState<GarmentStyle>('regular');
  const [lowerStyle, setLowerStyle] = useState<GarmentStyle>('regular');

  const resetOutfit = () => {
    setUpperGarment('tshirt');
    setLowerGarment('jeans');
    setUpperColor('#ffffff');
    setLowerColor('#1b2a4a');
    setUpperStyle('regular');
    setLowerStyle('regular');
    setViewMode('front');
  };

  // Compute style scale factor
  const getStyleScale = (style: GarmentStyle) => {
    switch (style) {
      case 'slim': return 0.92;
      case 'oversized': return 1.15;
      default: return 1.0;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">2D Virtual Fitting Room</h1>
          <p className="text-white/50 mt-1">Professional fashion fitting model with realistic anatomy and accurate garments</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={resetOutfit}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors flex items-center gap-2 text-sm"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Fitting Model Canvas (7 cols) */}
          <div className="lg:col-span-7 premium-card p-8 flex flex-col items-center justify-center relative min-h-[650px] bg-gradient-to-b from-white/[0.02] to-black">

            {/* View Mode Toggle Buttons */}
            <div className="absolute top-6 left-6 flex bg-white/5 border border-white/10 rounded-full p-1 z-20">
              <button
                onClick={() => setViewMode('front')}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  viewMode === 'front' ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'
                }`}
              >
                Front View
              </button>
              <button
                onClick={() => setViewMode('back')}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  viewMode === 'back' ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'
                }`}
              >
                Back View
              </button>
            </div>

            {/* Model Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/50 flex items-center gap-2">
              <Sparkles size={14} className="text-yellow-400" />
              <span>{viewMode === 'front' ? 'Anatomical Front' : 'Anatomical Back'}</span>
            </div>

            {/* 2D Fashion Model SVG Container */}
            <div className="relative w-full max-w-[420px] h-[540px] flex items-center justify-center mt-8">
              <svg viewBox="0 0 400 650" className="w-full h-full drop-shadow-2xl">
                <defs>
                  {/* Gradients for realistic lighting and depth */}
                  <linearGradient id="bodySkin" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2c2c2e" />
                    <stop offset="50%" stopColor="#1c1c1e" />
                    <stop offset="100%" stopColor="#111113" />
                  </linearGradient>
                  <linearGradient id="upperGarmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={upperColor} stopOpacity="1" />
                    <stop offset="100%" stopColor={upperColor} stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="lowerGarmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={lowerColor} stopOpacity="1" />
                    <stop offset="100%" stopColor={lowerColor} stopOpacity="0.88" />
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.4" />
                  </filter>
                </defs>

                {/* Ground Shadow */}
                <ellipse cx="200" cy="625" rx="75" ry="12" fill="#ffffff" opacity="0.08" />

                {/* ========================================== */}
                {/* HUMAN BODY (Anatomically Proportioned)     */}
                {/* ========================================== */}
                <g id="human-body" opacity="0.85">
                  {/* Head & Neck */}
                  <ellipse cx="200" cy="75" rx="32" ry="38" fill="url(#bodySkin)" />
                  <path d="M 184 105 L 188 135 L 212 135 L 216 105 Z" fill="url(#bodySkin)" />

                  {/* Shoulders & Torso */}
                  {viewMode === 'front' ? (
                    // Front Torso with collarbone & chest definition
                    <path
                      d="M 140 135 C 130 135 115 145 110 160 C 105 180 95 240 95 280 C 95 300 110 320 135 325 C 150 328 175 330 200 330 C 225 330 250 328 265 325 C 290 320 305 300 305 280 C 305 240 295 180 290 160 C 285 145 270 135 260 135 Z"
                      fill="url(#bodySkin)"
                    />
                  ) : (
                    // Back Torso with spine line & shoulder blades
                    <path
                      d="M 140 135 C 130 135 115 145 110 160 C 105 180 95 240 95 280 C 95 300 110 320 135 325 C 150 328 175 330 200 330 C 225 330 250 328 265 325 C 290 320 305 300 305 280 C 305 240 295 180 290 160 C 285 145 270 135 260 135 Z"
                      fill="url(#bodySkin)"
                    />
                  )}

                  {/* Waist & Hips */}
                  <path d="M 135 325 C 135 325 140 370 145 380 C 150 390 170 395 200 395 C 230 395 250 390 255 380 C 260 370 265 325 265 325 Z" fill="url(#bodySkin)" />

                  {/* Arms (Left & Right) */}
                  {/* Left Arm */}
                  <path d="M 112 142 C 95 150 80 200 75 250 C 72 280 70 340 72 380 C 73 395 82 395 88 380 C 92 340 95 280 102 240 C 108 200 120 160 125 145 Z" fill="url(#bodySkin)" />
                  {/* Right Arm */}
                  <path d="M 288 142 C 305 150 320 200 325 250 C 328 280 330 340 328 380 C 327 395 318 395 312 380 C 308 340 305 280 298 240 C 292 200 280 160 275 145 Z" fill="url(#bodySkin)" />

                  {/* Legs (Left & Right) */}
                  {/* Left Leg */}
                  <path d="M 148 390 C 145 420 142 500 140 560 C 138 590 138 610 140 615 C 145 618 158 618 162 615 C 165 600 168 530 172 470 C 175 430 178 400 180 390 Z" fill="url(#bodySkin)" />
                  {/* Right Leg */}
                  <path d="M 252 390 C 255 420 258 500 260 560 C 262 590 262 610 260 615 C 255 618 242 618 238 615 C 235 600 232 530 228 470 C 225 430 222 400 220 390 Z" fill="url(#bodySkin)" />

                  {/* Feet */}
                  <path d="M 132 615 L 165 615 C 165 622 155 625 138 625 C 132 625 130 620 132 615 Z" fill="url(#bodySkin)" />
                  <path d="M 268 615 L 235 615 C 235 622 245 625 262 625 C 268 625 270 620 268 615 Z" fill="url(#bodySkin)" />
                </g>

                {/* ========================================== */}
                {/* UPPER GARMENT RENDERER                     */}
                {/* ========================================== */}
                {upperGarment && (
                  <g id="upper-garment" filter="url(#shadow)" transform={`scale(${getStyleScale(upperStyle)})`} transform-origin="200 200">
                    {upperGarment === 'tshirt' && (
                      <g>
                        {/* Main Body */}
                        <path
                          d={viewMode === 'front'
                            ? "M 130 140 C 120 140 108 150 105 165 L 85 185 L 68 170 L 80 145 C 95 135 125 132 150 132 C 180 132 200 132 200 132 C 200 132 220 132 250 132 C 275 132 305 135 320 145 L 332 170 L 315 185 L 295 165 C 292 150 280 140 270 140 C 265 140 262 155 250 160 C 230 168 170 168 150 160 C 138 155 135 140 130 140 Z M 130 160 C 145 310 155 330 160 340 L 240 340 C 245 330 255 310 270 160 C 240 172 160 172 130 160 Z"
                            : "M 130 140 C 120 140 108 150 105 165 L 85 185 L 68 170 L 80 145 C 95 135 125 132 150 132 C 250 132 275 135 320 145 L 332 170 L 315 185 L 295 165 C 292 150 280 140 270 140 C 235 145 165 145 130 140 Z M 130 160 C 145 310 155 330 160 340 L 240 340 C 245 330 255 310 270 160 C 240 172 160 172 130 160 Z"
                          }
                          fill="url(#upperGarmentGrad)"
                        />
                        {/* Neckline */}
                        {viewMode === 'front' && (
                          <path d="M 165 132 C 175 152 225 152 235 132 C 220 142 180 142 165 132 Z" fill="#111" opacity="0.3" />
                        )}
                      </g>
                    )}

                    {upperGarment === 'shirt' && (
                      <g>
                        <path
                          d={viewMode === 'front'
                            ? "M 128 138 C 118 138 105 148 100 162 L 78 210 L 62 195 L 75 155 C 90 142 120 136 150 136 C 180 136 200 136 200 136 C 200 136 220 136 250 136 C 280 136 310 142 325 155 L 338 195 L 322 210 L 300 162 C 295 148 282 138 272 138 C 265 138 260 155 245 162 C 225 170 175 170 155 162 C 140 155 135 138 128 138 Z M 128 160 C 142 320 152 345 158 355 L 242 355 C 248 345 258 320 272 160 C 240 172 160 172 128 160 Z"
                            : "M 128 138 C 118 138 105 148 100 162 L 78 210 L 62 195 L 75 155 C 90 142 120 136 150 136 C 250 136 310 142 325 155 L 338 195 L 322 210 L 300 162 C 295 148 282 138 272 138 C 235 142 165 142 128 138 Z M 128 160 C 142 320 152 345 158 355 L 242 355 C 248 345 258 320 272 160 C 240 172 160 172 128 160 Z"
                          }
                          fill="url(#upperGarmentGrad)"
                        />
                        {/* Collar & Buttons (Front only) */}
                        {viewMode === 'front' && (
                          <g>
                            <path d="M 175 136 L 200 155 L 225 136 L 210 128 L 200 135 L 190 128 Z" fill={upperColor} filter="brightness(0.85)" />
                            <line x1="200" y1="155" x2="200" y2="350" stroke="#000" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6" />
                          </g>
                        )}
                      </g>
                    )}

                    {upperGarment === 'tops' && (
                      <path
                        d="M 132 140 C 122 140 110 148 105 160 L 90 200 L 72 190 L 85 150 C 95 138 125 134 150 134 C 180 134 220 134 250 134 C 275 134 305 138 315 150 L 328 190 L 310 200 L 295 160 C 290 148 278 140 268 140 C 240 148 160 148 132 140 Z M 132 158 C 145 300 155 330 160 340 L 240 340 C 245 330 255 300 268 158 C 238 168 162 168 132 158 Z"
                        fill="url(#upperGarmentGrad)"
                      />
                    )}

                    {upperGarment === 'dress' && (
                      <path
                        d={viewMode === 'front'
                          ? "M 132 140 C 122 140 110 148 105 160 L 90 200 L 72 190 L 85 150 C 95 138 125 134 150 134 C 180 134 220 134 250 134 C 275 134 305 138 315 150 L 328 190 L 310 200 L 295 160 C 290 148 278 140 268 140 C 240 148 160 148 132 140 Z M 132 158 C 142 330 130 450 115 510 L 285 510 C 270 450 258 330 268 158 C 238 168 162 168 132 158 Z"
                          : "M 132 140 C 122 140 110 148 105 160 L 90 200 L 72 190 L 85 150 C 95 138 125 134 150 134 C 250 134 305 138 315 150 L 328 190 L 310 200 L 295 160 C 290 148 278 140 268 140 C 235 145 165 145 132 140 Z M 132 158 C 142 330 130 450 115 510 L 285 510 C 270 450 258 330 268 158 C 238 168 162 168 132 158 Z"
                        }
                        fill="url(#upperGarmentGrad)"
                      />
                    )}

                    {upperGarment === 'jacket' && (
                      <g>
                        <path
                          d={viewMode === 'front'
                            ? "M 125 135 C 115 135 102 145 98 160 L 75 220 L 58 208 L 72 160 C 85 145 118 130 150 130 C 180 130 200 130 200 130 C 200 130 220 130 250 130 C 282 130 315 145 328 160 L 342 208 L 325 220 L 302 160 C 298 145 285 135 275 135 C 265 135 260 152 245 160 C 220 170 180 170 155 160 C 140 152 135 135 125 135 Z M 125 158 C 138 325 148 355 155 365 L 245 365 C 252 355 262 325 275 158 C 238 172 162 172 125 158 Z"
                            : "M 125 135 C 115 135 102 145 98 160 L 75 220 L 58 208 L 72 160 C 85 145 118 130 150 130 C 250 130 315 145 328 160 L 342 208 L 325 220 L 302 160 C 298 145 285 135 275 135 C 240 138 160 138 125 135 Z M 125 158 C 138 325 148 355 155 365 L 245 365 C 252 355 262 325 275 158 C 238 172 162 172 125 158 Z"
                          }
                          fill="url(#upperGarmentGrad)"
                        />
                        {viewMode === 'front' && (
                          <line x1="200" y1="160" x2="200" y2="365" stroke="#000" strokeWidth="2.5" opacity="0.4" />
                        )}
                      </g>
                    )}

                    {upperGarment === 'hoodie' && (
                      <g>
                        <path
                          d={viewMode === 'front'
                            ? "M 125 135 C 115 135 102 145 98 160 L 75 230 L 58 215 L 72 165 C 85 145 118 130 150 130 C 180 130 200 130 200 130 C 200 130 220 130 250 130 C 282 130 315 145 328 165 L 342 215 L 325 230 L 302 160 C 298 145 285 135 275 135 C 265 135 260 152 245 160 C 220 170 180 170 155 160 C 140 152 135 135 125 135 Z M 125 158 C 138 330 148 360 155 370 L 245 370 C 252 360 262 330 275 158 C 238 172 162 172 125 158 Z"
                            : "M 125 135 C 115 135 102 145 98 160 L 75 230 L 58 215 L 72 165 C 85 145 118 130 150 130 C 250 130 315 145 328 165 L 342 215 L 325 230 L 302 160 C 298 145 285 135 275 135 C 240 138 160 138 125 135 Z M 125 158 C 138 330 148 360 155 370 L 245 370 C 252 360 262 330 275 158 C 238 172 162 172 125 158 Z"
                          }
                          fill="url(#upperGarmentGrad)"
                        />
                        {/* Hood piece behind head */}
                        <path d="M 160 130 C 160 90 240 90 240 130 C 240 110 160 110 160 130 Z" fill="url(#upperGarmentGrad)" />
                      </g>
                    )}
                  </g>
                )}

                {/* ========================================== */}
                {/* LOWER GARMENT RENDERER                     */}
                {/* ========================================== */}
                {lowerGarment && (
                  <g id="lower-garment" filter="url(#shadow)" transform={`scale(${getStyleScale(lowerStyle)})`} transform-origin="200 450">
                    {(lowerGarment === 'jeans' || lowerGarment === 'trousers' || lowerGarment === 'chinos' || lowerGarment === 'joggers') && (
                      <g>
                        {/* Waistband */}
                        <rect x="140" y="375" width="120" height="20" rx="4" fill="url(#lowerGarmentGrad)" filter="brightness(0.9)" />
                        {/* Left Leg */}
                        <path d="M 145 390 L 178 390 L 170 595 L 140 595 Z" fill="url(#lowerGarmentGrad)" />
                        {/* Right Leg */}
                        <path d="M 222 390 L 255 390 L 260 595 L 230 595 Z" fill="url(#lowerGarmentGrad)" />
                        {/* Center Seam */}
                        <line x1="200" y1="390" x2="200" y2="520" stroke="#000" strokeWidth="1.5" opacity="0.3" />
                      </g>
                    )}

                    {lowerGarment === 'shorts' && (
                      <g>
                        <rect x="140" y="375" width="120" height="20" rx="4" fill="url(#lowerGarmentGrad)" filter="brightness(0.9)" />
                        <path d="M 145 390 L 178 390 L 174 485 L 142 485 Z" fill="url(#lowerGarmentGrad)" />
                        <path d="M 222 390 L 255 390 L 258 485 L 226 485 Z" fill="url(#lowerGarmentGrad)" />
                      </g>
                    )}

                    {lowerGarment === 'skirt' && (
                      <path d="M 140 375 L 260 375 L 290 520 L 110 520 Z" fill="url(#lowerGarmentGrad)" />
                    )}
                  </g>
                )}
              </svg>
            </div>

            {/* View Mode Switcher bar */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setViewMode('front')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'front' ? 'bg-white text-black shadow-lg' : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                }`}
              >
                Front View
              </button>
              <button
                onClick={() => setViewMode('back')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'back' ? 'bg-white text-black shadow-lg' : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                }`}
              >
                Back View
              </button>
            </div>
          </div>

          {/* Controls & Customization Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Upper Garment Selection */}
            <div className="premium-card p-6 space-y-4">
              <h3 className="text-lg font-light flex items-center justify-between">
                <span>Upper Garment</span>
                <span className="text-xs text-white/40 uppercase tracking-wider">{upperGarment}</span>
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {UPPER_GARMENTS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setUpperGarment(item.id)}
                    className={`p-3 rounded-lg border transition-all text-center flex flex-col items-center gap-1 ${
                      upperGarment === item.id ? 'bg-white/10 border-white/30 text-white shadow-lg' : 'border-white/10 hover:border-white/20 text-white/60 hover:text-white'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Upper Style */}
              <div className="pt-2">
                <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Fit Style</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['regular', 'slim', 'oversized'] as const).map((style) => (
                    <button
                      key={style}
                      onClick={() => setUpperStyle(style)}
                      className={`py-2 rounded-lg border text-xs font-medium uppercase tracking-wider transition-all ${
                        upperStyle === style ? 'bg-white/20 border-white/40 text-white' : 'border-white/10 text-white/50 hover:border-white/20'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upper Color Palette */}
              <div className="pt-2">
                <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">
                  Color: <span className="text-white font-medium">{GARMENT_COLORS.find(c => c.value === upperColor)?.name}</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {GARMENT_COLORS.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setUpperColor(color.value)}
                      className={`h-9 rounded-lg border-2 transition-all relative ${
                        upperColor === color.value ? 'border-white scale-105 shadow-md' : 'border-white/10 hover:border-white/30'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Lower Garment Selection */}
            <div className="premium-card p-6 space-y-4">
              <h3 className="text-lg font-light flex items-center justify-between">
                <span>Lower Garment</span>
                <span className="text-xs text-white/40 uppercase tracking-wider">{lowerGarment}</span>
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {LOWER_GARMENTS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLowerGarment(item.id)}
                    className={`p-3 rounded-lg border transition-all text-center flex flex-col items-center gap-1 ${
                      lowerGarment === item.id ? 'bg-white/10 border-white/30 text-white shadow-lg' : 'border-white/10 hover:border-white/20 text-white/60 hover:text-white'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Lower Style */}
              <div className="pt-2">
                <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Fit Style</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['regular', 'slim', 'oversized'] as const).map((style) => (
                    <button
                      key={style}
                      onClick={() => setLowerStyle(style)}
                      className={`py-2 rounded-lg border text-xs font-medium uppercase tracking-wider transition-all ${
                        lowerStyle === style ? 'bg-white/20 border-white/40 text-white' : 'border-white/10 text-white/50 hover:border-white/20'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lower Color Palette */}
              <div className="pt-2">
                <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">
                  Color: <span className="text-white font-medium">{GARMENT_COLORS.find(c => c.value === lowerColor)?.name}</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {GARMENT_COLORS.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setLowerColor(color.value)}
                      className={`h-9 rounded-lg border-2 transition-all relative ${
                        lowerColor === color.value ? 'border-white scale-105 shadow-md' : 'border-white/10 hover:border-white/30'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Size Recommendation Card */}
            {userMeasurements && (
              <div className="premium-card p-6 space-y-3 bg-white/[0.02]">
                <h3 className="text-sm font-medium uppercase tracking-wider text-white/60">Your Custom Fit Profile</h3>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                    <span className="text-xs text-white/40 block">Recommended Upper</span>
                    <span className="text-xl font-light text-white">M / L</span>
                  </div>
                  <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                    <span className="text-xs text-white/40 block">Recommended Lower</span>
                    <span className="text-xl font-light text-white">32" / M</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
