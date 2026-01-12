import React, { useState } from "react";
import { BookOpen, Wrench, FolderOpen, Map, Briefcase, BarChart } from "lucide-react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const Enterprise = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        { name: "Overview", icon: <BookOpen className="w-5 h-5" /> },
        { name: "Solutions", icon: <Wrench className="w-5 h-5" /> },
        { name: "Employee Career Pathways", icon: <Map className="w-5 h-5" /> },
        { name: "Resources", icon: <FolderOpen className="w-5 h-5" /> },
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
                        Home &gt; Enterprise
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                        Cyber Capability Building for Enterprises & Governments.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
                        Upskill your enterprise tech team with industry-leading IT training and certification programs.
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
                        {/* Learning Solutions Section */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    Learning solutions to <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        upskill your IT team
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    CSCA equips enterprise tech teams with training and certifications to close IT skills gaps, boost cybersecurity readiness, and drive growth.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Our solutions support digital transformation and continuous learning to strengthen your workforce.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                                    alt="Enterprise team meeting"
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
                                Let's discuss your goals and how we can work together to upskill and empower your team.
                            </p>
                            <button className="bg-[#d71f28] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(215,31,40,0.4)]">
                                Connect with us
                            </button>
                        </section>

                        {/* Employee Career Pathways */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div className="order-2 md:order-1 relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                                    alt="Man typing on laptop"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    Employee career <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        pathways
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    CSCA’s employee career pathways provide an IT training roadmap aligned with critical roles in cyber, tech support, cloud, data, and more.
                                </p>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Equip your team with the skills to solve today's tech challenges and anticipate tomorrow's needs.
                                </p>
                                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all hover:border-white">
                                    Learn more
                                </button>
                            </div>
                        </section>

                        {/* Access Resources */}
                        <section className="mb-24">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-black mb-4">
                                    Access resources and insights
                                </h2>
                                <p className="text-gray-400 text-xl">to drive your business forward</p>
                            </div>

                            <div className="grid lg:grid-cols-4 gap-6">
                                {/* Main Feature Card */}
                                <div className="lg:col-span-4 relative group rounded-3xl overflow-hidden border border-white/10 h-[400px] mb-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                                        alt="Office setting"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8 md:p-12">
                                        <span className="bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                                            Featured
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold max-w-3xl leading-tight">
                                            Upskilling IT Teams: The Key to Scalable Growth with CSCA OnDemand
                                        </h3>
                                    </div>
                                </div>

                                {/* Blog Card 1 */}
                                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">Enterprise</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 line-clamp-3">
                                        Ultimate Cybersecurity Roadmap: How Businesses Can Navigate Evolving Threats
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Blog Card 2 */}
                                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">Enterprise</span>
                                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">•</span>
                                        <span className="text-purple-500 text-xs font-bold uppercase tracking-wider">Cyber</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 line-clamp-3">
                                        Critical Skills for Enterprise Success in Cybersecurity: Insights from the Cybersecurity Study
                                    </h4>
                                    <button className="text-gray-400 hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto">
                                        Read Report <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Contact Us CTA */}
                        <section
                            className="relative py-24 text-center text-white rounded-3xl overflow-hidden"
                            style={{
                                background:
                                    "linear-gradient(90deg, black 0%, #000000ff 50%, black 100%)",
                            }}
                        >
                            <div className="max-w-4xl mx-auto px-6 relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black mb-6">Contact Us</h2>
                                <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
                                    Ready to partner with our team to find the right upskilling solution for your tech staff?
                                </p>
                                <button className="bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                    Contact us
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
                        {/* Solutions for tech teams */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    Solutions for <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        tech teams
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    Upskill and validate your team's expertise with IT, cybersecurity, data, and AI solutions. Our structured certifications and learning programs provide flexibility and support your IT team's needs.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                                    alt="Meeting in office common space"
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
                                    src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                                    alt="Man smiling sitting at desk"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-4xl font-bold mb-6">
                                    <span className="text-red-500">OnDemand</span> learning solutions
                                </h2>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    Our flexible, self-paced, OnDemand solutions provide employees with instructional video-based, structured learning, with expert content, performance tracking, badging, and live chat to help them upskill their tech teams.
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
                                    For organizations focused on validating expertise, or for teams that already possess the necessary skills, certification vouchers provide a streamlined solution for employees to achieve globally recognized CSCA certifications.
                                </p>
                                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                                    Buy today
                                </button>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                                    alt="Woman smiling holding laptop"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                        </section>

                        {/* Contact Us CTA */}
                        <section
                            className="relative py-24 text-center text-white rounded-3xl overflow-hidden"
                            style={{
                                background:
                                    "linear-gradient(90deg, black 0%, #000000ff 50%, black 100%)",
                            }}
                        >
                            <div className="max-w-4xl mx-auto px-6 relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black mb-6">Contact Us</h2>
                                <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
                                    Ready to partner with our team to find the right upskilling solution for your tech staff?
                                </p>
                                <button className="bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                    Contact us
                                </button>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </section>
                    </>
                )}

                {/* ------------------ EMPLOYEE CAREER PATHWAYS TAB ------------------ */}
                {activeTab === "Employee Career Pathways" && (
                    <>
                        <section className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-black mb-6">
                                Explore CSCA’s <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                    Career Pathways
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                                Guide your employees through progressive skill development, starting with foundational IT knowledge and advancing to specialized areas such as cybersecurity, cloud computing, AI, and data analytics.
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
                    </>
                )}

                {/* ------------------ RESOURCES TAB ------------------ */}
                {activeTab === "Resources" && (
                    <>
                        {/* Webinars Hero */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    On-demand & live <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                        webinars
                                    </span>
                                    <br />
                                    to power your organization
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Explore expert-led webinars for enterprise leaders and tech teams. Access live and on-demand sessions on workforce development, certification pathways, and proven strategies to build and retain high-performing tech talent.
                                </p>
                                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                                    Explore webinars
                                </button>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000"
                                    alt="Webinar thumbnail"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                        </section>

                        {/* Level Up Team */}
                        <section className="mb-24">
                            <h2 className="text-3xl font-bold mb-10">Level up your team with CSCA</h2>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                                    <img
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
                                        alt="System director"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4">How a System Director Leveled up His Team With CSCA Training</h3>
                                        <p className="text-gray-400 mb-6">
                                            Discover how a System Director transformed his team's capabilities and boosted their performance with CSCA's comprehensive Data+ training programs.
                                        </p>
                                        <button className="text-red-500 font-bold uppercase text-sm tracking-wider hover:text-white transition-colors">
                                            Read Story
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all">
                                        <div className="flex gap-2 mb-3">
                                            <span className="text-xs font-bold uppercase text-red-500">Enterprise</span>
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">How IT Upskilling Unlocks Sustainable Growth for Mid-Market Teams</h4>
                                        <button className="text-sm text-gray-400 hover:text-white mt-2 flex items-center gap-1">Read Blog <ArrowRight className="w-3 h-3" /></button>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all">
                                        <div className="flex gap-2 mb-3">
                                            <span className="text-xs font-bold uppercase text-red-500">Enterprise</span>
                                            <span className="text-xs font-bold uppercase text-purple-500">Cyber</span>
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Today’s Top Drivers for Cybersecurity Strategy</h4>
                                        <button className="text-sm text-gray-400 hover:text-white mt-2 flex items-center gap-1">Read Report <ArrowRight className="w-3 h-3" /></button>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all">
                                        <div className="flex gap-2 mb-3">
                                            <span className="text-xs font-bold uppercase text-red-500">Enterprise</span>
                                            <span className="text-xs font-bold uppercase text-blue-500">Government</span>
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">How Upskilling Benefits Your Organization</h4>
                                        <button className="text-sm text-gray-400 hover:text-white mt-2 flex items-center gap-1">Read Blog <ArrowRight className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact Us CTA */}
                        <section
                            className="relative py-24 text-center text-white rounded-3xl overflow-hidden"
                            style={{
                                background:
                                    "linear-gradient(90deg, black 0%, #000000ff 50%, black 100%)",
                            }}
                        >
                            <div className="max-w-4xl mx-auto px-6 relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black mb-6">Contact Us</h2>
                                <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
                                    Ready to partner with our team to find the right upskilling solution for your tech staff?
                                </p>
                                <button className="bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                    Contact us
                                </button>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </section>
                    </>
                )}

                {/* ------------------ CASE STUDIES TAB ------------------ */}
                {activeTab === "Case Studies" && (
                    <>
                        {/* Feature Story */}
                        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">Feature Story</span>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    Google empowers IT teams with CSCA certifications
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Olesya Menon, Security Program Manager at Google, shares how Google partners with CSCA to upskill its cybersecurity team through specialized training programs and industry-recognized certifications.
                                </p>
                                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                                    Learn more
                                </button>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                                    alt="Google office"
                                    className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[400px] w-full bg-black"
                                />
                            </div>
                        </section>

                        {/* More Stories */}
                        <section className="grid md:grid-cols-2 gap-8 mb-24">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all">
                                <h3 className="text-2xl font-bold mb-4">How a system director leveled up his team with CSCA</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    As a System Director at Clear Blue Insurance Group, Harry Rosario knows the importance of accurate data processing and analysis. Errors in financial reporting can cost time, money, and even damage a company’s reputation. To ensure his team had the tools and skills needed to excel, Harry turned to CSCA Data+ training.
                                </p>
                                <button className="text-red-500 font-bold uppercase text-sm tracking-wider hover:text-white transition-colors">
                                    Learn more
                                </button>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all">
                                <h3 className="text-2xl font-bold mb-4">How CSCA training transformed Thomson Reuters' customer support team</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Discover how CSCA’s training program helped Thomson Reuters enhance employee technical skills, improve customer satisfaction, and boost retention.
                                </p>
                                <button className="text-red-500 font-bold uppercase text-sm tracking-wider hover:text-white transition-colors">
                                    Learn more
                                </button>
                            </div>
                        </section>

                        {/* Contact Us CTA */}
                        <section
                            className="relative py-24 text-center text-white rounded-3xl overflow-hidden"
                            style={{
                                background:
                                    "linear-gradient(90deg, black 0%, #000000ff 50%, black 100%)",
                            }}
                        >
                            <div className="max-w-4xl mx-auto px-6 relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black mb-6">Contact Us</h2>
                                <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
                                    Ready to partner with our team to find the right upskilling solution for your tech staff?
                                </p>
                                <button className="bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                    Contact us
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

export default Enterprise;
