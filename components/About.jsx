const About=()=>{
    return(
        <>
        <div>

     <div className="h-screen bg-[#F5F3EF] pt-[120px] text-[#52525B] flex flex-col px-8 pt-16">
        <h1 className="font-['League_Gothic'] border-b-1 text-[13rem] w-fit leading-[0.8] tracking-[-0.06em] uppercase">
          A Little About Me
        </h1>

        <p className="max-w-[1000px] mt-8 text-lg font-light leading-9 text-black">

      I'm Chhavi Sharma, a <span className="text-black font-serif">full-stack developer</span> who enjoys transforming ideas into modern, responsive web applications.
        My <span className="text-black font-serif">programming journey </span> started with C and C++, but discovering <span className="text-black font-serif">web development</span> introduced me to a field where <span className="text-black font-serif">creativity and problem-solving</span> come together. 
      Since then, I've been continuously <span className="text-black font-serif">learning, experimenting, and building projects</span> that challenge me to improve. <br />
      <br />
      Over time, my curiosity naturally shifted toward <span className="text-black font-serif">backend development</span>, where I became fascinated by <span className="text-black font-serif">APIs, databases, 
      and server-side logic</span>. Learning <span className="text-black font-serif">MERN STACK</span> helped me understand how every part of a web application connects.
      I believe in writing clean, maintainable code and creating digital experiences that are both functional and intuitive.

      </p>

      <button className="bg-[#F5F3EF] w-fit mt-10 border-b-2 text-black px-6 py-3 rounded-full uppercase tracking-[0.15em] text-sm font-semibold transition-all duration-300 hover:bg-[#d8d4cd] hover:scale-105">
        Explore Projects
      </button>
      </div>


      <div className="h-screen flex px-[100px] mt-20 flex-row justify-between gap-20 bg-[#F5F3EF] text-[#52525B]">
          <div>
            <h1 id="journey" className="font-[mono] text-[#52525B] text-[5rem] font-light leading-[0.8] tracking-[-0.06em] uppercase">my <br />
            journey</h1>
                  </div>

                  <div>
                    <p className="font-light font-mono text-lg"> <span className="font-bold font-mono text-2xl">2023</span><br />
                    Started my Computer Science journey,
              learning the fundamentals of programming
              with C and C++.</p>


                    <div className="h-16 my-2 w-px bg-[#B5AEA5]" />
                    

                  <p className="font-light font-mono text-lg"><span className="font-bold font-mono text-2xl">2024</span>
                    <br />
                  Discovered Web Development through
              college coursework and began building
              my first frontend projects.
              </p>

              <div className="h-16 my-2 w-[0.7px] bg-[#B5AEA5]" />

              <p className="font-light font-mono text-xl">
                <span className="font-bold font-mono text-2xl">2025</span>
                <br />
              Developed full-stack applications,
              explored backend development, and
              learned the MEAN stack.</p>

              <div className="h-16 my-2 w-px bg-[#B5AEA5]" />

              <p className="font-light font-mono text-lg"> <span className="font-bold font-mono text-2xl">2026</span>
                <br />
              Expanded to the MERN stack,
              building end-to-end web applications
              and preparing for Full Stack
              Developer opportunities.</p>
                  </div>
                  
              </div>

   </div>
        </>
    )
}
export default About;