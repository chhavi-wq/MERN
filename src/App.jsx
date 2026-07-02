import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Contact from "../components/Contact.jsx"
import Projects from "../components/Projects.jsx"
import Resume from "../components/Resume.jsx"
const App=()=>{
  return(
    <>
   <div className="min-h-screen bg-[#F5F3EF] text-[#2C2C35] overflow-x-hidden">
  <Navbar />

  <main>
    <section id="home">
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="projects">
      <Projects />
    </section>

     <section id="resume">
      <Resume />
    </section>

    <section id="contact">
      <Contact />
    </section>

  </main>
</div>
    </>
  )
}
export default App