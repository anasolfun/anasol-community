# Anasol

Site for **Anasol** ($ANASOL) — a visual-first Solana token built around one
idea: what the chain would look like recorded to tape instead of rendered to a
screen.

Live: [anasol.fun](https://anasol.fun)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19)
- TypeScript
- Tailwind CSS v4 plus a hand-written design layer in `src/app/globals.css`
- Inter via `next/font/google`
- Fully static: no database, no analytics, no wallet connection

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

```bash
npm run build     # production build
npm start         # serve the production build
npx tsc --noEmit  # type check
```

## Project layout

```
src/
  app/
    page.tsx        the whole page
    layout.tsx      font and metadata
    globals.css     design tokens and component styles
    icon.svg        favicon
  components/       one file per section
  config/brand.ts   name, token, links — single source of truth
```

## Editing the token details

Everything brand-specific lives in `src/config/brand.ts`: token name, symbol,
mint address, and every outbound link. Change the mint there and the hero, the
navigation button, and the Pump.fun links all follow.

## License

MIT — see [LICENSE](LICENSE).
