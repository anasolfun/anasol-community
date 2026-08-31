import { Reveal } from "./Reveal";
import { GithubLogo, StreamflowLogo, TargetMark, XLogo } from "./icons";
import { links, token } from "@/config/brand";

const entries = [
  {
    name: "X / Twitter",
    note: "Drops, stills, and daily signal noise.",
    href: links.x,
    Icon: XLogo,
  },
  {
    name: "Pump.fun",
    note: `The official ${token.name} launch page.`,
    href: token.buyUrl,
    Icon: TargetMark,
  },
  {
    name: "GitHub",
    note: "The source behind this page.",
    href: links.github,
    Icon: GithubLogo,
  },
  {
    name: "Streamflow",
    note: "Vesting and treasury movement, in the open.",
    href: links.streamflow,
    Icon: StreamflowLogo,
  },
];

export function Entry() {
  return (
    <section className="section" id="entry">
      <div className="shell">
        <Reveal>
          <p className="kicker">03 / Entry points</p>
          <h2 className="display" style={{ marginTop: 20 }}>
            Find the signal.
          </h2>
        </Reveal>

        <div className="entries">
          {entries.map(({ name, note, href, Icon }, i) => (
            <Reveal key={name} delay={i * 90}>
              <a
                className="card entry"
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                style={{ height: "100%" }}
              >
                <Icon size={18} className="entry-mark" />
                <div>
                  <h3>{name}</h3>
                  <p>{note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
