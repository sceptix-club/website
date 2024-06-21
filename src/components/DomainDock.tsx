"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assetsPrefix } from "@/lib/helper";
import { Tooltip } from "@nextui-org/tooltip";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DomainDock() {
  return (
    <div className="relative hidden md:flex font-fira_sans h-screen w-full max-w-screen flex-col md:justify-center justify-around md:py-20 items-end md:pt-20 md:overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="pointer-events-none w-full whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center md:text-9xl text-7xl font-extrabold font-fira_sans leading-none text-transparent from-white to-slate-900/10 md:pb-12 ">
        Domains
      </span>
      <Dock className="md:pb-24 md:mt-20 mt-0 font-jetbrains">
        <DockIcon>
          <Tooltip
            offset={20}
            closeDelay={1000}
            showArrow={true}
            placement="bottom"
            color="primary"
            content={
              <div className=" p-5 bg-[#000813] rounded-lg font-fira_sans">
                <div className="text-small font-bold">The Media team</div>
                <div className="text-tiny">We do Media</div>
              </div>
            }
          >
            <Image
              src={`${assetsPrefix}/icons/domains/media.avif`}
              alt="media"
              width={80}
              height={80}
              className="rounded-full w-full"
            />
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip
            offset={20}
            closeDelay={1000}
            showArrow={true}
            placement="bottom"
            color="primary"
            content={
              <div className="p-5 bg-[#000813] rounded-lg font-fira_sans">
                <div className="text-small font-bold">The Web team</div>
                <div className="text-tiny">
                  We build websites, just like this one.
                </div>
              </div>
            }
          >
            <Image
              src={`${assetsPrefix}/icons/domains/web.avif`}
              alt="web"
              width={80}
              height={80}
              className="rounded-full w-full"
            />
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip
            offset={20}
            closeDelay={1000}
            showArrow={true}
            placement="bottom"
            color="primary"
            content={
              <div className=" p-5 bg-[#000813] rounded-lg font-fira_sans">
                <div className="text-small font-bold">The AI team</div>
                <div className="text-tiny">Harnessing the Unknown</div>
              </div>
            }
          >
            <Image
              src={`${assetsPrefix}/icons/domains/ai.avif`}
              alt="ai"
              width={80}
              height={80}
              className="rounded-full w-full"
            />
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip
            offset={20}
            closeDelay={1000}
            showArrow={true}
            placement="bottom"
            color="primary"
            content={
              <div className=" p-5 bg-[#000813] rounded-lg font-fira_sans">
                <div className="text-small font-bold">The App team</div>
                <div className="text-tiny">Handheld, for the go</div>
              </div>
            }
          >
            <Image
              src={`${assetsPrefix}/icons/domains/android.avif`}
              alt="app"
              width={80}
              height={80}
              className="rounded-full w-full"
            />
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip
            offset={20}
            closeDelay={1000}
            showArrow={true}
            placement="bottom"
            color="primary"
            content={
              <div className=" p-5 bg-[#000813] rounded-lg font-fira_sans">
                <div className="text-small font-bold">The Game team</div>
                <div className="text-tiny">
                  We do what&apos;s known as a Pro Gamer Move
                </div>
              </div>
            }
          >
            <Image
              src={`${assetsPrefix}/icons/domains/game.avif`}
              alt="game"
              width={80}
              height={80}
              className="rounded-full w-full"
            />
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
