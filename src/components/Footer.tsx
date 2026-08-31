import { brand, token } from "@/config/brand";

export function Footer() {
  return (
    <footer className="shell">
      <div className="foot">
        <p>
          <b>
            {token.name} / {token.ticker}
          </b>{" "}
          — {brand.tagline.toLowerCase()}
        </p>
        <p>A memecoin, made for fun. It promises nothing and guarantees nothing.</p>
      </div>
    </footer>
  );
}
