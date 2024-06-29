// import { BoxRevealHero } from "@/components/BoxRevealHero";
import { DomainDock } from "@/components/DomainDock";
import DomainMobile from "@/components/DomainMobile";
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
          src="https://sceptix-club.github.io/website-assets/icons/logo_png.png"
          alt="sceptix-logo"
          width={350}
          height={350}
          className=" invert lg:mt-[-50px] mt-10 md:w-1/5 w-1/2"
        />
        <FlipWordsHero />
        <RetroGrid />
      </div>
      <ScrollTextReveal />
      <div className="h-screen bg-transparent">
        <DomainDock />
        <DomainMobile />
      </div>
      <div className="h-screen  p-5 md:px-20 flex flex-col justify-center items-center ">
        <h1 className="pointer-events-none w-full whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center md:text-7xl lg:text-9xl text-5xl font-black font-fira_sans leading-none text-transparent from-white to-slate-900/10 pb-12 ">
          Explore more
        </h1>
        <RevealLinks />
      </div>
    </>
  );
}
