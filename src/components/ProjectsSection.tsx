import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  PROJECTS,
  PROJECT_FILTERS,
  ProjectData,
  ProjectFilterCategory,
} from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsSectionProps {
  onSelectCaseStudy: (project: ProjectData) => void;
  onSelectWorkflow: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectCaseStudy,
  onSelectWorkflow,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('ALL');

  const filteredProjects = PROJECTS.filter((project) =>
    project.filterTags.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      className="py-24 md:py-28 border-b border-[#181B23]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#60A5FA] mb-2">
              Featured Systems &amp; Case Studies
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight balance-text">
              AI Automation Systems I&apos;ve Built
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] mt-3 leading-relaxed">
              Real automation systems built with AI, n8n, APIs, business tools, and intelligent workflows.
            </p>
          </div>

          <p className="text-xs font-mono text-[#71717A] tabular-nums">
            Showing {filteredProjects.length} of {PROJECTS.length} Systems
          </p>
        </ScrollReveal>

        {/* Interactive Segmented Filter Bar */}
        <ScrollReveal delay={0.05}>
          <div
            role="tablist"
            aria-label="Filter automation projects by category"
            className="flex items-center gap-1.5 p-1.5 bg-[#0D0F14] border border-[#222631] rounded-xl overflow-x-auto mb-12"
          >
            {PROJECT_FILTERS.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isSelected
                      ? 'bg-[#2563EB] text-white'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F6] hover:bg-[#14171F]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: (index % 2) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-[#0D0F14] border border-[#222631] hover:border-[#2563EB]/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                {/* Top Metadata Line (Clean unboxed text with separators) */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#71717A] pb-4 mb-5 border-b border-[#181B23]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#60A5FA] font-semibold tabular-nums">
                      Project {project.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#A1A1AA]">{project.category}</span>
                  </div>
                  <span className="tabular-nums">
                    {project.workflow.length} workflow steps
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F4F6] group-hover:text-white transition-colors balance-text">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-[#A1A1AA] mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Workflow Preview Stream */}
                <div className="mt-6 pt-5 border-t border-[#161922]">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono text-[#71717A] group-hover:text-[#A1A1AA] transition-colors">
                      Workflow Architecture Preview
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectWorkflow(project)}
                      className="text-xs font-mono text-[#60A5FA] hover:text-white transition-colors"
                    >
                      Inspect nodes →
                    </button>
                  </div>

                  {/* Interactive Node Flow Line */}
                  <div className="flex flex-wrap items-center gap-y-2 text-xs font-mono">
                    {project.workflow.map((node, idx) => (
                      <React.Fragment key={node.id}>
                        <span className="text-[#D4D4D8] group-hover:text-white transition-colors">
                          {node.label}
                        </span>
                        {idx < project.workflow.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="mx-2 text-[#52525B] group-hover:text-[#60A5FA] transition-colors"
                          >
                            →
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom: Technology Stack & Dual Action Buttons */}
              <div className="mt-8 pt-5 border-t border-[#181B23] space-y-5">
                {/* Technology Stack (Clean unboxed metadata with middle-dot separators) */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#71717A] group-hover:text-[#D4D4D8] transition-colors">
                  <span className="text-[#52525B]">Stack:</span>
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-[#3F3F46]">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(project)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectWorkflow(project)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#E4E4E7] hover:text-white bg-[#14171F] hover:bg-[#1B1F2A] border border-[#252A37] hover:border-[#384152] rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <span>See Workflow</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
