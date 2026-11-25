'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Search, Filter, ChevronRight } from 'lucide-react';
import { PRODUCTS, BRANDS } from '@/lib/mockData';
import SizeBadge from '@/components/SizeBadge';
import { useAuth } from '@/context/AuthContext';
import { calculateRecommendedSize } from '@/lib/engine';

export default function ProductsPage() {
  const { user } = useAuth();

  const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Shoes'];
  const brandNames = ['All', 'Zara', 'H&M', 'Uniqlo', 'Nike'];

  const getSizeChart = (brandId: string, category: 'tops' | 'bottoms') => {
    const brand = BRANDS.find(b => b.id === brandId);
    if (!brand) return [];
    return category === 'tops' ? (brand.sizeCharts.tops || []) : (brand.sizeCharts.bottoms || []);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Products</h1>
          <p className="text-white/50 max-w-2xl">Browse products and see your personalized size recommendations instantly.</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white/5 border border-white/10 focus:border-white focus:outline-none px-12 py-3 rounded-lg text-white placeholder:text-white/30"
            />
          </div>
          <select className="bg-white/5 border border-white/10 focus:border-white focus:outline-none px-4 py-3 rounded-lg text-white appearance-none pr-10">
            {categories.map(c => <option key={c} value={c.toLowerCase()}>{c}</option>)}
          </select>
          <select className="bg-white/5 border border-white/10 focus:border-white focus:outline-none px-4 py-3 rounded-lg text-white appearance-none pr-10">
            {brandNames.map(b => <option key={b} value={b.toLowerCase()}>{b}</option>)}
          </select>
          <button className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
            <Filter size={18} /> Filters
          </button>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="premium-card overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className="aspect-[3/4] bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <span className="text-xs font-mono tracking-wider uppercase">{product.brandName}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/50">{product.brandName}</span>
                  <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
                </div>
                <h3 className="font-medium text-sm leading-snug group-hover:text-white/80 transition-colors">{product.name}</h3>
                <p className="text-xs text-white/40 line-clamp-2">{product.description}</p>

                {/* Size Recommendation */}
                {user?.measurements && (
                  <SizeBadge
                    recommendation={calculateRecommendedSize(
                      user.measurements,
                      getSizeChart(product.brandId, product.category as 'tops' | 'bottoms'),
                      user.measurements.fitPreference
                    )}
                  />
                )}

                {!user?.measurements && (
                  <div className="p-3 bg-white/5 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-muted text-xs">
                    <Link href="/auth/signup" className="text-white font-medium hover:underline">Create a profile</Link> to see your size
                  </div>
                )}

                <div className="flex flex-wrap gap-1 pt-2">
                  {product.availableSizes.map(size => (
                    <span key={size} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded hover:border-white/30 transition-colors">{size}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {PRODUCTS.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50">No products found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}