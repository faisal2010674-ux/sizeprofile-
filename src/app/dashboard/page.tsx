'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { LayoutDashboard, User, Scale, ShoppingBag, Settings, LogOut, Bell, History } from 'lucide-react';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-light mb-4">Please sign in to view your dashboard</h1>
          <Link href="/auth/login" className="text-white underline">Sign In</Link>
        </motion.div>
      </div>
    );
  }

  const navItems = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/profile', label: 'Measurements', icon: User },
    { href: '/products', label: 'Browse Products', icon: ShoppingBag },
    { href: '/brands', label: 'Brand Size Charts', icon: Scale },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  const recentActivity = [
    { action: 'Viewed size for', item: 'Zara Essential Cotton Tee', time: '2 hours ago', size: 'M' },
    { action: 'Saved measurement profile', item: '', time: '1 day ago', size: null },
    { action: 'Compared sizes for', item: 'Nike Dri-FIT Training Shirt', time: '3 days ago', size: 'L' },
    { action: 'Added brand to favorites', item: 'Uniqlo', time: '1 week ago', size: null },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="premium-card p-6 space-y-4 sticky top-24">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-light">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-white/50">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-1">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={logout}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-colors w-full"
                >
                  <LogOut size={20} />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-light tracking-tight">Dashboard</h1>
                <p className="text-white/50 mt-1">Welcome back, {user.name?.split(' ')[0]}! Here's your size profile overview.</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full" />
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Brands Matched', value: '12', icon: Scale, change: '+3 this month' },
                { label: 'Products Viewed', value: '47', icon: ShoppingBag, change: '+12 this week' },
                { label: 'Size Confidence', value: '94%', icon: Scale, change: 'Avg across brands' },
                { label: 'Money Saved', value: '$234', icon: ShoppingBag, change: 'Est. on returns' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="premium-card p-6"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-white/50 uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-3xl font-light">{stat.value}</p>
                      <p className="text-xs text-white/40 mt-1">{stat.change}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                      <stat.icon size={24} className="text-white/70" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="premium-card p-6">
              <h2 className="text-xl font-light mb-6">Quick Actions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { href: '/profile', label: 'Update Measurements', icon: User, desc: 'Edit your body measurements' },
                  { href: '/products', label: 'Browse Products', icon: ShoppingBag, desc: 'Find clothes that fit' },
                  { href: '/brands', label: 'View Size Charts', icon: Scale, desc: 'Compare brand sizing' },
                  { href: '/settings', label: 'Settings', icon: Settings, desc: 'Manage preferences' },
                ].map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="premium-card p-5 hover:border-white/20 transition-all group"
                  >
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors">
                      <item.icon size={22} />
                    </div>
                    <h3 className="font-medium mb-1">{item.label}</h3>
                    <p className="text-xs text-white/50">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="premium-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-light">Recent Activity</h2>
                <Link href="/history" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1">
                  <History size={14} /> View All
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                        <ShoppingBag size={18} className="text-white/70" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.action} <span className="text-white/70">{activity.item}</span></p>
                        <p className="text-xs text-white/40">{activity.time}</p>
                      </div>
                    </div>
                    {activity.size && (
                      <span className="px-3 py-1 bg-white/10 text-sm font-medium rounded-full text-white">{activity.size}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Profile Completion */}
            {!user.measurements && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="premium-card p-6 border border-yellow-500/30 bg-yellow-500/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                      <Scale size={24} className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Complete Your Profile</h3>
                      <p className="text-sm text-white/60">Add your measurements to unlock personalized size recommendations across all brands.</p>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    className="px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Add Measurements
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.main>
        </div>
      </div>
    </div>
  );
}