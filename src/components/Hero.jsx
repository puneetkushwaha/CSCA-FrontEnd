import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Terminal } from 'lucide-react';
import RedGeometricBackground from './RedGeometricBackground';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const certifications = [
        {
            title: "Blue Team Level 1 (BTL1)",
            level: "Junior",
            description: "Our Junior Security Operations training and certification covers Phishing Analysis, Digital Forensics, Threat Intelligence, SIEM, and Incident Response.",
            icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
            glow: "from-red-500/20"
        },
        {
            title: "Certified Junior Detection Engineer",
            level: "Junior",
            description: "Master the art of creating high-fidelity detection rules and identifying malicious patterns in enterprise environments.",
            icon: <Terminal className="h-10 w-10 text-red-400" />,
            glow: "from-red-600/30"
        },
        {
            title: "Blue Team Level 2 (BTL2)",
            level: "Intermediate",
            description: "Advanced incident response and threat hunting training for established SOC analysts and security professionals.",
            icon: <Globe className="h-10 w-10 text-red-600" />,
            glow: "from-red-400/20"
        },
        {
            title: "Certified Digital Forensics Professional",
            level: "Professional",
            description: "Deep-dive into advanced forensic methodologies, memory analysis, and complex investigative techniques.",
            icon: <ShieldCheck className="h-10 w-10 text-red-700" />,
            glow: "from-red-800/20"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % certifications.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [certifications.length]);

    return (
        <div className="relative min-h-[500px] overflow-hidden">
            {/* Base Background Layer */}
            <div className="absolute inset-0 bg-black -z-20"></div>

            <RedGeometricBackground meshPos={[0, -5, 0]} ashCount={100} opacity={0.3} />

            {/* Background Gradient & Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a0000_1px,transparent_1px),linear-gradient(to_bottom,#1a0000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-20 md:pt-16 md:pb-40 overflow-visible">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="mb-13 lg:mb-0 flex flex-col items-start lg:pr-8 md:-mt-10">
                        {/* Top Line */}
                        <div className="w-full h-px bg-red-600/40 mb-6"></div>

                        <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold text-white leading-[1.15] tracking-tight mb-5 uppercase">
                            <span className="block mb-1">Codevirus</span>
                            <span className="block mb-1.5">Security</span>
                            <span className="text-outline-red block mb-2 leading-[1.1]">
                                Certification Authority
                            </span>
                            <span className="block mt-1.5 font-black text-2xl md:text-3xl">(CSCA)</span>
                        </h1>

                        <p className="text-sm md:text-base text-red-500 font-bold uppercase tracking-tight mb-6">
                            Secure your skills with globally recognized cybersecurity credentials.
                        </p>

                        {/* Middle Line */}
                        <div className="w-full h-px bg-red-600/40 mb-6"></div>

                        <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
                        Trusted certifications for cybersecurity professionals, backed by industry experience & real-world assessment.<br/>
                        Advance your career — from foundational to advanced security expertise.
                        </p>
                    </div>

                    {/* Right Content - Stacking Certification Cards */}
                    <div className="relative h-[650px] flex items-start justify-center lg:justify-end overflow-visible pt-16 md:pt-24">
                        <div className="relative w-full max-w-lg h-full mt-4 lg:mt-0">
                            {certifications.map((cert, index) => {
                                const position = (index - activeIndex + certifications.length) % certifications.length;

                                // Layout styles based on position (Active at top, others stacked below)
                                let opacity = 0;
                                let scale = 1;
                                let zIndex = 0;
                                let translateY = 0;

                                if (position === 0) {
                                    opacity = 1;
                                    scale = 1.15; // Prominent size for active
                                    zIndex = 30;
                                    translateY = 0;
                                } else if (position === 1) {
                                    opacity = 1;   // Full visibility for back cards
                                    scale = 0.9;   // Hierarchy restored
                                    zIndex = 20;
                                    translateY = 220; // Reduced gap
                                } else {
                                    opacity = 1;   // Full visibility for back cards
                                    scale = 0.8;   // Hierarchy restored
                                    zIndex = 10;
                                    translateY = 400; // Reduced gap
                                }

                                return (
                                    <div
                                        key={index}
                                        className="absolute top-0 right-0 w-full transition-all duration-1000 ease-in-out transform origin-top"
                                        style={{
                                            opacity: opacity,
                                            zIndex: zIndex,
                                            transform: `scale(${scale}) translateY(${translateY}px)`
                                        }}
                                    >
                                        <div className="group relative">
                                            {/* Glow Effect */}
                                            <div className={`absolute -inset-1 bg-gradient-to-r ${cert.glow} to-transparent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000`}></div>

                                            {/* Main Card */}
                                            <div className={`relative bg-black/60 backdrop-blur-2xl border-2 border-white/20 p-4 md:p-6 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-8 shadow-3xl ring-1 ${position === 0 ? 'ring-red-500/30' : 'ring-white/5'}`}>

                                                {/* Left: Badge Icon */}
                                                <div className="flex-shrink-0 flex items-center justify-center">
                                                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-red-950/40 to-black border-2 ${position === 0 ? 'border-red-500/40' : 'border-red-900/20'} flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:border-red-500/60 transition-colors`}>
                                                        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                        <div className="text-red-500 mb-1 scale-75 md:scale-100">
                                                            {cert.icon}
                                                        </div>
                                                        <div className="text-[7px] md:text-[8px] font-black uppercase tracking-tighter text-white/40 text-center leading-none">
                                                            Certified <br /> Security
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right: Content Area */}
                                                <div className="flex-grow flex flex-col justify-center relative min-h-[100px]">
                                                    {/* Top Right Tag */}
                                                    <div className="absolute top-0 right-0">
                                                        <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-white text-[7px] md:text-[9px] font-black uppercase tracking-widest">
                                                            {cert.level}
                                                        </span>
                                                    </div>

                                                    <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight mb-2 pr-12 leading-tight">
                                                        {cert.title}
                                                    </h3>

                                                    {position === 0 && (
                                                        <>
                                                            <p className="text-[10px] md:text-xs text-white/50 leading-relaxed max-w-sm font-medium">
                                                                {cert.description}
                                                            </p>
                                                            <div className="mt-4 w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
