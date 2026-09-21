import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

// Section order lives here. To reorder the page, move these lines — just
// keep `navLinks` in lib/content.js in the same order so the menu matches.
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Publications />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}