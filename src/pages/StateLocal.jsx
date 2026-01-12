import React, { useState } from "react";
import { BookOpen, Wrench, FolderOpen, Map, Briefcase } from "lucide-react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const StateLocal = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        { name: "Overview", icon: <BookOpen className="w-5 h-5" /> },
        { name: "Solutions", icon: <Wrench className="w-5 h-5" /> },
        { name: "Resources", icon: <FolderOpen className="w-5 h-5" /> },
        { name: "Upskilling Pathways", icon: <Map className="w-5 h-5" /> },
        { name: "Case Studies", icon: <Briefcase className="w-5 h-5" /> },
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
                        Government &gt; State & Local
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                            STATE & LOCAL
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
                        CSCA partners with government agencies to deliver IT training and certification solutions.
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
                        {/* Solutions for Government Employees */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    Solutions to <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        upskill your government employees
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    CSCA's solutions are tailored to meet state and local government agencies' unique needs. With flexible, instructor-led video learning and certification programs, we partner with you to navigate your procurement challenges.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=1000"
                                    alt="Government team meeting"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                        </section>

                        {/* Let's Connect */}
                        <section className="text-center mb-24">
                            <h3 className="text-4xl font-black mb-6 uppercase tracking-wider">LET'S CONNECT</h3>
                            <p className="text-gray-400 mb-8 text-xl max-w-3xl mx-auto">
                                Ready to take the next step?
                                <br />
                                Let's discuss your upskilling goals and procurement needs to determine the most cost-effective solutions.
                            </p>
                            <button className="bg-[#d71f28] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(215,31,40,0.4)]">
                                Connect with us
                            </button>
                        </section>

                        {/* Upskilling Pathways */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div className="order-2 md:order-1 relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000"
                                    alt="Upskilling pathways"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    Upskilling <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        pathways
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    CSCA’s employee upskilling pathways provide industry-recognized solutions to empower your workforce with the skills to safeguard critical infrastructure and protect sensitive information.
                                </p>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Equip your teams with the knowledge and skills aligned to AI, Data, Cloud, Cyber, Digital Skills, Networking, and Tech Support.
                                </p>
                                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all hover:border-white">
                                    Learn more
                                </button>
                            </div>
                        </section>

                        {/* Resources Resources */}
                        <section className="mb-24">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-black mb-4">
                                    Explore our workforce tech training resources
                                </h2>
                                <p className="text-gray-400 text-xl">to learn what's available for your agency.</p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-6">
                                {/* Resource 1 */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">State & Local</span>
                                        <span className="text-purple-500 text-xs font-bold uppercase tracking-wider">Cyber</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        Upskilling the Utah Workforce with CSCA Certifications
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Story <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Resource 2 */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">State & Local</span>
                                        <span className="text-purple-500 text-xs font-bold uppercase tracking-wider">Cyber</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        How CSCA Certifications Are Transforming Mission, Texas
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Story <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Resource 3 */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Government</span>
                                        <span className="text-green-500 text-xs font-bold uppercase tracking-wider">AI</span>
                                        <span className="text-purple-500 text-xs font-bold uppercase tracking-wider">Cyber</span>
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">State & Local</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        AI’s Impact on Government Cybersecurity Skills Training
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
                                    Talk to our team
                                </button>
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </section>
                    </>
                )}

                {/* ------------------ SOLUTIONS TAB ------------------ */}
                {activeTab === "Solutions" && (
                    <>
                        {/* Solutions Hero */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    Solutions for <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        state & local employees
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    Upskill and validate your team's expertise with IT, cybersecurity, data, and AI solutions. Partner directly with us on flexible, cost-effective learning programs to support your government team's needs.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=1000"
                                    alt="Solutions"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                        </section>

                        {/* Flexible Learning Solutions */}
                        <section className="text-center mb-24">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible learning solutions</h2>
                            <p className="text-gray-400 mb-4 text-xl">Get started with an expert</p>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                Learn more about our solutions designed to empower, educate and unlock potential
                            </p>
                            <button className="bg-[#d71f28] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(215,31,40,0.4)]">
                                Connect with an expert
                            </button>
                        </section>

                        {/* OnDemand Learning */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div className="order-2 md:order-1 relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
                                    alt="OnDemand learning"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-4xl font-bold mb-6">
                                    <span className="text-red-500">OnDemand</span> learning
                                </h2>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    CSCA’s OnDemand solutions offer government employees maximum schedule flexibility and a structured learning environment—featuring instructional video-based expert content, performance tracking, badging, and live chat support.
                                </p>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    OnDemand products available include CSCA Tech+, A+, Network+, Security+, Linux+, CySA+, PenTest+ and Data+.
                                </p>
                                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all hover:border-white">
                                    Check out a demo
                                </button>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-4xl font-bold mb-6">Certifications</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Vouchers are designed for individuals already prepared for certification exams and do not require additional training. Earn industry-recognized credentials quickly.
                                </p>
                                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                                    Buy today
                                </button>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=1000"
                                    alt="Certifications"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
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
                                    Talk to our team
                                </button>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </section>
                    </>
                )}

                {/* ------------------ RESOURCES TAB ------------------ */}
                {activeTab === "Resources" && (
                    <>
                        <section className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-black mb-6">
                                Learn how CSCA is helping state and <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                    local government employees, like you.
                                </span>
                            </h2>
                        </section>

                        {/* Top Resources Grid */}
                        <div className="grid lg:grid-cols-3 gap-6 mb-24">
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
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                <div className="flex gap-2 mb-4">
                                    <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Government</span>
                                    <span className="text-green-500 text-xs font-bold uppercase tracking-wider">AI</span>
                                    <span className="text-purple-500 text-xs font-bold uppercase tracking-wider">Cyber</span>
                                    <span className="text-red-500 text-xs font-bold uppercase tracking-wider">State & Local</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-4">
                                    AI’s Impact on Government Cybersecurity Skills Training
                                </h4>
                                <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                    Read Blog <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                <div className="flex gap-2 mb-4">
                                    <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Government</span>
                                    <span className="text-red-500 text-xs font-bold uppercase tracking-wider">State & Local</span>
                                    <span className="text-purple-500 text-xs font-bold uppercase tracking-wider">Cyber</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-4">
                                    Securing Critical Infrastructure Against Cyber Attacks
                                </h4>
                                <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                    Read Blog <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Improve Security Practices */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                                    Improve security practices <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        with CSCA
                                    </span>
                                </h2>
                                <h3 className="text-2xl font-bold text-white mb-4">How CSCA Security+ Training Helped Utah Improve Security Practices</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    See how CSCA worked with the State of Utah to train government workers in improved security practices through CSCA Security+ certification.
                                </p>
                                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                                    Read Story
                                </button>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000"
                                    alt="Security practices"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                        </section>

                        <section className="mb-24">
                            <h2 className="text-3xl font-bold mb-10 text-center">Government workforce tech training resources for your agency.</h2>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">Enterprise</span>
                                        <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Government</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        Upskill and Reskill with CSCA OnDemand: The Flexible Path to Cybersecurity Certification
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Blog <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">State & Local</span>
                                        <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">Government</span>
                                        <span className="text-green-500 text-xs font-bold uppercase tracking-wider">AI</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        How AI is Transforming State and Local Government: 5 Key Benefits
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Blog <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">State & Local</span>
                                        <span className="text-purple-500 text-xs font-bold uppercase tracking-wider">Cyber</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        Top Cybersecurity Tips for State & Local Governments
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Blog <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                            </div>
                        </section>

                        <section className="relative py-24 text-center text-white rounded-3xl overflow-hidden border border-white/10" style={{ background: "linear-gradient(90deg, black 0%, #0a0a0aff 50%, black 100%)" }}>
                            <div className="max-w-4xl mx-auto px-6 relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Contact Us</h2>
                                <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-2xl mx-auto">
                                    Ready to partner with our team to find the right solution for you?
                                </p>
                                <button className="bg-white text-red-600 font-bold text-lg px-12 py-4 rounded-full shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                    Talk to our team
                                </button>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </section>

                    </>
                )}

                {/* ------------------ UPSKILLING PATHWAYS TAB ------------------ */}
                {activeTab === "Upskilling Pathways" && (
                    <>
                        <section className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-black mb-6">
                                CSCA upskilling pathways for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                    state & local government employees
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                                CSCA's upskilling pathways equip state and local IT professionals with the knowledge and skills aligned to AI, Data, Cloud, Cyber, Digital Skills, Networking, and Tech Support. Combining these certifications with hands-on experience strengthens agency workforce readiness and compliance.
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                            {[
                                {
                                    title: "AI",
                                    desc: "Develop advanced skills in artificial intelligence to unlock powerful insights and fuel innovation in a rapidly evolving tech landscape."
                                },
                                {
                                    title: "Cloud",
                                    desc: "Gain the skills to manage, deploy, and secure cloud environments, preparing for careers in the rapidly growing cloud computing industry."
                                },
                                {
                                    title: "Cyber",
                                    desc: "Develop critical cybersecurity skills to protect systems, networks, and data from evolving threats in the digital landscape."
                                },
                                {
                                    title: "Data",
                                    desc: "Develop expertise in data systems and analytics, including data analysis, visualization, governance, and applying insights to drive informed business decisions."
                                },
                                {
                                    title: "Digital Skills",
                                    desc: "Master essential digital tools and technologies to thrive in modern workplaces and adapt to evolving tech demands."
                                },
                                {
                                    title: "Network",
                                    desc: "Learn to design, implement, and manage networks, ensuring seamless communication and connectivity in IT environments."
                                },
                                {
                                    title: "Tech Support",
                                    desc: "Acquire foundational IT knowledge to troubleshoot, maintain, and support technology systems, launching a career in IT support."
                                }
                            ].map((pathway, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1">
                                    <h3 className="text-2xl font-bold mb-4 text-red-500">{pathway.title}</h3>
                                    <p className="text-gray-400 mb-8 min-h-[80px]">{pathway.desc}</p>
                                    <button className="text-white font-semibold flex items-center gap-2 hover:text-red-500 transition-colors">
                                        Explore products <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

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
                                    Talk to our team
                                </button>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </section>

                    </>
                )}

                {/* ------------------ CASE STUDIES TAB ------------------ */}
                {activeTab === "Case Studies" && (
                    <>
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    How Utah leads in cybersecurity training <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        with CSCA certifications
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    The State of Utah has emerged as a cybersecurity training and workforce development leader, implementing a forward-thinking program that prioritizes data privacy, cybersecurity certifications, and employee upskilling. This success story offers valuable lessons for governments nationwide looking to strengthen their cybersecurity posture.
                                </p>
                                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                                    Learn more
                                </button>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1000"
                                    alt="Utah case study"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 rounded-2xl p-10 mb-24 hover:bg-white/10 transition-all">
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Transforming the Mission, Texas workforce through CSCA certifications</h2>
                                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                        Despite its underdog status in attracting businesses and developing a skilled workforce, Mission, TX has proven that innovation and collaboration can drive meaningful change. Through a groundbreaking partnership with CSCA, the city is addressing the cybersecurity skills gap and empowering its residents with free IT certifications.
                                    </p>
                                    <button className="text-red-500 font-bold uppercase text-sm tracking-wider hover:text-white transition-colors">
                                        Learn more
                                    </button>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=1000"
                                    alt="Mission Texas"
                                    className="rounded-2xl w-full h-64 object-cover"
                                />
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
                                    Talk to our team
                                </button>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </section>
                    </>
                )}

            </main>
        </div>
    );
};

const ArrowRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)

export default StateLocal;
