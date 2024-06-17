// "use client";
// import React, { MouseEvent } from "react";
// import {
//   SiAdobe,
//   SiApple,
//   SiFacebook,
//   SiGoogle,
//   SiLinkedin,
//   SiShopify,
//   SiSoundcloud,
//   SiSpotify,
//   SiTiktok,
//   SiFlutter,
//   SiGodotengine,
// } from "react-icons/si";
// import { IoIosGlobe } from "react-icons/io";
// import { ImVideoCamera } from "react-icons/im";
// import { LuBrainCircuit } from "react-icons/lu";
// import { useAnimate } from "framer-motion";
// import { IconType } from "react-icons";

// export const Domain = () => {
//   return (
//     <div className="bg-neutral-900 px-4 py-12">
//       <div className="mx-auto max-w-7xl">
//         <ClipPathLinks />
//       </div>
//     </div>
//   );
// };

// const ClipPathLinks = () => {
//   return (
//     <div className="divide-y divide-neutral-500 border border-neutral-500">
//       <div className="grid grid-cols-2 divide-x divide-neutral-500">
//         <LinkBox Icon={IoIosGlobe} href="#" />
//         <LinkBox Icon={SiFlutter} href="#" />
//       </div>
//       <div className="grid grid-cols-3 divide-x divide-neutral-500">
//         <LinkBox Icon={SiGodotengine} href="#" />
//         <LinkBox Icon={ImVideoCamera} href="#" />
//         <LinkBox Icon={LuBrainCircuit} href="#" />
//       </div>
//       {/* <div className="grid grid-cols-3 divide-x divide-neutral-500">
//         <LinkBox Icon={SiTiktok} href="#" />
//         <LinkBox Icon={SiSpotify} href="#" />
//         <LinkBox Icon={SiLinkedin} href="#" />
//       </div> */}
//     </div>
//   );
// };

// const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
// const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
// const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
// const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
// const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

// type Side = "top" | "left" | "bottom" | "right";
// type KeyframeMap = {
//   [key in Side]: string[];
// };

// const ENTRANCE_KEYFRAMES: KeyframeMap = {
//   left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   right: [TOP_LEFT_CLIP, NO_CLIP],
// };

// const EXIT_KEYFRAMES: KeyframeMap = {
//   left: [NO_CLIP, TOP_RIGHT_CLIP],
//   bottom: [NO_CLIP, TOP_RIGHT_CLIP],
//   top: [NO_CLIP, TOP_RIGHT_CLIP],
//   right: [NO_CLIP, BOTTOM_LEFT_CLIP],
// };

// const LinkBox = ({ Icon, href }: { Icon: IconType; href: string }) => {
//   const [scope, animate] = useAnimate();

//   const getNearestSide = (e: MouseEvent) => {
//     const box = (e.target as HTMLElement).getBoundingClientRect();

//     const proximityToLeft = {
//       proximity: Math.abs(box.left - e.clientX),
//       side: "left" as Side,
//     };
//     const proximityToRight = {
//       proximity: Math.abs(box.right - e.clientX),
//       side: "right" as Side,
//     };
//     const proximityToTop = {
//       proximity: Math.abs(box.top - e.clientY),
//       side: "top" as Side,
//     };
//     const proximityToBottom = {
//       proximity: Math.abs(box.bottom - e.clientY),
//       side: "bottom" as Side,
//     };

//     const sortedProximity = [
//       proximityToLeft,
//       proximityToRight,
//       proximityToTop,
//       proximityToBottom,
//     ].sort((a, b) => a.proximity - b.proximity);

//     return sortedProximity[0].side;
//   };

//   const handleMouseEnter = (e: MouseEvent) => {
//     const side = getNearestSide(e);

//     animate(scope.current, {
//       clipPath: ENTRANCE_KEYFRAMES[side],
//     });
//   };

//   const handleMouseLeave = (e: MouseEvent) => {
//     const side = getNearestSide(e);

//     animate(scope.current, {
//       clipPath: EXIT_KEYFRAMES[side],
//     });
//   };

//   return (
//     <a
//       href={href}
//       onMouseEnter={(e) => {
//         handleMouseEnter(e);
//       }}
//       onMouseLeave={(e) => {
//         handleMouseLeave(e);
//       }}
//       className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
//     >
//       <Icon className="text-xl sm:text-3xl lg:text-4xl" />

//       <div
//         ref={scope}
//         style={{
//           clipPath: BOTTOM_RIGHT_CLIP,
//         }}
//         className="absolute inset-0 grid place-content-center bg-neutral-400 text-white"
//       >
//         <Icon className="text-xl sm:text-3xl md:text-4xl" />
//       </div>
//     </a>
//   );
// };
