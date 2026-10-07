import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  ABOUT_FOCUS_AREAS,
  PERSONAL_BRAND,
  SERVICES,
} from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { ProfilePhoto } from './ProfilePhoto';

export const AboutSection: React.FC = () => {
  const architectureLayers = [
    {
      label: 'AI',
      detail: 'Understanding requests, classifying information, and generating contextual responses',
    },
    {
      label: 'Automation',
      detail: 'Reliable n8n workflows and conditional execution logic',
    },
    {
      label: 'APIs',
      detail: 'Connecting communication platforms, databases, and external tools',
    },
    {
      label: 'Business Processes',
      detail: 'Real operational workflows, lead capture, outreach, and human approval checkpoints',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-28 border-b border-[#181B23]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Personal Photo + System Architecture */}
          <ScrollReveal className="lg:col-span-5 space-y-6">
            <ProfilePhoto variant="about-portrait" />

            <div className="bg-[#0D0F14] border border-[#222631] rounded-2xl p-6 sm:p-7">
              <div className="pb-4 mb-4 border-b border-[#1A1D26]">
                <h3 className="text-sm font-semibold text-[#F4F4F6]">
                  System Architecture Formula
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  How isolated tools become complete business workflows
                </p>
              </div>

              <div className="space-y-2.5">
                {architectureLayers.map((item, idx) => (
                  <React.Fragment key={item.label}>
                    <div className="p-3.5 rounded-xl bg-[#11141C] border border-[#1E222D]">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-[#F4F4F6]">
                          {item.label}
                        </span>
                        <span className="text-xs font-mono text-[#71717A] tabular-nums">
                          Layer 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>

                    {idx < architectureLayers.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="text-center text-xs font-mono font-semibold text-[#60A5FA]"
                      >
                        +
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Equals Divider */}
              <div className="my-4 flex items-center gap-3" aria-hidden="true">
                <div className="h-[1px] flex-1 bg-[#2563EB]/40" />
                <span className="text-xs font-mono text-[#60A5FA] tracking-widest">
                  ==================
                </span>
                <div className="h-[1px] flex-1 bg-[#2563EB]/40" />
              </div>

              {/* Output Box */}
              <div className="p-4 rounded-xl bg-[#131929] border border-[#2563EB]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold text-white">
                    Intelligent Systems
                  </span>
                  <span className="text-xs font-mono text-[#93C5FD]">
                    Outcome
                  </span>
                </div>
                <p className="text-xs text-[#D4D4D8] mt-1 leading-relaxed">
                  Complete AI-powered business automation systems that eliminate repetitive manual work and operate reliably.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side: About Content & Core Focus Areas */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-6">
            <p className="text-sm font-medium text-[#60A5FA]">
              About Ali Yawar
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
              Building Practical AI Automation Systems
            </h2>

            <p className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed">
              {PERSONAL_BRAND.primaryPositioning}
            </p>

            <p className="text-base text-[#A1A1AA] leading-relaxed">
              I focus on building practical AI automation systems that connect AI models with real business processes, APIs, communication platforms, databases, and human approval workflows. Rather than building isolated AI demos, I connect your business tools and automate the decisions and repetitive tasks between them.
            </p>

            {/* Focus Areas List */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[#F4F4F6] mb-4">
                Core Areas of Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-[#181B23] pt-4">
                {ABOUT_FOCUS_AREAS.map((area, index) => (
                  <div
                    key={area}
                    className="flex items-baseline gap-3 py-1.5 border-b border-[#14171F]"
                  >
                    <span className="text-xs font-mono text-[#60A5FA] tabular-nums">
                      0{index + 1}.
                    </span>
                    <span className="text-sm font-medium text-[#E4E4E7]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 md:py-28 border-b border-[#181B23]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-[#60A5FA] mb-2">
            Capabilities &amp; Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
            What I Can Automate
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] mt-3 leading-relaxed">
            From repetitive tasks to complete AI-powered business workflows.
          </p>
        </ScrollReveal>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.number} delay={index * 0.05} className="h-full">
              <div className="h-full group bg-[#0D0F14] border border-[#222631] hover:border-[#2563EB]/70 rounded-2xl p-7 flex flex-col justify-between transition-colors duration-200">
                <div>
                  <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-[#181B23]">
                    <span className="text-xs font-mono font-medium text-[#60A5FA] tabular-nums">
                      Service {service.number}
                    </span>
                    <span className="text-xs font-mono text-[#71717A]">
                      AI · Workflow
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#F4F4F6] group-hover:text-white transition-colors">
                    {service.number}. {service.title}
                  </h3>

                  <p className="text-sm text-[#A1A1AA] mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#14171F] flex items-center justify-between text-xs text-[#71717A] group-hover:text-[#A1A1AA] transition-colors">
                  <span>Custom Architecture</span>
                  <a
                    href="#contact"
                    className="font-medium text-[#60A5FA] hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Discuss workflow</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.15} className="mt-12 pt-8 border-t border-[#181B23] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-[#D4D4D8]">
            Need a workflow tailored to your existing communication tools and databases?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] hover:text-white transition-colors whitespace-nowrap group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
          >
            <span>Have a repetitive process? Let&apos;s automate it</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
