import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  PROJECT_TYPE_OPTIONS,
  SOCIAL_LINKS,
  PERSONAL_BRAND,
} from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface FormDataState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export const ContactAndFooter: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    company: '',
    projectType: PROJECT_TYPE_OPTIONS[0],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedSocialPlaceholder, setSelectedSocialPlaceholder] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe the workflow or process you want to automate.';
    } else if (formData.message.trim().length < 12) {
      newErrors.message = 'Please provide a few more details (at least 12 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    // Frontend structure ready to connect to a real email/API endpoint later
    setSubmitStatus('success');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: PROJECT_TYPE_OPTIONS[0],
      message: '',
    });
    setErrors({});
    setSubmitStatus('idle');
  };

  return (
    <>
      {/* CONTACT / LEAD CAPTURE SECTION */}
      <section
        id="contact"
        className="py-24 md:py-28 border-b border-[#181B23]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Positioning & Contact Placeholders */}
            <ScrollReveal className="lg:col-span-5 space-y-6">
              <p className="text-sm font-medium text-[#60A5FA]">
                Start a Project
              </p>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
                What Could You Automate?
              </h2>

              <p className="text-base text-[#A1A1AA] leading-relaxed">
                Tell me about a repetitive task, manual process, or business workflow you want to eliminate. Let&apos;s explore how AI and automation can improve it.
              </p>

              {/* Direct Contact / Social Links */}
              <div className="pt-6 border-t border-[#181B23] space-y-4">
                <h3 className="text-sm font-semibold text-[#F4F4F6]">
                  Direct Channels &amp; Profiles
                </h3>
                <p className="text-xs text-[#71717A]">
                  Reach out directly via Email, WhatsApp, or GitHub:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                          className="p-4 rounded-xl bg-[#0D0F14] border border-[#222631] hover:border-[#2563EB]/60 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[#F4F4F6]">
                              {item.label}
                            </span>
                            <span className="text-xs font-mono text-[#60A5FA]">
                              →
                            </span>
                          </div>
                          <span className="block text-xs font-mono text-[#71717A] mt-1 truncate">
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
                        className="p-4 rounded-xl bg-[#0D0F14] border border-[#222631] hover:border-[#2563EB]/60 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] block"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#F4F4F6]">
                            {item.label}
                          </span>
                          <span className="text-xs font-mono text-[#60A5FA]">
                            ↗
                          </span>
                        </div>
                        <span className="block text-xs font-mono text-[#A1A1AA] mt-1 truncate">
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

            {/* Right Column: Validated Lead Capture Form */}
            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <div className="bg-[#0D0F14] border border-[#222631] rounded-2xl p-6 sm:p-8">
                {submitStatus === 'success' ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#F4F4F6]">
                      Inquiry Ready
                    </h3>
                    <p className="text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#F4F4F6] font-medium">{formData.name}</span>. Your automation inquiry regarding{' '}
                      <span className="text-[#60A5FA]">{formData.projectType}</span> has been validated and captured on the frontend.
                    </p>
                    <p className="text-xs font-mono text-[#71717A] max-w-md mx-auto">
                      (Frontend form handler ready to connect to your preferred webhook, n8n workflow, or email API endpoint.)
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {submitStatus === 'error' && Object.keys(errors).length > 0 && (
                      <div
                        role="alert"
                        className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/40 flex items-start gap-3 text-xs text-rose-200"
                      >
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <span className="font-semibold block">
                            Please check the highlighted form fields:
                          </span>
                          <span className="text-rose-300">
                            Complete all required fields with valid information to continue.
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-medium text-[#D4D4D8] mb-2"
                        >
                          Name <span className="text-[#60A5FA]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 text-sm bg-[#090B0F] border rounded-xl text-[#F4F4F6] placeholder-[#52525B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors ${
                            errors.name ? 'border-rose-500' : 'border-[#222631]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-medium text-[#D4D4D8] mb-2"
                        >
                          Email <span className="text-[#60A5FA]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="you@company.com"
                          className={`w-full px-4 py-3 text-sm bg-[#090B0F] border rounded-xl text-[#F4F4F6] placeholder-[#52525B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors ${
                            errors.email ? 'border-rose-500' : 'border-[#222631]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company / Business Field */}
                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-xs font-medium text-[#D4D4D8] mb-2"
                        >
                          Company / Business
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Your company or business"
                          className="w-full px-4 py-3 text-sm bg-[#090B0F] border border-[#222631] rounded-xl text-[#F4F4F6] placeholder-[#52525B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors"
                        />
                      </div>

                      {/* Project Type Select */}
                      <div>
                        <label
                          htmlFor="contact-project-type"
                          className="block text-xs font-medium text-[#D4D4D8] mb-2"
                        >
                          Project Type <span className="text-[#60A5FA]">*</span>
                        </label>
                        <select
                          id="contact-project-type"
                          name="projectType"
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full px-4 py-3 text-sm bg-[#090B0F] border border-[#222631] rounded-xl text-[#F4F4F6] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors"
                        >
                          {PROJECT_TYPE_OPTIONS.map((option) => (
                            <option key={option} value={option} className="bg-[#0D0F14]">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-medium text-[#D4D4D8] mb-2"
                      >
                        Message <span className="text-[#60A5FA]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Describe the manual process, tools, or workflow you want to automate..."
                        className={`w-full px-4 py-3 text-sm bg-[#090B0F] border rounded-xl text-[#F4F4F6] placeholder-[#52525B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors ${
                          errors.message ? 'border-rose-500' : 'border-[#222631]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-400 mt-1.5">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </form>
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
              href="#contact"
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
