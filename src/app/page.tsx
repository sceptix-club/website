// import { BoxRevealHero } from "@/components/BoxRevealHero";
import { DomainDock } from "@/components/DomainDock";
import { FlipWordsHero } from "@/components/FlipWordsHero";
import RetroGrid from "@/components/magicui/retro-grid";
import { RevealLinks } from "@/components/RevealLinks";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
// import { ScrollVelocity } from "@/components/ScrollVelocity";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center md:mt-[-80px] mt-[-110px] ">
        <Image
          src="https://sceptix-club.github.io/website-assets/icons/logo_square.png"
          alt="sceptix-logo"
          width={350}
          height={350}
          className="invert lg:mt-[-50px] mt-10 md:w-1/5 w-1/2"
        />
        <FlipWordsHero />
        <RetroGrid />
      </div>
      <ScrollTextReveal />
      <div className="h-screen bg-transparent">
        <DomainDock />
      </div>
      {/* <ScrollVelocity /> */}
      <div className="h-screen pt-16">
        <RevealLinks />
      </div>
    </>
  );
}
