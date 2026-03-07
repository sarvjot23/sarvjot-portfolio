import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import LearningJourney from "@/components/sections/LearningJourney";
import Projects from "@/components/sections/Projects";
import N8nExperience from "@/components/sections/N8nExperience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <LearningJourney />
      <Projects />
      <N8nExperience />
      <Contact />
    </>
  );
}
