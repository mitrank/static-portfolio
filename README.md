## Portfolio for Mitrank Shah (Next.js)

A minimal, modern static portfolio built with Next.js (App Router). This repository contains a small, component-driven site under `src/app` and `src/components` designed to showcase projects, skills, and contact information.

Key goals:

- Fast static site with server-side-ready layout using the Next.js App Router
- Easy to customize components and sections
- Ready to deploy to Vercel or any static host that supports Next.js

---

## Tech stack

- Next.js (App Router)
- React
- PostCSS (configured)
- Plain CSS modules / global CSS in `src/app/globals.css`

## Quick start

Prerequisites:

- Node.js (LTS recommended; Node 16+ or later is typical for modern Next.js)
- npm (or yarn / pnpm if you prefer)

Install and run locally:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production and preview:

```bash
npm run build
npm run start
```

Notes:

- If your environment uses `pnpm` or `yarn`, use the equivalent commands (e.g. `pnpm install`, `pnpm dev`).
- If you run into Node version or dependency issues, try upgrading to the latest LTS Node.

## Project structure (important files)

Top-level layout (relative to repo root):

- `package.json` — project scripts and dependencies
- `next.config.mjs` — Next.js configuration
- `postcss.config.mjs` — PostCSS config
- `src/app/` — Next.js App Router entry
  - `globals.css` — global styles
  - `layout.js` — root layout
  - `page.js` — home page (compose sections here)
- `src/components/` — UI components
  - `Icons.jsx` — SVG/icon components
  - `ProjectCard.jsx` — component for each project
  - `sections/` — page sections (Hero, About, Projects, Skills, Contact, Footer, Header)
- `public/images/` — static images for projects, avatars and logos

This repository ships a small collection of section components in `src/components/sections` used by the home page.

## How to customize

- Edit the page content: open `src/app/page.js` to rearrange sections or update copy.
- Update site-wide layout/meta: edit `src/app/layout.js`.
- Add/modify projects: update the data where `ProjectCard` is used (likely in `src/components/sections/Projects.jsx`) and put project images under `public/images/`.
- Update styles: change `src/app/globals.css` or edit/add component-specific CSS.
- Icons: `src/components/Icons.jsx` contains reusable icons — add or change icons there.

Tip: keep content data (projects/skills) in a small JS/JSON file and map over it in the section components to keep components stateless and easy to maintain.

## Deployment

Recommended: Vercel (first-class support for Next.js)

1. Push this repository to GitHub (or Git provider).
2. Import the repo in Vercel (https://vercel.com) and follow the prompts. Default settings for Next.js work out of the box.

Alternate hosts: Netlify or another provider that supports Next.js. For static export you can also use `next export` if the app is fully static (no server-only features).

## Developing and extending

- Add a new section component in `src/components/sections` and import it in `src/app/page.js`.
- Reuse `ProjectCard.jsx` for new project entries — it keeps a consistent layout.
- Keep assets under `public/images` and reference them with `/images/your-file.png` in components.

## Tests & linting

This project does not include a test suite by default. Consider adding:

- Jest + React Testing Library for unit/component tests
- ESLint/Prettier for linting and formatting

## Contributing

Contributions are welcome. A simple workflow:

1. Fork the repo
2. Create a feature branch
3. Open a pull request describing your change

Please keep changes focused and add a short description of why the change helps the portfolio.

## License

No license file is included in this repository. If you want to make this project open source, add a `LICENSE` file (for example, MIT) and update this section.

## Contact

If you want help customizing or deploying this portfolio, edit the `Contact.jsx` section or open an issue / PR with details for the change you want.

---

Small assumptions I made:

- `package.json` exposes normal Next.js scripts (dev/build/start). If your scripts use different names (for example `dev` vs `start:dev`), use those instead.
- Node 16+ is sufficient for running this project; if you require a specific Node version, add an `.nvmrc` or `engines` field in `package.json`.

If you'd like, I can also:

- Add a minimal CONTRIBUTING.md and CODE_OF_CONDUCT
- Add an MIT `LICENSE` file
- Add a short `README` badge and screenshot from `public/images` for the home page
