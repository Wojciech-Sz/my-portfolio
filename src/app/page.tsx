import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <Services />
      <Contact />
    </main>
  );
}
