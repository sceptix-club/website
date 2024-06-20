"use client";
import React, { useState } from "react";
import { DomainDock } from "@/components/DomainDock";
import { FlipWordsHero } from "@/components/FlipWordsHero";
import RetroGrid from "@/components/magicui/retro-grid";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
// import { ScrollVelocity } from "@/components/ScrollVelocity";
import Image from "next/image";
import Loading from "@/components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="h-screen flex justify-center items-center">
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
