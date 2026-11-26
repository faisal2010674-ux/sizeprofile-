'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Search, Filter, X, ChevronDown } from 'lucide-react';
import { BRANDS } from '@/lib/mockData';

const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Shoes'];

export default function BrandsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBrands = useMemo(() => {
    return BRANDS.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           brand.logoText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           brand.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' ||
                             brand.categories.some(c => c.charAt(0).toUpperCase() + c.slice(1) === selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All';

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2">All Brands</h1>
              <p className="text-white/50 max-w-2xl">We maintain up-to-date size charts for 28+ brands across multiple categories.</p>
            </div>
            <div className="flex items-center gap-3">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5"
                >
                  <X size={14} /> Clear Filters
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Filter size={18} /> Filters
                <ChevronDown size={16} className={showFilters ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input
                type="text"
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 focus:border-white focus:outline-none px-12 py-3 rounded-lg text-white placeholder:text-white/30"
              />
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-wrap gap-2"
                >
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-white text-black'
                          : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-sm text-white/50"
        >
          Showing {filteredBrands.length} of {BRANDS.length} brands
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {filteredBrands.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBrands.map((brand, index) => (
                <motion.article
                  key={brand.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="premium-card p-6 hover:border-white/20 transition-all group"
                >
                  <Link href={`/brands/${brand.id}`} className="block">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xl font-bold tracking-tighter text-white">{brand.logoText}</span>
                      <span className="text-xs font-medium uppercase tracking-wider text-white/40 bg-white/5 px-2 py-1 rounded">
                        {brand.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm mb-3 leading-relaxed">{brand.description}</p>
                    <p className="text-white/40 text-xs mb-5"><span className="font-medium text-white/60">{brand.tagline}</span></p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {brand.sizeCharts.tops && (
                        <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded">Tops</span>
                      )}
                      {brand.sizeCharts.bottoms && (
                        <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded">Bottoms</span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors group-hover:translate-x-1">
                      View Size Charts
                      <ArrowLeft size={14} className="rotate-180" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No brands match your search.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 hover:border-white/30 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Request Brand */}
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