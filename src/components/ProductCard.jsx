import React from "react";
import { CheckCircle, Star } from "lucide-react";

const ProductCard = ({ icon: Icon, title, description, price, features, ribbon }) => {
  const handleOrder = () => {
    const phoneNumber = "6285189243049";
    const message = encodeURIComponent(`Saya Mau Pesan paket ${title}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-700/30 group hover:scale-105 transform">
      {ribbon && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 animate-pulse">
          <Star size={16} /> {ribbon}
        </div>
      )}

      <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
        <Icon className="text-gray-200" size={28} />
      </div>

      <h3 className="text-2xl font-bold text-gray-100 mb-2">{title}</h3>

      <p className="text-gray-400 mb-4">{description}</p>

      <div className="text-3xl font-bold text-gray-200 mb-6">
        {price} <span className="text-lg text-gray-500">/bulan</span>
      </div>

      <ul className="space-y-3 mb-6">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <CheckCircle className="text-gray-500 flex-shrink-0 mt-1" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleOrder}
        className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-gray-700/50 active:scale-95 transform"
      >
        Pesan Sekarang
      </button>
    </div>
  );
};

export default ProductCard;