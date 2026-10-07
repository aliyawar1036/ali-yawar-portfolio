import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  SOCIAL_LINKS,
  PERSONAL_BRAND,
} from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const ContactAndFooter: React.FC = () => {
  const [selectedSocialPlaceholder, setSelectedSocialPlaceholder] = useState<string | null>(null);

  return (
    <>
      {/* CONTACT SECTION (Direct Channels Only — No Form or Firebase Verification) */}
      <section
        id="contact"
        className="py-24 md:py-28 border-b border-[#181B23]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <ScrollReveal className="space-y-6">
              <p className="text-sm font-medium text-[#60A5FA]">
                Start a Project
              </p>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
                What Could You Automate?
              </h2>

              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
                Tell me about a repetitive task, manual process, or business workflow you want to eliminate. Reach out directly via Email, WhatsApp, or GitHub to explore how AI and automation can improve it.
              </p>

              {/* Direct Contact / Social Links */}
              <div className="pt-6 border-t border-[#181B23] space-y-4">
                <h3 className="text-sm font-semibold text-[#F4F4F6]">
                  Direct Channels &amp; Profiles
                </h3>
                <p className="text-xs text-[#71717A]">
                  Connect directly via Email, WhatsApp, or GitHub:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SOCIAL_LINKS.map((item) => {
                    const isPlaceholder = item.placeholderNote === 'Add your link';
                    if (isPlaceholder) {
                      return (
                        <button
                          key={item.platform}
                          type="button"
                          onClick={() =>
                            setSelectedSocialPlaceholder(
                              `${item.platform}: Placeholder ready — replace with your actual ${item.platform} URL in src/data/portfolioData.ts.`
                            )
                          }
                          className="p-5 rounded-xl bg-[#0D0F14] border border-[#222631] hover:border-[#2563EB]/60 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[#F4F4F6]">
                              {item.label}
                            </span>
                            <span className="text-xs font-mono text-[#60A5FA]">
                              →
                            </span>
                          </div>
                          <span className="block text-xs font-mono text-[#71717A] mt-1.5 truncate">
                            {item.placeholderNote}
                          </span>
                        </button>
                      );
                    }

                    return (
                      <a
                        key={item.platform}
                        href={item.href}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        className="p-5 rounded-xl bg-[#0D0F14] border border-[#222631] hover:border-[#2563EB]/60 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] block"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#F4F4F6]">
                            {item.label}
                          </span>
                          <span className="text-xs font-mono text-[#60A5FA]">
                            ↗
                          </span>
                        </div>
                        <span className="block text-xs font-mono text-[#A1A1AA] mt-1.5 truncate">
                          {item.placeholderNote}
                        </span>
                      </a>
                    );
                  })}
                </div>

                {selectedSocialPlaceholder && (
                  <div className="p-3.5 rounded-xl bg-[#111520] border border-[#2563EB]/40 text-xs text-[#D4D4D8] flex items-center justify-between gap-2">
                    <span>{selectedSocialPlaceholder}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedSocialPlaceholder(null)}
                      className="text-xs font-mono text-[#60A5FA] hover:text-white shrink-0"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 md:py-28 border-b border-[#181B23] bg-[#090B10]">
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-xs font-mono text-[#60A5FA]">
            {PERSONAL_BRAND.shortPositioning}
          </p>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F4F4F6] tracking-tight balance-text">
            Your Next Automation Could Start Here.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Have a repetitive workflow that takes too much time? Let&apos;s turn it into an intelligent automated system.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923046144227"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F4F4F6] bg-[#101217] hover:bg-[#171A22] border border-[#222631] rounded-xl transition-colors whitespace-nowrap"
            >
              <span>Explore My Work</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* QUIET FOOTER */}
      <footer className="py-16 bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#181B23]">
            {/* Brand Identity */}
            <div className="md:col-span-5 space-y-2.5">
              <a
                href="#home"
                className="font-display text-lg font-bold tracking-tight text-[#F4F4F6]"
              >
                ALI YAWAR
              </a>
              <p className="text-sm font-medium text-[#D4D4D8]">
                {PERSONAL_BRAND.title}
              </p>
              <p className="text-xs text-[#A1A1AA]">
                Building practical AI-powered automation systems.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-3 space-y-2.5">
              <h3 className="text-xs font-mono text-[#71717A]">Navigation</h3>
              <ul className="space-y-2 text-sm text-[#A1A1AA]">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Contact Links */}
            <div className="md:col-span-4 space-y-2.5">
              <h3 className="text-xs font-mono text-[#71717A]">
                Social &amp; Direct Contact
              </h3>
              <ul className="space-y-2 text-sm text-[#A1A1AA]">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.platform} className="flex items-center justify-between gap-3">
                    <a
                      href={social.href}
                      target={social.isExternal ? '_blank' : undefined}
                      rel={social.isExternal ? 'noopener noreferrer' : undefined}
                      className="hover:text-white transition-colors shrink-0"
                    >
                      {social.label}
                    </a>
                    <a
                      href={social.href}
                      target={social.isExternal ? '_blank' : undefined}
                      rel={social.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-xs font-mono text-[#71717A] hover:text-[#60A5FA] transition-colors truncate"
                    >
                      {social.placeholderNote}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
            <p>© 2026 Ali Yawar. All rights reserved.</p>
            <p>AI Automation Engineer &amp; AI Agent Developer</p>
          </div>
        </div>
      </footer>
    </>
  );
};
