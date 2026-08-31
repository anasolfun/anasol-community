import { Reveal } from "./Reveal";
import { token } from "@/config/brand";

const specs = [
  { label: "Surface", value: "Analog" },
  { label: "State", value: "Glowing" },
  { label: "Network", value: "Solana" },
];

export function Origin() {
  return (
    <section className="section" id="origin">
      <div className="shell">
        <Reveal>
          <p className="kicker">01 / Origin</p>
          <div className="head-split" style={{ marginTop: 20 }}>
            <h2 className="display">
              The chart went cold.
              <br />
              {token.name} stayed warm.
            </h2>
            <p className="lede">
              A visual-first token built on one stubborn question: what would
              this network look like if it had been recorded to tape instead of
              rendered to a screen?
            </p>
          </div>
        </Reveal>

        <div className="duo">
          <Reveal>
            <div className="card" style={{ height: "100%" }}>
              <p className="story">
                Everything here is drawn at the same temperature.{" "}
                <span className="fade">
                  Flat colour, hard edges, one more clean chart in a feed of
                  clean charts.
                </span>{" "}
                {token.name} is the take that got kept instead: a glass disc with
                two bands running through it, warm where the rest of the screen
                is cold, and slightly wrong in a way nobody wanted to fix.
              </p>
              <p className="mono" style={{ marginTop: 26, textAlign: "right" }}>
                ANASOL://FORM=ANALOG / SIGNAL=WARM / MASTER=UNCUT
              </p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="card card-lit" style={{ height: "100%" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em" }}>
                Signal scan
              </h3>

              <div className="dial">
                <svg width="188" height="188" viewBox="0 0 188 188" fill="none" aria-hidden="true">
                  <circle cx="94" cy="94" r="86" stroke="rgba(220,255,229,0.10)" strokeWidth="1" />
                  <circle cx="94" cy="94" r="66" stroke="rgba(220,255,229,0.16)" strokeWidth="1" />
                  <circle
                    cx="94"
                    cy="94"
                    r="76"
                    stroke="rgba(157,255,190,0.5)"
                    strokeWidth="1.5"
                    strokeDasharray="3 7"
                  />
                </svg>
                <p className="dial-value">
                  <span style={{ fontSize: 46 }}>100</span>
                  <span style={{ fontSize: 12, letterSpacing: "0.1em" }}>
                    % {token.symbol}
                  </span>
                </p>
              </div>

              <div>
                {specs.map((spec) => (
                  <p key={spec.label} className="spec">
                    <span>{spec.label}</span>
                    <b>{spec.value}</b>
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
