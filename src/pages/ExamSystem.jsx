import React from 'react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { Terminal, FileText, CheckCircle, ShieldAlert, Cpu, Mic } from 'lucide-react';

const ExamSystem = () => {
    return (
        <div className="min-h-screen bg-black text-white font-['Inter'] relative overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={4}
                    jaggednessScale={1.5}
                    opacity={0.2}
                    planeSize={[40, 40]}
                    cameraPos={[0, 0, 10]}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/90 to-black"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
                        Practical <span className="text-red-600">Exam System</span>
                    </h1>
                    <p className="text-lg text-white/50 font-medium leading-relaxed">
                        We don't do multiple choice. Our exams are 100% hands-on, simulated engagements that test your ability to perform under pressure.
                    </p>
                </div>

                {/* Exam Phases */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Phase 1 */}
                    <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/30 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white group-hover:text-red-500/20 transition-colors">01</div>
                        <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-8 border border-red-600/20">
                            <Terminal className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Practical Assessment</h3>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            You are given access to a cloud-based lab environment containing a realistic compromised network. You have 24 hours to identify threats, collect evidence, and mitigate attacks.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-red-500 font-bold">
                            <Cpu className="w-3 h-3" />
                            Cloud Environment
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/30 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white group-hover:text-red-500/20 transition-colors">02</div>
                        <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-8 border border-blue-600/20">
                            <FileText className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Technical Report</h3>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Following the practical, you must submit a professional incident response report detailing your findings, steps taken, and recommendations for remediation.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-blue-500 font-bold">
                            <CheckCircle className="w-3 h-3" />
                            Professional Standard
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/30 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white group-hover:text-red-500/20 transition-colors">03</div>
                        <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center mb-8 border border-green-600/20">
                            <Mic className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Debrief (Optional)</h3>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            For advanced certifications, you may face a live debrief with a senior instructor to defend your findings and explain your methodology.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-green-500 font-bold">
                            <ShieldAlert className="w-3 h-3" />
                            Defense Session
                        </div>
                    </div>

                </div>

                {/* Additional Info Box */}
                <div className="mt-12 p-8 rounded-2xl bg-red-900/10 border border-red-500/20 text-center">
                    <p className="text-lg font-bold text-white mb-2">Why Practical Exams?</p>
                    <p className="text-white/60 max-w-3xl mx-auto text-sm">
                        Multiple choice does not prove competence. Employers want defenders who can actually do the job.
                        Our exams are designed to filter for real-world skill, ensuring every CSCA holder is ready for the field.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ExamSystem;
