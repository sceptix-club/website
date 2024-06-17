import Image from "next/image";
import { Domain } from "@/components/sections/Domain";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Hero />
      </div>
      <div className="h-screen">About Us</div>
      <div className="h-screen">
        <h1>Domains</h1>
        {/* <Domain /> */}
        {/* <LayoutGridDemo /> */}
      </div>
    </>
  );
}
