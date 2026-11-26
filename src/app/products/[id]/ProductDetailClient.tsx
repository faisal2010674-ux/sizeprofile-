'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeft, Heart } from 'lucide-react';
import { PRODUCTS } from '@/lib/mockData';

type Product = {
  id: string;
  brandId: string;
  brandName: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  availableSizes: string[];
  availableColors?: string[];
};

function ProductDetailContent({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }
    const found = PRODUCTS.find((p: any) => p.id === productId);
    setProduct(found || null);
    setLoading(false);
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-white mx-auto mb-4" />
          <p className="text-white/60">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-light mb-6">Product Not Found</h1>
          <p className="text-white/60 mb-4">The product could not be found.</p>
          <Link href="/products" className="text-blue-400 hover:text-blue-300">Go to Products</Link>
        </div>
      </div>
    );
  }

  const imageUrl = product.imageUrl.startsWith('/') ? product.imageUrl : `/images/${product.imageUrl}`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="p-2 rounded bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Back to products"
          >
            <ArrowLeft size={18} className="text-white" />
          </button>
          <h1 className="text-2xl font-light tracking-tight"> {product.name}</h1>
        </div>
      </div>

      {/* Product Hero Image */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="relative w-full h-[500px] mb-6 rounded-lg overflow-hidden bg-white/5">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
            onError={(e) => {
              // fallback handling if needed
            }}
          />
          {/* Favorite button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-colors z-10"
            aria-label="Favorite"
          >
            <Heart size={20} className="text-red-400" />
          </button>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div>
            <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Brand</p>
            <p className="text-2xl font-light tracking-wider">{product.brandName}</p>
          </div>
          <div>
            <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Price</p>
            <p className="text-2xl font-bold text-yellow-400">${product.price.toFixed(2)}</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-white/60 text-lg mb-4">{product.description}</p>

          {/* Available Colors */}
          {product.availableColors && product.availableColors.length > 0 ? (
            <div className="mb-6">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Available Colors</p>
              <div className="grid grid-cols-3 gap-2">
                {product.availableColors.map((color: string) => (
                  <div
                    key={color}
                    className="h-6 w-6 rounded-full border border-white/20"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Available Sizes */}
          <div>
            <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Available Sizes</p>
            <div className="flex flex-wrap gap-2">
              {product.availableSizes.map((size: string) => (
                <span
                  key={size}
                  className="px-4 py-1 bg-white/5 border border-white/10 rounded hover:border-white/30 transition-colors text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-white/50 text-sm uppercase tracking-wider">Category</p>
            <p className="text-white/60">{product.category}</p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-light tracking-tight mb-6">Similar Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS
            .filter((p: any) => p.brandId === product.brandId && p.id !== productId)
            .slice(0, 8)
            .map((p: any) => {
              const pImg = p.imageUrl.startsWith('/') ? p.imageUrl : `/images/${p.imageUrl}`;
              return (
                <Link key={p.id} href={`/products/${p.id}`} className="premium-card p-4 hover:border-white/30 transition block">
                  <div className="relative w-full h-40 mb-3 rounded overflow-hidden bg-white/5">
                    <Image
                      src={pImg}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm line-clamp-2">{p.name}</h3>
                  <p className="text-white/60 text-xs">{p.brandName}</p>
                  <p className="text-lg font-bold">${p.price}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailClient({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = useParams();
  const productId = Array.isArray(resolvedParams.id) ? resolvedParams.id[0] : resolvedParams.id || '';

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-white mx-auto mb-4" />
          <p className="text-white/60">Loading product...</p>
        </div>
      </div>
    }>
      <ProductDetailContent productId={productId} />
    </Suspense>
  );
}