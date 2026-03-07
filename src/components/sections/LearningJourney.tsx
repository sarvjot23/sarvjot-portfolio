"use client";

import { LEARNING_JOURNEY, SECTION_IDS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";

export default function LearningJourney() {
  return (
    <SectionWrapper id={SECTION_IDS.journey}>
      <h2 className="text-3xl font-bold text-text-primary mb-2">Learning Journey</h2>
      <div className="w-16 h-1 bg-accent rounded mb-8" />

      <div className="max-w-2xl mx-auto">
        {LEARNING_JOURNEY.map((item, i) => (
          <TimelineItem key={item.title} {...item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
