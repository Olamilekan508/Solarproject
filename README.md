# Solarproject

Solar website built with React + Vite.

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production files to `dist/`
- `npm run preview` - Preview the production build locally

## GitHub Pages notes

- Deployment is handled by GitHub Actions workflow in `.github/workflows/deploy.yml`.
- The Vite base path is configured for this repository: `/Solarproject/`.
- If your repository name changes, update `base` in `vite.config.js` to match.
