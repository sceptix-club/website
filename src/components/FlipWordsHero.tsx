import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";

export function FlipWordsHero() {
  const words = [" sceptix ", " virtual ", " coding "];

  return (
    <div className="h-1/3 flex justify-center items-center px-4">
      <div className="md:text-9xl text-7xl text-center mx-auto font-fira_sans text-neutral-600 font-extrabold dark:text-neutral-400">
        The <FlipWords words={words} /> club
      </div>{" "}
    </div>
  );
}
