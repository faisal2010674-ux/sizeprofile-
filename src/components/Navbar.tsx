'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, LayoutDashboard, ShoppingBag, Layers, Tag } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tighter text-white">SIZEPROFILE</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/products" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
            <ShoppingBag size={16} /> Products
          </Link>
          <Link href="/brands" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
            <Layers size={16} /> Brands
          </Link>
          <Link href="/pricing" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
            <Tag size={16} /> Pricing
          </Link>
          {user && (
            <Link href="/dashboard" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
              <LayoutDashboard size={16} /> Dashboard
            </Link>
          )}
        </div>

        {/* User CTA */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                href="/profile"
                className="text-sm font-medium px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <User size={14} /> Profile
              </Link>
              <button
                onClick={logout}
                className="text-white/50 hover:text-white transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/auth/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Log In
              </Link>
              <Link
                href="/auth/signup"
                className="text-sm font-medium px-4 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
