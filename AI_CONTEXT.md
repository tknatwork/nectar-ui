# AI Context — nectar-ui

> Quick orientation for AI models. Full details in [CLAUDE.md](./CLAUDE.md).

## What is this?

A public React component library and design token system. Ships 6 components (Button, Card, Badge, Input, Textarea, ProjectLayout), 2 hooks (useTheme, useReducedMotion), and a cn() utility.

## Key facts

- **Build:** tsup (ESM-only) with a prebuild token compilation step
- **Tokens:** 3-tier JSON pipeline → CSS custom properties → Tailwind @theme
- **Styling:** cva + Tailwind v4 — never hardcode colors
- **Package manager:** pnpm only
- **Exports:** `nectar-ui` (JS), `nectar-ui/tokens.css`, `nectar-ui/theme.css`

## Rules

- Named exports only, no default exports
- Never edit `css/tokens.css` (generated)
- All PRs require CODEOWNERS review
- See CLAUDE.md for full conventions
