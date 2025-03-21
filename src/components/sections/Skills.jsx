// components/sections/Skills.jsx
import React from "react";
import skills from "../data/Skills";

const Skills = () => {
  return (
    <div className="min-h-screen py-20 relative bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Mes Compétences
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Mon expertise technique me permet de créer des applications web
            complètes, du frontend au backend, en passant par le déploiement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-colors shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Frontend
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 rounded-lg bg-black/50 hover:bg-gradient-to-br hover:from-cyan-900/20 hover:to-purple-900/20 transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-600 transition-all">
                    {skill.icon ? (
                      <skill.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    ) : (
                      <span className="text-gray-300 text-xl font-bold">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Backend
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.backend.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 rounded-lg bg-black/50 hover:bg-gradient-to-br hover:from-cyan-900/20 hover:to-purple-900/20 transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-600 transition-all">
                    {skill.icon ? (
                      <skill.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    ) : (
                      <span className="text-gray-300 text-xl font-bold">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-colors shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Outils & Autres
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skills.tools.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-4 rounded-lg bg-black/50 hover:bg-gradient-to-br hover:from-cyan-900/20 hover:to-purple-900/20 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-600 transition-all">
                  {skill.icon ? (
                    <skill.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  ) : (
                    <span className="text-gray-300 text-xl font-bold">
                      {skill.name.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
