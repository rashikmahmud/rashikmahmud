/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ── Deploying to Vercel? Leave this file exactly as is. ─────────────────
  // Vercel runs the full Next.js server, so Image Optimization, caching and
  // analytics all work out of the box. Nothing below needs to change.
  //
  // ── Deploying to GitHub Pages / any static host instead? ────────────────
  // Uncomment the three lines below to emit a plain static site into /out.
  // Static export disables the Image Optimization server, hence `unoptimized`.
  //
  // output: 'export',
  // images: { unoptimized: true },
  // basePath: '/your-repo-name',
};

export default nextConfig;
