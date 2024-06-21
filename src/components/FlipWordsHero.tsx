import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";

export function FlipWordsHero() {
  const words = [" sceptix ", " F O S S ", " virtual ", "sceptix", " coding "];

  return (
    <div className="h-min mt-10 flex  justify-center items-center px-4">
      <div className="lg:text-9xl text-7xl text-center mx-auto font-fira_sans text-neutral-600 font-extrabold dark:text-neutral-400 opacity-75  z-10">
        The <br className="block lg:hidden " />
        <FlipWords words={words} className="z-10 opacity-100" />
        <br className="block lg:hidden" /> club
      </div>{" "}
    </div>
  );
}
