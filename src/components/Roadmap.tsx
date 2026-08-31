import { Reveal } from "./Reveal";
import { token } from "@/config/brand";

const phases = [
  {
    n: "Phase 01",
    title: "Record",
    copy: "Cut the master: fix the visual language, launch the token, and put one address on one site that anyone can check.",
    state: "Master cut",
  },
  {
    n: "Phase 02",
    title: "Press",
    copy: "Run the copies. Short clips, still frames, and community edits built on the glass object rather than on a chart.",
    state: "Copies spreading",
  },
  {
    n: "Phase 03",
    title: "Bleed",
    copy: "Let the colour run. Site updates and visual drops that react to whatever the market and the room are doing that week.",
    state: "Colour bleeding",
  },
  {
    n: "Phase 04",
    title: "Loop",
    copy: "Hand the tape over. Community versions, remixes, and whatever shape the signal takes once it stops being ours.",
    state: "Loop open",
  },
];

export function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <div className="shell">
        <Reveal>
          <p className="kicker">02 / Roadmap</p>
          <div className="head-split" style={{ marginTop: 20 }}>
            <h2 className="display">Four passes of {token.name}.</h2>
            <p className="lede">
              No boardroom slides. The plan follows the object: record it, press
              it, let it bleed, then hand the loop to whoever wants it.
            </p>
          </div>
        </Reveal>

        <div className="phases">
          {phases.map((phase, i) => (
            <Reveal key={phase.n} delay={i * 80}>
              <article className="card phase" style={{ height: "100%" }}>
                <p className="mono" style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  {phase.n}
                </p>
                <h3>{phase.title}</h3>
                <p>{phase.copy}</p>
                <p className="phase-state">{phase.state}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
