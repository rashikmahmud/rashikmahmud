'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import Reveal from './Reveal';
import { skills, skillsIntro } from '@/lib/content';

export default function Skills() {
  // Index of the open row, or null when everything is collapsed.
  // Change to useState(0) if you want the first row expanded on load.
  const [open, setOpen] = useState(null);

  return (
    <Section id="skills" kicker="What I work with" title="Skills">
      {/* Optional one-line intro bar. Delete `skillsIntro` from
          lib/content.js (or set it to null) to hide this. */}
      {skillsIntro && (
        <Reveal>
          <div className="skills-intro">{skillsIntro}</div>
        </Reveal>
      )}

      <div className="skill-rows">
        {skills.map((s, i) => {
          const isOpen = open === i;

          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className={`skill-block ${isOpen ? 'is-open' : ''}`}>
                {/* Heading + rule + toggle */}
                <div className="skill-bar">
                  <h3 className="skill-name">{s.title}</h3>
                  <span className="skill-rule" aria-hidden="true" />

                  <button
                    className="skill-toggle"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`skill-panel-${i}`}
                  >
                    {isOpen ? 'Hide Experience' : 'Relevant Experience'}
                    <motion.span
                      className="skill-caret"
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      ▾
                    </motion.span>
                  </button>
                </div>

                {/* Tags rendered as a comma-separated mono list */}
                <p className="skill-tags">
                  {s.tags.map((t, idx) => (
                    <span className="skill-tag" key={t}>
                      {t}
                      {idx < s.tags.length - 1 && (
                        <span className="skill-comma">,</span>
                      )}
                    </span>
                  ))}
                </p>

                {/* Collapsible experience panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`skill-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.2 },
                      }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="skill-exp">
                        {/* `body` may be a single string or an array of
                            paragraphs — both render correctly. */}
                        {(Array.isArray(s.body) ? s.body : [s.body]).map((para, p) => (
                          <p key={p}>{para}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
