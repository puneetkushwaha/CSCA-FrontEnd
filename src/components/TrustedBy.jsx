import React from 'react';

const TrustedBy = () => {
    const orgs = ['Military', 'Government', 'Law Enforcement', 'CERTs', 'MSSPs'];

    return (
        <section className="relative py-24 bg-black overflow-hidden border-y border-white/5">
            {/* Background Orbital Rings - Subtle Red-Noir */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[500px] pointer-events-none opacity-40">
                <div className="absolute inset-x-0 top-0 h-full border-b border-dashed border-red-900/40 rounded-[100%]"></div>
                <div className="absolute inset-x-0 top-[40px] h-full border-b border-dashed border-red-900/20 rounded-[100%] scale-x-110"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">

                    {/* Left Column: Heading & Narrative */}
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
                                As a leading cybersecurity training company, we are dedicated to cultivating a new generation of experts and bridging the gap between skill development and industry demands.
                            </p>
                        </div>

                        {/* Mission Floor Indicator */}
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-red-600"></div>
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Operational Mission</span>
                        </div>
                    </div>

                    {/* Right Column: Stats & Sector Trust */}
                    <div className="lg:w-[50%] space-y-12">
                        {/* Stat View: Global Reach */}
                        <div className="relative p-8 bg-white/[0.03] border-l-4 border-red-600 rounded-r-xl transition-all duration-500 hover:bg-white/[0.05] w-full">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <div className="flex flex-col items-center sm:items-start shrink-0">
                                    <span className="text-5xl font-black text-white">100K+</span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-red-500 mt-1">Students Worldwide</span>
                                </div>
                                <div className="hidden sm:block h-16 w-px bg-red-600/30"></div>
                                <p className="text-sm text-white/60 leading-relaxed font-medium">
                                    SBT's certifications are setting the global bar for defensive cybersecurity training across 120+ countries.
                                </p>
                            </div>
                        </div>

                        {/* Sector Badges */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] pl-1 text-center lg:text-left">Elite Sector Deployment</div>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {orgs.map(org => (
                                    <span key={org} className="px-5 py-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-[10px] font-black text-white/60 uppercase tracking-widest hover:border-red-600/50 hover:bg-white/[0.04] hover:text-white transition-all duration-300">
                                        {org}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-white/40 leading-relaxed text-center lg:text-left">
                                Trusted by hundreds of organisations, including military, government, law enforcement, CERTs, and MSSPs.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Subtle Scanline Animation */}
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
      ` }} />
        </section>
    );
};

export default TrustedBy;
