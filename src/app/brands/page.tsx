'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import { BRANDS } from '@/lib/mockData';

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Supported Brands</h1>
          <p className="text-white/50 max-w-2xl">We maintain up-to-date size charts for 50+ brands. Here are some of our most popular.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS.map((brand, index) => (
            <motion.article
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="premium-card p-6 hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl font-bold tracking-tighter text-white">{brand.logoText}</span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/40 bg-white/5 px-2 py-1 rounded">
                  {brand.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}
                </span>
              </div>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">{brand.description}</p>
              <p className="text-white/40 text-xs mb-6"><span className="font-medium text-white/60">{brand.tagline}</span></p>
              <div className="flex flex-wrap gap-2 mb-6">
                {brand.sizeCharts.tops && (
                  <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded">Tops</span>
                )}
                {brand.sizeCharts.bottoms && (
                  <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded">Bottoms</span>
                )}
              </div>
              <Link
                href={`/brands/${brand.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                View Size Charts
                <ExternalLink size={14} />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 mb-4">Don't see your favorite brand?</p>
          <button className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 hover:border-white/30 transition-colors">
            Request a Brand
          </button>
        </motion.div>
      </div>
    </div>
  );
}