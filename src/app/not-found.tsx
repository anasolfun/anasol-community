import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="section" style={{ paddingTop: "calc(var(--nav-h) + 120px)" }}>
        <div className="shell">
          <p className="kicker">Error 404</p>
          <h1 className="display" style={{ marginTop: 20, maxWidth: "14ch" }}>
            Nothing recorded on this track.
          </h1>
          <p className="lede" style={{ marginTop: 22 }}>
            That page does not exist. Everything worth hearing is on the front
            page.
          </p>
          <Link className="pill pill-solid" href="/" style={{ marginTop: 30 }}>
            Back to the start
            <ArrowUpRight />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
