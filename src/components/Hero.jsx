import React from "react";
import { Shield, Zap, Server, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-gray-800 border border-gray-600 rounded-full">
          <span className="text-gray-400 text-sm">🚀 Platform Hosting dengan performa gacor</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
          Cykooonetwork
          <br />
          <span className="text-gray-400">Hosting Premium</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Panel Bot, Game Server, dan Panel Premium dengan Performa Maksimal
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { icon: Shield, title: "Anti-DDoS", desc: "Protection Pro" },
            { icon: Zap, title: "99.9% Uptime", desc: "Always Online" },
            { icon: Server, title: "SSD NVMe", desc: "Ultra Fast" },
            { icon: CheckCircle, title: "24/7 Support", desc: "Fast Response" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-600">
                <item.icon className="text-gray-300" size={32} />
              </div>
              <h3 className="text-gray-200 font-bold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;