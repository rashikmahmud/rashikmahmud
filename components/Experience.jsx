'use client';

import Section from './Section';
import Reveal from './Reveal';
import { experience } from '@/lib/content';

export default function Experience() {
  return (
    <Section
      id="experience"
      kicker="Career"
      title="Experience"
      sub="Where the work happened, and what came out of it."
    >
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={`${job.org}-${job.role}`} delay={i * 0.08}>
            <div className={`tl-item ${job.current ? 'is-current' : ''}`}>
              <div className="tl-node" aria-hidden="true"><i /></div>

              <div className="tl-head">
                <h3 className="tl-role">{job.role}</h3>
                {job.current && <span className="chip-now">Current</span>}
              </div>

              <p className="tl-meta">
                <b>{job.org}</b> · {job.location} · {job.period}
              </p>

              <ul className="tl-points">
                {job.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>

              {job.stack?.length > 0 && (
                <div className="tags">
                  {job.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
