
import React from 'react';
import { certifications } from '../data/certifications.jsx';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { Link } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Pricing = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-black text-white font-['Inter'] relative overflow-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RedGeometricBackground
          height={30}
          jaggednessScale={2.5}
          opacity={0.3}
          planeSize={[60, 40]}
          cameraPos={[0, 0, 15]}
          ashCount={150}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Official Store</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-8">
            Shop <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Certifications</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Purchase exam vouchers, training materials, and learning bundles directly.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden hover:border-red-600/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(220,38,38,0.15)] flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="p-8 flex flex-col h-full relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center border border-white/10">
                      {React.cloneElement(cert.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                    {cert.code}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-red-500 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-red-500 font-bold uppercase tracking-widest mt-1">
                    {Array.isArray(cert.category) ? cert.category.join(' • ') : cert.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 line-clamp-3">
                  {cert.description}
                </p>

                {/* Price Tag */}
                <div className="mb-6">
                  <p className="text-3xl font-black text-white">${cert.price}<span className="text-sm font-medium text-gray-500 align-top ml-1">USD</span></p>
                </div>

                {/* Features List (Simulated) */}
                <div className="space-y-3 mb-8 mt-auto">
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-red-500" />
                    </div>
                    <span>Exam Voucher Included</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-red-500" />
                    </div>
                    <span>Official Study Guide</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => addToCart(cert)}
                    className="px-4 py-3 bg-white text-black font-black uppercase tracking-wider text-[10px] rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-3 h-3" />
                    Buy Now
                  </button>
                  <Link to={`/certification/${cert.id}`} className="px-4 py-3 border border-white/10 text-white font-bold uppercase tracking-wider text-[10px] rounded-lg hover:bg-white/5 transition-colors text-center">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
