/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection, ServicesSection } from './components/AboutAndServices';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessAndValueSections } from './components/ProcessAndValueSections';
import { ContactAndFooter } from './components/ContactAndFooter';
import {
  CaseStudyModal,
  WorkflowModal,
} from './components/WorkflowViewerModal';
import { ProjectData } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectData | null>(null);
  const [selectedWorkflow, setSelectedWorkflow] = useState<ProjectData | null>(null);

  const handleOpenCaseStudy = (project: ProjectData) => {
    setSelectedWorkflow(null);
    setSelectedCaseStudy(project);
  };

  const handleOpenWorkflow = (project: ProjectData) => {
    setSelectedCaseStudy(null);
    setSelectedWorkflow(project);
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F4F4F6] flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection
          onSelectCaseStudy={handleOpenCaseStudy}
          onSelectWorkflow={handleOpenWorkflow}
        />
        <ProcessAndValueSections />
      </main>

      <ContactAndFooter />

      {/* Detailed Project Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Interactive Workflow Viewer Modal */}
      <WorkflowModal
        project={selectedWorkflow}
        onClose={() => setSelectedWorkflow(null)}
        onSwitchToCaseStudy={(project) => {
          setSelectedWorkflow(null);
          setSelectedCaseStudy(project);
        }}
      />
    </div>
  );
}

