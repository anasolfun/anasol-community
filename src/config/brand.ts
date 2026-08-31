export const brand = {
  name: "Anasol",
  domain: "anasol.fun",
  url: "https://anasol.fun",
  tagline: "Analog signal on Solana.",
  description:
    "Anasol is a visual-first Solana token built around one idea: what the chain would look like if it were recorded to tape instead of rendered to a screen.",
} as const;

export const token = {
  name: "Anasol",
  symbol: "ANASOL",
  ticker: "$ANASOL",
  chain: "Solana",
  mint: "XXXXXXXXXXXXXXXXpump",
  get buyUrl() {
    return `https://pump.fun/coin/${this.mint}`;
  },
} as const;

export const links = {
  x: "https://x.com/anasol_fun",
  streamflow: "https://app.streamflow.finance/contract/solana/mainnet/",
  github: "https://github.com/anasolfun/anasol-community",
} as const;

export const nav = [
  { label: "Origin", href: "#origin" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Entry", href: "#entry" },
] as const;
