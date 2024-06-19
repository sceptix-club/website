import Image from "next/image";
// import { Domain } from "@/components/sections/Domain";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import Hero from "@/components/sections/Hero";
import { DomainDock } from "@/components/DomainDock";
import Beam from "@/components/Beam";

export default function Home() {
  return (
    <>
      <div className="h-screen">{/* <Hero /> */}</div>
      <div className="h-screen">About Us</div>
      <div className="h-screen">
        <DomainDock />
      </div>
    </>
  );
}
