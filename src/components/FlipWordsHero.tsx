import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsHero() {
  const words = ["sceptix", "digital", " coding"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-8xl mx-auto font-fira_sans text-neutral-600 font-extrabold dark:text-neutral-400">
        The <FlipWords words={words} /> club
      </div>{" "}
    </div>
  );
}
