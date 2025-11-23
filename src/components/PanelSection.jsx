import React from "react";
import { CheckCircle, Users } from "lucide-react";

const PanelSection = () => {
  const phoneNumber = "6285189243049";

  const handleOrder = () => {
    const message = encodeURIComponent("Saya Mau Pesan paket Reseller Panel");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const resellerFeatures = [
    "White Label Solution",
    "Custom Pricing",
    "Client Management",
    "DIY Branding",
    "Support 24/7",
    "Priority Number One",
    "Jual Hosting dengan Spesifikasi anda sendiri",
    "Membayar RP 7.000 untuk biaya maintenance tiap bulan"
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Panel Premium</h2>
          <p className="text-gray-400 text-lg">Mulai bisnis hosting Anda sendiri dengan mudah</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Users className="text-gray-200" size={32} />
            </div>

            <h3 className="text-3xl font-bold text-gray-100 mb-4 text-center">Reseller Panel</h3>
            <p className="text-gray-400 mb-6 text-center">
              Kelola client anda dengan sistem panel modern dan powerful.
            </p>

            <ul className="space-y-3 mb-8">
              {resellerFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="text-gray-500" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-3xl font-bold text-gray-200 mb-6 text-center">Rp 50.000 Permanent.</div>

            <button
              onClick={handleOrder}
              className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all duration-300 font-semibold active:scale-95"
            >
              Pesan Reseller Panel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelSection;