import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Origin } from "@/components/Origin";
import { Roadmap } from "@/components/Roadmap";
import { Entry } from "@/components/Entry";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Origin />
        <Roadmap />
        <Entry />
      </main>
      <Footer />
    </>
  );
}
