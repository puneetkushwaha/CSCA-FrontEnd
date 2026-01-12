import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight, Shield, Globe, Database, Cloud, Cpu, Monitor, Code, Terminal, Layers, Brain, TrendingUp, Users, Wifi, Play, Zap } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { Link } from 'react-router-dom';
import { careerData } from '../data/techCareers.jsx';

const ExploreTechCareers = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const categories = [
        "All", "AI", "Cloud", "Cyber", "Data", "Network", "Tech Support"
    ];

    const careersPlusStories = [
        {
            title: "Tech Support Specialist",
            id: "tech-support-specialist",
            tagline: "Watch a tech/IT support specialist in action.",
            desc: "In this inspiring scenario, see how an IT support specialist saves the day when a major tech problem arises.",
            icon: <Monitor className="w-5 h-5" />
        },
        {
            title: "Cybersecurity Specialist",
            id: "cybersecurity-specialist",
            tagline: "Watch a cybersecurity specialist react to an attack.",
            desc: "In this dramatic scenario, see how a cybersecurity specialist reacts to counter an unexpected ransomware attack.",
            icon: <Shield className="w-5 h-5" />
        },
        {
            title: "Systems Engineer",
            id: "systems-engineer",
            tagline: "Watch a systems engineer defend their network.",
            desc: "In this lively scenario, see how a systems engineer analyzes and protects IT systems during a crisis.",
            icon: <Globe className="w-5 h-5" />
        },
        {
            title: "Data Analyst",
            id: "data-analyst",
            tagline: "Watch a data analyst rise to the challenge.",
            desc: "In this intriguing scenario, see how a data analyst maintains data integrity even when IT security systems are compromised.",
            icon: <Database className="w-5 h-5" />
        },
        {
            title: "AI Engineer",
            id: "ai-engineer",
            tagline: "Watch an AI engineer integrate AI ops.",
            desc: "In this engaging scenario, watch as an AI engineer reckons with the concrete problems of aligning AI’s potential with business possibilities.",
            icon: <Brain className="w-5 h-5" />
        },
        {
            title: "Cloud Specialist",
            id: "cloud-architect", // Mapped to Cloud Architect
            tagline: "Watch a cloud specialist build the foundation.",
            desc: "In this realistic scenario, watch as a cloud specialist roots his company’s AI future in flexible and supportive cloud infrastructure.",
            icon: <Cloud className="w-5 h-5" />
        },
        {
            title: "Instructional Designer",
            id: "instructional-designer",
            tagline: "Watch an instructional designer mediate AI.",
            desc: "In this engaging scenario, see how an instructional designer brings a human touch to powerful AI content production.",
            icon: <Users className="w-5 h-5" />
        }
    ];

    const rawCareers = careerData;

    // Filter Logic
    const filteredCareers = rawCareers.filter(career => {
        const matchCategory = activeCategory === 'All' || career.categories.includes(activeCategory);
        const matchSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            career.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredCareers.length / itemsPerPage);
    const paginatedCareers = filteredCareers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Reset pagination when filter changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-900 selection:text-white pb-20">

            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={30}
                    jaggednessScale={2.5}
                    opacity={0.3}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 15]}
                    ashCount={200}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
            </div>

            <div className="relative z-10 pt-24 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="h-px w-8 bg-red-600"></span>
                        <span className="text-red-500 font-mono text-xs uppercase tracking-[0.3em]">Career Pathways</span>
                        <span className="h-px w-8 bg-red-600"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                    Choose Your Tech Stack.  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">We Build Your Security Mastery</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Explore comprehensive information on tech careers spanning key fields like data, AI, networking, cloud, cybersecurity, and tech support.
                    </p>
                </div>


                {/* Filter and Search Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sticky top-20 z-40 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl transition-all">

                    {/* Categories */}
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300
                                    ${activeCategory === cat
                                        ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search roles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-mono"
                        />
                    </div>
                </div>

                {/* Job Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {paginatedCareers.map((career, index) => (
                        <div
                            key={`${career.title}-${index}`}
                            className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.15)] hover:-translate-y-1 flex flex-col animate-in fade-in zoom-in-95 duration-500"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="mb-6 flex items-start justify-between">
                                <div className="p-3 bg-white/5 rounded-xl text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-inner">
                                    {career.icon}
                                </div>
                                <div className="flex flex-wrap gap-1 justify-end">
                                    {career.categories.map(c => (
                                        (activeCategory === 'All' || c === activeCategory) && (
                                            <span key={c} className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded uppercase tracking-wider bg-white/5">
                                                {c}
                                            </span>
                                        )
                                    ))}
                                    {/* Sort of redundant if showing all, but good for context */}
                                </div>
                            </div>

                            <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-red-500 transition-colors">
                                {career.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                {career.description}
                            </p>

                            <Link to={`/explore-tech-careers/${career.id}`} className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_4px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_4px_0_0_#991b1b] active:shadow-none active:translate-y-[4px]">
                                Explore Role
                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                {filteredCareers.length === 0 && (
                    <div className="text-center py-20 animate-in fade-in zoom-in-95">
                        <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-white/5 mb-6 border border-white/10">
                            <Search className="w-8 h-8 text-gray-600" />
                        </div>
                        <h3 className="text-2xl font-black uppercase text-white mb-2">No roles found</h3>
                        <p className="text-gray-500">Try adjusting your search or category filter.</p>
                    </div>
                )}

                {/* Pagination Controls */}
                {filteredCareers.length > itemsPerPage && (
                    <div className="flex justify-center items-center gap-4 border-t border-white/10 pt-12">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Previous
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-lg text-xs font-bold flex items-center justify-center transition-all border
                                        ${currentPage === page
                                            ? 'bg-red-600 text-white border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                                            : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ExploreTechCareers;
