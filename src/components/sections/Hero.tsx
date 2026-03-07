"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { SITE, HERO_CODE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight">
            {SITE.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-text-secondary mb-6">
            {SITE.role}
          </h2>
          <p className="text-text-secondary max-w-lg mb-8 leading-relaxed">
            I build intelligent systems powered by LLMs, craft AI automation workflows, and explore the frontier of agentic AI. Turning cutting-edge AI into practical solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button href="#contact">
              Let&apos;s Build Together <ArrowDown size={16} />
            </Button>
            <Button variant="secondary" href="#projects">
              View My Work
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right - Code block */}
        <div className="hidden lg:block">
          <CodeBlock code={HERO_CODE} />
        </div>
      </div>
    </section>
  );
}
