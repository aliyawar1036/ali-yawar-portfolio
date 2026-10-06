import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectData, WorkflowNode } from '../data/portfolioData';

const NODE_TYPE_LABELS: Record<WorkflowNode['type'], string> = {
  trigger: 'Trigger',
  ai: 'AI Processing',
  decision: 'Decision / Logic',
  action: 'Tool / Action',
  database: 'Database Storage',
  approval: 'Human Approval',
  notification: 'Output / Notification',
};

interface InteractiveWorkflowDiagramProps {
  workflow: WorkflowNode[];
  interactive?: boolean;
}

export const InteractiveWorkflowDiagram: React.FC<InteractiveWorkflowDiagramProps> = ({
  workflow,
  interactive = true,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    setActiveIndex(0);
    setHoveredIndex(null);
  }, [workflow]);

  useEffect(() => {
    if (!isPlaying || hoveredIndex !== null) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflow.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [isPlaying, hoveredIndex, workflow.length]);

  const focusedIdx = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const focusedNode = workflow[focusedIdx] || workflow[0];

  return (
    <div className="bg-[#0B0D12] border border-[#222631] rounded-2xl p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#1A1D26]">
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA]">
            Execution Flow ({workflow.length} Nodes)
          </h4>
          <p className="text-xs text-[#A1A1AA] mt-0.5">
            Hover or select any node below to inspect its function in the pipeline
          </p>
        </div>

        {interactive && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D4D4D8] bg-[#14171F] hover:bg-[#1B1F2A] border border-[#252A37] rounded-lg transition-colors whitespace-nowrap"
            >
              <Play className="w-3 h-3 text-[#60A5FA]" aria-hidden="true" />
              <span>{isPlaying ? 'Auto-Stepping' : 'Paused'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveIndex(0);
                setIsPlaying(true);
              }}
              aria-label="Restart workflow animation"
              className="inline-flex items-center justify-center p-1.5 text-[#A1A1AA] hover:text-white bg-[#14171F] hover:bg-[#1B1F2A] border border-[#252A37] rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {/* Sequential Workflow Nodes */}
      <div className="space-y-2">
        {workflow.map((node, index) => {
          const isCurrent = focusedIdx === index;
          const isCompleted = index < focusedIdx;

          return (
            <React.Fragment key={node.id}>
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, delay: index * 0.04 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPlaying(false);
                }}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                  isCurrent
                    ? 'bg-[#131929] border-[#2563EB]'
                    : isCompleted
                    ? 'bg-[#0F1219] border-[#222735]'
                    : 'bg-[#0E1016] border-[#1A1D26] hover:border-[#2C3242]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono tabular-nums px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-[#2563EB] text-white font-semibold'
                          : 'bg-[#161922] text-[#71717A]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-[#F4F4F6]">
                      {node.label}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#A1A1AA]">
                    {NODE_TYPE_LABELS[node.type]}
                  </span>
                </div>

                {/* Inline Node Tooltip / Explanation */}
                <p
                  className={`text-xs mt-2 leading-relaxed transition-colors ${
                    isCurrent ? 'text-[#E4E4E7]' : 'text-[#71717A]'
                  }`}
                >
                  {node.description}
                </p>
              </motion.button>

              {index < workflow.length - 1 && (
                <div
                  aria-hidden="true"
                  className="flex justify-center py-0.5"
                >
                  <span
                    className={`text-xs font-mono transition-colors ${
                      index < focusedIdx ? 'text-[#60A5FA]' : 'text-[#3F3F46]'
                    }`}
                  >
                    ↓
                  </span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Highlighted Node Inspector Banner */}
      {focusedNode && (
        <div className="mt-5 pt-4 border-t border-[#1A1D26] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#60A5FA]">
              <span>Node 0{focusedIdx + 1}</span>
              <span aria-hidden="true">·</span>
              <span>{focusedNode.label}</span>
              <span aria-hidden="true">·</span>
              <span>{NODE_TYPE_LABELS[focusedNode.type]}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#D4D4D8] mt-1">
              {focusedNode.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

interface WorkflowModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onSwitchToCaseStudy: (project: ProjectData) => void;
}

export const WorkflowModal: React.FC<WorkflowModalProps> = ({
  project,
  onClose,
  onSwitchToCaseStudy,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="workflow-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl bg-[#0D0F14] border border-[#252936] rounded-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#1A1D26] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#60A5FA]">
                  <span>Project {project.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>Interactive Workflow Viewer</span>
                </div>
                <h3
                  id="workflow-modal-title"
                  className="font-display text-xl sm:text-2xl font-bold text-[#F4F4F6] mt-1"
                >
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close workflow viewer"
                className="p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#171A22] border border-[#222631] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <InteractiveWorkflowDiagram workflow={project.workflow} interactive={true} />

              <div className="p-4 rounded-xl bg-[#11141C] border border-[#1E222D]">
                <h4 className="text-xs font-mono text-[#A1A1AA] mb-1">
                  Automation Architecture Summary
                </h4>
                <p className="text-sm text-[#D4D4D8] leading-relaxed">
                  {project.architectureSummary}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#0A0C10] border-t border-[#1A1D26] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onSwitchToCaseStudy(project)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#60A5FA] hover:text-white transition-colors whitespace-nowrap"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap"
                >
                  Request Similar Workflow
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-[#A1A1AA] hover:text-white bg-[#14171F] rounded-lg transition-colors whitespace-nowrap"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl bg-[#0D0F14] border border-[#252936] rounded-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#1A1D26] flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#60A5FA]">
                  <span>PROJECT {project.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.category}</span>
                </div>
                <h3
                  id="case-study-modal-title"
                  className="font-display text-2xl sm:text-3xl font-bold text-[#F4F4F6] mt-1"
                >
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#171A22] border border-[#222631] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {/* OVERVIEW */}
              <div>
                <h4 className="text-xs font-mono text-[#71717A] mb-2">
                  Overview
                </h4>
                <p className="text-base text-[#E4E4E7] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* PROBLEM & SOLUTION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#101218] border border-[#1E222D]">
                  <h4 className="text-xs font-mono text-[#A1A1AA] mb-2">
                    01. The Manual Problem
                  </h4>
                  <p className="text-sm text-[#D4D4D8] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111622] border border-[#2563EB]/40">
                  <h4 className="text-xs font-mono text-[#60A5FA] mb-2">
                    02. The Automated Solution
                  </h4>
                  <p className="text-sm text-[#E4E4E7] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* WORKFLOW */}
              <div>
                <h4 className="text-xs font-mono text-[#71717A] mb-3">
                  Interactive System Workflow
                </h4>
                <InteractiveWorkflowDiagram workflow={project.workflow} interactive={true} />
              </div>

              {/* KEY FEATURES & TECHNOLOGIES */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 border-t border-[#1A1D26]">
                <div className="md:col-span-7">
                  <h4 className="text-xs font-mono text-[#71717A] mb-3">
                    Key Capabilities &amp; Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, idx) => (
                      <li
                        key={feat}
                        className="flex items-baseline gap-2.5 text-sm text-[#D4D4D8] py-1 border-b border-[#161922]"
                      >
                        <span className="text-xs font-mono text-[#60A5FA] tabular-nums">
                          0{idx + 1}.
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono text-[#71717A] mb-2.5">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm font-mono text-[#E4E4E7]">
                      {project.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {idx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-[#52525B]">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-[#71717A] mb-2">
                      Automation Architecture
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {project.architectureSummary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Optional Disclaimer (Project 09 Medicine Inventory) */}
              {project.disclaimer && (
                <div className="p-4 rounded-xl bg-[#14171F] border border-[#272B38] text-xs text-[#A1A1AA]">
                  {project.disclaimer}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 bg-[#0A0C10] border-t border-[#1A1D26] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#A1A1AA]">
                Designed to reduce repetitive manual work.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Automate a Similar Process</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-[#A1A1AA] hover:text-white bg-[#14171F] rounded-lg transition-colors whitespace-nowrap"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
