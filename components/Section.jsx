'use client';

import Reveal from './Reveal';

/**
 * Standard section shell: anchor id, kicker label, title, optional subtitle.
 * The `id` must match an entry in `navLinks` (lib/content.js) for the
 * active-link highlighting in the nav to work.
 */
export default function Section({ id, kicker, title, sub, children }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            {kicker && <div className="sec-kicker">{kicker}</div>}
            <h2 className="sec-title">{title}</h2>
            {sub && <p className="sec-sub">{sub}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
