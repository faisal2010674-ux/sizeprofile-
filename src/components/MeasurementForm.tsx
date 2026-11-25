'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Scale, HelpCircle } from 'lucide-react';
import { UserMeasurements, FitPreference, UnitSystem } from '../types';
import { convertInchToCm, CM_TO_INCH } from '../lib/engine';
import BodyIllustration from './BodyIllustration';

interface MeasurementFormProps {
  initialMeasurements?: UserMeasurements | null;
  onSave: (measurements: UserMeasurements) => void;
  onBack?: () => void;
  readOnly?: boolean;
}

const FIELDS = [
  { key: 'height', label: 'Height', placeholder: 'e.g., 175', unitLabel: 'cm', icon: 'Height' },
  { key: 'chest', label: 'Chest', placeholder: 'e.g., 96', unitLabel: 'cm', icon: 'Chest' },
  { key: 'waist', label: 'Waist', placeholder: 'e.g., 82', unitLabel: 'cm', icon: 'Waist' },
  { key: 'shoulders', label: 'Shoulders', placeholder: 'e.g., 44', unitLabel: 'cm', icon: 'Shoulders' },
  { key: 'hips', label: 'Hips', placeholder: 'e.g., 98', unitLabel: 'cm', icon: 'Hips' },
  { key: 'inseam', label: 'Inseam', placeholder: 'e.g., 80', unitLabel: 'cm', icon: 'Inseam' },
] as const;

const FIT_OPTIONS: { value: FitPreference; label: string; desc: string }[] = [
  { value: 'slim', label: 'Slim Fit', desc: 'Close to body, tailored' },
  { value: 'regular', label: 'Regular Fit', desc: 'Classic, comfortable fit' },
  { value: 'oversized', label: 'Oversized', desc: 'Relaxed, roomy silhouette' },
];

export default function MeasurementForm({ initialMeasurements, onSave, onBack, readOnly }: MeasurementFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [unit, setUnit] = useState<UnitSystem>('cm');
  const [measurements, setMeasurements] = useState<UserMeasurements>({
    height: 170,
    chest: 96,
    waist: 82,
    shoulders: 44,
    hips: 98,
    inseam: 80,
    fitPreference: 'regular',
    ...initialMeasurements
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);

  // Convert values to inches for display if unit is 'in'
  const getDisplayValue = (key: keyof Omit<UserMeasurements, 'fitPreference' | 'weight'>): number => {
    const val = measurements[key];
    return unit === 'in' ? Math.round(val * CM_TO_INCH * 10) / 10 : val;
  };

  const handleChange = (key: keyof Omit<UserMeasurements, 'fitPreference' | 'weight'>, value: string) => {
    const numVal = parseFloat(value);
    if (isNaN(numVal)) return;
    const finalVal = unit === 'in' ? convertInchToCm(numVal) : numVal;
    setMeasurements(prev => ({ ...prev, [key]: finalVal }));
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const validateStep = (): boolean => {
    const field = FIELDS[currentStep].key;
    const val = measurements[field];
    if (!val || val <= 0) {
      setErrors({ [field]: 'Please enter a valid value' });
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, FIELDS.length));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    onSave(measurements);
    setIsSaving(false);
  };

  const activeField = FIELDS[currentStep]?.key;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light tracking-tight">Body Measurements</h2>
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className={`px-2 py-1 rounded ${unit === 'cm' ? 'bg-white/10' : ''}`} onClick={() => setUnit('cm')}>CM</span>
          <span className="text-white/30">|</span>
          <span className={`px-2 py-1 rounded ${unit === 'in' ? 'bg-white/10' : ''}`} onClick={() => setUnit('in')}>IN</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Illustration */}
        <div className="relative">
          <BodyIllustration activeField={activeField} />
        </div>

        {/* Right: Form Fields */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <label className="block text-sm font-medium uppercase tracking-wider text-muted">
                {FIELDS[currentStep].label} ({unit})
              </label>
              <div className="relative">
                <input
                  type="number"
                  step={unit === 'in' ? 0.1 : 1}
                  value={getDisplayValue(FIELDS[currentStep].key)}
                  onChange={(e) => handleChange(FIELDS[currentStep].key, e.target.value)}
                  placeholder={FIELDS[currentStep].placeholder}
                  className="w-full bg-black/50 border border-white/10 focus:border-white focus:outline-none px-4 py-3 text-lg text-white placeholder:text-white/30 rounded-md transition-colors"
                  disabled={readOnly}
                />
                {errors[FIELDS[currentStep].key] && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 text-sm">{errors[FIELDS[currentStep].key]}</span>
                )}
              </div>
              <p className="text-xs text-muted">Measurement will be saved in centimeters internally.</p>
            </motion.div>
          </AnimatePresence>

          {/* Fit Preference - Last Step */}
          {currentStep === FIELDS.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 pt-4 border-t border-white/10"
            >
              <label className="block text-sm font-medium uppercase tracking-wider text-muted">
                Fit Preference
              </label>
              <div className="grid grid-cols-3 gap-3">
                {FIT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setMeasurements(prev => ({ ...prev, fitPreference: opt.value }))}
                    className={`p-4 rounded-lg border transition-all ${
                      measurements.fitPreference === opt.value
                        ? 'border-white bg-white/5'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="block font-medium text-sm">{opt.label}</span>
                    <span className="block text-xs text-muted mt-1">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors disabled:opacity-30"
        >
          <ChevronLeft size={18} /> Back
        </button>

        <div className="flex items-center gap-4">
          {/* Progress Indicator */}
          <div className="hidden md:flex items-center gap-1">
            {FIELDS.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i <= currentStep ? 'bg-white' : 'bg-white/10'
                }`}
              />
            ))}
          </div>

          {currentStep < FIELDS.length - 1 ? (
            <button type="button" onClick={nextStep} className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors">
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSaving}
              className="px-8 py-2 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isSaving ? 'Saving...' : 'Save Profile'}
              <Check size={16} />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}