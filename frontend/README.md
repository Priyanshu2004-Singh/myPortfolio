# Portfolio Website (React + Vite) 🚀

Modern, fast, and responsive portfolio website built with React, Vite, and Tailwind CSS. This README includes complete local setup and Netlify deployment instructions.

> Monorepo layout:
>
> - Frontend (this folder): `frontend/`
> - Backend (optional API): `../backend/` (Express server)

## Live Demo

- Production: <your-netlify-site-url>
- Preview/Branch Deploys: auto-created by Netlify when connected to Git

## Features

- Sleek landing experience with a Hero section
- Project gallery and services showcase
- About and reviews/testimonials sections
- Responsive navigation (top and vertical navbars)
- Contact section ready to integrate with a backend or Netlify Forms
- Smooth animations via Framer Motion

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4
- Framer Motion
- React Icons

## Project Structure

```
frontend/
	public/
	src/
		App.jsx
		main.jsx
		index.css
		assets/
			about.avif
		Components/
			About.jsx
			ContactMe.jsx
			Footer.jsx
			HeroSection.jsx
			Navbar.jsx
			Projects.jsx
			Reviews.jsx
			Services.jsx
			VerticalNavbar.jsx
	vite.config.js
	netlify.toml            # Netlify build + SPA redirects
	package.json
```

The backend (optional) lives in `../backend/` and currently exposes a basic Express server. If you integrate API calls from the frontend, deploy the backend separately (e.g., Render/Railway/Fly.io) and point the frontend to it with an environment variable.

## Prerequisites

- Node.js 18+ (recommended) and npm
- Git (for Netlify Git-based deployments)

## Getting Started (Local)

1) Install dependencies

```
npm install
```

2) Run the dev server

```
npm run dev
```

3) Open the app

Vite will print a local URL, typically http://localhost:5173.

## Available Scripts

- `npm run dev` – Start Vite dev server with HMR
- `npm run build` – Production build to `dist/`
- `npm run preview` – Preview the production build locally
- `npm run lint` – Lint the project

## Environment Variables

If your frontend talks to an API, add a Vite-style env variable and reference it via `import.meta.env`:

```
VITE_API_URL=https://your-api.example.com
```

- Local: create a `.env` file in `frontend/`
- Netlify: add the same variable under Site Settings → Environment variables

In your code, you can read it as `import.meta.env.VITE_API_URL`.

## Production Build

```
npm run build
```

Output goes to `dist/` and is ready to deploy as a static site.

## Deploying to Netlify

This project includes `netlify.toml` with the proper build command and a SPA redirect (so client-side routing works). You can deploy in two common ways:

### A) Connect Git repository (recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. In Netlify, click “Add new site” → “Import an existing project”
3. Select your repo and the `frontend/` folder if using a monorepo (Netlify will detect `netlify.toml`)
4. Confirm build settings:
	 - Build command: `npm run build`
	 - Publish directory: `dist`
5. Add any environment variables (e.g., `VITE_API_URL`) under Site Settings → Environment variables
6. Deploy

Netlify will auto-build on every push to your default branch and create branch deploys for PRs.

### B) Netlify CLI (manual deploys)

1. Install the CLI (one-time): `npm i -g netlify-cli`
2. Login: `netlify login`
3. From `frontend/`, run: `netlify init` (link to a site or create a new one)
4. Build locally: `npm run build`
5. Deploy a draft (preview): `netlify deploy --dir=dist`
6. Promote to production: `netlify deploy --prod --dir=dist`

### SPA Routing Note

The `netlify.toml` contains:

```
[[redirects]]
	from = "/*"
	to = "/index.html"
	status = 200
```

This ensures client-side routes work when users refresh or hit deep links.

## Backend (Optional)

An Express server exists in `../backend/`.

- Local run (from `backend/`):
	- Install: `npm install`
	- Start: `node app.js` (listens on `PORT` or 3000)

For production, deploy the backend to a service that supports Node servers (e.g., Render, Railway, Fly.io) and set `VITE_API_URL` to the backend URL in Netlify. Netlify Functions are also an option, but would require moving backend code into `netlify/functions/` and adapting routes.

## Troubleshooting

- Blank page after deploy or 404 on refresh: ensure the SPA redirect is present (already handled by `netlify.toml`).
- Build fails on Netlify:
	- Check Node version (use 18+). You can set environment variable `NETLIFY_USE_YARN=false` and rely on npm by default.
	- Ensure lockfile is committed (package-lock.json) for reproducible installs, if used.
	- Verify `npm run build` works locally.
- API calls fail in production: verify `VITE_API_URL` is set in Netlify and CORS is allowed by your backend.

## License

This project is provided as-is by its author. Add a license if you’d like to open-source it (MIT is a common choice).

## Acknowledgements

- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
