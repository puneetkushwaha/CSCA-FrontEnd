import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Shield, Search, Lock, ChevronRight, HelpCircle,
    ArrowLeft, Loader2, ChevronDown, CheckCircle2
} from 'lucide-react';
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
            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] animate-pulse">Scanning Registry...</span>
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Please wait while we fetch the operational catalog</span>
        </div>
    </div>
);

const exams = [
    "CSCA A+ Certification Exams",
    "CSCA Cloud+ Certification Exam",
    "CSCA CloudNetX Certification Exam",
    "CSCA Cybersecurity Analyst (CySA+) Certification Exam",
    "CSCA Data+ Certification Exam",
    "CSCA DataAI Certification Exam",
    "CSCA DataSys+ Certification Exam",
    "CSCA Linux+ Certification Exam",
    "CSCA Network+ Certification Exam",
    "CSCA PenTest+ Certification Exam",
    "CSCA Project+ Certification Exam",
    "CSCA Security+ Certification Exam",
    "CSCA SecurityX Certification Exam",
    "CSCA Server+ Certification Exam",
    "CSCA Tech+ Certification Exam"
];

const FindExam = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [activeGroup, setActiveGroup] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    const filteredExams = exams.filter(exam =>
        exam.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col font-['Inter'] relative overflow-hidden">
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

            <header className="fixed top-8 left-0 right-0 z-50 px-8 flex justify-center">
                <div className="flex items-center gap-8 h-16 px-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-500 w-fit">
                    <Link to="/pearson-dashboard" className="flex items-center gap-2 group/logo">
                        <Shield className="h-6 w-6 text-red-600 fill-red-600/10" />
                        <span className="font-black text-xl tracking-tighter text-white uppercase italic">CSCA</span>
                    </Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <button onClick={() => navigate('/pearson-dashboard')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                        <ArrowLeft className="w-4 h-4" /> Finalize Operation
                    </button>
                </div>
            </header>

            <main className="flex-1 relative z-10 max-w-[1200px] mx-auto w-full pt-40 px-8 pb-20">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-1 bg-red-600 rounded-full"></div>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em]">Catalog_Access_Protocol</span>
                    </div>
                    <h1 className="text-7xl font-black text-white tracking-tighter uppercase italic leading-none">Find <span className="text-red-600">an Exam</span></h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Search and Private Access */}
                    <div className="lg:col-span-1 space-y-8">
                        <PrecisionPanel className="p-8">
                            <h3 className="text-xs font-black text-red-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                                <Search className="w-4 h-4" /> Global_Search
                            </h3>
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="SCANNING_FOR_CERT..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm font-black text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-gray-700 uppercase tracking-widest"
                                />
                                <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 group-focus-within:text-red-600 transition-colors" />

                                {/* Search Suggestions / Results List */}
                                {searchTerm && (
                                    <div className="mt-4 space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar animate-in fade-in slide-in-from-top-2 duration-300">
                                        <p className="text-[8px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 border-b border-white/5 pb-2">Matching_Registry_Entries:</p>
                                        {filteredExams.map((exam, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    // Optional: handle clicking to auto-select in right panel
                                                    const originalIdx = exams.indexOf(exam);
                                                    setActiveGroup(originalIdx);
                                                }}
                                                className="w-full text-left p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-600/30 hover:bg-red-600/5 transition-all group/item"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover/item:animate-ping"></div>
                                                    <span className="text-[10px] font-bold text-gray-400 group-hover/item:text-white uppercase tracking-wider">{exam}</span>
                                                </div>
                                            </button>
                                        ))}
                                        {filteredExams.length === 0 && (
                                            <p className="text-[9px] text-gray-600 italic px-4">NO_MATCHES_FOUND</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </PrecisionPanel>

                        <PrecisionPanel className="p-8 bg-red-900/10">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-red-600" /> Private Access
                                </h3>
                                <button className="p-1 text-gray-500 hover:text-white transition-colors">
                                    <HelpCircle className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed mb-6">
                                Do you have a private access code for a specialized registry?
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="CODE_24X"
                                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[10px] font-black text-white focus:outline-none focus:border-red-600 uppercase tracking-widest"
                                />
                                <button className="bg-red-600 text-white px-4 py-3 rounded-xl hover:bg-red-700 transition-colors">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </PrecisionPanel>
                    </div>

                    {/* Exam List */}
                    <div className="lg:col-span-2 space-y-8">
                        <PrecisionPanel className="p-10">
                            <div className="mb-10 p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <p className="text-xs text-gray-300 font-medium leading-relaxed italic">
                                    To schedule an exam, open the group the exam is assigned to by clicking on the group name. Only one group may be opened at a time.
                                </p>
                            </div>

                            <div className="space-y-3">
                                {filteredExams.map((exam, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveGroup(activeGroup === idx ? null : idx)}
                                        className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-500 border ${activeGroup === idx
                                            ? 'bg-red-600 border-red-500 text-white shadow-[0_0_40px_rgba(220,38,38,0.3)]'
                                            : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/10 hover:text-white'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeGroup === idx ? 'bg-white/20' : 'bg-red-600/10'}`}>
                                                <Shield className={`w-4 h-4 ${activeGroup === idx ? 'text-white' : 'text-red-600'}`} />
                                            </div>
                                            <span className="text-[11px] font-black uppercase tracking-[0.2em]">{exam}</span>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${activeGroup === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                ))}

                                {filteredExams.length === 0 && (
                                    <div className="py-20 text-center">
                                        <Search className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                                        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">No matching exam records found in registry</p>
                                    </div>
                                )}
                            </div>
                        </PrecisionPanel>
                    </div>
                </div>

                {/* Secure Protocol Footer */}
                <div className="mt-20 py-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-[8px] font-black uppercase tracking-[0.4em] text-gray-600">
                    <div className="flex gap-10 justify-center md:justify-start">
                        <button className="hover:text-red-500 transition-colors">Terms</button>
                        <button className="hover:text-red-500 transition-colors">Privacy</button>
                        <button className="hover:text-red-500 transition-colors">Contact</button>
                    </div>
                    <div className="flex items-center justify-center md:justify-end gap-10">
                        <button className="hover:text-white transition-colors">Privacy settings</button>
                        <p className="not-italic">© 1996-2026 CSCA Registry Node / Pearson VUE</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FindExam;
