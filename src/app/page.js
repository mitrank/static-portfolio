import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="scroll-smooth bg-black text-white">
      <Header />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <Hero />
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <About />
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
