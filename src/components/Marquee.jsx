import { motion } from "framer-motion"

function Marquee() {
    
  return (
    <div className="bg-[#004D43] py-20 rounded-t-3xl rounded-tr-3xl">
      <div className="border-t-[1px] border-b-[1px] border-zinc-300 flex gap-[10vw]  whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, repeatType:"loop", duration:5}}   className="text-[17vw] leading-none -mt-[2vw] font-bold">WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, repeatType:"loop", duration:5}} className="text-[17vw] leading-none -mt-[2vw] font-bold">WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, repeatType:"loop", duration:5}} className="text-[17vw] leading-none -mt-[2vw] font-bold">WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
