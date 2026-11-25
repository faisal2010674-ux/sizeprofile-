'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold tracking-tighter text-white">SIZEPROFILE</span>
          <p className="text-xs text-muted mt-1">One Profile. Multiple Brands. Better Size Matching.</p>
        </div>

        <div className="text-xs text-muted flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Brand API Integration</a>
        </div>

        <div className="text-xs text-muted">
          &copy; {year} SIZEPROFILE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
