// components/sections/Projects.jsx
import React, { useState } from "react";
import ProjectCard from "../ui/ProjetctCard";
import projects from "../data/Projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    { id: "all", name: "Tous" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Fullstack" },
  ];

  return (
    <div className="min-h-screen py-20 relative">
      {/* Effet de flou en fond */}
      <div className="absolute top-60 -right-40 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-cyan-700/20 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Mes Projets
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents, déployés avec des
            technologies modernes.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-900/80 backdrop-blur-md rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
