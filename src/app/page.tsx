// import { BoxRevealHero } from "@/components/BoxRevealHero";
import { DomainDock } from "@/components/DomainDock";
import { FlipWordsHero } from "@/components/FlipWordsHero";
import RetroGrid from "@/components/magicui/retro-grid";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
// import { ScrollVelocity } from "@/components/ScrollVelocity";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center md:mt-[-50px] mt-[-100px]">
        <Image
          src="https://sceptix-club.github.io/website-assets/icons/logo.png"
          alt="sceptix-logo"
          width={500}
          height={500}
          className="invert"
        />
        <FlipWordsHero />
        <RetroGrid />
      </div>
      <ScrollTextReveal />
      <div className="h-screen border bg-transparent"></div>
      {/* <ScrollVelocity /> */}
      <div className="h-screen">
        <DomainDock />
      </div>
    </>
  );
}
