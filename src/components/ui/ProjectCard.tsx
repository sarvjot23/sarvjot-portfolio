"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demoEmbed?: string;
  demoUrl?: string;
  comingSoon?: boolean;
  index: number;
}

export default function ProjectCard({ title, description, tags, github, demoEmbed, demoUrl, comingSoon, index }: ProjectCardProps) {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
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
          {demoEmbed && !comingSoon ? (
            <button
              onClick={() => setShowDemo(true)}
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <ExternalLink size={14} /> Demo
            </button>
          ) : (
            <button
              disabled={comingSoon}
              className="inline-flex items-center gap-1.5 text-sm text-text-muted cursor-not-allowed opacity-50"
            >
              <ExternalLink size={14} /> Live Demo
            </button>
          )}
          {github && !comingSoon ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <Github size={14} /> Source
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-1.5 text-sm text-text-muted cursor-not-allowed opacity-50"
            >
              <Github size={14} /> Source
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowDemo(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-surface rounded-xl border border-border p-4 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
                <button
                  onClick={() => setShowDemo(false)}
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src={demoEmbed}
                  height="399"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={`${title} Demo`}
                  className="w-full"
                />
              </div>
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
                >
                  <ExternalLink size={12} /> Watch on LinkedIn
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
