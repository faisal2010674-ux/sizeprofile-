'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scale, Sparkles, ArrowRight, Check, Shield, Zap, Users } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Scale,
      title: 'Universal Size Profile',
      description: 'Enter your measurements once. Get accurate size recommendations across 50+ fashion brands instantly.'
    },
    {
      icon: Sparkles,
      title: 'Smart Fit Intelligence',
      description: 'AI-powered matching engine considers your fit preference — slim, regular, or oversized — for personalized results.'
    },
    {
      icon: Zap,
      title: 'Real-Time Brand Sync',
      description: 'Always up-to-date with latest brand size charts. We monitor changes so you don\'t have to.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your measurements stay on your device. No tracking, no selling data, no account required to try.'
    },
    {
      icon: Users,
      title: 'Community Verified',
      description: 'Real user feedback refines recommendations. See how others with similar builds rated the fit.'
    },
    {
      icon: Check,
      title: 'One-Click Shopping',
      description: 'Apply your size profile to partner stores with browser extensions. Never guess your size again.'
    },
  ];

  const brands = [
    { name: 'ZARA', tagline: 'European Slim Fit' },
    { name: 'H&M', tagline: 'Relaxed Cuts' },
    { name: 'UNIQLO', tagline: 'Consistent Comfort' },
    { name: 'NIKE', tagline: 'Athletic Performance' },
    { name: 'LEVI\'S', tagline: 'Iconic Denim' },
    { name: 'MADEWELL', tagline: 'Effortless Style' },
    { name: 'EVERLANE', tagline: 'Radical Transparency' },
    { name: 'ALLSAINTS', tagline: 'Edgy Tailoring' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Now in Public Beta
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-8"
          >
            One Profile.<br />
            <span className="font-bold">Every Brand.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Enter your body measurements once. Instantly find your perfect size across 50+ fashion brands.
            No more guessing. No more returns. Just clothes that fit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/auth/signup"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full sm:w-auto"
            >
              Get My Size Profile
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/brands"
              className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-all w-full sm:w-auto"
            >
              See Supported Brands
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40 font-mono text-sm"
          >
            {brands.map((brand, i) => (
              <motion.span
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="flex items-center gap-2 hover:text-white/70 transition-colors cursor-default"
              >
                <span className="font-bold tracking-tighter">{brand.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-white/20 hidden md:inline">{brand.tagline}</span>
                {i < brands.length - 1 && <span className="text-white/10 mx-2">·</span>}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-28 lg:py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium">How It Works</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight mt-4 mb-4">Three Steps to Perfect Fit</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">No complex quizzes. No waiting. Just your measurements and our engine.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                description: 'Enter 6 key measurements in under 2 minutes. Choose your fit preference — slim, regular, or oversized. Works in cm or inches.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )
              },
              {
                step: '02',
                title: 'Browse & Match',
                description: 'Search any product or brand. Our engine instantly compares your profile against official size charts and calculates match confidence.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                )
              },
              {
                step: '03',
                title: 'Shop with Confidence',
                description: 'See your recommended size with a confidence score and fit details. Know exactly how it\'ll fit before you buy.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-3xl font-light text-white/10 font-mono mb-4 block">{item.step}</span>
                <div className="bg-white/5 rounded-lg p-3 w-fit mb-6 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 lg:py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium">Features</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">Built for How You Shop</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="premium-card p-6 group hover:border-white/20"
              >
                <div className="bg-white/5 rounded-lg p-3 w-fit mb-4 group-hover:bg-white/10 transition-colors">
                  <feature.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-28 lg:py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Brands Supported' },
              { value: '100K+', label: 'Profiles Created' },
              { value: '94%', label: 'Match Accuracy' },
              { value: '<2 min', label: 'Setup Time' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-2">{stat.value}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-32 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-card p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Ready to Never Guess Your Size Again?</h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
                Join thousands of shoppers who found their perfect fit. Free forever for personal use.
              </p>
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Create Free Profile
                <ArrowRight size={18} />
              </Link>
              <p className="mt-6 text-xs text-white/40">No credit card required · Delete anytime · Your data stays yours</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/30 text-sm max-w-2xl mx-auto leading-relaxed">
            SIZEPROFILE is not affiliated with any brand listed. Size charts are sourced from publicly available brand guidelines
            and community contributions. Always refer to official brand size guides for final purchase decisions.
          </p>
        </div>
      </section>
    </div>
  );
}