// components/ui/ProjectCard.jsx
import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category) => {
    switch (category) {
      case "frontend":
        return "bg-cyan-500";
      case "fullstack":
        return "bg-purple-500";
      case "mobile":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={
            project.image || `/api/placeholder/600/300?text=${project.title}`
          }
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 ${
            isHovered ? "" : "pointer-events-none"
          }`}
        >
          <div>
            <div className="flex space-x-2 mb-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span
            className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(
              project.category
            )} text-white`}
          >
            {project.category}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex space-x-3">
          {project.demo && (
            <a
              href={project.demo}
              className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-glow-cyan transition-all"
            >
              Voir démo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              className="text-sm px-3 py-1 rounded-md border border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white font-medium transition-all"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
