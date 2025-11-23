import React from "react";
import { CheckCircle, Shield, Users } from "lucide-react";

const PanelSection = () => {
  const phoneNumber = "6285189243049";

  const handleOrder = (panelType) => {
    const message = encodeURIComponent(`Saya Mau Pesan paket ${panelType}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const adminFeatures = [
    "Full Access Control",
    "User Management",
    "Resource Monitor",
    "Security Dashboard",
    "Analytics & Reports"
  ];

  const resellerFeatures = [
    "White Label Solution",
    "Custom Pricing",
    "Client Management",
    "Automated Billing",
    "Technical Support"
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Panel Premium</h2>
          <p className="text-gray-400 text-lg">Kelola bisnis hosting Anda dengan mudah</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Shield, title: "Admin Panel", features: adminFeatures },
            { icon: Users, title: "Reseller Panel", features: resellerFeatures }
          ].map((panel, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <panel.icon className="text-gray-200" size={32} />
              </div>

              <h3 className="text-3xl font-bold text-gray-100 mb-4 text-center">{panel.title}</h3>

              <ul className="space-y-3 mb-8">
                {panel.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="text-gray-500" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-3xl font-bold text-gray-200 mb-6 text-center">Rp XXX.XXX</div>

              <button
                onClick={() => handleOrder(panel.title)}
                className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:scale-95 transition-all"
              >
                Pesan {panel.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanelSection;