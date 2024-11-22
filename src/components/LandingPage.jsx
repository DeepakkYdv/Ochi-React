

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructre mt-40 px-20">
        {["WE CREATE","EYE OPINING","presentations"].map((items,indx)=>{
        return( 
        <div key={indx} className="masker">
          <div className="w-fit flex items-center"> 
            {indx==1&&<div className="bg-red-500 w-[10vw] h-[4.5vw] mt-2 rounded-lg"></div>}
            <h1 className="uppercase text-8xl leading-[6.9vw] font-custom tracking-tighter font-semibold">{items}</h1>
          </div>
        </div>)
       })}
      </div>
     <div className="border-t-[1px] border-zinc-500 mt-36 border-dotted flex justify-between items-center py-5 px-20 ">
      {["For public and private companies", "From the first pitch to IPO"].map((items,indx)=>{
        return(
          <p key={indx} >{items}</p>
        )
      })}
      <div className="starter flex gap-2 items-center cursor-pointer ">
        <div className="px-5 py-2 border-zinc-500 border-2 rounded-full hover:bg-zinc-100 hover:text-zinc-900 text-sm "><p>START THE PROJECT</p></div>
        <div className="px-2 py-2 border-zinc-500  border-2 rounded-full text-sm ">ON</div>
      </div>
     </div>
    </div>
  )
}

export default LandingPage
