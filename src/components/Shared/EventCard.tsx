import React, { useState } from "react";
import Image from "next/image";
import { BackgroundGradient } from "../../components/ui/background-gradient";

import { motion } from "framer-motion";
const EventCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative sm:w-10/12 lg:w-11/12"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <BackgroundGradient className="rounded-[22px] p-4  sm:p-10 bg-black ">
        <motion.div
          // initial={{y:100}}
          // animate = {{y:0}}
          // transition={{duration:0.5}}

          className={` opacity-0 h-5/6 rounded-2xl md:ml-[-40px]  absolute bottom-1 bg-black flex ${
            show
              ? "flex transition-all  opacity-100 justify-center items-center translate-y-0"
              : "h-0 opacity-0 translate-y-12"
          }`}
        >
          <p className="text-center p-4">{description}</p>
        </motion.div>
        <Image
          src={image || ``}
          alt={title + "image"}
          height={400}
          width={400}
          className="rounded-md bg-black h-[400px] w-[450px] "
        />
        <p className="text-base sm:text-xl mt-6 md:text-2xl mb-2 text-neutral-200 text-center font-mono">
          {title}
        </p>
      </BackgroundGradient>
    </div>
  );
};

export default EventCard;
