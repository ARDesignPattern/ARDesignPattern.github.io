SEO upgrade files for yuliu.design

Replace these files in your project:
- src/layouts/BaseLayout.astro (new)
- src/pages/index.astro
- src/pages/projects/[id].astro
- src/data/site.ts
- astro.config.mjs
- package.json

Then run:
npm.cmd install
npm.cmd run build

If build succeeds:
git add .
git commit -m "Add SEO metadata, structured data, and sitemap"
git push

After deployment, submit:
https://yuliu.design/sitemap-index.xml
to Google Search Console.

Note:
Open Graph images are emitted only when a project has a `cover` value.
The homepage currently has no default social preview image. Add one later
(e.g. /images/og/yu-liu-portfolio.webp) if desired.
