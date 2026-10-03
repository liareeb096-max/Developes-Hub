# DevUtilityHub

Production-ready React + Vite + Tailwind CSS developer utility SPA.

## Included tools
JSON Formatter, Base64 Encoder/Decoder, URL Encoder/Decoder, JWT Decoder, UUID Generator, Unix Timestamp Converter, Regex Tester, SHA-256 Hash Generator, YAML/JSON Converter, Text Counter.

## Run
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Adsterra
Ad placeholders are implemented as empty `.ad-slot` containers in `src/components/AdSlot.jsx`. Replace the placeholder content with your approved ad code after adding the network script according to its current publisher instructions.

## SEO
Update `https://devutilityhub.com` in `src/lib/site.js`, `index.html`, `public/robots.txt`, and `public/sitemap.xml` to your real domain. Submit the sitemap in Google Search Console after deployment. Indexing/ranking is not guaranteed; Google decides crawling and ranking.
