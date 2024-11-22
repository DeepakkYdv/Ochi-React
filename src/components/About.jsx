import HomePageImg from "../assets/HomepageImg.jpg"
function About() {
  return (
    <div className="bg-[#CDEA68] pt-20 w-full h-[170vh] rounded-t-3xl rounded-r-3xl">
        <div className="w-full  pb-[10vh]">
            <p className="w-[80%] px-16 text-[2.9vw] font-semibold text-zinc-800 leading-[6.5vh]">
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell  prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </p>
        </div>
        <div className="w-full flex flex-row border-b-[1px] pt-2 pb-[14vh] border-t-[1px] border-dotted border-zinc-600">
            <div className="w-1/2 mt-5 text-zinc-900 pl-16">
                <p>What you can expect:</p>
            </div>
            <div className="flex w-1/2 " >
                <div className="w-1/2 mt-5">
                <p className="text-wrap text-zinc-900">
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. 
                        Whether it’s live or digital, delivered for one or a hundred people. <br/><br/><br/>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                </p>
                </div>
            <div className="flex w-1/2 text-zinc-900 items-end justify-center ">
                <div className="flex flex-col">
                <p className="pb-10">S:</p>
                 <a href="">Instagram</a><a href="">Behance</a>
                 <a href="">Facebook</a><a>Linkdin</a>
                    </div> 
             </div>
        </div>
        

        </div>
        
      {/* Our Approch */}
      <div className="w-full flex py-10 px-16  justify-between">
          <div className=" flex flex-col gap-5">
          <h1 className="text-[3vw] text-zinc-800 font-semibold">Our approach:</h1>
        <div className="w-[60%] px-5 py-2 flex items-center justify-between border-zinc-500 border-2 rounded-full bg-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 text-sm ">
            <p className="font-semibold">RED MORE</p>
            <div className="px-2 py-2 border-zinc-500 bg-black  border-2 rounded-full text-sm ">NO</div>
        </div>
        </div>
        <div className="rounded-xl overflow-hidden " >
           <img  src={HomePageImg}></img>
        </div>
      </div>
    </div>
  )
}

export default About
