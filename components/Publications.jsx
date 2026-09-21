'use client';

import Section from './Section';
import { Stagger, StaggerItem } from './Reveal';
import { publications } from '@/lib/content';

export default function Publications() {
  // Render nothing at all if the list is empty — keeps the page clean
  // until you have something to show.
  if (!publications?.length) return null;

  return (
    <Section
      id="publications"
      kicker="Writing & Research"
      title="Publications"
      // sub="Papers, articles, and technical writing."
    >
      <Stagger className="pub-list">
        {publications.map((p, i) => {
          const card = (
            <article className="pub-item">
              <span className="pub-num mono">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="pub-body">
                <h3 className="pub-title">{p.title}</h3>

                {p.authors && <p className="pub-authors">{p.authors}</p>}

                <div className="pub-meta">
                  {p.venue && <span className="pub-venue">{p.venue}</span>}
                  {p.year && <span className="mono pub-year">{p.year}</span>}
                  {p.type && <span className="pub-type">{p.type}</span>}
                </div>

                {p.summary && <p className="pub-summary">{p.summary}</p>}

                {p.tags?.length > 0 && (
                  <div className="tags pub-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>

              {p.link && <span className="pub-arrow" aria-hidden="true">→</span>}
            </article>
          );

          return (
            <StaggerItem key={p.title}>
              {p.link ? (
                <a
                  href={p.link}
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
