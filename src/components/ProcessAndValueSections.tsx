import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  BUILD_PROCESS_STEPS,
  TECH_STACK_ITEMS,
  WHY_WORK_WITH_ME,
  MANUAL_PROBLEMS,
  CLIENT_COLLABORATION_STEPS,
} from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const ProcessAndValueSections: React.FC = () => {
  return (
    <>
      {/* HOW I BUILD AUTOMATIONS (Horizontal timeline on desktop, vertical on mobile) */}
      <section
        id="process"
        className="py-24 md:py-28 border-b border-[#181B23]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-2xl mb-14">
            <p className="text-sm font-medium text-[#60A5FA] mb-2">
              Engineering Methodology
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
              From Problem to Automation
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] mt-3 leading-relaxed">
              Every system is built systematically—from understanding your existing manual bottlenecks to deploying a reliable automated workflow.
            </p>
          </ScrollReveal>

          {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
          <div className="relative">
            {/* Horizontal connecting line on large screens */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-6 left-0 right-0 h-[1px] bg-[#222631]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-5 relative z-10">
              {BUILD_PROCESS_STEPS.map((step, index) => (
                <ScrollReveal
                  key={step.number}
                  delay={index * 0.05}
                  className="relative flex flex-col justify-start pl-6 lg:pl-0 border-l border-[#222631] lg:border-l-0"
                >
                  {/* Step Number Node */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0D0F14] border border-[#2563EB]/60 text-xs font-mono font-bold text-[#60A5FA] tabular-nums mb-4">
                    {step.number}
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#F4F4F6]">
                    {step.number} — {step.title}
                  </h3>

                  <p className="text-sm text-[#A1A1AA] mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION */}
      <section className="py-24 md:py-28 border-b border-[#181B23]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#60A5FA] mb-2">
              Core Ecosystem
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
              Tools I Build With
            </h2>
            <p className="text-base text-[#A1A1AA] mt-3 leading-relaxed">
              Practical technologies, communication platforms, and APIs used across my automation systems.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_STACK_ITEMS.map((item, idx) => (
              <ScrollReveal key={item.name} delay={(idx % 3) * 0.04} className="h-full">
                <div className="h-full p-5 rounded-xl bg-[#0D0F14] border border-[#222631] hover:border-[#323846] transition-colors flex flex-col justify-between">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-bold text-[#F4F4F6]">
                      {item.name}
                    </h3>
                    <span className="text-xs font-mono text-[#52525B] tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] mt-1.5 leading-relaxed">
                    {item.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME SECTION */}
      <section className="py-24 md:py-28 border-b border-[#181B23]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-2xl mb-14">
            <p className="text-sm font-medium text-[#60A5FA] mb-2">
              Why Work With Me
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
              Automation Built Around Your Business
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_WORK_WITH_ME.map((item, idx) => (
              <ScrollReveal key={item.number} delay={idx * 0.06} className="h-full">
                <div className="h-full p-7 rounded-2xl bg-[#0D0F14] border border-[#222631] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#60A5FA] tabular-nums">
                      Principle {item.number}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#F4F4F6] mt-2">
                      {item.number} — {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#A1A1AA] mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT PROBLEM SECTION: "Is Your Business Still Doing This Manually?" */}
      <section className="py-24 md:py-28 border-b border-[#181B23] bg-[#090B0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-5 space-y-5">
              <p className="text-sm font-medium text-[#60A5FA]">
                Operational Bottlenecks
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
                Is Your Business Still Doing This Manually?
              </h2>
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                Repetitive tasks drain time and attention from high-value work. When your tools don&apos;t talk to each other, your team becomes the bridge.
              </p>

              <div className="pt-2 space-y-4">
                <p className="text-base font-semibold text-[#F4F4F6]">
                  These are the types of workflows I can automate.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <span>Let&apos;s Automate It</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MANUAL_PROBLEMS.map((problem, index) => (
                  <ScrollReveal key={problem} delay={(index % 2) * 0.05}>
                    <div className="p-5 rounded-xl bg-[#0D0F14] border border-[#222631] flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-[#E4E4E7]">
                        {problem}
                      </span>
                      <span className="text-xs font-mono text-[#60A5FA] shrink-0 tabular-nums">
                        0{index + 1}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT PROCESS: "How We'll Work Together" */}
      <section className="py-24 md:py-28 border-b border-[#181B23]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="max-w-2xl mb-14">
            <p className="text-sm font-medium text-[#60A5FA] mb-2">
              Client Collaboration
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
              How We&apos;ll Work Together
            </h2>
            <p className="text-base text-[#A1A1AA] mt-3 leading-relaxed">
              A straightforward, client-friendly process from initial conversation to a working automation system.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {CLIENT_COLLABORATION_STEPS.map((item, idx) => (
              <ScrollReveal key={item.step} delay={idx * 0.05} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-[#0D0F14] border border-[#222631] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#60A5FA]">
                      {item.step}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#F4F4F6] mt-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
