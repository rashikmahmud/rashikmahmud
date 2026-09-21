'use client';

import Image from 'next/image';
import Section from './Section';
import { Stagger, StaggerItem } from './Reveal';
import { certifications } from '@/lib/content';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      kicker="Credentials"
      title="Certifications & Learning"
      sub="Currently focused on the data engineering track."
    >
      {/* cert-list = stacked one per row (was cert-grid, side by side) */}
      <Stagger className="cert-list">
        {certifications.map((c) => {
          const done = c.status?.toLowerCase() === 'completed';

          const card = (
            <article className="cert-card">
              <div className="cert-badge">
                {/*
                  CERTIFICATE BADGE
                  ─────────────────
                  1. Save the badge (square, ~400x400, transparent PNG) to:
                        public/assets/certificates/<your-badge>.png
                  2. In lib/content.js set:
                        image: '/assets/certificates/<your-badge>.png'
                  Until then a lettered tile is shown.
                */}
                {c.image ? (
                  <Image src={c.image} alt={`${c.name} badge`} width={200} height={200} />
                ) : (
                  <b>{c.issuer?.[0] ?? '◆'}</b>
                )}
              </div>

              <div className="cert-info">
                <h3>{c.name}</h3>
                <div className="cert-meta">
                  <span>{c.issuer}</span>
                  <span className={`status ${done ? 'done' : 'wip'}`}>{c.status}</span>
                  <span className="mono">{c.year}</span>
                </div>
              </div>

              {/* Arrow hint, only when the card links somewhere */}
              {c.link && <span className="cert-arrow" aria-hidden="true">→</span>}
            </article>
          );

          return (
            <StaggerItem key={c.name}>
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {card}
                </a>
              ) : card}
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
