import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Database } from 'lucide-react';
import { certifications as certificationsData } from '../data/certifications.jsx';
import RedGeometricBackground from '../components/RedGeometricBackground';

const Certifications = () => {
    const [activeCategory, setActiveCategory] = useState('Overview');

    const categories = [
        'Overview', 'All', 'AI', 'Cloud', 'Cyber', 'Data', 'Digital Skills', 'Network', 'Tech Support'
    ];

    const certifications = certificationsData;

    const filteredCertifications = activeCategory === 'All'
        ? certifications
        : activeCategory === 'Overview'
            ? []
            : certifications.filter(cert => Array.isArray(cert.category) ? cert.category.includes(activeCategory) : cert.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-white font-['Inter'] relative selection:bg-red-500/30 overflow-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={30}
                    jaggednessScale={2.5}
                    opacity={0.4}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 15]}
                    ashCount={200}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 cursor-default">
                    <div className="inline-flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Global Standard</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-8">
                    Certifications Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800"> the Real Cyber Battlefield</span>
                    </h1>
                    {activeCategory === 'Overview' ? null : (
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-2">
                            Build the skills employers need and showcase your ability to excel in high-demand roles.
                        </p>
                    )}
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border backdrop-blur-sm
                                ${activeCategory === category
                                    ? 'bg-red-600 text-white border-red-500 shadow-[0_0_25px_rgba(220,38,38,0.5)] scale-105'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[600px]">
                    {activeCategory === 'Overview' ? (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                            {/* Overview Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                                {/* Left Content */}
                                <div className="space-y-10">
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.9]">
                                        Take your next step with <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">certifications</span> and <br />
                                        skills-based training.
                                    </h2>
                                    <div className="space-y-6 text-lg text-gray-400 font-medium leading-relaxed">
                                        <p>
                                            From entry level to advanced, unlock new career opportunities with industry-leading certifications in IT support, cybersecurity, networking, cloud, and data.
                                        </p>
                                        <p>
                                            Build in-demand skills fast with flexible courses in artificial intelligence, soft skills, and more. Whether you're learning on your own or seeking training for your organization, we're here to support your goals.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setActiveCategory('All')}
                                        className="group mt-4 px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-red-600 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] flex items-center gap-3"
                                    >
                                        Browse all credentials
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Right Sidebar - Explore Products */}
                                <div className="lg:pl-16 lg:border-l border-white/10">
                                    <h3 className="text-sm font-black text-red-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                        <div className="w-8 h-px bg-red-500"></div>
                                        Explore by Skill
                                    </h3>
                                    <ul className="grid gap-4">
                                        {['AI', 'Cloud', 'Cyber', 'Data', 'Digital Skills', 'Network', 'Tech Support'].map((skill) => (
                                            <li key={skill}>
                                                <button
                                                    onClick={() => setActiveCategory(skill)}
                                                    className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                                >
                                                    <span className="text-sm font-bold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                                                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Certifications Grid (Overview - Top 10) */}
                            <div className="mb-24">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Accelerate your career</h2>
                                    <p className="text-gray-400">Discover our top 10 most popular certifications</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                    {certifications.slice(0, 10).map((cert) => (
                                        <div
                                            key={cert.id}
                                            className="group relative bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            <div className="p-8 md:p-12 flex flex-col h-full relative z-10">
                                                {/* Header & Title Combined */}
                                                <div className="flex items-start gap-6 mb-8">
                                                    {/* Colored Icon Badge */}
                                                    <div className={`shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-transparent transition-colors">
                                                            {cert.icon}
                                                        </div>
                                                    </div>

                                                    {/* Title & Meta */}
                                                    <div className="flex-grow pt-1">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <div>
                                                                <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] font-bold uppercase tracking-widest">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                                                    CSCA
                                                                </div>
                                                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-red-500 transition-colors duration-300">
                                                                    {cert.title}
                                                                </h3>
                                                            </div>
                                                            <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 text-gray-400 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                                                {cert.level}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-400 leading-relaxed font-medium mb-6 border-l-2 border-white/5 pl-6 group-hover:border-red-600 transition-colors duration-500">
                                                    {cert.description}
                                                </p>

                                                {/* Action Button */}
                                                <div className="mt-auto">
                                                    <Link to={`/certification/${cert.id}`}>
                                                        <button className="w-fit px-8 py-3 bg-white/5 border border-white/5 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-red-900/40">
                                                            Shop {cert.title} Products
                                                            <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Filtered Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                            {filteredCertifications.length > 0 ? (
                                filteredCertifications.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="group relative bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                        <div className="p-8 md:p-12 flex flex-col h-full relative z-10">
                                            {/* Header & Title Combined */}
                                            <div className="flex items-start gap-6 mb-8">
                                                <div className={`shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-transparent transition-colors">
                                                        {cert.icon}
                                                    </div>
                                                </div>

                                                <div className="flex-grow pt-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] font-bold uppercase tracking-widest">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                                                CSCA
                                                            </div>
                                                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-red-500 transition-colors duration-300">
                                                                {cert.title}
                                                            </h3>
                                                        </div>
                                                        <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 text-gray-400 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                                            {cert.level}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-400 leading-relaxed font-medium mb-6 border-l-2 border-white/5 pl-6 group-hover:border-red-600 transition-colors duration-500">
                                                {cert.description}
                                            </p>

                                            <div className="mt-auto">
                                                <Link to={`/certification/${cert.id}`}>
                                                    <button className="w-fit px-8 py-3 bg-white/5 border border-white/5 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-red-900/40">
                                                        Shop {cert.title} Products
                                                        <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-32 flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-[2rem] bg-white/5">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                        <Database className="w-8 h-8 text-gray-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Content Coming Soon</h3>
                                    <p className="text-gray-500 max-w-md">The curriculum and certification details for <span className="text-red-500">{activeCategory}</span> are currently being updated.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 p-1 rounded-[2.5rem] bg-gradient-to-r from-red-600/20 to-transparent">
                    <div className="p-12 md:p-16 rounded-[2.4rem] bg-black border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full group-hover:bg-red-600/20 transition-colors duration-700"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">Training a Team?</h3>
                                <p className="text-base text-gray-400 max-w-lg">Get enterprise-grade reporting, bulk discounts, and dedicated support for your SOC or IT team.</p>
                            </div>
                            <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-red-900/30">
                                See Enterprise Solutions
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Certifications;
