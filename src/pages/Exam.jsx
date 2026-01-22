import React from "react";
import { ChevronLeft, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PrecisionPanel = ({ children, className = "" }) => (
  <div className={`relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-700 ${className}`}>
    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

const InputField = ({ label, required, placeholder, ...props }) => (
  <div className="space-y-2 text-left">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-1">
      {label}{required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative group/field">
      <input
        {...props}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-red-600/30 focus:border-red-600 transition-all font-medium placeholder:text-gray-700 shadow-inner"
      />
    </div>
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="border-b border-white/10 pb-3 mb-8">
    <h3 className="text-xs font-black text-red-500 uppercase tracking-[0.3em]">{title}</h3>
  </div>
);

const Exam = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/pearson-dashboard');
  };

  return (
    <div className="min-h-full flex flex-col font-['Inter'] relative pb-20">
      <div className="max-w-[1240px] mx-auto w-full py-12 px-12">

        {/* Main Content Area */}
        <PrecisionPanel className="p-12 border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.7)]">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.4)]"></div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">OPERATIONAL_REGISTRY_v6.0</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase italic">
              Schedule Exams
            </h1>
            <p className="text-base text-gray-300 font-medium max-w-4xl leading-relaxed">
              Confirm or complete your operational profile to initiate the certification sequence.
            </p>
          </header>

          {/* IMPORTANT NOTE per uploaded_image_1 */}
          <div className="bg-red-950/20 border-l-2 border-red-600 p-8 mb-16 rounded-r-2xl border-y border-r border-white/10 shadow-inner">
            <div className="flex gap-6">
              <Info className="w-8 h-8 text-red-600 shrink-0" />
              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em]">CRITICAL_NOTICE:</h4>
                <p className="text-sm text-white font-bold leading-relaxed">
                  Your legal identity nodes must mirror official registries. Identity mismatch during check-in will result in security termination and fee forfeiture.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-20">
            {/* LEGAL NAME Sections */}
            <div className="space-y-10">
              <SectionHeader title="LEGAL NAME" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <InputField label="FIRST NAME" required placeholder="Enter first name" />
                <InputField label="Middle Name" placeholder="Enter middle name" />
                <InputField label="LAST NAME" required placeholder="Enter last name" />
                <InputField label="Suffix" placeholder="Enter suffix" />
              </div>
            </div>

            {/* PREFERRED NAME */}
            <div className="space-y-10">
              <SectionHeader title="PREFERRED NAME" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <InputField label="FIRST NAME" placeholder="Enter preferred first name" />
                <InputField label="Middle Name" placeholder="Enter preferred middle name" />
                <InputField label="LAST NAME" placeholder="Enter preferred last name" />
                <InputField label="Suffix" placeholder="Enter preferred suffix" />
              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="space-y-10 pt-10 border-t border-white/10">
              <SectionHeader title="CONTACT INFORMATION" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <InputField label="COUNTRY CODE" value="+1" readOnly />
                <InputField label="Phone" placeholder="Registry phone*" required />
                <InputField label="COUNTRY CODE" value="+1" readOnly />
                <InputField label="Mobile Phone" placeholder="Mobile Phone" />
              </div>

              <div className="space-y-3 pt-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">COUNTRY*</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm appearance-none outline-none group-hover/select:border-red-600 transition-all font-medium">
                    <option className="bg-[#0a0a0a]">United States</option>
                    <option className="bg-[#0a0a0a]">India</option>
                    <option className="bg-[#0a0a0a]">Canada</option>
                    <option className="bg-[#0a0a0a]">United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-12 flex justify-end">
              <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(220,38,38,0.3)] transform hover:scale-105 active:scale-95 transition-all">
                NEXT: Review Identity
              </button>
            </div>
          </form>
        </PrecisionPanel>
      </div>
    </div>
  );
};

export default Exam;
