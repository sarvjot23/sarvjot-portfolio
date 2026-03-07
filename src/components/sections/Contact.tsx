"use client";

import { Mail, Linkedin } from "lucide-react";
import { SITE, SECTION_IDS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <SectionWrapper id={SECTION_IDS.contact} className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
        Let&apos;s Build Something Intelligent Together
      </h2>
      <p className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
        Open to AI engineering roles, freelance projects, and collaborations. If you&apos;re working on something exciting with AI, I&apos;d love to hear about it.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Button href={`mailto:${SITE.email}`}>
          <Mail size={18} /> Get In Touch
        </Button>
        <Button variant="secondary" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={18} /> Connect on LinkedIn
        </Button>
      </div>
    </SectionWrapper>
  );
}
