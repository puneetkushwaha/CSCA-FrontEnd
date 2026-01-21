import React, { useState } from 'react';

const TrustedBy = () => {
    const orgs = ['Military', 'Government', 'Law_Enforcement', 'CERTs', 'MSSPs'];

    const descriptions = {
        Military: 'Defense-aligned cybersecurity training frameworks focused on operational security principles.',
        Government: 'Public sector and government-aligned cybersecurity skill development standards.',
        Law_Enforcement: 'Digital investigation, incident handling, and cybercrime-oriented certification alignment.',
        CERTs: 'Globally structured cybersecurity certification programs across multiple skill levels.',
        MSSPs: 'Certifications aligned with managed security service operations and SOC environments.'
    };

    const [selectedOrg, setSelectedOrg] = useState(null);

    return (
        <section className="relative py-24 bg-black overflow-hidden border-y border-white/5">
            {/* Background Orbital Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[500px] pointer-events-none opacity-40">
                <div className="absolute inset-x-0 top-0 h-full border-b border-dashed border-red-900/40 rounded-[100%]"></div>
                <div className="absolute inset-x-0 top-[40px] h-full border-b border-dashed border-red-900/20 rounded-[100%] scale-x-110"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">

                    {/* Left Column */}
                    <div className="lg:w-[45%] space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white uppercase flex flex-col gap-2">
                                <span
                                    style={{
                                        color: 'black',
                                        WebkitTextStroke: '1.5px #dc2626'
                                    }}
                                >
                                    TRUSTED
                                </span>
                                <span>BY THE <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">INDUSTRY.</span></span>
                            </h2>
                            <p className="text-sm md:text-lg text-white/50 leading-relaxed font-medium">
                                CSCA certification frameworks define structured, role-based benchmarks for defensive cybersecurity capabilities,
                                supporting organizations and professionals across diverse global security ecosystems.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-red-600"></div>
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Operational Mission</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-[50%] space-y-12">
                        <div className="relative p-8 bg-white/[0.03] border-l-4 border-red-600 rounded-r-xl transition-all duration-500 hover:bg-white/[0.05] w-full">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <div className="flex flex-col items-center sm:items-start shrink-0">
                                    <span className="text-5xl font-black text-white">10K+</span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-red-500 mt-1">Students Worldwide</span>
                                </div>
                                <div className="hidden sm:block h-16 w-px bg-red-600/30"></div>
                                <p className="text-sm text-white/60 leading-relaxed font-medium">
                                    CSCA certifications are designed to establish globally relevant benchmarks for defensive and detection-focused
                                    cybersecurity skills, supporting workforce readiness across modern enterprise and security operations environments in over 120 countries.
                                </p>
                            </div>
                        </div>

                        {/* Sector Buttons */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] pl-1 text-center lg:text-left">Elite Sector Deployment</div>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {orgs.map(org => (
                                    <button
                                        key={org}
                                        onClick={() => setSelectedOrg(org)}
                                        className={`px-5 py-2.5 bg-white/[0.02] border rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 
                                        ${selectedOrg === org
                                            ? 'border-red-600/70 bg-white/[0.08] text-white'
                                            : 'border-white/10 text-white/60 hover:border-red-600/50 hover:bg-white/[0.04] hover:text-white'}`}
                                    >
                                        {org}
                                    </button>
                                ))}
                            </div>

                            {/* Description Message */}
                            {selectedOrg && (
                                <div className="mt-6 p-5 bg-white/[0.03] border border-red-600/40 rounded-xl text-white/80 text-sm leading-relaxed transition-all duration-300">
                                    <h3 className="text-red-500 font-black uppercase mb-2">{selectedOrg}</h3>
                                    <p>{descriptions[selectedOrg]}</p>
                                </div>
                            )}

                            <p className="text-sm text-white/40 leading-relaxed text-center lg:text-left">
                                Trusted by hundreds of organisations, including military, government, law enforcement, CERTs, and MSSPs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scanline Animation */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent animate-scanline pointer-events-none"></div>

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes scanline {
                        0% { transform: translateY(0); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: translateY(600px); opacity: 0; }
                    }
                    .animate-scanline {
                        animation: scanline 12s linear infinite;
                    }
                `
            }} />
        </section>
    );
};

export default TrustedBy;
