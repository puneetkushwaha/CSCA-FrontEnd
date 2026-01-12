import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Linkedin, Twitter, Github, Youtube, ArrowRight, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-red-600 relative overflow-hidden pt-28 pb-14 font-['Inter']">

            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 mb-24">

                    {/* Brand Column (Left - 5 Cols) */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Hero Logo */}
                        <div className="inline-flex items-center gap-4 bg-[#0a0a0a] border border-white/10 p-4 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.15)] group hover:border-red-600/50 transition-colors duration-500">
                            <div className="bg-gradient-to-br from-red-600 to-red-900 p-3 rounded-xl shadow-lg group-hover:shadow-red-600/50 transition-all">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h2 className="font-black text-3xl tracking-tighter uppercase leading-none text-white">
                                    CSCA
                                </h2>
                                <p className="text-[9px] font-bold text-red-500 tracking-[0.25em] uppercase">Red Team Ops</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm pl-2 border-l-2 border-red-600/30">
                            Forging the world's elite cyber defenders. We don't just teach security; we simulate the war room.
                        </p>

                        {/* Newsletter Input - High Tech */}
                        <div className="pt-4 max-w-sm">
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                                Intel Briefing Access
                            </p>
                            <div className="flex gap-2">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="OPERATOR EMAIL"
                                        className="w-full bg-[#0a0a0a] border border-white/10 text-white text-xs font-bold py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-red-600 focus:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all placeholder:text-gray-700"
                                    />
                                </div>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-lg flex items-center justify-center transition-colors shadow-lg hover:shadow-red-600/50">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid (Right - 8 Cols) */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10">

                        {/* Certifications */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.15em] pb-4 border-b border-white/10 flex items-center justify-between group">
                                Certifications
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </h4>
                            <ul className="space-y-3">
                                {['Blue Team Level 1', 'Blue Team Level 2', 'SecOps Manager', 'Detection Engineer'].map((item, i) => (
                                    <li key={i}>
                                        <Link to="#" className="text-xs font-bold text-gray-500 hover:text-red-500 hover:pl-2 transition-all duration-300 uppercase tracking-wide flex items-center gap-2">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to="/certifications" className="text-[10px] font-black text-white hover:text-red-500 transition-colors uppercase tracking-widest mt-4 inline-flex items-center gap-1">
                                        View All <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Training */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.15em] pb-4 border-b border-white/10 flex items-center justify-between group">
                                Training
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </h4>
                            <ul className="space-y-3">
                                {['Corporate Solutions', 'Academic Partners', 'Success Stories'].map((item, i) => (
                                    <li key={i}>
                                        <Link to="#" className="text-xs font-bold text-gray-500 hover:text-red-500 hover:pl-2 transition-all duration-300 uppercase tracking-wide">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.15em] pb-4 border-b border-white/10 flex items-center justify-between group">
                                CSCA HQ
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </h4>
                            <ul className="space-y-3">
                                {['About the Mission', 'Meet the Board', 'Careers / Jobs', 'Contact Command'].map((item, i) => (
                                    <li key={i}>
                                        <Link to="#" className="text-xs font-bold text-gray-500 hover:text-red-500 hover:pl-2 transition-all duration-300 uppercase tracking-wide">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.15em] pb-4 border-b border-white/10 flex items-center justify-between group">
                                Uplink
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </h4>
                            <ul className="space-y-3">
                                {['Blog / Intel', 'Community Discord', 'Knowledge Base', 'Verify Badge'].map((item, i) => (
                                    <li key={i}>
                                        <Link to="#" className="text-xs font-bold text-gray-500 hover:text-red-500 hover:pl-2 transition-all duration-300 uppercase tracking-wide">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Footer Bottom / Status Bar style */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative">
                    {/* Decorative Status Lights */}
                    <div className="absolute -top-[1px] left-0 w-32 h-[2px] bg-red-600 animate-pulse"></div>

                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-white uppercase tracking-wider">
                            <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></span>
                            Systems Operational
                        </div>
                        <p className="text-[10px] text-gray-600 font-mono">
                            CSCA LTD © {new Date().getFullYear()} // SECURE CONNECTION ESTABLISHED
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-red-600 hover:bg-red-600 transition-all duration-300 group">
                                <Icon className="w-4 h-4 group-hover:scale-110" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Color Strip */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-900 to-black"></div>
        </footer>
    );
};

export default Footer;
