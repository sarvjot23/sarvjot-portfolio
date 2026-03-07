"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Workflow, Code2 } from "lucide-react";
import { SKILLS, SECTION_IDS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";

const ICONS = [Brain, Cpu, Workflow, Code2];

export default function Skills() {
  return (
    <SectionWrapper id={SECTION_IDS.skills}>
      <h2 className="text-3xl font-bold text-text-primary mb-2">Skills & Technologies</h2>
      <div className="w-16 h-1 bg-accent rounded mb-8" />

      <div className="grid sm:grid-cols-2 gap-6">
        {SKILLS.map((category, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface rounded-xl border border-border p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
