import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_BRAND } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';

interface HeroNode {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
}

const HERO_WORKFLOW_NODES: HeroNode[] = [
  {
    id: 'trigger',
    title: 'Trigger',
    subtitle: 'Webhook · Gmail · WhatsApp · Telegram',
    detail: 'Detects an incoming business event, customer inquiry, or scheduled interval.',
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Understanding · Extraction · Context',
    detail: 'Analyzes unstructured text, classifies intent, and extracts structured parameters.',
  },
  {
    id: 'decision',
    title: 'Decision',
    subtitle: 'Routing Logic · Human Approval Gate',
    detail: 'Evaluates rules, checks qualification criteria, or requests human confirmation.',
  },
  {
    id: 'action',
    title: 'Action',
    subtitle: 'API Execution · Outreach · Booking',
    detail: 'Connects with external tools to send replies, schedule bookings, or publish content.',
  },
  {
    id: 'database',
    title: 'Database',
    subtitle: 'Google Sheets · Structured Records',
    detail: 'Logs verified outcomes, lead data, and operational state automatically.',
  },
];

export const HeroSection: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [hoveredNodeIndex, setHoveredNodeIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredNodeIndex !== null) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % HERO_WORKFLOW_NODES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [hoveredNodeIndex]);

  const currentFocusIndex = hoveredNodeIndex !== null ? hoveredNodeIndex : activeNodeIndex;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center border-b border-[#181B23]"
    >
      {/* Subtle architectural background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] bg-[#2563EB]/10 blur-[130px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Circular Photo + Introduction + Hero Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* [ CIRCULAR PHOTO ]  Ali Yawar / AI Automation Engineer & AI Agent Developer */}
            <ProfilePhoto variant="hero-circle" />

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F6] tracking-tight leading-[1.08] balance-text">
              {PERSONAL_BRAND.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl">
              {PERSONAL_BRAND.heroSubheadline}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080A]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F4F4F6] bg-[#101217] hover:bg-[#171A22] border border-[#222631] hover:border-[#323846] rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Let&apos;s Automate Your Business</span>
              </a>
            </div>

            {/* Technology Line: Clean unboxed text with typographic separators */}
            <div className="pt-6 border-t border-[#181B23]">
              <p className="text-xs text-[#71717A] mb-2">Core Automation Stack</p>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-mono text-[#A1A1AA]">
                {PERSONAL_BRAND.heroTechLine.map((tech, index) => (
                  <React.Fragment key={tech}>
                    <span className="text-[#D4D4D8]">{tech}</span>
                    {index < PERSONAL_BRAND.heroTechLine.length - 1 && (
                      <span aria-hidden="true" className="text-[#3F3F46]">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors group"
              >
                <span>Explore my work</span>
                <ArrowDown
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Subtle Animated Workflow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div
              className="bg-[#0D0F14] border border-[#222631] rounded-2xl p-6 sm:p-7 relative"
              aria-label="Interactive AI Automation Workflow Architecture Diagram"
            >
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#1A1D26]">
                <div>
                  <h2 className="text-sm font-semibold text-[#F4F4F6]">
                    Automated System Pipeline
                  </h2>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    Hover any node to inspect execution logic
                  </p>
                </div>
                <span className="text-xs font-mono text-[#60A5FA]">n8n · AI</span>
              </div>

              {/* Vertical Node Flow */}
              <div className="space-y-2.5">
                {HERO_WORKFLOW_NODES.map((node, index) => {
                  const isActive = currentFocusIndex === index;
                  return (
                    <React.Fragment key={node.id}>
                      <motion.button
                        type="button"
                        onMouseEnter={() => setHoveredNodeIndex(index)}
                        onMouseLeave={() => setHoveredNodeIndex(null)}
                        onFocus={() => setHoveredNodeIndex(index)}
                        onBlur={() => setHoveredNodeIndex(null)}
                        onClick={() => setActiveNodeIndex(index)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                          isActive
                            ? 'bg-[#131722] border-[#2563EB]'
                            : 'bg-[#101217] border-[#1E222D] hover:border-[#2E3444]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <span
                              className={`text-xs font-mono tabular-nums ${
                                isActive ? 'text-[#60A5FA]' : 'text-[#71717A]'
                              }`}
                            >
                              0{index + 1}
                            </span>
                            <span className="text-sm font-semibold text-[#F4F4F6] truncate">
                              {node.title}
                            </span>
                          </div>
                          <span className="text-xs text-[#A1A1AA] truncate">
                            {node.subtitle}
                          </span>
                        </div>
                      </motion.button>

                      {index < HERO_WORKFLOW_NODES.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="flex justify-center py-0.5 text-xs font-mono text-[#52525B]"
                        >
                          ↓
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Active Node Explanation Footer */}
              <div className="mt-5 pt-4 border-t border-[#1A1D26] min-h-[3.5rem] flex flex-col justify-center">
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  <span className="font-semibold text-[#F4F4F6]">
                    {HERO_WORKFLOW_NODES[currentFocusIndex].title}:{' '}
                  </span>
                  {HERO_WORKFLOW_NODES[currentFocusIndex].detail}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
