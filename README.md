# ihemon.me

Portfolio of Istiak Hassan Emon. Next.js (App Router, static) + Tailwind, deployed by Vercel from `main`.

- **All content lives in `src/content/profile.ts`** (headline, summary, case studies, more work, experience, skills). Components only render it.
- Case-study pages are generated from `caseStudies` at `/work/<slug>`; architecture diagrams are inline SVG built from each case study's `architecture.flow`.
- SEO: `src/app/{sitemap,robots,opengraph-image,twitter-image}.ts(x)`, JSON-LD Person schema in `src/app/page.tsx`.

```bash
pnpm install
pnpm dev
pnpm lint && pnpm build
```
