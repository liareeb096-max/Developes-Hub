# Deployment & SEO checklist

1. Replace `https://devutilityhub.com` with your real domain in `src/lib/site.js`, `index.html`, `public/robots.txt`, and `public/sitemap.xml`.
2. Run `npm install` and `npm run build`.
3. Upload the generated `dist/` directory to your host, or deploy the repository to a static host.
4. For Vercel, the included `vercel.json` handles SPA history fallback and baseline security headers.
5. For Apache/Hostinger, the included `public/.htaccess` is copied to `dist/.htaccess` by Vite and provides SPA fallback.
6. In Google Search Console, verify the domain, submit `/sitemap.xml`, then inspect important URLs and request indexing where appropriate.
7. Google controls crawling, indexing and ranking. No codebase can guarantee instant indexing or a Google ranking position.
8. Keep titles, descriptions, canonical URLs and visible page copy unique for every tool. Avoid keyword stuffing or doorway pages.
9. When adding advertising, replace only the marked AdSlot placeholders with the network's official publisher code. Add the exact `ads.txt` record supplied by the network.
10. For UK/EU/other consent jurisdictions, configure the advertising network's current consent/TCF solution as required before personalized advertising.
