import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, FileText, ArrowLeft, Info, AlertCircle, History } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import RedGeometricBackground from '../components/RedGeometricBackground';

const PrecisionPanel = ({ children, className = "" }) => (
    <div className={`relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-700 ${className}`}>
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="relative z-10">{children}</div>
    </div>
);

const ScoreReports = () => {
    const { user, token } = useAuth();
    const navigate = useNavigate();
    const [reports, setReports] = useState([]);

    // Empty reports by default as requested
    useEffect(() => {
        setReports([]);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter'] relative overflow-hidden flex flex-col items-center p-8">
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
                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                            <FileText className="w-4 h-4 text-red-600" />
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">Evaluation_Records_v3.0</span>
                        </div>
                        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                            Score <span className="text-red-600">Reports</span>
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

                <PrecisionPanel className="p-12 border-white/10">
                    <div className="space-y-10">
                        {/* Information Note */}
                        <div className="bg-red-900/10 border border-red-600/20 p-6 rounded-2xl flex items-start gap-4">
                            <Info className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            <p className="text-sm font-bold text-gray-300 leading-relaxed italic">
                                If your score report is not listed below, contact customer service for availability of a reprint, or review your <button onClick={() => navigate('/exam-history')} className="text-red-500 hover:text-red-400 underline transition-colors">Exam History</button> for additional information related to your exam.
                            </p>
                        </div>

                        {/* Empty Reports State */}
                        <div className="py-20 flex flex-col items-center justify-center text-center bg-black/20 rounded-3xl border border-dashed border-white/5">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <AlertCircle className="w-10 h-10 text-gray-800" />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">No Reports Available</h3>
                            <p className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">
                                You do not currently have any score reports available online.
                            </p>
                        </div>

                        {/* Return Action */}
                        <div className="pt-10 border-t border-white/5 flex justify-center">
                            <button
                                onClick={() => navigate('/pearson-dashboard')}
                                className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-red-500 hover:text-white transition-all"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                                Terminate_Record_View
                            </button>
                        </div>
                    </div>
                </PrecisionPanel>

                {/* Secure Protocol Notice */}
                <div className="mt-12 flex items-center justify-center gap-4 py-4 px-8 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm w-fit mx-auto opacity-60">
                    <Shield className="w-4 h-4 text-red-600" />
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">Registry_Encryption_Active : Node_Verified</span>
                </div>

                {/* Universal Footer */}
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

export default ScoreReports;
