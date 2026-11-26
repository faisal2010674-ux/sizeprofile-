'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import TwoDMannequin from '@/components/ThreeMannequin';
import { PRODUCTS, BRANDS } from '@/lib/mockData';
import Link from 'next/link';
import { ArrowLeft, Search, Filter, Grid, List, ChevronDown, X, Loader2, RotateCcw } from 'lucide-react';

type StudioView = 'mannequin' | 'brand-grid' | 'size-chart';

interface BrandCardProps {
  brand: typeof BRANDS[0];
  onSelect: (brandId: string) => void;
}

const BrandCard = ({ brand, onSelect }: BrandCardProps) => {
  const garmentCount = brand.categories.reduce((sum, cat) => {
    const chart = cat === 'tops' ? brand.sizeCharts.tops : cat === 'bottoms' ? brand.sizeCharts.bottoms : undefined;
    return sum + (chart ? chart.length : 0);
  }, 0);

  return (
    <div
      key={brand.id}
      className="premium-card p-6 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer group"
      onClick={() => onSelect(brand.id)}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-light">{brand.logoText?.charAt(0)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-light truncate">{brand.name}</h3>
          <p className="text-white/40 text-sm mt-1 line-clamp-2">{brand.tagline}</p>
        </div>
      </div>
      <p className="text-xs text-white/50 uppercase tracking-wider mt-3">
        {garmentCount} size options
      </p>
    </div>
  );
};

interface SizeChartProps {
  brandId: string;
  category: 'tops' | 'bottoms';
  onClose: () => void;
}

const SizeChart = ({ brandId, category, onClose }: SizeChartProps) => {
  const brand = BRANDS.find(b => b.id === brandId);
  if (!brand) return null;
  const chart = category === 'tops' ? (brand.sizeCharts.tops || []) : (brand.sizeCharts.bottoms || []);

  if (!chart.length) return null;

  const renderHeader = () => {
    if (category === 'tops') {
      return <th className="text-left text-white/50 text-xs uppercase tracking-wider border-b border-white/10 pb-2">Chest</th>;
    }
    return <th className="text-left text-white/50 text-xs uppercase tracking-wider border-b border-white/10 pb-2">Waist / Inseam</th>;
  };

  const renderCell = (entry: typeof chart[0]) => {
    if (category === 'tops') {
      return entry.chestMin !== undefined
        ? <td className="text-white/60 font-light">{entry.chestMin}-{entry.chestMax}cm</td>
        : <td className="text-white/60 font-light"></td>;
    }
    return (
      <td className="text-white/60 font-light">
        {entry.waistMin !== undefined ? `${entry.waistMin}-${entry.waistMax}cm` : ''}
        {entry.inseamMin !== undefined ? ` / ${entry.inseamMin}-${entry.inseamMax}\"` : ''}
      </td>
    );
  };

  return (
    <div className="premium-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-light">
          {category === 'tops' ? 'Tops Size Chart' : 'Bottoms Size Chart'}
          <span className="text-white/40 text-xs uppercase tracking-wider">-{brand.name}-</span>
        </h2>
        <button
          onClick={onClose}
          className="text-white/40 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left text-white/50 text-xs uppercase tracking-wider border-b border-white/10 pb-2">Size</th>
              {renderHeader()}
            </tr>
          </thead>
          <tbody>
            {chart.map((entry, i) => (
              <tr key={i} className="border-b border-white/10">
                <td className="text-white/60 font-light">{entry.size}</td>
                {renderCell(entry)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function StudioPage() {
  const { user } = useAuth();
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<StudioView>('mannequin');
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Get selected brand's size chart data
  const getSizeChart = useMemo(() => (brandId: string, category: 'tops' | 'bottoms') => {
    const brand = BRANDS.find(b => b.id === brandId);
    if (!brand) return [];
    return category === 'tops' ? (brand.sizeCharts.tops || []) : (brand.sizeCharts.bottoms || []);
  }, []);

  // Filter products by selected brand
  const brandProducts = useMemo(() => {
    if (!selectedBrandId) return [];
    return PRODUCTS.filter(p => p.brandId === selectedBrandId);
  }, [selectedBrandId]);

  const resetState = () => {
    setSelectedBrandId(null);
    setViewMode('mannequin');
    setShowSizeChart(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">Virtual Fitting Room</h1>
          <p className="text-white/50 mt-1">Try on garments visualizing realistic 3D fit</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={resetState}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors flex items-center gap-2 text-sm"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Brand Selector or Product Grid based on view mode */}
        {viewMode === 'brand-grid' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {BRANDS.map((brand) => (
              <BrandCard key={brand.id} brand={brand} onSelect={() => setSelectedBrandId(brand.id)} />
            ))}
          </div>
        )}

        {/* ThreeMannequin Area */}
        <div className={`lg:col-span-3 ${viewMode === 'mannequin' ? 'relative' : ''} ${viewMode !== 'mannequin' && !selectedBrandId ? 'hidden' : ''}`}>
          <TwoDMannequin
            userMeasurements={user?.measurements || null}
            selectedBrandId={selectedBrandId || undefined}
          />
        </div>

        {/* Size Chart Panel */}
        {showSizeChart && selectedBrandId && (
          <SizeChart
            brandId={selectedBrandId as string}
            category="tops"
            onClose={() => setShowSizeChart(false)}
          />
        )}

        {/* Product Grid for selected brand */}
        {selectedBrandId && (
          <div className={`grid ${viewMode === 'mannequin' ? 'lg:col-span-3' : 'lg:col-span-4'} gap-8 ${viewMode === 'mannequin' && !selectedBrandId ? 'hidden' : ''}`}>
            <div className="pt-4">
              <h2 className="text-xl font-light mb-4">Collection by {BRANDS.find(b => b.id === selectedBrandId)?.name}</h2>
              {brandProducts.length === 0 ? (
                <div className="text-center py-20 text-white/50">
                  <Search className="w-16 h-16 mx-auto text-white/20 mb-4" />
                  <h3 className="text-xl font-light mb-2">No products from this brand</h3>
                  <p className="text-white/50 mb-6">This brand doesn't have products in the current catalog.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {brandProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="group hover:text-white/80 transition-colors"
                    >
                      <div
                        key={product.id}
                        className="premium-card overflow-hidden group hover:border-white/20 transition-all bg-black/30"
                      >
                        <div className="aspect-[3/4] bg-white/5 relative overflow-hidden">
                          <img
                            src={`/images/${product.imageUrl}`}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium">
                              ${product.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium uppercase tracking-wider text-white/50">{product.brandName}</span>
                            <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
                          </div>
                          <h3 className="font-medium text-sm leading-snug group-hover:text-white/80 transition-colors line-clamp-2">{product.name}</h3>
                          <p className="text-xs text-white/40 line-clamp-2">{product.description}</p>
                          <div className="flex flex-wrap gap-1 pt-2">
                            {product.availableSizes.map((size: string) => (
                              <span key={size} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded hover:border-white/30 transition-colors cursor-default">{size}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* No brand selected state */}
        {!selectedBrandId && viewMode === 'mannequin' && (
          <div className="col-span-3 py-20 text-center text-white/50">
            <Search className="w-16 h-16 mx-auto text-white/20 mb-4" />
            <h3 className="text-xl font-light mb-2">Select a brand to explore</h3>
            <p className="text-white/50 mb-6">Browse brands on the left to see their collections and visualize garments on the 3D mannequin.</p>
            <button
              onClick={() => setViewMode('brand-grid')}
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-sm uppercase tracking-wider"
            >
              Browse Brands
            </button>
          </div>
        )}

        {/* Filters when brand is selected */}
        {selectedBrandId && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <span className="text-white/50 text-sm">
              Showing {brandProducts.length} of {PRODUCTS.length} products from {BRANDS.find(b => b.id === selectedBrandId)?.name}
            </span>
            <select
              className="bg-white/5 border border-white/10 focus:border-white focus:outline-none px-4 py-3 rounded-lg text-white appearance-none"
              onChange={(e) => setSelectedBrandId(e.target.value)}
            >
              <option value="all">All Brands</option>
              {BRANDS.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}