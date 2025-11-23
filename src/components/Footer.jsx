import React from "react";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-200">Cykooonetwork</span>
            </div>
            <p className="text-gray-400">
              Seller hosting amanah dan support 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-gray-200 font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bot WhatsApp Panel</li>
              <li>GTA SA-MP Hosting</li>
              <li>Minecraft Server</li>
              <li>Panel Premium</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-200 font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp: +62-851-8924-3049</li>
              <li>Support 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Cykooonetwork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;