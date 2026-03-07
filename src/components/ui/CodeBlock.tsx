"use client";

import { motion } from "framer-motion";

export default function CodeBlock({ code }: { code: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-surface rounded-xl border border-border overflow-hidden shadow-2xl"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-light border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-text-muted font-mono">identity.ts</span>
      </div>
      <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono text-text-secondary">
          {code.split("\n").map((line, i) => (
            <span key={i} className="block">
              <span className="text-text-muted select-none mr-4 inline-block w-5 text-right">
                {i + 1}
              </span>
              {colorize(line)}
            </span>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}

function colorize(line: string): React.ReactNode {
  return line
    .replace(/^(\s*)(const|let|var)\b/, "$1<KW>$2</KW>")
    .split(/(<KW>.*?<\/KW>|"[^"]*"|'[^']*'|\b(?:true|false|null|undefined)\b|\d+)/)
    .map((part, i) => {
      if (part.startsWith("<KW>"))
        return (
          <span key={i} className="text-purple-400">
            {part.replace(/<\/?KW>/g, "")}
          </span>
        );
      if (/^["']/.test(part))
        return (
          <span key={i} className="text-green-400">
            {part}
          </span>
        );
      if (/^(true|false|null|undefined)$/.test(part))
        return (
          <span key={i} className="text-amber-400">
            {part}
          </span>
        );
      if (/^\d+$/.test(part))
        return (
          <span key={i} className="text-amber-400">
            {part}
          </span>
        );
      return part;
    });
}
