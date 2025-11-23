import React from "react";
import { CheckCircle } from "lucide-react";

const JasaSAMP = () => {
  const handleOrder = () => {
    const phoneNumber = "6285189243049";
    const message = encodeURIComponent("Saya Mau Pesan paket Jasa SA:MP");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const services = [
    "Instalasi & Setup Server SA:MP",
    "Setup Bot JS",
    "Fixing error Plugin & Installasi Plugin",
    "Installasi Script on gamemode",
    "Setup Anti-Cheat System",
    "Database MySQL Configuration",
    "Mapping Exterior (Cannot Interior)",
    "Create Website like JGRP / LunarPride",
    "Create Website UCP Dashboard / Admin Panel",
    "Jasa Developer Weekly & Monthly",
    "Fixing Bug on gamemode"
  ];

  return (
    <section id="jasa" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Jasa SA:MP</h2>
          <p className="text-gray-400 text-lg">Layanan profesional untuk server SA:MP Anda</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-gray-500 mt-1" size={20} />
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-3xl font-bold text-gray-200 mb-2">Rp XXX.XXX</p>
            <p className="text-gray-400 mb-6">Harga disesuaikan dengan kebutuhan</p>

            <button
              onClick={handleOrder}
              className="w-full py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:scale-95 transition-all font-semibold"
            >
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JasaSAMP;