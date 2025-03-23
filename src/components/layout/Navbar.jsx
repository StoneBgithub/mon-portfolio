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
        className={`transition-all duration-500 w-full ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            <span className="inline-block hover:scale-105 transition-transform">
              APIPI BOUYA Pasteur
            </span>
          </div>

          {/* Menu de navigation pour desktop */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
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

      {/* Menu mobile - séparé de la navbar pour s'afficher correctement indépendamment du défilement */}
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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
