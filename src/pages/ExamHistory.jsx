import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, History, ArrowLeft, Info, FileText, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import RedGeometricBackground from '../components/RedGeometricBackground';

const PrecisionPanel = ({ children, className = "" }) => (
    <div className={`relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-700 ${className}`}>
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="relative z-10">{children}</div>
    </div>
);

const GlobalPageLoader = () => (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 animate-pulse"></div>
            <div className="w-16 h-16 border-t-2 border-r-2 border-red-600 rounded-full animate-spin"></div>
            <Shield className="absolute inset-0 m-auto w-6 h-6 text-red-600" />
        </div>
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] animate-pulse">Initializing Portal...</span>
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Please wait while we sync with the registry</span>
        </div>
    </div>
);

const ExamHistory = () => {
    const { user, token } = useAuth();
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    // Simulating fetching data from backend, currently empty as per user request
    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 1000);
        // In a real scenario, we'd fetch from ${BASE_URL}/users/exam-history
        setHistory([]);
        return () => clearTimeout(timer);
    }, []);

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter'] relative overflow-hidden flex flex-col items-center p-8">
            {/* Background Layers */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={30}
                    jaggednessScale={2.0}
                    opacity={0.3}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 18]}
                    ashCount={150}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] opacity-95"></div>
            </div>

            <div className="relative z-10 max-w-[1100px] w-full mt-20">
                {/* Header Area */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                            <History className="w-4 h-4 text-red-600" />
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">Operational_Log_v2.1</span>
                        </div>
                        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                            Exam <span className="text-red-600">History</span>
                        </h1>
                    </div>

                    <button
                        onClick={() => navigate('/pearson-dashboard')}
                        className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all group/back"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
                        Return to Dashboard
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {history.length === 0 ? (
                        <PrecisionPanel className="p-20 flex flex-col items-center justify-center text-center">
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full"></div>
                                <div className="w-24 h-24 rounded-full bg-black border-2 border-white/5 flex items-center justify-center relative z-10">
                                    <FileText className="w-10 h-10 text-gray-800" />
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-white italic uppercase tracking-tight mb-4">No Previous Records Detected</h3>
                            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest max-w-sm leading-relaxed">
                                You have not previously taken any exams with Pearson VUE through this terminal.
                            </p>
                            <div className="mt-10 pt-10 border-t border-white/5 w-full">
                                <button
                                    onClick={() => navigate('/dashboard/certifications')}
                                    className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-full transition-all shadow-lg shadow-red-900/20"
                                >
                                    Access Exam Catalog
                                </button>
                            </div>
                        </PrecisionPanel>
                    ) : (
                        <div className="space-y-4">
                            {/* Future implementation of exam list items */}
                        </div>
                    )}
                </div>

                {/* Secure Protocol Notice */}
                <div className="mt-12 p-6 bg-red-900/5 border border-red-900/20 rounded-2xl flex items-start gap-4">
                    <Shield className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Authorization Note</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                            Official score reports are generated within 24-48 hours post-examination. If your recent session record is missing, please cross-verify with your testing center coordinator.
                        </p>
                    </div>
                </div>

                {/* Footer Links as requested */}
                <footer className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[8px] font-black uppercase tracking-[0.4em] text-gray-600">
                    <div className="flex gap-10 mb-6 md:mb-0">
                        <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-red-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-red-500 transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-8">
                        <button className="hover:text-white transition-colors">Privacy settings</button>
                        <div className="text-gray-700 font-normal italic">
                            © 1996-2026 Pearson Education Inc. or its affiliate(s). All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ExamHistory;
