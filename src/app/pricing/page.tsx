'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Check, X, Star, Shield, Zap, Users, Lock, HelpCircle, ArrowRight, Crown } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaAction: 'signup' | 'coming-soon';
  popular?: boolean;
}

const PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    period: 'Forever',
    description: 'Perfect for trying out size recommendations',
    features: [
      'Basic size recommendations across 50+ brands',
      'Up to 3 saved measurement profiles',
      'Basic brand size charts access',
      'Measurement history (last 30 days)',
      'CM/IN unit conversion',
      'Fit preference (slim/regular/oversized)',
    ],
    ctaText: 'Get Started Free',
    ctaAction: 'signup',
  },
  {
    id: 'plus',
    name: 'Plus',
    price: 299,
    period: 'Month',
    description: 'For regular shoppers who want more',
    features: [
      'Everything in Starter',
      'Unlimited measurement profiles',
      'Advanced size recommendations with confidence scoring',
      'Side-by-side brand comparisons',
      'Full measurement history',
      'Personalized fit insights',
      'Priority size chart updates',
      'Export measurements to CSV',
    ],
    highlighted: true,
    popular: true,
    ctaText: 'Upgrade to Plus',
    ctaAction: 'coming-soon',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 649,
    period: 'Month',
    description: 'For power users and fashion professionals',
    features: [
      'Everything in Plus',
      'Advanced fit analytics & trends',
      'Detailed size comparison reports',
      'Multiple saved profiles for family/team',
      'Priority support (planned)',
      'Early access to new brands',
      'Custom brand requests (planned)',
      'API access for developers (planned)',
    ],
    ctaText: 'Upgrade to Pro',
    ctaAction: 'coming-soon',
  },
];

const FEATURE_COMPARISON = [
  { feature: 'Basic size recommendations', starter: true, plus: true, pro: true },
  { feature: 'Saved measurement profiles', starter: '3', plus: 'Unlimited', pro: 'Unlimited' },
  { feature: 'Brand size charts access', starter: 'Basic', plus: 'Full', pro: 'Full + Early access' },
  { feature: 'Measurement history', starter: '30 days', plus: 'Full', pro: 'Full' },
  { feature: 'CM/IN unit conversion', starter: true, plus: true, pro: true },
  { feature: 'Fit preference settings', starter: true, plus: true, pro: true },
  { feature: 'Advanced confidence scoring', starter: false, plus: true, pro: true },
  { feature: 'Side-by-side brand comparison', starter: false, plus: true, pro: true },
  { feature: 'Personalized fit insights', starter: false, plus: true, pro: true },
  { feature: 'Export measurements (CSV)', starter: false, plus: true, pro: true },
  { feature: 'Advanced fit analytics', starter: false, plus: false, pro: true },
  { feature: 'Detailed comparison reports', starter: false, plus: false, pro: true },
  { feature: 'Multiple profiles (family/team)', starter: false, plus: false, pro: true },
  { feature: 'Priority support', starter: false, plus: false, pro: 'Planned' },
  { feature: 'Custom brand requests', starter: false, plus: false, pro: 'Planned' },
  { feature: 'Developer API access', starter: false, plus: false, pro: 'Planned' },
];

const FAQ = [
  {
    question: 'Is the Starter plan really free forever?',
    answer: 'Yes! The Starter plan is completely free with no time limit. You get basic size recommendations, up to 3 saved profiles, and access to brand size charts. No credit card required.',
  },
  {
    question: 'Are Plus and Pro subscriptions active now?',
    answer: 'No. This is a demonstration project for a college presentation. The Plus (₹299/mo) and Pro (₹649/mo) plans show proposed pricing only. Clicking their buttons will show a "Coming Soon" message. No payment is processed.',
  },
  {
    question: 'What happens to my data if I don\'t upgrade?',
    answer: 'Your measurements and profiles stay in your browser\'s localStorage. They\'re never sent to any server. You own your data completely — you can export it anytime from the profile page.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Since paid plans aren\'t implemented yet, you\'d simply continue using the free Starter features. When subscriptions launch, you\'ll be able to upgrade or downgrade at any time.',
  },
  {
    question: 'Is my measurement data private?',
    answer: 'Absolutely. All data stays locally in your browser. We don\'t track, sell, or share your measurements. See our Privacy Policy for details.',
  },
  {
    question: 'How accurate are the size recommendations?',
    answer: 'Our engine calculates recommendations using official brand size charts. Confidence scores reflect how closely your measurements match each size. Always check the brand\'s official guide before purchasing.',
  },
  {
    question: 'What payment methods will be accepted?',
    answer: 'When subscriptions launch, we plan to support UPI, cards, and net banking via Indian payment gateways. No payment info is collected today.',
  },
  {
    question: 'Can I use SIZEPROFILE for my family?',
    answer: 'The Pro plan (planned) will support multiple saved profiles for family or team use. Currently, Starter allows up to 3 profiles on one device.',
  },
];

export default function PricingPage() {
  const [showComingSoon, setShowComingSoon] = useState<string | null>(null);

  const handleCTA = (planId: string, action: 'signup' | 'coming-soon') => {
    if (action === 'signup') {
      // Navigate to signup page
      window.location.href = '/auth/signup';
    } else {
      setShowComingSoon(planId);
      setTimeout(() => setShowComingSoon(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase">
              <Star size={14} className="text-yellow-400" />
              Proposed Pricing — Demo Project
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-6"
          >
            Simple, Transparent<br />
            <span className="font-bold">Pricing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Choose the plan that fits your shopping style. Starter is free forever — no trials, no credit card.
            <br /><br />
            <span className="text-yellow-400 font-medium">Note:</span> Plus and Pro plans are demonstration prices for this project presentation. They are not active subscriptions.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((plan, index) => (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative premium-card p-8 flex flex-col ${
                  plan.highlighted ? 'border-yellow-400/50 shadow-[0_0_40px_rgba(255,215,0,0.1)]' : ''
                } group`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider rounded-full">
                      <Star size={10} /> Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                  <p className="text-white/50 text-sm mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-light tracking-tight text-white">
                      ₹{plan.price}
                    </span>
                    {plan.price > 0 && (
                      <>
                        <span className="text-white/40 text-sm">/month</span>
                        <span className="text-white/30 text-xs ml-2">(₹{plan.price * 12}/year)</span>
                      </>
                    )}
                    {plan.price === 0 && (
                      <span className="text-white/40 text-sm ml-1">{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        feature.startsWith('Everything in') ? 'bg-white/10' : 'bg-green-500/20'
                      }`}>
                        {feature.startsWith('Everything in') ? (
                          <ArrowRight size={12} className="text-white/50" />
                        ) : (
                          <Check size={12} className="text-green-400" />
                        )}
                      </div>
                      <span className={`text-white/${feature.startsWith('Everything in') ? '50' : '80'}`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleCTA(plan.id, plan.ctaAction)}
                  disabled={showComingSoon !== null}
                  className={`w-full py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {showComingSoon === plan.id ? (
                    <>
                      <span className="animate-pulse">Coming Soon...</span>
                    </>
                  ) : plan.ctaAction === 'signup' ? (
                    <>
                      {plan.ctaText}
                      <ArrowRight size={16} />
                    </>
                  ) : (
                    <>
                      {plan.ctaText}
                      <Crown size={16} />
                    </>
                  )}
                </button>

                {/* Coming Soon Toast */}
                {showComingSoon === plan.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="fixed bottom-8 right-8 z-50 bg-yellow-500/90 text-black px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 max-w-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Crown size={20} />
                      <span className="font-medium">Demo Project</span>
                    </div>
                    <p className="text-sm">
                      {plan.name} (₹{plan.price}/mo) is a proposed price for this presentation.
                      No payment will be processed.
                    </p>
                  </motion.div>
                )}
              </motion.article>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center text-xs text-white/40 max-w-2xl mx-auto"
          >
            <Shield size={14} className="inline-block mr-1" />
            All plans include: Local-only data storage · No tracking · No ads · Export anytime ·
            <Link href="/auth/signup" className="underline hover:text-white">Create free profile</Link>
          </motion.p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium">Feature Comparison</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">Compare All Features</h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-medium text-white/50">Feature</th>
                  {PLANS.map(plan => (
                    <th key={plan.id} className={`text-center py-4 px-4 font-medium ${
                      plan.highlighted ? 'text-yellow-400' : 'text-white'
                    }`}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_COMPARISON.map((row, rowIndex) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: rowIndex * 0.02 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-white/70 font-medium">{row.feature}</td>
                    {PLANS.map(plan => {
                      const value = row[plan.id as keyof typeof row] as boolean | string;
                      return (
                        <td key={plan.id} className="py-4 px-4 text-center">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="w-5 h-5 mx-auto text-green-400" />
                            ) : (
                              <X className="w-5 h-5 mx-auto text-white/20" />
                            )
                          ) : (
                            <span className={plan.highlighted ? 'text-yellow-400 font-medium' : 'text-white/60'}>
                              {value}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium">FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="premium-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle size={20} className="text-white/50 group-hover:text-yellow-400 transition-colors shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-2">{item.question}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/10">
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
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Ready to Find Your Perfect Fit?</h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
                Start with the free Starter plan. No credit card. No pressure. Just better size matching.
              </p>
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Create Free Profile
                <ArrowRight size={18} />
              </Link>
              <p className="mt-6 text-xs text-white/40">Free forever · Cancel anytime · Your data stays yours</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/30 text-sm max-w-2xl mx-auto leading-relaxed">
            SIZEPROFILE is a student project for demonstration purposes. Pricing shown is proposed and not active.
            No payment processing is implemented. All data remains in your browser's localStorage.
          </p>
        </div>
      </section>
    </div>
  );
}