import React, { useState } from 'react'
import Image from "next/image"
import {BackgroundGradient} from "../../components/ui/background-gradient"

import {motion} from "framer-motion"
const EventCard = () => {
    const [open , setOpen] = useState(false)
    const [show,setShow] = useState(false)
  return (
    <div onMouseEnter={()=>{
        setShow(true)
    }} onMouseLeave={()=>{
        setShow(false)
    }}>
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4  sm:p-10 bg-white dark:bg-black">
    <motion.div 
    initial={{y:100}}
    animate = {{y:0}}
    transition={{duration:0.5}}

     className={` opacity-0 h-5/6 rounded-2xl md:ml-[-40px]  absolute bottom-1 bg-black flex ${show ? 'flex transition-all opacity-100 justify-center items-center ' : 'h-0 opacity-0'}`}>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae eum in placeat fugiat, temporibus dolores alias ratione ipsum molestias dicta, aut accusantium a quaerat harum nostrum velit! Nulla, voluptates?</p>
    </motion.div>
      <Image
        src={`/icon1.avif`}
        alt="event_image"
        height={400}
        width={400}
        className="rounded-md bg-blue-900 h-[400px] w-[450px] "
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
        GitHub 
      </p>
       
    {/* <div className='w-full h-10 bg-white dark:bg-zinc-900 hover:bg-zinc-800 flex justify-center items-center rounded-lg'>

      <button className="text-sm text-neutral-600 dark:text-neutral-400 text-center" onClick={()=>{
        setOpen(true)
      }}>Know more</button>
    </div> */}
    
      
      {/* <p className="text-sm text-neutral-600 dark:text-neutral-400 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis mollitia commodi voluptates blanditiis beatae veniam quae itaque, sed, cumque voluptate, nihil placeat qui aperiam! Praesentium optio unde at. Atque.
      </p> */}
      {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        <span className='text-center '>Know more </span>
        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          $100
        </span>
      </button> */}
    </BackgroundGradient>
    {/* <DragCloseDrawerCard title={"GitHub"} open={open} setOpen={setOpen}/> */}
  </div>
  )
}

export default EventCard
