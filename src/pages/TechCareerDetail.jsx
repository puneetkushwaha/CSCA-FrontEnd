import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { careerData } from '../data/techCareers.jsx';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { ArrowLeft, CheckCircle, Share2, Printer, BadgeDollarSign, Users, TrendingUp, BookOpen, GraduationCap, MapPin, Shield, Globe } from 'lucide-react';

const TechCareerDetail = () => {
    const { careerId } = useParams();
    const [career, setCareer] = useState(null);
    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        const found = careerData.find(c => c.id === careerId);
        setCareer(found);
    }, [careerId]);

    if (!career) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
    }

    // Fallback if data doesn't have the new structure yet (safe guard)
    const globalStats = career.stats.global || career.stats;
    const indiaStats = career.stats.india || { listings: "N/A", salary: "N/A", projected: "N/A" };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Overview':
                return (
                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {/* Description */}
                        <section>
                            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">What is a {career.title}?</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {career.overview}
                            </p>
                        </section>

                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Global Column */}
                            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-red-600/30 transition-all">
                                <div className="absolute top-0 right-0 p-4 bg-white/5 rounded-bl-2xl border-b border-l border-white/10">
                                    <Globe className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                                    Global Market
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Avg Salary</span>
                                        <span className="text-2xl font-black text-white">{globalStats.salary}</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Active Jobs</span>
                                        <span className="text-2xl font-black text-white">{globalStats.listings}</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Growth</span>
                                        <span className="text-xl font-bold text-green-500">{career.outlook}</span>
                                    </div>
                                </div>
                            </div>

                            {/* India Column */}
                            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all">
                                <div className="absolute top-0 right-0 p-4 bg-white/5 rounded-bl-2xl border-b border-l border-white/10">
                                    <MapPin className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                                    India Market
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Avg Salary</span>
                                        <span className="text-2xl font-black text-white">{indiaStats.salary}</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Active Jobs</span>
                                        <span className="text-2xl font-black text-white">{indiaStats.listings}</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Heads-up</span>
                                        <span className="text-sm font-mono text-orange-500 text-right">High demand in Bengaluru, Pune</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );
            case 'Train For':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Recommended Training</h2>
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:border-red-600/30 transition-all">
                            <div className="p-4 bg-red-900/20 rounded-xl text-red-500">
                                <Shield className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black uppercase text-white mb-2">CSCA Certified</h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    The industry standard for starting a career in {career.categories[0]}.
                                    Gain the practical skills employers are looking for.
                                </p>
                                <Link to="/certification-pathway" className="px-6 py-3 bg-red-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                                    View Certification
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            case 'Career Path':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Typical Career Path</h2>
                        <div className="relative border-l-2 border-white/10 ml-4 space-y-12 pb-4">
                            {[
                                { title: "Entry Level", desc: `Junior ${career.title}, Support Specialist`, time: "0-2 Years" },
                                { title: "Mid Level", desc: `Senior ${career.title}, Team Lead`, time: "2-5 Years" },
                                { title: "Advanced", desc: `${career.title} Manager, Principal Architect`, time: "5+ Years" }
                            ].map((step, i) => (
                                <div key={i} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-red-600"></div>
                                    <h4 className="text-lg font-bold text-white uppercase mb-1">{step.title}</h4>
                                    <div className="text-red-500 font-mono text-xs mb-2">{step.time}</div>
                                    <p className="text-gray-400 text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'Resources':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Role Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                    <div className="text-red-500 mb-4 group-hover:translate-x-1 transition-transform">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Ultimate Guide to {career.title}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Article • 5 min read</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-900 selection:text-white pb-20">

            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={20}
                    jaggednessScale={2.0}
                    opacity={0.3}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 15]}
                    ashCount={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
            </div>

            <div className="relative z-10 pt-24 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Breadcrumb & Back */}
                <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
                    <Link to="/explore-tech-careers" className="hover:text-red-500 flex items-center gap-1 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Careers
                    </Link>
                    <span>/</span>
                    <span className="text-white">{career.title}</span>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="lg:col-span-2">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            {career.title}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                            {career.description}
                        </p>
                        <button className="px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                            View Support Certifications
                        </button>
                    </div>

                    {/* Quick Stats Card (Defaulting to Global for Hero, or India? Let's show Global large) */}
                    <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-2xl">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-red-500 font-mono text-xs uppercase tracking-widest border-b border-white/10 pb-4">
                                <Globe className="w-4 h-4" /> Global Average
                            </div>
                            <div className="mb-8">
                                <h3 className="text-5xl font-black text-white mb-1">{globalStats.salary}</h3>
                                <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Median Annual Salary</p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-black text-white mb-1">{globalStats.projected}</h3>
                                <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Projected Employment</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Tabs Navigation */}
                <div className="border-b border-white/10 mb-12 sticky top-20 bg-black/80 backdrop-blur-md z-40 -mx-6 px-6 lg:mx-0 lg:px-0">
                    <div className="flex gap-8 overflow-x-auto pb-0 hide-scrollbar">
                        {['Overview', 'Train For', 'Career Path', 'Resources'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`font-bold uppercase tracking-widest pb-4 px-2 whitespace-nowrap transition-all duration-300 relative
                                    ${activeTab === tab ? 'text-red-500' : 'text-gray-500 hover:text-white'}`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 shadow-[0_0_10px_red]"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 min-h-[400px]">
                        {renderTabContent()}
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/30 p-8 rounded-2xl sticky top-40">
                            <h3 className="text-2xl font-black uppercase mb-4">Ready to start?</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Get certified and prove your skills to employers.
                            </p>
                            <Link to="/certification-pathway" className="block w-full py-3 bg-red-600 text-center rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                                Explore Certifications
                            </Link>

                            {/* Divider */}
                            <div className="h-px bg-white/10 my-6"></div>

                            <h4 className="font-bold text-white uppercase text-sm mb-4">Latest Updates</h4>
                            <div className="space-y-4">
                                <a href="#" className="block text-gray-500 hover:text-red-500 text-xs transition-colors">
                                    • The Future of {career.title} in 2026
                                </a>
                                <a href="#" className="block text-gray-500 hover:text-red-500 text-xs transition-colors">
                                    • Salary trends: India vs Global
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TechCareerDetail;
