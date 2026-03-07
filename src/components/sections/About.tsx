"use client";

import { motion } from "framer-motion";
import { ABOUT, SECTION_IDS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id={SECTION_IDS.about}>
      <h2 className="text-3xl font-bold text-text-primary mb-2">About Me</h2>
      <div className="w-16 h-1 bg-accent rounded mb-8" />

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {ABOUT.bio.map((paragraph, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          {ABOUT.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface rounded-lg p-5 border border-border text-center"
            >
              <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-text-primary font-medium text-sm">{stat.label}</div>
              <div className="text-text-muted text-xs mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
