"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./icons";
import { nav, token } from "@/config/brand";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="nav-wrap">
      <nav className="nav" data-scrolled={scrolled}>
        <a className="nav-brand" href="#top">
          <img className="nav-mark" src="/logo.webp" alt="" width={946} height={763} />
          {token.name} <span>/ {token.ticker}</span>
        </a>

        <div className="nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="pill pill-solid"
          href={token.buyUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Pump.fun
          <ArrowUpRight />
        </a>
      </nav>
    </div>
  );
}
