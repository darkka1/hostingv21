import React, { useState } from "react";
import { Zap, Menu, X } from "lucide-react";

const Header = ({ setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = ["Home", "Bot Panel", "Game Hosting", "Jasa", "Kontak"];

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Cykooonetwork
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                className="text-gray-300 hover:text-gray-100 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase().replace(" ", "-"));
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-300 hover:text-gray-100 py-2"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;