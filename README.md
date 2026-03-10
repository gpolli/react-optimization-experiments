# Project Template

A production-ready Next.js frontend template with TypeScript, component explorer, testing, API mocking, UI components, server-state management, and a fully automated code quality pipeline.

> Use this repository as a GitHub Template to bootstrap new projects with the full stack already configured.

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Stack Overview](#stack-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Stack Details](#stack-details)
  - [Framework](#framework)
  - [UI \& Styling](#ui--styling)
  - [Server State](#server-state)
  - [Component Explorer \& API Mocking](#component-explorer--api-mocking)
  - [Testing](#testing)
  - [Code Quality](#code-quality)
  - [Git Hooks](#git-hooks)

---

## Stack Overview

| Layer              | Library                  | Version |
| ------------------ | ------------------------ | ------- |
| Framework          | Next.js (App Router)     | 16      |
| Language           | TypeScript               | 5       |
| Styling            | Tailwind CSS             | 4       |
| UI Components      | shadcn/ui                | 3       |
| Server State       | TanStack Query           | 5       |
| Component Explorer | Storybook (nextjs-vite)  | 10      |
| API Mocking        | MSW                      | 2       |
| Testing            | Vitest + Testing Library | 4 / 16  |
| Linting            | ESLint                   | 9       |
| Formatting         | Prettier                 | 3       |
| Commit Linting     | Commitlint               | 20      |
| Git Hooks          | Husky + lint-staged      | 9 / 16  |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css       # Tailwind + shadcn CSS variables
├── components/
│   └── ui/               # shadcn/ui generated components
├── hooks/                # Custom React hooks
└── lib/
    └── utils.ts          # cn() utility (clsx + tailwind-merge)

.storybook/               # Storybook configuration + Vitest setup
.husky/                   # Git hooks (pre-commit, commit-msg)
public/
└── mockServiceWorker.js  # MSW service worker
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 10

### Installation

```bash
# 1. Clone or use this template from GitHub
git clone <repo-url>
cd <project-name>

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script                 | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `pnpm dev`             | Start Next.js development server               |
| `pnpm build`           | Build for production                           |
| `pnpm start`           | Start production server                        |
| `pnpm type-check`      | Run TypeScript compiler check (`tsc --noEmit`) |
| `pnpm lint`            | Run ESLint across the project                  |
| `pnpm lint:fix`        | Run ESLint and auto-fix violations             |
| `pnpm format`          | Format all files with Prettier                 |
| `pnpm format:check`    | Check formatting without writing               |
| `pnpm test`            | Run all Vitest projects in watch mode          |
| `pnpm test:unit`       | Run unit tests only (jsdom)                    |
| `pnpm test:storybook`  | Run Storybook component tests (Playwright)     |
| `pnpm test:coverage`   | Run unit tests with v8 coverage report         |
| `pnpm storybook`       | Start Storybook dev server on port 6006        |
| `pnpm build-storybook` | Build Storybook as a static site               |

---

## Stack Details

### Framework

**[Next.js](https://nextjs.org) (App Router) + TypeScript**

The core of the project. Uses the App Router for file-based routing, React Server Components, layouts, and metadata management. TypeScript is enabled in strict mode across the entire codebase.

Config files: [`next.config.ts`](next.config.ts), [`tsconfig.json`](tsconfig.json)

---

### UI & Styling

**[Tailwind CSS v4](https://tailwindcss.com)**

Utility-first CSS framework. Configured via a direct CSS import (`@import 'tailwindcss'`) in `globals.css` — no `tailwind.config.js` needed with v4.

Config files: [`postcss.config.mjs`](postcss.config.mjs), [`src/app/globals.css`](src/app/globals.css)

**[shadcn/ui](https://ui.shadcn.com)**

Collection of accessible, unstyled components built on Radix UI primitives, styled with Tailwind CSS. Components are copied directly into `src/components/ui/` and are fully customizable.

Add a component:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add <component-name>
```

Config file: [`components.json`](components.json)

**Supporting libraries**

- `tailwind-merge` — merges conflicting Tailwind classes without style collisions
- `clsx` — conditional class name utility, used inside `src/lib/utils.ts`
- `class-variance-authority` — type-safe component variant definitions (used by shadcn components)
- `lucide-react` — icon library used by shadcn components

---

### Server State

**[TanStack Query v5](https://tanstack.com/query)**

Handles all server state: data fetching, caching, background refetching, pagination, and mutations. `@tanstack/react-query-devtools` is available in development to inspect the query cache.

Wrap your app with `QueryClientProvider` in [`src/app/layout.tsx`](src/app/layout.tsx) to enable it.

---

### Component Explorer & API Mocking

**[Storybook 10](https://storybook.js.org) (`@storybook/nextjs-vite`)**

Isolated component development environment powered by Vite. Includes:

- `@storybook/addon-docs` — auto-generated component documentation
- `@storybook/addon-a11y` — accessibility audit in the Storybook UI
- `@storybook/addon-vitest` — run Vitest component tests from within Storybook
- `@chromatic-com/storybook` — Chromatic visual regression testing integration

Stories live alongside source files: `src/**/*.stories.{ts,tsx}`

Config files: [`.storybook/main.ts`](.storybook/main.ts), [`.storybook/preview.ts`](.storybook/preview.ts)

**[MSW (Mock Service Worker) v2](https://mswjs.io)**

API mocking at the network level using a Service Worker in the browser and Node.js interceptors in tests. Pre-configured in Storybook via `msw-storybook-addon`.

Define handlers in your stories:

```ts
parameters: {
  msw: {
    handlers: [
      http.get('/api/user', () => HttpResponse.json({ name: 'Alice' })),
    ],
  },
}
```

The worker script is at [`public/mockServiceWorker.js`](public/mockServiceWorker.js).

---

### Testing

**[Vitest v4](https://vitest.dev)**

Two test projects configured in [`vitest.config.ts`](vitest.config.ts):

| Project     | Environment           | Covers                                                |
| ----------- | --------------------- | ----------------------------------------------------- |
| `unit`      | jsdom                 | Unit and integration tests (`src/**/*.test.{ts,tsx}`) |
| `storybook` | Playwright (Chromium) | Story-based component tests                           |

Setup file for unit tests: [`vitest.setup.ts`](vitest.setup.ts) — imports `@testing-library/jest-dom` matchers.

**[@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)**

DOM testing utilities focused on user-visible behavior. Use alongside `@testing-library/user-event` for realistic user interaction simulation.

---

### Code Quality

**[ESLint v9](https://eslint.org)** — flat config format ([`eslint.config.mjs`](eslint.config.mjs))

Plugins enabled:

| Plugin                                              | Scope                     | Purpose                                      |
| --------------------------------------------------- | ------------------------- | -------------------------------------------- |
| `eslint-config-next` (core-web-vitals + typescript) | All files                 | Next.js and TypeScript rules                 |
| `eslint-plugin-storybook`                           | `*.stories.*`             | Storybook-specific rules                     |
| `@tanstack/eslint-plugin-query`                     | All files                 | Correct TanStack Query usage                 |
| `eslint-plugin-vitest`                              | `*.test.*`, `*.stories.*` | No skipped/focused tests, correct assertions |
| `eslint-plugin-testing-library`                     | `*.test.*`                | Testing Library best practices               |
| `eslint-plugin-simple-import-sort`                  | All files                 | Auto-sorts and groups import statements      |
| `eslint-plugin-prettier`                            | All files                 | Formatting enforced as lint errors           |

**[Prettier v3](https://prettier.io)** — config: [`.prettierrc`](.prettierrc)

Plugins enabled:

- `prettier-plugin-tailwindcss` — automatically sorts Tailwind CSS classes in the recommended order on every save/format

---

### Git Hooks

**[Husky v9](https://typicode.github.io/husky)** + **[lint-staged v16](https://github.com/lint-staged/lint-staged)**

Two hooks are configured in [`.husky/`](.husky/):

| Hook         | Trigger                      | Action                                                    |
| ------------ | ---------------------------- | --------------------------------------------------------- |
| `pre-commit` | Before every commit          | Runs `lint-staged`: ESLint fix + Prettier on staged files |
| `commit-msg` | After writing commit message | Runs `commitlint` to validate the message format          |

**[Commitlint](https://commitlint.js.org)** — config: [`commitlint.config.ts`](commitlint.config.ts)

Enforces [Conventional Commits](https://www.conventionalcommits.org) format:

```
<type>(optional scope): <description>

Types: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert
```

Examples:

```bash
git commit -m "feat(auth): add login page"
git commit -m "fix: correct button alignment"
git commit -m "chore: update dependencies"
```
