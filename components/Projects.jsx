'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from './Section';
import { Stagger, StaggerItem } from './Reveal';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <Section
      id="projects"
      kicker="Selected work"
      title="Projects"
      //sub="Mostly built end to end — from data model to the thing stakeholders actually open."
    >
      <Stagger className="proj-grid">
        {projects.map((p) => (
          <StaggerItem key={p.title}>
            <motion.article
              className={`proj-card ${p.featured ? 'is-featured' : ''}`}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <div className="proj-media">
                {/*
                  PROJECT IMAGE PLACEHOLDER
                  ─────────────────────────
                  1. Save a screenshot (1600x900 works best) to:
                        public/assets/projects/<your-file>.png
                  2. In lib/content.js set that project's:
                        image: '/assets/projects/<your-file>.png'
                  Until then the gradient placeholder below renders.
                */}
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    width={1600}
                    height={900}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div className="proj-ph">
                    <span>screenshot coming soon</span>
                  </div>
                )}
              </div>

              <div className="proj-body">
                <div className="proj-top">
                  <h3>{p.title}</h3>
                  <span className="proj-year mono">{p.year}</span>
                </div>

                <p>{p.blurb}</p>

                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>

                {/* Optional external link — set `link` in lib/content.js */}
                {p.link && (
                  <a
                    className="proj-link"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
