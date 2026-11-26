'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, LayoutDashboard, ShoppingBag, Layers, Tag, Shirt, Bell, X } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New product added', desc: 'Zara has added 5 new items to their collection', unread: true },
    { id: 2, title: 'Size recommendation updated', desc: "Your measurements now recommend size M for Levi's 501", unread: true },
    { id: 3, title: 'Weekly digest', desc: '3 new brands added to the catalogue', unread: false },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, unread: false } : n))
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    setUnreadCount(0);
  };

  const clearAll = () => {
    setNotifications([]);
    setUnreadCount(0);
  };

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
          <Link href="/studio" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
            <Shirt size={16} /> Studio
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
        <div className="flex items-center gap-4 relative">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                href="/profile"
                className="text-sm font-medium px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <User size={14} /> Profile
              </Link>
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="text-white/70 hover:text-yellow-400 transition-colors p-1 relative"
                  aria-label="Notifications"
                >
                  <Bell size={18} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
              </div>
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

          {/* Notifications Panel */}
          {showNotifications && (
            <div
              id="notifications-panel"
              className="absolute right-0 top-12 w-80 bg-black border border-white/10 rounded-lg shadow-2xl z-50 p-5 text-sm"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <h3 className="text-base font-light">Notifications</h3>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="Close notifications"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Unread count badge */}
              <div className="flex items-center gap-2 mb-4 text-xs">
                <span className="text-white/60">You have</span>
                <span className="text-yellow-400 font-bold">{unreadCount}</span>
                <span className="text-white/60">unread notifications</span>
              </div>

              {/* Notifications list */}
              <div className="space-y-2.5 max-h-72 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="text-white/40 text-center py-6 text-xs">No notifications</p>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                      onClick={() => markAsRead(n.id)}
                    >
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.unread ? 'bg-yellow-400' : 'bg-gray-600'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white text-xs">{n.title}</p>
                        <p className="text-white/40 text-[11px] mt-0.5">{n.desc}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Action buttons */}
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10 text-xs">
                <button
                  onClick={markAllAsRead}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Mark all as read
                </button>
                <button
                  onClick={clearAll}
                  className="text-white/50 hover:text-red-400 transition-colors"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
