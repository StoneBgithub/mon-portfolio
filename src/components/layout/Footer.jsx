// components/layout/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              <span className="inline-block">APIPI BOUYA Pasteur</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Développeur Fullstack</p>
          </div>

          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Tous droits réservés
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
