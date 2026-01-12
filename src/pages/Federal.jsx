import React, { useState } from "react";
import { BookOpen, Wrench, FolderOpen, Map } from "lucide-react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const Federal = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        { name: "Overview", icon: <BookOpen className="w-5 h-5" /> },
        { name: "Solutions", icon: <Wrench className="w-5 h-5" /> },
        { name: "Resources", icon: <FolderOpen className="w-5 h-5" /> },
        { name: "Upskilling Pathways", icon: <Map className="w-5 h-5" /> },
    ];

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
            <header className="relative z-10 py-16 px-6 border-b border-white/10">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-sm font-mono text-red-500 mb-4 tracking-widest uppercase">
                        Government &gt; Federal
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                            FEDERAL
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
                        Empower your federal IT teams with tailored, mission-critical training solutions.
                    </p>

                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap gap-1 border-b border-white/10">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center gap-2 px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group ${activeTab === tab.name
                                        ? "text-white bg-white/5"
                                        : "text-gray-500 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {tab.icon} {tab.name}
                                {activeTab === tab.name && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="relative z-10 pt-20 pb-20 max-w-[1440px] mx-auto px-6 lg:px-8">
                {/* ------------------ OVERVIEW TAB ------------------ */}
                {activeTab === "Overview" && (
                    <>
                        {/* Safeguard government operations */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    Safeguard critical <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        government operations with CSCA
                                    </span>
                                </h2>
                                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                    <p>
                                        Empower your federal IT teams with tailored, mission-critical training solutions that meet the evolving demands of cybersecurity, data, and technology.
                                    </p>
                                    <p>
                                        From foundational to advanced IT certifications and training, our solutions prepare your workforce to meet the federal government’s toughest challenges.
                                    </p>
                                    <p>
                                        Develop mission-ready teams equipped to navigate the complexities of federal IT environments with precision and expertise.
                                    </p>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000"
                                    alt="Federal operations"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[450px] w-full bg-black"
                                />
                            </div>
                        </section>

                        {/* Let's Connect */}
                        <section className="text-center mb-24">
                            <h3 className="text-4xl font-black mb-6 uppercase tracking-wider">LET'S CONNECT</h3>
                            <p className="text-gray-400 mb-8 text-xl max-w-3xl mx-auto">
                                Ready to take the next step?
                                <br />
                                You need a solution tailored to meet your mission-critical needs—let's get there together
                            </p>
                            <button className="bg-[#d71f28] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(215,31,40,0.4)]">
                                Connect with us
                            </button>
                        </section>

                        {/* Why Partner with CSCA */}
                        <section className="mb-24">
                            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
                                Why partner with <span className="text-red-500">CSCA</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative group order-2 md:order-1">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?auto=format&fit=crop&q=80&w=1000"
                                        alt="Military and tech"
                                        className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[500px] w-full bg-black"
                                    />
                                </div>

                                <div className="space-y-8 order-1 md:order-2">
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                        <h3 className="text-xl font-bold text-white mb-2">Trusted advisor</h3>
                                        <p className="text-gray-400">CSCA has worked with the U.S. Government for over 30 years.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                        <h3 className="text-xl font-bold text-white mb-2">Continuous education</h3>
                                        <p className="text-gray-400">Ensuring your agency has current and required credentials.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                        <h3 className="text-xl font-bold text-white mb-2">Talent retention</h3>
                                        <p className="text-gray-400">Enhancing your team's retention through employee development.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                        <h3 className="text-xl font-bold text-white mb-2">Robust support</h3>
                                        <p className="text-gray-400">Trust that our dedicated team understands your evolving goals.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Resources Resources */}
                        <section className="mb-24">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-black mb-4">
                                    Explore our extensive library of <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">IT training resources and guides</span>
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-6">
                                {/* Resource 1 */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Government</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        Upskilling the Government Workforce with IT Training and Certifications
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Blog <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Resource 2 */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-green-500 text-xs font-bold uppercase tracking-wider">Tech Support</span>
                                        <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Government</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        From Military to Tech: Make the Career Switch with CSCA
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Blog <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Resource 3 */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-purple-500 text-xs font-bold uppercase tracking-wider">Cyber</span>
                                        <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Government</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        Key Takeaways from Our 2024 State of Cybersecurity Webinar
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Blog <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Contact Us CTA */}
                        <section
                            className="relative py-24 text-center text-white rounded-3xl overflow-hidden"
                            style={{
                                background:
                                    "linear-gradient(90deg, black 0%, #0a0a0aff 50%, black 100%)",
                            }}
                        >
                            <div className="max-w-4xl mx-auto px-6 relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Contact Us</h2>
                                <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-2xl mx-auto">
                                    Ready to partner with our team to find the right solution for you?
                                </p>
                                <button className="bg-white text-red-600 font-bold text-lg px-12 py-4 rounded-full shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                    Learn more
                                </button>
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </section>
                    </>
                )}

                {/* Placeholders for other tabs */}
                {activeTab !== "Overview" && (
                    <div className="min-h-[50vh] flex items-center justify-center border border-white/10 rounded-2xl bg-white/5">
                        <div className="text-center">
                            <Wrench className="w-16 h-16 text-red-500 mx-auto mb-4 opacity-50" />
                            <h2 className="text-2xl font-bold text-gray-400">Content Coming Soon</h2>
                            <p className="text-gray-500 mt-2">The {activeTab} section is under development.</p>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

const ArrowRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)

export default Federal;
