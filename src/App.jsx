import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
export default function App() {
 
  return (
    <div className="bg-zinc-900 text-yellow-50 w-full min-h-screen">
         <Navbar/>
         <LandingPage/>
         <Marquee/>
         <About/>
         <Eyes/>

    </div>
  )
}