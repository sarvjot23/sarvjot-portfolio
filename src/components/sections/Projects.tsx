"use client";

import { PROJECTS, SECTION_IDS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper id={SECTION_IDS.projects}>
      <h2 className="text-3xl font-bold text-text-primary mb-2">Projects</h2>
      <div className="w-16 h-1 bg-accent rounded mb-8" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
