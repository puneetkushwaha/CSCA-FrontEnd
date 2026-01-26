import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Terminal } from 'lucide-react';
import RedGeometricBackground from './RedGeometricBackground';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const certifications = [
        {
            title: "Foundational Certification",
            level: "Foundational",
            description: "Validates foundational defensive cybersecurity knowledge required for entry-level blue team and security operations roles. This certification confirms a candidate’s understanding of core defensive concepts, basic threat awareness, and security monitoring principles within organizational environments.",
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
            title: "Intermediate Certification",
            level: "Intermediate",
            description: "Validates intermediate-level blue team capabilities focused on security operations, threat analysis, and incident response concepts. This certification demonstrates a candidate’s ability to analyze security events, understand attack patterns, and apply structured defensive reasoning aligned with real-world security operations.",
            icon: <Globe className="h-10 w-10 text-red-600" />,
            glow: "from-red-400/20"
        },
        {
            title: "Professional Certification",
            level: "Professional",
            description: "Validates professional-level knowledge of digital forensics principles, evidence handling, and forensic investigation methodologies. This certification confirms a candidate’s understanding of forensic processes, legal awareness, and analytical techniques required for digital investigations across cyber incidents.",
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
                        Empowering professionals worldwide with globally recognized cybersecurity certifications aligned with real-world performance, modern enterprise environments, and global career growth.
                        </p>

                        {/* Middle Line */}
                        <div className="w-full h-px bg-red-600/40 mb-6"></div>

                        <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
                        Codevirus Security Certification Authority (CSCA) is an independent cybersecurity certification body governing role-based professional credentials.</p>
                         <br />
                         <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
                         CSCA certifications validate applied defensive, detection, response, and forensic competencies through real-world assessment frameworks aligned with global security operations.</p>
                        <br />
                         
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
                                                <div className="flex-grow flex flex-col justify-center min-h-[100px]">
  {/* Title Row */}
  <div className="flex items-start justify-between mb-2">
    <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight leading-tight">
      {cert.title}
    </h3>
    <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-white text-[7px] md:text-[9px] font-black uppercase tracking-widest ml-3 shrink-0">
      {cert.level}
    </span>
  </div>

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
                    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black opacity-80"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-12 text-red-500">
            Take the Next Step with CSCA
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg rounded-xl font-semibold">
              Explore Certifications
            </button>
            <button className="bg-white text-red-600 hover:bg-red-100 px-8 py-4 text-lg rounded-xl font-semibold">
              Explore Careers
            </button>
            <button className="bg-red-800 hover:bg-red-900 px-8 py-4 text-lg rounded-xl font-semibold">
              Partner With Us
            </button>
            <button className="bg-gray-900 border border-red-500 px-8 py-4 text-lg rounded-xl font-semibold">
              Verify Certificate
            </button>
          </div>
        </div>
      </section>

      {/* === 2️⃣ Why Choose CSCA === */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 bg-black/90 text-left backdrop-blur-xl">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-400 mb-10">
            Why Choose CSCA
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-300">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                🌍 Globally Aligned Standards
              </h3>
              <p>
                Mapped with NIST, MITRE ATT&CK, ISO 27001, SOC2, and Zero Trust frameworks.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                🧠 Hands-On, Role-Based Certifications
              </h3>
              <p>
                Every certification includes scenario-driven labs, simulations,
                and practical assessments.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                🏅 Industry-Validated Credentials
              </h3>
              <p>
                Recognized across SOC teams, cybersecurity enterprises, and
                academic institutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                ⚙️ Performance-Based Certification Exams
              </h3>
              <p>
                Exams are built on practical tasks, real logs, real incidents, and
                real investigations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === 3️⃣ Popular Certifications === */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 bg-gradient-to-b from-black via-red-950/20 to-black text-center">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-red-400 mb-10">
            Popular Certifications
          </h2>
          <ul className="text-gray-200 space-y-8 text-left">
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Certified Junior Detection Engineer (CJDE)
              </h3>
              <p className="text-gray-400">
                Build foundational skills in detection engineering, alert creation,
                event analysis, and malicious pattern identification.
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Certified SOC Analyst (CSA)
              </h3>
              <p className="text-gray-400">
                Learn SOC operations, SIEM analysis, IR workflows, and threat
                investigation techniques.
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Certified Threat Hunter (CTH)
              </h3>
              <p className="text-gray-400">
                Master hypothesis-based hunting, ATT&CK mapping, log correlation,
                and adversarial behavior analysis.
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Certified Cloud Security Professional (CCSP)
              </h3>
              <p className="text-gray-400">
                Advanced cloud architecture security, identity governance, and cloud
                threat detection.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* === 4️⃣ Global Standards === */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-black/90 text-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-red-400 mb-6">
            Global Standards
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            CSCA certifications follow international best practices:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-200">
            <span className="bg-red-900/50 px-4 py-2 rounded-md text-lg">
              MITRE
            </span>
            <span className="bg-red-900/50 px-4 py-2 rounded-md text-lg">
              NIST
            </span>
            <span className="bg-red-900/50 px-4 py-2 rounded-md text-lg">
              ISO 27001
            </span>
            <span className="bg-red-900/50 px-4 py-2 rounded-md text-lg">
              SOC2
            </span>
            <span className="bg-red-900/50 px-4 py-2 rounded-md text-lg">
              Zero Trust
            </span>
            <span className="bg-red-900/50 px-4 py-2 rounded-md text-lg">
              Cloud Security Alliance
            </span>
          </div>
        </div>
      </section>

                </div>
            </div>
        </div>
    );
};

export default Hero;
