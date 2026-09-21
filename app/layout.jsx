import './globals.css';
import { profile } from '@/lib/content';

// Next.js App Router metadata — this is what makes the site SEO-ready
// and gives you proper link previews on LinkedIn, Slack, X, etc.
export const metadata = {
  metadataBase: new URL('https://your-domain.vercel.app'), // ← EDIT after first deploy
  title: {
    default: `${profile.name} — Data & Analytics Engineering`,
    template: `%s · ${profile.name}`,
  },
  description: profile.intro,
  keywords: [
    'Data Engineer', 'Business Intelligence Analyst', 'Power BI',
    'Microsoft Fabric', 'Databricks', 'SQL', 'Python', 'PySpark',
    'Analytics', 'Halifax', 'Nova Scotia', 'Canada',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    title: `${profile.name} — Data & Analytics Engineering`,
    description: profile.tagline,
    siteName: profile.name,
    // PLACEHOLDER: add a 1200x630 image at public/assets/og-image.png,
    // then uncomment the block below for rich social previews.
    // images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Data & Analytics Engineering`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0e14' },
    { media: '(prefers-color-scheme: light)', color: '#f6f8fb' },
  ],
};

// Runs before paint so the saved theme applies with no white flash.
const noFlashTheme = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.setAttribute('data-theme', saved || (prefersLight ? 'light' : 'dark'));
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <div className="aurora" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
