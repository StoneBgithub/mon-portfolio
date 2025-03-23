import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lorsqu'on clique sur une section
  const toggleMobileMenu = (isOpen) => {
    setMobileMenuOpen(isOpen);
    // Désactiver le défilement du body quand le menu est ouvert
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <div className="fixed w-full z-50">
        <Navbar
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
      <main className="relative w-full">
        <section id="hero" className="w-full">
          <Hero />
        </section>
        <section id="about" className="w-full">
          <About />
        </section>
        <section id="skills" className="w-full">
          <Skills />
        </section>
        <section id="projects" className="w-full">
          <Projects />
        </section>
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
