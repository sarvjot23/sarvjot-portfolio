"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { N8N_EXPERIENCE, SECTION_IDS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function N8nExperience() {
  return (
    <div className="bg-surface">
      <SectionWrapper id={SECTION_IDS.n8n}>
        <div className="flex items-center gap-3 mb-2">
          <Zap size={28} className="text-accent" />
          <h2 className="text-3xl font-bold text-text-primary">n8n & Automation</h2>
        </div>
        <div className="w-16 h-1 bg-accent rounded mb-8" />

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl border border-border p-6 mb-8"
        >
          <h3 className="font-semibold text-text-primary mb-4">Self-Hosted Automation Expert</h3>
          <ul className="space-y-3">
            {N8N_EXPERIENCE.overview.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                <ArrowRight size={16} className="text-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Workflow cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {N8N_EXPERIENCE.workflows.map((wf, i) => (
            <motion.div
              key={wf.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background rounded-xl border border-border p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <h4 className="font-semibold text-text-primary mb-2">{wf.title}</h4>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">{wf.description}</p>
              <div className="flex flex-wrap gap-2">
                {wf.nodes.map((node) => (
                  <span
                    key={node}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-mono"
                  >
                    {node}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
