import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Globe, TrendingUp, BookOpen, Layers } from 'lucide-react';

const ExploreCareers = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 font-['Inter']">

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
                        Build a Cyber Career That Actually Pays <span className="text-red-600"> — Not Just a Certificate</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        CSCA maps real-world cybersecurity roles across Red Team, Blue Team, Cloud, GRC, AI
                        Security, and Digital Forensics, aligned with real industry demand.</p>
                </div>
            </div>

            {/* Main Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Explore Tech Careers */}
                    <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300">
                        <div className="aspect-video bg-gradient-to-br from-red-900/20 to-black relative flex items-center justify-center p-6 border-b border-white/5">
                            <Briefcase className="w-16 h-16 text-red-500/50 group-hover:text-red-500 transition-colors" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">Explore tech careers</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[80px]">
                            Red Team Operator | SOC Analyst | Cloud Security Engineer | Threat Intelligence
                            Analyst | Cyber Law & Compliance Specialist | AI Security Engineer | Security Architect | CISO
                            Track
</p>
                            <Link to="/explore-tech-careers" className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:text-red-500 transition-colors">
                                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2: Explore Industry Sectors */}
                    <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300">
                        <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-black relative flex items-center justify-center p-6 border-b border-white/5">
                            <Globe className="w-16 h-16 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">Explore industry sectors</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[80px]">
                                Comprehensive information spanning key industry sectors.
                            </p>
                            <Link to="/explore-industries" className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:text-blue-500 transition-colors">
                                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 3: Explore Careers+ */}
                    <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-600/50 transition-all duration-300">
                        <div className="aspect-video bg-gradient-to-br from-amber-900/20 to-black relative flex items-center justify-center p-6 border-b border-white/5">
                            <Layers className="w-16 h-16 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">Explore Careers+</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[80px]">
                                Dive deeper into your career possibilities with Careers+, showcasing in-demand tech job roles.
                            </p>
                            <Link to="/careers-plus" className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:text-amber-500 transition-colors">
                                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Additional Resources Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Research Highlight */}
                    <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <TrendingUp className="w-32 h-32 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-red-500 uppercase tracking-widest mb-4">Research highlight</h4>
                        <p className="text-xl font-medium text-white mb-6 leading-relaxed relative z-10">
                            CSCA’s Tech Jobs Report provides a monthly snapshot of information technology (IT) employment trending at the occupation and industry levels.
                        </p>
                        <Link to="/resources/research" className="inline-flex items-center px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors rounded-lg">
                            Learn more
                        </Link>
                    </div>

                    {/* Explore Blogs */}
                    <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <BookOpen className="w-32 h-32 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-red-500 uppercase tracking-widest mb-4">Explore our blogs</h4>
                        <p className="text-xl font-medium text-white mb-6 leading-relaxed relative z-10">
                            CSCA’s Career Pathways provide a structured and comprehensive roadmap for learners to excel in high-demand IT careers.
                            
                        </p>
                        <Link to="/resources/blog" className="inline-flex items-center px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors rounded-lg">
                            Learn more
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ExploreCareers;
