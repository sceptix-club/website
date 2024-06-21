import React from "react";
import Image from "next/image";
import { assetsPrefix } from "@/lib/helper";

type Props = {};

const DomainMobile = (props: Props) => {
  return (
    <div className="md:hidden relative flex font-fira_sans h-screen w-full max-w-screen flex-col justify-around rounded-lg bg-background">
      <span className="pointer-events-none w-full whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center  text-6xl font-extrabold font-fira_sans leading-none text-transparent from-white to-slate-900/10 lg:pb-12 ">
        Domains
      </span>
      <div className="flex justify-around flex-row px-5 pt-5">
        <Image
          src={`${assetsPrefix}/icons/domains/media.avif`}
          alt="media"
          width={100}
          height={100}
          className="rounded-full w-20 h-20 justify-center items-center"
        />
        <div className=" p-5 bg-[#000813] rounded-lg font-fira_sans">
          <div className="text-small font-bold">The Media team</div>
          <div className="text-tiny">We do Media</div>
        </div>
      </div>

      <div className="flex justify-around flex-row px-10 py-3 w-full min-w-full">
        <div className="p-5 bg-[#000813] rounded-lg font-fira_sans">
          <div className="text-small font-bold">The Web team</div>
          <div className="text-tiny">
            We build websites, just like this one.
          </div>
        </div>
        <Image
          src={`${assetsPrefix}/icons/domains/web.avif`}
          alt="web"
          width={80}
          height={80}
          className="rounded-full w-20 h-20 justify-center items-center ml-2"
        />
      </div>
      <div className="flex justify-around flex-row px-5 p-3">
        <Image
          src={`${assetsPrefix}/icons/domains/ai.avif`}
          alt="ai"
          width={100}
          height={100}
          className="rounded-full w-20 h-20 justify-center items-center"
        />
        <div className=" p-5 bg-[#000813] rounded-lg font-fira_sans">
          <div className="text-small font-bold">The AI team</div>
          <div className="text-tiny">Harnessing the Unknown</div>
        </div>
      </div>
      <div className="flex justify-around flex-row p-5">
        <div className="p-5 bg-[#000813] rounded-lg font-fira_sans">
          <div className="text-small font-bold">The App team</div>
          <div className="text-tiny">Handheld, for the go</div>
        </div>
        <Image
          src={`${assetsPrefix}/icons/domains/app.avif`}
          alt="design"
          width={80}
          height={80}
          className="rounded-full w-20 h-20 justify-center items-center m-2"
        />
      </div>
      <div className="flex justify-around flex-row p-5">
        <Image
          src={`${assetsPrefix}/icons/domains/game.avif`}
          alt="design"
          width={100}
          height={100}
          className="rounded-full w-20 h-20 justify-center items-center mr-2"
        />
        <div className=" p-5 bg-[#000813] rounded-lg font-fira_sans">
          <div className="text-small font-bold">The Game team</div>
          <div className="text-tiny">
            {" "}
            We do what&apos;s known as a Pro Gamer Move
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainMobile;
