'use client';

import Image from 'next/image';
import Section from './Section';
import { Stagger, StaggerItem } from './Reveal';
import { education } from '@/lib/content';

export default function Education() {
  return (
    <Section id="education" kicker="Background" title="Education">
      {/* edu-list = stacked one per row, logo sits beside the text */}
      <Stagger className="edu-list">
        {education.map((e) => (
          <StaggerItem key={`${e.school}-${e.degree}`}>
            <article className="edu-card">
              <div className="edu-logo">
                {/*
                  SCHOOL LOGO
                  ───────────
                  1. Save the crest/logo to:
                        public/assets/education/<school>.png
                     (square, ~300x300, transparent PNG works best)
                  2. In lib/content.js add to that entry:
                        logo: '/assets/education/<school>.png'
                  Leave it null and a lettered tile is shown instead.
                */}
                {e.logo ? (
                  <Image src={e.logo} alt={`${e.school} logo`} width={200} height={200} />
                ) : (
                  <b>{e.school?.[0] ?? '◆'}</b>
                )}
              </div>

              <div className="edu-info">
                <h3>{e.degree}</h3>
                <div className="edu-school">{e.school}</div>
                <div className="edu-meta">{e.location} · {e.period}</div>
                {e.note && <p className="edu-note">{e.note}</p>}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
