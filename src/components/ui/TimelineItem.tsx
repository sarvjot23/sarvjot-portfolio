"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  provider: string;
  providerUrl: string;
  status: "completed" | "in-progress";
  description: string;
  index: number;
}

export default function TimelineItem({ title, provider, providerUrl, status, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0 border-l border-border"
    >
      <div
        className={`absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-1.5 ${
          status === "completed" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
        }`}
      />
      <div className="bg-surface rounded-lg p-5 border border-border hover:border-accent/30 transition-colors duration-300">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="text-text-primary font-semibold">{title}</h3>
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
              status === "completed"
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
            }`}
          >
            {status === "completed" ? "Completed" : "In Progress"}
          </span>
        </div>
        <a
          href={providerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:text-accent-hover transition-colors"
        >
          {provider}
        </a>
        <p className="text-text-secondary text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
}
