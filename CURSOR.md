# CMAC Resource Center (Cursor Briefing)

This repo is a **Vite + React + TypeScript** single-page app for the **CMAC Resource Center**: a curated internal hub that links to company docs/forms/calendars, provides a team + builder directory, shows a ticker/banner, and includes a search experience. It is **frontend-only** (no server in this repo) and is organized around React pages under `src/pages/` rendered via `HashRouter`, with shared UI components in `src/components/` (including shadcn/ui in `src/components/ui/`) and mostly **static data** (hardcoded arrays + external links).

## Repo map (important files only)

```text
/
  CURSOR.md
  README.md
  package.json
  vite.config.ts
  index.html
  eslint.config.js
  tailwind.config.ts
  postcss.config.js
  tsconfig*.json
  components.json
  next.config.js
  public/
    favicon.ico
    og-image.png
    CMAC_w_Favicon_Final.png
    Apple-Touch-Favicon-removebg-preview.png
  src/
    main.tsx
    App.tsx
    index.css
    lib/utils.ts
    data/searchData.ts
    pages/
      Index.tsx
      CmacProcesses.tsx
      CmacForms.tsx
      CmacSafety.tsx
      CompanyCalendar.tsx
      SlackTutorials.tsx
      TeamDirectory.tsx
      BuilderDirectory.tsx
    components/
      HeroSection.tsx
      SearchBar.tsx
      ModernNavigation.tsx
      ModernResourceCard.tsx
      ModernTicker.tsx
      NotificationBanner.tsx
      SlackRollout.tsx
      ResourceCard.tsx
      ThemeToggle.tsx
      CustomCursor.tsx
      ScrollProgress.tsx
      ui/   (shadcn/ui component library)
    ticker/tickerContent.ts
```

## How to run locally

```bash
npm install
npm run dev
```

- Dev server is Vite, configured in `vite.config.ts` to bind `host: "::"` and `port: 8080`.
- This is an SPA using `HashRouter`, so routes look like `/#/team-directory` when deployed on static hosting.

## How to test

```bash
npm run lint
```

- **Unit/integration tests**: **Not found** (searched for `vitest/jest/cypress/playwright`, `__tests__`, `*test*` files).

## How to build/deploy

```bash
npm run build
npm run preview
```

- Build output is Vite’s default `dist/` folder (no custom output path found).
- **CI workflows**: **Not found** (no `.github/workflows/` in this repo).
- README notes deployment via Lovable (“Share → Publish”) in `README.md`.

## Entry points (startup / boot)

- **HTML entry**: `index.html`
  - Mount node: `<div id="root"></div>`
  - Loads app: `<script type="module" src="/src/main.tsx"></script>`
  - Loads third-party scripts (see “Danger zones”)
- **React boot**: `src/main.tsx`
  - `createRoot(...).render(<App />)`
- **App shell / routing**: `src/App.tsx`
  - Providers: React Query `QueryClientProvider`, `ThemeProvider` (from `next-themes`), shadcn `TooltipProvider`, `Toaster`
  - Routing: `HashRouter` + `Routes` for all pages

## Routes (client-side)

Defined in `src/App.tsx`:

- `/` → `src/pages/Index.tsx`
- `/cmac-processes` → `src/pages/CmacProcesses.tsx`
- `/cmac-safety` → `src/pages/CmacSafety.tsx`
- `/team-directory` → `src/pages/TeamDirectory.tsx`
- `/cmac-forms` → `src/pages/CmacForms.tsx`
- `/company-calendar` → `src/pages/CompanyCalendar.tsx`
- `/slack-tutorials` → `src/pages/SlackTutorials.tsx`
- `/builder-directory` → `src/pages/BuilderDirectory.tsx`

## Key modules / components

- **App composition + providers + routing**: `src/App.tsx`
- **Homepage and quick-access cards**: `src/pages/Index.tsx`
  - Uses `HeroSection`, `ModernTicker`, `ModernResourceCard`, `SlackRollout`, `NotificationBanner`
- **Global navigation**: `src/components/ModernNavigation.tsx`
  - Shows/hides on scroll; uses `ThemeToggle`
- **Search data catalog**: `src/data/searchData.ts`
  - Central list for “searchable resources” (internal routes + external Google Docs/Forms/Calendar links)
- **Hero search UX**: `src/components/HeroSection.tsx`
  - Searches `searchableResources`; navigates to the first match (or falls back to `/team-directory`)
- **Search bar + “AI fallback”**: `src/components/SearchBar.tsx`
  - Filters `searchableResources`; if no results, POSTs to an external API and shows the response in a toast
- **Directories**:
  - Team directory: `src/pages/TeamDirectory.tsx` (large static member list + email→calendar mapping)
  - Builder directory: `src/pages/BuilderDirectory.tsx` (static Lennar contacts)
- **Ticker content**: `src/ticker/tickerContent.ts`
- **shadcn/ui primitives**: `src/components/ui/*` + `components.json` + `src/lib/utils.ts` (`cn()` helper)
- **Styling**: Tailwind + custom utilities in `src/index.css`, Tailwind config in `tailwind.config.ts`

## Config / environment variables

- **Environment variables**: **Not found** (no `.env*` files and no `import.meta.env`/`process.env` usage found).
- **Tooling/config files**:
  - Vite: `vite.config.ts` (port/host, `@` alias, `lovable-tagger` in development)
  - TypeScript: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
  - ESLint: `eslint.config.js` (ESLint 9 + typescript-eslint; `@typescript-eslint/no-unused-vars` disabled)
  - Tailwind/PostCSS: `tailwind.config.ts`, `postcss.config.js`
  - shadcn config: `components.json`
  - **Next.js config**: `next.config.js` exists, but this repo runs via Vite (treat `next.config.js` as likely legacy/unused unless you confirm otherwise).

## Data layer

- **Database / ORM / migrations**: **Not found**.
- **Primary “data sources”**:
  - Hardcoded arrays and mappings in `src/pages/*` and `src/data/searchData.ts`
  - Team directory employees sourced from `src/data/teamDirectoryEmployees.ts` (used by `src/pages/TeamDirectory.tsx`)
  - External URLs (Google Docs, Google Forms, Google Calendar embeds, YouTube)
  - One external POST API call (see request/response flow below)

## Logging / observability / error handling

- **Logging**: minimal `console.log` in `src/pages/Index.tsx`.
- **User-facing errors**: handled via shadcn toast (`src/components/SearchBar.tsx` uses `try/catch` and shows a destructive toast on error).
- **Observability** (Sentry, OpenTelemetry, etc.): **Not found**.

## Architectural notes + request/response flow

This app is a **static SPA**:

- **Boot flow**:
  - Browser loads `index.html` → `src/main.tsx` mounts React → `src/App.tsx` sets providers + router.
- **Navigation**:
  - `HashRouter` updates the URL hash and renders the appropriate page component.
- **Search flow (local-first)**:
  - `HeroSection` (`src/components/HeroSection.tsx`) and `SearchBar` (`src/components/SearchBar.tsx`) both search `searchableResources` from `src/data/searchData.ts`.
  - If a match is external, it opens a new tab via `window.open(...)`; if internal, it navigates within the router.
- **Search flow (AI fallback)**:
  - If `SearchBar` finds no results, it sends an HTTP `POST` to an external endpoint and shows the response in a toast.

## Coding conventions / quality gates

- **TypeScript**: present but configured as **non-strict** (`strict: false` in `tsconfig.app.json`; additional loosened options in `tsconfig.json`).
- **Lint**: `npm run lint` runs ESLint over the repo.
- **Formatting**: **Not found** (no Prettier config/scripts detected).
- **Tests**: **Not found**.

## Danger zones (read before changing)

- **Hardcoded API key + external AI endpoint (client-side)**: `src/components/SearchBar.tsx`
  - Sends requests to `https://427b-132-147-144-208.ngrok-free.app/api/chat/completions`
  - Includes an `Authorization: Bearer ...` token directly in frontend code (will ship to browsers in the JS bundle).
- **Third-party scripts in `index.html`**:
  - `https://cdn.gpteng.co/gptengineer.js`
  - `https://agentivehub.com/production.bundle.min.js` (loads a chat widget via `window.myChatWidget.load(...)`)
- **Third-party script injection at runtime**: `src/components/SlackRollout.tsx`
  - Injects a Curator.io script from `https://cdn.curator.io/...`
- **Potential placeholder link**: `src/pages/CmacSafety.tsx`
  - One resource uses `link: "#"` (verify intended behavior)

## Gotchas + TODOs

- **Duplicate/unused tooling artifacts**: `next.config.js` exists but the project runs on Vite.
- **React Query is provisioned but appears unused**: `QueryClientProvider` is set up in `src/App.tsx`, but no `useQuery/useMutation` calls were found.
- **Static hosting routing**: because this uses `HashRouter`, do not switch to `BrowserRouter` without adding server-side rewrites.
- **Security review recommended**:
  - Remove/rotate client-exposed tokens; consider moving AI calls behind a server you control.
  - Audit third-party scripts (supply-chain, privacy, CSP).
- **Documentation maintenance**: this `CURSOR.md` is intended to be the living “Cursor onboarding brief” for this repo—update it when you add CI, tests, env config, or a backend.

## Change log

- 2026-03-16: Added Team Directory entries for **Mirtha Rodriguez** (Bolt - Services) and **Carner Rury** (CMAC Services) in `src/data/teamDirectoryEmployees.ts`.
- 2026-06-01: Added featured **CMAC Material Tracker** card at top of `src/pages/CmacTools.tsx` linking to `https://materials.cmacroofing.com/` with prominent `materials.cmacroofing.com` display.

