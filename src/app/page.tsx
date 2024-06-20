// import { BoxRevealHero } from "@/components/BoxRevealHero";
import { DomainDock } from "@/components/DomainDock";
import { FlipWordsHero } from "@/components/FlipWordsHero";
import RetroGrid from "@/components/magicui/retro-grid";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
// import { ScrollVelocity } from "@/components/ScrollVelocity";
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
    <div>
      <NavBar/>
      <div className="h-screen border flex justify-center items-center"></div>
      <ScrollTextReveal />
      <div className="h-screen border bg-transparent"></div>
      {/* <ScrollVelocity /> */}
      <div className="h-screen">
        <DomainDock />
      </div>
    </div>
    </>
  );
}
