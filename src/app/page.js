import ArtComponent from "./art-component";
import HeroBanner from "./hero-banner";
import Nav from "./nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Nav />
      <HeroBanner />
      <ArtComponent />
    </main>
  );
}
