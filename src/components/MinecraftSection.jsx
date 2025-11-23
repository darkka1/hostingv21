import React from "react";
import { Server } from "lucide-react";

const MinecraftSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto text-center max-w-3xl">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 rounded-2xl p-12">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
            <Server className="text-gray-200" size={40} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Minecraft Hosting</h2>

          <div className="inline-block px-6 py-2 bg-gray-700 border border-gray-500 rounded-full mb-6">
            <span className="text-gray-300 font-semibold">🚀 COMING SOON</span>
          </div>

          <p className="text-gray-400 text-lg">
            Server Minecraft premium dengan performa terbaik akan segera hadir!
            <br />Nantikan peluncurannya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MinecraftSection;