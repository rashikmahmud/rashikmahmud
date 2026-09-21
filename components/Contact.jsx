'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/lib/content';

// The "Let's talk data" card has been removed — the connect icons in the
// hero cover that now. This component keeps only the footer and the
// back-to-top button.
export default function Contact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="wrap">
        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="mono" style={{ fontSize: '0.78rem' }}>
            {/* Built with Next.js · Deployed on Vercel */}
          </span>
        </footer>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ y: -3 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
