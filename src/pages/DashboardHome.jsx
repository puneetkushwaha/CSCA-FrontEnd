import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrecisionPanel = ({ children, className = "" }) => (
    <div className={`relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-700 ${className}`}>
        {/* Subtle hover glow */}
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        {/* Top intensity line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="relative z-10">{children}</div>
    </div>
);

const DashboardHome = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-full pb-20 relative">

            <div className="max-w-[1600px] mx-auto px-12 relative z-10 mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Training Section */}
                    <div className="lg:col-span-8 space-y-6">
                        <PrecisionPanel className="p-10 border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
                                <div>
                                    <h2 className="text-4xl font-black text-white tracking-tighter mb-3 uppercase italic">Training</h2>
                                    <p className="text-gray-300 font-bold text-base leading-relaxed">
                                        Active modules: 0. <button className="text-red-500 font-bold hover:underline transition-all underline-offset-4 decoration-2">Redeem an Access Key</button> to initiate.
                                    </p>
                                </div>
                                <button className="px-8 py-3 rounded-full border border-red-600/50 text-red-500 font-bold text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/10">
                                    Redeem Access Key
                                </button>
                            </div>

                            <div className="flex flex-col items-center justify-center py-10 bg-white/5 rounded-[1.5rem] border border-white/10 relative group/hero shadow-inner">
                                <Link to="/dashboard/certifications" className="relative z-10 bg-red-600 hover:bg-red-700 text-white px-12 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-red-600/30 active:scale-95 transition-all">
                                    GET STARTED
                                </Link>
                            </div>

                            <div className="mt-8 space-y-4 text-gray-400 leading-relaxed max-w-4xl text-sm font-semibold opacity-90">
                                <p>
                                    Registry synchronization: Access keys are dispatched via encrypted relay following order authorization. Retrieval available via Order History node.
                                </p>
                                <p>
                                    Module mismatch? Establish link with an <button className="text-red-500 font-bold hover:text-red-400 hover:underline">unlinked identity</button>. <button className="text-red-500 font-bold hover:text-red-400 hover:underline">Link profiles here.</button>
                                </p>
                            </div>
                        </PrecisionPanel>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <PrecisionPanel className="border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                            <div className="p-8">
                                <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-8 pb-3 border-b border-white/10 flex items-center justify-between">
                                    <span>EXAMS & CERTIFICATION</span>
                                    <div className="w-2.5 h-2.5 bg-red-600 animate-ping rounded-full"></div>
                                </div>

                                <h3 className="text-2xl font-black text-white tracking-tighter mb-3 uppercase italic">Manage Exams</h3>
                                <p className="text-[13px] text-gray-400 font-bold mb-10 leading-relaxed">
                                    Schedule or change your exam, Launch your online exam and view score reports
                                </p>

                                <nav className="space-y-4">
                                    <Link to="/dashboard/exam" className="group flex items-center justify-between text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] hover:text-white transition-all">
                                        Schedule and Manage Exams
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <div className="h-px bg-white/5"></div>
                                    <Link to="/dashboard/certifications" className="group flex items-center justify-between text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] hover:text-white transition-all">
                                        View Testing Options
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <div className="h-px bg-white/5"></div>
                                    <Link to="/dashboard/certifications" className="group flex items-center justify-between text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] hover:text-white transition-all">
                                        Request Test Accommodations
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            <div className="bg-white/5 p-8 border-t border-white/10">
                                <h3 className="text-2xl font-black text-white tracking-tighter mb-3 uppercase italic">Access Certifications</h3>
                                <p className="text-[13px] text-gray-400 font-bold mb-8 leading-relaxed">
                                    View status, pay CE fees, Submit CEUs and download logos
                                </p>
                                <Link to="/dashboard/certifications" className="block w-full text-center py-4 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-bold text-[10px] uppercase tracking-widest hover:text-white hover:border-red-600/50 hover:bg-red-600/10 transition-all shadow-md">
                                    Access Metrics
                                </Link>
                            </div>
                        </PrecisionPanel>

                        {/* Exact Help Button */}
                        <div className="fixed bottom-8 right-8 z-50">
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-[0_0_50px_rgba(220,38,38,0.3)] transform hover:scale-105 active:scale-95 transition-all group border border-white/10">
                                <HelpCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span className="text-xs font-black uppercase tracking-[0.2em]">Support HUD</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
