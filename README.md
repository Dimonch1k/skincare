# Next.js Template

Minimal reusable starter built with Next.js App Router, TypeScript, Tailwind CSS v4, and Prettier.

## Included

- App Router with `layout`, `page`, `error`, and `not-found`
- Neutral global styles suitable for plain Tailwind or later `shadcn/ui` setup
- TypeScript path alias: `@/*`
- Prettier with import sorting
- Husky `pre-push` hook for local format checks

## Start

```bash
npm install
npm run dev
```

## Git Hooks

`husky` installs a local `pre-push` hook that runs `npm run format:check`.
If formatting is invalid, the push is blocked before the GitHub workflow fails.

## Template Rules

- Keep the starter minimal
- Add libraries only when a project actually needs them
- Prefer dependency-free defaults for shared pages like `error` and `not-found`

## Environment

Copy `.env.example` to `.env` if you need local environment variables.
