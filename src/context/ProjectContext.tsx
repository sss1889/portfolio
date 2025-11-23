'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProjectContextType {
  expandedProject: string | null;
  setExpandedProject: (id: string | null) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <ProjectContext.Provider value={{ expandedProject, setExpandedProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}
