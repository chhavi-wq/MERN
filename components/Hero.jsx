import "@fontsource/league-gothic";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
const Hero=()=>{
    return(
        <>
      <div className="h-[800px] p-14 bg-[#F5F3EF] relative overflow-hidden text-black ">

        <div id="block"></div>
         <div id="block2"></div>
        <div id="block3"></div>
         <div id="block4"></div>


        <div className="z-10 relative overflow-hidden">

        <div className="mt-20">
        <h1 className="font-['League_Gothic'] justify-center text-center flex text-[20rem] leading-[0.8] tracking-[-0.06em] uppercase text-zinc-900">
          Chhavi Sharma</h1>
        </div>

        <div className="flex py-5 p-8 items-end text-xl justify-between">
          <h1 className="text-[#52525B] font-bold transform-uppercase">FULL STACK DEVELOPER</h1>

          <div className="flex text-[#52525B] font-bold items-end uppercase flex-col h-[40px] jusitfy-center">
          <p >React • Node.js • Express • MongoDB</p>
          <p>Building clean and responsive web applications.</p>
          </div>

        </div>

      <div className="flex flex-row gap-5 items-center justify-center pt-[6rem] text-lg">
        <button id="btn" className="text-[#52525B] z-20 relative hover:text-white hover:border-[#2c2c35] flex flex-row items-center text-center gap-3 justify-center border-1 rounded-full  px-5 py-2 font-bold"><span className="z-20 relative items-center gap-2 flex relative">View Projects <IoIosArrowDroprightCircle /></span></button>
        <button id="btn" className="text-[#52525B] z-20 hover:text-white hover:border-[#2c2c35] relative flex flex-row items-center text-center gap-3 border-1 rounded-full  py-2 px-5 font-bold"><span className="z-20 items-center gap-2 flex relative">Contact <IoIosArrowDroprightCircle /></span></button>     
      </div>

      </div>  


     <div className="absolute left-10 bottom-10 flex flex-row gap-4 text-[#52525B]">

       <div className="h-16 w-px bg-[#B5AEA5]" />
  <a href="#"
    className="flex items-center gap-3 hover:text-[#3B2F2F] duration-300" >
    <FaGithub className="text-lg" />
    <span className="text-sm uppercase tracking-[0.2em]">GitHub</span>
  </a>

  <a href="#"
    className="flex items-center gap-3 hover:text-[#3B2F2F] duration-300" >
    <FaLinkedin className="text-lg" />
    <span className="text-sm uppercase tracking-[0.2em]">LinkedIn</span>
  </a>

  <a href="#"
    className="flex items-center gap-3 hover:text-[#3B2F2F] duration-300" >
    <SiGmail className="text-lg" />
    <span className="text-sm uppercase tracking-[0.2em]">Email</span>
  </a>

   <div className="h-16 w-px bg-[#B5AEA5]" />
</div>

<div className="absolute bottom-15 right-10 text-[#52525B]">
  <p className="text-xl flex flex-row gap-2 uppercase tracking-[0.2em]"><GoDotFill /><span className="text-sm border-b-1">Available for freelance</span></p>
</div>


      </div>
      </>
    )
}

export default Hero;