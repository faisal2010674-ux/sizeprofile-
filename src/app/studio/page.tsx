'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import VirtualMannequin from '@/components/VirtualMannequin';

export default function StudioPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white">
      <VirtualMannequin
        userMeasurements={user?.measurements || null}
      />
    </div>
  );
}