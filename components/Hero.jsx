'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile, stats, socials } from '@/lib/content';

/** Cycles through profile.rotatingWords with a fade/slide swap. */
function Rotator({ words }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!words?.length) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words]);

  if (!words?.length) return null;

  return (
    <span className="rotator" style={{ position: 'relative', display: 'inline-block' }}>
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'inline-block' }}
      >
        {words[i]}
      </motion.span>
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    // id="home" so the nav's Home link targets this section
    <div className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          {/* ── Left: copy ─────────────────────────────────────────── */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="badge">
                <span className="dot" />
                {profile.location}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.08}>
              Hey, I&apos;m <span className="grad">{profile.firstName}</span>.
            </motion.h1>

            <motion.div
              className="hero-sub"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.16}
            >
              <span>I build</span>
              <Rotator words={profile.rotatingWords} />
            </motion.div>

            {/* Tagline — the slogan that used to head the About section */}
            <motion.p
              className="hero-slogan"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              {profile.tagline}
            </motion.p>

            {/* Intro paragraphs. Edit `profile.about` in lib/content.js —
                it is an array, so add or remove paragraphs freely. */}
            {profile.about?.map((para, i) => (
              <motion.p
                key={i}
                className="hero-lede"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.26 + i * 0.06}
              >
                {para}
              </motion.p>
            ))}

            {/* <motion.div
              className="hero-cta"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.42}
            >
              <a className="btn btn-primary" href="#projects">
                View my work <span aria-hidden="true">→</span>
              </a>
              <a className="btn" href="#contact">Get in touch</a>
              {profile.resume && (
                <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">
                  Résumé
                </a>
              )}
            </motion.div> */}
          </div>

          {/* ── Right: portrait ────────────────────────────────────── */}
          <motion.div
            className="portrait-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="portrait"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="portrait-ring" aria-hidden="true" />

              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  width={600}
                  height={600}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div className="monogram">
                  <span>{initials}</span>
                  <small>add photo → lib/content.js</small>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom strip: one stat + connect icons ───────────────── */}
        <motion.div
          className="hero-foot"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              className="hero-stat"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="stat-v">{s.value}</div>
              <div className="stat-l">{s.label}</div>
            </motion.div>
          ))}

          <motion.div
            className="hero-connect"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <span className="connect-label">Connect with me</span>
            <div className="connect-icons">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="connect-icon"
                  aria-label={s.name}
                  title={s.name}
                >
                  <span dangerouslySetInnerHTML={{ __html: s.icon }} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
