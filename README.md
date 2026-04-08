# Solarproject

Solar website built with React + Vite.

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production files to `dist/`
- `npm run preview` - Preview the production build locally

## GitHub Pages notes

- The Vite base path is set to `./` in `vite.config.js` so built assets resolve correctly on both GitHub Pages and Netlify.
- If you deploy with GitHub Actions, make sure the workflow builds with `npm ci && npm run build` and publishes the `dist/` folder.

## Netlify deployment

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: use a modern LTS version (18+ recommended)

## Troubleshooting blank page

- Open browser DevTools Console and Network tabs after deploy.
- If JS/CSS files return `404`, deployment path/base is wrong or the wrong publish directory is configured.
- Ensure the deployed output is from the latest commit and generated from `dist/`.
