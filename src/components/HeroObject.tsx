/**
 * The hero object: the Anasol mark, blown up and lit from behind.
 *
 * The mark ships as a `.webp` instead of a drawn path — the glass in the real
 * artwork has a depth no inline SVG would carry honestly. Only the halo is
 * still drawn, in CSS, so the glow stays tied to the page's mint rather than
 * being baked into the file.
 *
 * Plain <img> on purpose: next/image buys nothing here and has bitten this
 * project's smaller marks before.
 */
export function HeroObject() {
  return (
    <div className="object" aria-hidden="true">
      <span className="object-halo" />
      <img src="/logo.webp" alt="" width={946} height={763} />
    </div>
  );
}
