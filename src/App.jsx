import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollReveal from "./components/ScrollReveal";
import ProductCard from "./components/ProductCard";
import { botPackages } from "./data/botPackages";
import { gamePackages } from "./data/gamePackages";
import MinecraftSection from "./components/MinecraftSection";
import JasaSAMP from "./components/JasaSAMP";
import PanelSection from "./components/PanelSection";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-900">
      <Header setActiveSection={setActiveSection} />
      <Hero />

      {/* BOT PANEL */}
      <section id="bot-panel" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Panel Bot</h2>
              <p className="text-gray-400 text-lg">Node.js support hingga 21+</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {botPackages.map((pkg, index) => (
              <ScrollReveal delay={index * 100} key={index}>
                <ProductCard {...pkg} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GAME HOSTING */}
      <section id="game-hosting" className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">GTA SA-MP Hosting</h2>
              <p className="text-gray-400 text-lg">Linux & Windows Support</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamePackages.map((pkg, index) => (
              <ScrollReveal delay={index * 100} key={index}>
                <ProductCard {...pkg} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MinecraftSection />
      <JasaSAMP />
      <PanelSection />
      <Footer />
    </div>
  );
};

export default App;