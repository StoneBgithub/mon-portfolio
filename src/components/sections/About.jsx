// components/sections/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-20 relative">
      {/* Effet de flou en fond */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-700/30 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-700/30 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              À Propos de Moi
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Qui suis-je?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Je suis un développeur fullstack passionné par la création
              d'applications web modernes et performantes. Avec une solide
              expertise en HTML, CSS, JavaScript, ReactJS, NodeJS, Firebase et
              Git, je conçois des solutions complètes et innovantes.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Mon approche combine créativité technique et sensibilité UX/UI
              pour livrer des expériences utilisateur exceptionnelles. Je
              m'adapte rapidement aux nouvelles technologies et méthodologies
              pour rester à la pointe de l'innovation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-700 bg-black/30 rounded-lg p-4 hover:border-cyan-500/50 transition-colors">
                <div className="text-cyan-400 mb-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">Solutions Innovantes</h4>
                <p className="text-sm text-gray-400">
                  Approche créative pour résoudre des problèmes complexes
                </p>
              </div>

              <div className="border border-gray-700 bg-black/30 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
                <div className="text-purple-400 mb-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">Performance</h4>
                <p className="text-sm text-gray-400">
                  Applications optimisées pour une expérience fluide
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-glow-cyan">
              <img
                src="profiles.png"
                alt="Portrait du développeur"
                className="w-full h-full object-cover"
              />

              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full blur-sm opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-cyan-500 rounded-full blur-sm opacity-70"></div>
            </div>

            {/* Cadre futuriste */}
            <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
