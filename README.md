# Rashik Mahmud Orchi — Portfolio

Personal portfolio built with **Next.js 14 (App Router)** and **Framer Motion**, designed to deploy on **Vercel**.

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build   # production build
npm start       # serve the production build
```

> Requires Node 18.17 or newer.

---

## Deploy to Vercel

**Option A — Git (recommended, gives you auto-deploy on every push)**

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects as **Next.js** — accept every default and click **Deploy**.
4. Done. Every `git push` to `main` redeploys; pull requests get their own preview URL.

**Option B — CLI**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

**After the first deploy:** open `app/layout.jsx` and set `metadataBase` to your real URL so social previews resolve correctly.

**Custom domain:** Vercel dashboard → Project → Settings → Domains. SSL is automatic.

---

## Editing content

**Everything lives in `lib/content.js`.** You should not need to touch any component to update the site. Search that file for `← EDIT` to find placeholders.

| What you want to change | Where |
|---|---|
| Name, tagline, intro, email, links | `profile` |
| Headline numbers under the hero | `stats` |
| Skill groups and tags | `skills` |
| Job history | `experience` |
| Project cards | `projects` |
| Certifications | `certifications` |
| Degrees | `education` |
| Nav menu items | `navLinks` |

---

## Adding your images

All image slots are **commented placeholders** — the site renders fine without them and upgrades automatically once files exist.

### Profile photo
1. Save a square image (600×600+) to `public/assets/profile.jpg`
2. In `lib/content.js`: `photo: '/assets/profile.jpg'`

Until then an animated monogram of your initials is shown.

### Project screenshots
1. Save to `public/assets/projects/my-project.png` (1600×900 ideal)
2. On that project: `image: '/assets/projects/my-project.png'`

Until then a styled gradient placeholder renders.

### Certificate badges
1. Save to `public/assets/certificates/my-badge.png` (square, ~400×400)
2. On that certification: `image: '/assets/certificates/my-badge.png'`
3. Optionally set `link:` to your Credly / Microsoft Learn verification URL

### Résumé
Drop your PDF at `public/resume.pdf` — the hero button already points there. Set `resume: null` in `content.js` to hide the button.

### Social preview image
Save a 1200×630 image to `public/assets/og-image.png`, then uncomment the `images` block in `app/layout.jsx`.

---

## Restyling

Open `app/globals.css` — the top ~60 lines are design tokens. Change `--accent` and the entire site follows, in both themes.

```css
--accent: #4cc2ff;   /* primary accent */
--accent-2: #7ee0a8; /* kicker labels, "completed" states */
--accent-3: #b794f6; /* gradient partner */
--radius: 16px;      /* global corner rounding */
```

Dark is the default; light theme values sit under `:root[data-theme='light']`.

---

## Structure

```
app/
  layout.jsx      SEO metadata, fonts, no-flash theme script
  page.jsx        section order
  globals.css     design tokens + all styling
components/
  Nav.jsx         sticky nav, scroll progress, active-link tracking, theme toggle
  Hero.jsx        animated intro, rotating words, portrait slot, stats
  About.jsx       short narrative
  Skills.jsx      skill cards with "relevant experience" context
  Experience.jsx  animated timeline
  Projects.jsx    project grid with image slots
  Certifications.jsx
  Education.jsx
  Contact.jsx     CTA, footer, back-to-top
  Section.jsx     shared section shell
  Reveal.jsx      scroll-reveal + stagger helpers
lib/
  content.js      ← ALL your content
public/assets/    your images go here
```

---

## What's included

- Responsive down to mobile, with a slide-down drawer menu
- Dark/light theme that persists and respects OS preference, with no flash on load
- Scroll progress bar and active-section nav highlighting
- Scroll-triggered reveal and stagger animations throughout
- `prefers-reduced-motion` respected — animations disable for users who ask
- Skip-to-content link, ARIA labels, keyboard-accessible controls
- Full Open Graph / Twitter card metadata
