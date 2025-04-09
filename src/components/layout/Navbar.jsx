import React, { useState, useEffect } from "react";

const Navbar = ({ activeSection, mobileMenuOpen, toggleMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });

    // Fermer le menu mobile après sélection
    if (mobileMenuOpen) {
      toggleMobileMenu(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`transition-all duration-500 w-full fixed top-0 z-50 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo Dev original à gauche */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg overflow-hidden shadow-lg transform hover:rotate-6 transition-transform duration-300">
              <div className="absolute inset-0.5 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 8L3 12L7 16"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 8L21 12L17 16"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 4L10 20"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Menu de navigation pour desktop (centré) */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-2 py-1 transition-all ${
                    activeSection === item.id
                      ? "text-cyan-400 font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Bouton CV à droite (design amélioré) */}
          <div className="hidden md:block">
            <a
              href="/CV_APIPI_BOUYA_Pasteur.pdf"
              download
              className="relative group flex items-center gap-2 bg-gradient-to-r p-[1px] from-cyan-500 to-purple-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-black px-4 py-2 rounded-lg flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-cyan-400 group-hover:animate-bounce"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V16M12 16L8 12M12 16L16 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 20H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white font-medium">CV</span>
              </div>
            </a>
          </div>

          {/* Bouton du menu mobile */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none z-50 relative"
              onClick={() => toggleMobileMenu(!mobileMenuOpen)}
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col space-y-6 text-center w-full">
              {navItems.map((item) => (
                <li key={item.id} className="w-full">
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`text-xl py-3 w-full block ${
                      activeSection === item.id
                        ? "text-cyan-400 font-medium"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="block mx-auto mt-1 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Bouton CV dans le menu mobile */}
            <div className="mt-8">
              <a
                href="CV_APIPI_BOUYA_Pasteur.pdf"
                download
                className="relative group flex items-center gap-2 bg-gradient-to-r p-[1px] from-cyan-500 to-purple-600 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-black px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-400 group-hover:animate-bounce"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4V16M12 16L8 12M12 16L16 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 20H18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white font-medium">CV</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
