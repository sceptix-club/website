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
      <div className="h-screen flex flex-col justify-center items-center md:mt-[-80px] mt-[-110px]">
        <Image
          src="https://sceptix-club.github.io/website-assets/icons/logo_square.png"
          alt="sceptix-logo"
          width={300}
          height={300}
          className="invert mt-[-50px]"
        />
        <FlipWordsHero />
        <RetroGrid />
      </div>
      <ScrollTextReveal />
      <div className="h-screen bg-transparent">
        <DomainDock />
      </div>
      {/* <ScrollVelocity /> */}
      <div className="h-screen border"></div>
    </>
  );
}
