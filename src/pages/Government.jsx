import React from "react";
import { Building2, Landmark, Phone } from "lucide-react";
import RedGeometricBackground from "../components/RedGeometricBackground";
import { Link } from "react-router-dom";

const Government = () => {
    return (
        <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={30}
                    jaggednessScale={2.5}
                    opacity={0.4}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 15]}
                    ashCount={200}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black"></div>
            </div>

            {/* Header Section */}
            <header className="relative z-10 py-20 px-6 border-b border-white/10">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-sm font-mono text-red-500 mb-4 tracking-widest uppercase">
                        Home &gt; Government
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                            GOVERNMENT
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        CSCA provides industry-recognized certifications, flexible training solutions, and resources, to help government agencies build skilled IT workforces and enhance their cybersecurity capabilities.
                    </p>
                </div>
            </header>

            <main className="relative z-10 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Main Cards Section */}
                    <div className="grid md:grid-cols-2 gap-10 mb-24">
                        {/* Central Government Card */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                                <Landmark className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Central Government</h2>
                            <p className="text-gray-400 text-lg mb-10 min-h-[84px]">
                                Learn how we can help central government employees stay current on cybersecurity skills.
                            </p>
                            <Link
                                to="/government/central"
                                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors"
                            >
                                Explore Central Govt <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* State Government Card */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                                <Building2 className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">State Government</h2>
                            <p className="text-gray-400 text-lg mb-10 min-h-[84px]">
                                Our team can help with your procurement challenges to ensure your employees have the cybersecurity skills they need.
                            </p>
                            <Link
                                to="/government/state"
                                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider border-b-2 border-blue-600 pb-1 hover:text-blue-500 transition-colors"
                            >
                                Explore State Govt <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Us CTA */}
                    <section
                        className="relative py-24 text-center text-white rounded-3xl overflow-hidden border border-white/10"
                        style={{
                            background: "linear-gradient(90deg, black 0%, #0a0a0aff 50%, black 100%)",
                        }}
                    >
                        <div className="max-w-4xl mx-auto px-6 relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Contact Us</h2>
                            <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-2xl mx-auto">
                                Reach out to our team to start exploring the training solutions you need for your government tech team!
                            </p>
                            <button className="bg-white text-black font-bold text-lg px-12 py-4 rounded-full shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:bg-gray-100">
                                Contact us
                            </button>
                        </div>

                        {/* Detailed decorative background */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]"></div>
                            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

const ArrowRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)

export default Government;
