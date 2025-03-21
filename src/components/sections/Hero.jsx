// components/sections/Hero.jsx
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      title.classList.add("animate-fadeIn");
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay avec motif de grille futuriste */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Animation de particules en arrière-plan */}
      <div className="absolute inset-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="container mx-auto px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Développeur Fullstack
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fadeIn animation-delay-300">
            Je crée des expériences web{" "}
            <span className="text-cyan-400">modernes</span> et{" "}
            <span className="text-purple-500">innovantes</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-500">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-glow-cyan transition-all"
            >
              Voir mes projets
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full border border-white/20 hover:border-cyan-500/50 backdrop-blur-sm hover:bg-black/30 hover:shadow-glow-purple transition-all"
            >
              Me contacter
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
