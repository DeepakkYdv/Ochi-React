import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate,setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX-window.innerWidth/2;
            let deltaY = mouseY-window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180);

        })
    },[])
  return (
    <div className='eyes w-full h-screen flex items-center justify-center'>
        <div className='relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]'>
             <div className=' absolute top-[50%] left-[50%] flex items-center gap-5 -translate-x-[50%] -translate-y-[50%] w-1/3 h-1/3 '>
                <div className='flex items-center justify-center w-[15vw] h-[15vw]  bg-zinc-100 rounded-full'>
                     <div className='relative w-1/2 h-1/2 bg-zinc-900 rounded-full '>
                            <div  style={{
                                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                }} className='w-full h-1/4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
                               <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                     </div>
                </div>  


                <div className='flex items-center justify-center w-[15vw] h-[15vw]  bg-zinc-100 rounded-full'>
                     <div className='relative w-1/2 h-1/2 bg-zinc-900 rounded-full '>
                            <div   style={{
                                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                }} className ='w-full h-1/4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
                               <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                     </div>
                </div>            
             
             </div>   
        </div>
    </div>
  )
}

export default Eyes
