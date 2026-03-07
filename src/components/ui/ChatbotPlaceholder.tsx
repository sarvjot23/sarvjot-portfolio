"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotPlaceholder() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-72 bg-surface border border-border rounded-xl p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-text-primary text-sm">AI Digital Twin</h3>
              <button onClick={() => setOpen(false)} className="text-text-muted hover:text-text-primary">
                <X size={16} />
              </button>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              My AI-powered digital twin is coming soon! You&apos;ll be able to chat with an AI version of me that knows about my skills, projects, and experience.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Under development
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg animate-pulse-glow hover:bg-accent-hover transition-colors duration-300"
        aria-label="Chat with AI Digital Twin"
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
