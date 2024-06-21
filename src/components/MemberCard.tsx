"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Link from "next/link";
import { githubPrefix } from "@/lib/helper";

export function MemberCard({
  id,
  name,
  github_link,
  linkedin_link,
  quote,
  image,
  role,
}: {
  id: number;
  name: string;
  github_link: string;
  linkedin_link: string;
  quote: string;
  image?: string;
  role?: string;
}) {
  return (
    <CardContainer className="inter-var w-80 h-max">
      <CardBody className="bg-gray-50 relative group/card flex flex-col dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border text-center align-middle items-center ">
        <CardItem translateZ="80" className="w-full mt-4">
          <Image
            src={image ?? ""}
            alt="sceptix"
            width="800"
            height="300"
            className=" align-center rounded-lg"
          />
        </CardItem>
        <CardItem
          translateZ="80"
          as="h1"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4 text-center"
        >
          {name}
        </CardItem>
        {role && (
          <CardItem
            as="p"
            translateZ="70"
            className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
          >
            {role}
          </CardItem>
        )}
        <CardItem
          as="p"
          translateZ="70"
          className="text-neutral-500 text-xl max-w-sm dark:text-neutral-300 font-zilla mt-5"
        >
          &quot;{quote}&quot;
        </CardItem>
        <CardItem translateZ="80" className="justify-between mt-5 flex">
          {github_link && (
            <Link href={github_link}>
              <Image
                src="/icons/github.png"
                alt="github"
                width="40"
                height="40"
                className="invert mx-3"
              />
            </Link>
          )}
          {linkedin_link && (
            <Link href={linkedin_link} passHref>
              <Image
                src="/icons/linkedin.png"
                alt="github"
                width="40"
                height="40"
                className="invert mx-3"
              />
            </Link>
          )}
        </CardItem>
        <div className="flex justify-between items-center mt-2"></div>
      </CardBody>
    </CardContainer>
  );
}
