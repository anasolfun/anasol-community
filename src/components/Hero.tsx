"use client";

import { useState } from "react";
import { HeroObject } from "./HeroObject";
import { ArrowUpRight, GithubLogo, StreamflowLogo, XLogo } from "./icons";
import { brand, links, token } from "@/config/brand";

const BARS = [38, 62, 44, 88, 70, 52];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyMint = async () => {
    try {
      await navigator.clipboard.writeText(token.mint);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div>
          <p className="kicker">Solana // analog signal</p>

          <h1 className="display-hero" style={{ marginTop: 18 }}>
            {token.name}
            <span className="hero-ticker">{token.ticker}</span>
          </h1>

          <p className="hero-line">Not a rendering. A recording.</p>

          <p className="lede" style={{ marginTop: 16 }}>
            {brand.name} is what the chain looks like once it stops behaving like
            a chart — a warm, grainy object pressed out of the same signal
            everyone else prints in straight lines.
          </p>

          <div className="hero-actions">
            <a
              className="pill pill-solid"
              href={token.buyUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Enter on Pump.fun
              <ArrowUpRight />
            </a>
            <a className="pill" href={links.x} target="_blank" rel="noreferrer noopener">
              <XLogo size={14} />
              X / Twitter
            </a>
            <a className="pill" href={links.github} target="_blank" rel="noreferrer noopener">
              <GithubLogo size={14} />
              GitHub
            </a>
            <a className="pill" href={links.streamflow} target="_blank" rel="noreferrer noopener">
              <StreamflowLogo size={14} />
              Streamflow
            </a>
          </div>

          <div className="ca-card">
            <div style={{ minWidth: 0 }}>
              <p className="kicker">Contract address</p>
              <p className="ca-value">{token.mint}</p>
            </div>
            <button className="copy-btn" type="button" onClick={copyMint}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="object-stage">
          <HeroObject />

          <div className="chip">
            <span>Signal</span>
            <b>Warm</b>
            <span>Grain</span>
            <b>Heavy</b>
          </div>

          <div className="meter" aria-hidden="true">
            {BARS.map((height, i) => (
              <i
                key={i}
                style={{ height: `${height}%`, animationDelay: `${i * 0.13}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
