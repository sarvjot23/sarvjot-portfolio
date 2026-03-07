"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  comingSoon?: boolean;
  index: number;
}

export default function ProjectCard({ title, description, tags, comingSoon, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface rounded-xl border border-border p-6 hover:border-accent/30 transition-all duration-300"
    >
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
          Coming Soon
        </span>
      )}
      <h3 className="text-lg font-semibold text-text-primary mb-3 pr-24">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-surface-light text-text-muted">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <button
          disabled={comingSoon}
          className="inline-flex items-center gap-1.5 text-sm text-text-muted cursor-not-allowed opacity-50"
        >
          <ExternalLink size={14} /> Live Demo
        </button>
        <button
          disabled={comingSoon}
          className="inline-flex items-center gap-1.5 text-sm text-text-muted cursor-not-allowed opacity-50"
        >
          <Github size={14} /> Source
        </button>
      </div>
    </motion.div>
  );
}
