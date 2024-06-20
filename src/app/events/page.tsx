"use client"
import EventCard from "@/components/Shared/EventCard";
import {events} from  "@/data"
import {motion} from "framer-motion"

const Events = ()=> {
  return (
    <>
    <div className="flex justify-center items-center w-full h-20">
      <motion.h1 className="md:text-5xl text-3xl font-extrabold mt-5 md:ml-5 justify-center text-center font-fira_sans" 
      initial={{opacity:0 , y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      >
        Events
      </motion.h1>
    </div>
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-1">
      {
        
        events.map((events,index)=>(
          <EventCard key={index} {...events} />
        ))
        
      }
    </div>
    </>
  );
}
export default Events