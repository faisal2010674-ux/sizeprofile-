'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Filter, Grid, List, X, Loader2, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS, BRANDS } from '@/lib/mockData';
import { useAuth } from '@/context/AuthContext';
import { calculateRecommendedSize } from '@/lib/engine';
import SizeBadge from '@/components/SizeBadge';

// --- Types ---
type Category = 'all' | 'tops' | 'bottoms' | 'outerwear' | 'shoes';
type SortOption = 'relevance' | 'price-low' | 'price-high' | 'newest' | 'brand';
type ViewMode = 'grid' | 'list';

export default function ProductsPage() {
  const { user } = useAuth();

  // --- State ---
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const [brand, setBrand] = useState('all');
  const [sort, setSort] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // --- Helpers ---
  const allBrands = useMemo(() => {
    const brandMap = new Map();
    BRANDS.forEach(b => brandMap.set(b.id, b.name));
    return Array.from(brandMap.entries()).map(([id, name]) => ({ id, name }));
  }, []);

  const getSizeChart = (brandId: string, cat: string) => {
    const b = BRANDS.find(b => b.id === brandId);
    if (!b) return [];
    return cat === 'tops' ? (b.sizeCharts.tops || []) : (b.sizeCharts.bottoms || []);
  };

  // --- Filtering & Sorting ---
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(s) ||
        p.brandName.toLowerCase().includes(s) ||
        p.category.toLowerCase().includes(s)
      );
    }

    if (category !== 'all') result = result.filter((p: any) => p.category === category);
    if (brand !== 'all') result = result.filter((p: any) => p.brandId === brand);

    if (sort === 'price-low') result.sort((a: any, b: any) => a.price - b.price);
    else if (sort === 'price-high') result.sort((a: any, b: any) => b.price - a.price);
    else if (sort === 'brand') result.sort((a: any, b: any) => a.brandName.localeCompare(b.brandName));

    return result;
  }, [search, category, brand, sort]);

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
    setBrand('all');
    setSort('relevance');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Product Catalogue</h1>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
          />
          <div className="flex gap-2">
            <button onClick={() => setShowFilters(!showFilters)} className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2 hover:bg-white/10">
              <Filter size={18} /> Filters
            </button>
            <div className="flex bg-white/5 rounded-lg p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white text-black' : ''}`}><Grid size={18} /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-white text-black' : ''}`}><List size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Overlay */}
      {showFilters && (
        <div className="max-w-7xl mx-auto mb-8 p-6 bg-white/5 border border-white/10 rounded-lg grid md:grid-cols-4 gap-6">
          <select value={category} onChange={(e) => setCategory(e.target.value as Category)} className="bg-black border border-white/10 p-3 rounded">
            <option value="all">All Categories</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="outerwear">Outerwear</option>
          </select>
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="bg-black border border-white/10 p-3 rounded">
            <option value="all">All Brands</option>
            {allBrands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value as SortOption)} className="bg-black border border-white/10 p-3 rounded">
            <option value="relevance">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="brand">Brand A-Z</option>
          </select>
          <button onClick={clearFilters} className="text-red-400 hover:text-red-300">Clear All</button>
        </div>
      )}

      {/* Products */}
      <div className={`max-w-7xl mx-auto grid ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1'} gap-6`}>
        {filteredProducts.map(p => (
          <div key={p.id} className="premium-card p-4 hover:border-white/30 transition">
            <img src={`/images/${p.imageUrl}`} alt={p.name} className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="font-medium text-lg">{p.name}</h3>
            <p className="text-white/60 text-sm">{p.brandName}</p>
            <p className="text-lg font-semibold mt-2">${p.price}</p>
            <Link href={`/products/${p.id}`} className="block mt-4 text-center py-2 bg-white text-black rounded hover:bg-gray-200">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
