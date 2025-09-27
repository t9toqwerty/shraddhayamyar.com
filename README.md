# Shraddha Yamyar — Static Site (Next.js)

This repository contains a Next.js App Router site configured for static export, suitable for hosting on GitHub Pages.

## Local development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build a static site (for GitHub Pages)

This project is configured with `output: "export"` (see next.config.ts). To generate the static site into the `out/` folder:

```bash
npm run build:static
```

Artifacts will be written to the `out/` directory. The site is fully static and does not require a Node.js server.

Notes:
- Image Optimization is disabled for static export.
- A `.nojekyll` file is included to prevent GitHub Pages from processing the site with Jekyll.

## Deploying to GitHub Pages

There are two common approaches:

1) Deploy the `out/` folder to the `gh-pages` branch
- Build: `npm run build:static`
- Commit and push the contents of `out/` to a `gh-pages` branch
- In the GitHub repo settings, enable Pages: Source = `Deploy from a branch`, Branch = `gh-pages` / `/ (root)`

2) Use GitHub Actions (recommended)
- Add a workflow that builds and deploys `out/` to `gh-pages`. Example: https://nextjs.org/docs/app/building-your-application/deploying/static-exports#github-pages

If you are deploying to `https://<user>.github.io/<repo>` (project pages), and you use absolute links in your code, you may want to set `basePath` and `assetPrefix` in `next.config.ts`. This project currently uses root-relative paths and should work as-is in most cases.
