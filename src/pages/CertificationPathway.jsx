import React from 'react';
import { Link } from 'react-router-dom';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { Shield, ShieldCheck, Target, ArrowRight, Flag, Map } from 'lucide-react';

const CertificationPathway = () => {
    const steps = [
        {
            id: 'btl1',
            level: 'Level 1 (Junior)',
            title: 'Certified Junior Analyst',
            code: 'BTL1',
            desc: 'The starting line. Master the fundamentals of security operations, incident response, and digital forensics.',
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            icon: <ShieldCheck className="w-6 h-6" />,
            link: '/certification/btl1'
        },
        {
            id: 'btl2',
            level: 'Level 2 (Senior)',
            title: 'Certified Cyber Defender',
            code: 'BTL2',
            desc: 'Step up to advanced defense. Deep dive into malware analysis, threat hunting, and advanced SIEM operations.',
            color: 'text-red-400',
            bg: 'bg-red-400/10',
            border: 'border-red-400/20',
            icon: <Shield className="w-6 h-6" />,
            link: '/certification/btl2'
        },
        {
            id: 'ath',
            level: 'Advanced (Expert)',
            title: 'Advanced Threat Hunter',
            code: 'ATH',
            desc: 'The pinnacle of defensive operations. Specialized training in APT simulations and kernel-level analysis.',
            color: 'text-white',
            bg: 'bg-white/10',
            border: 'border-white/20',
            icon: <Target className="w-6 h-6" />,
            link: '/certification/btl2' // Placeholder link
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-['Inter'] relative overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={6}
                    jaggednessScale={2}
                    opacity={0.2}
                    planeSize={[40, 40]}
                    cameraPos={[0, 0, 10]}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 animate-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        <Map className="w-3 h-3" />
                        Official Roadmap
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
                        Certification <span className="text-red-600">Pathway</span>
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
                        A structured journey from novice to elite defender. Validated hands-on skills at every milestone.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">

                    {/* Connecting Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/0 via-red-600/50 to-red-600/0 md:-ml-px"></div>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Node (Center) */}
                                <div className="absolute left-0 md:left-1/2 w-14 h-14 md:-ml-7 flex items-center justify-center z-10">
                                    <div className="w-4 h-4 rounded-full bg-red-600 ring-4 ring-black group-hover:ring-red-900/50 group-hover:scale-150 transition-all duration-300"></div>
                                </div>

                                {/* Content Side */}
                                <div className="pl-20 md:pl-0 md:w-1/2 md:px-12 w-full">
                                    <Link to={step.link} className="block group/card">
                                        <div className={`
                                            relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500
                                            bg-black/40 hover:bg-black/60
                                            ${step.border} hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-900/10
                                            transform hover:-translate-y-1
                                        `}>
                                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover/card:opacity-20 transition-opacity">
                                                <h4 className="text-4xl font-black text-white tracking-tighter">{step.code}</h4>
                                            </div>

                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${step.bg} ${step.color} text-[10px] font-black uppercase tracking-wider mb-4`}>
                                                {step.icon}
                                                {step.level}
                                            </div>

                                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3 group-hover/card:text-red-500 transition-colors">
                                                {step.title}
                                            </h3>

                                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                                {step.desc}
                                            </p>

                                            <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group-hover/card:gap-3 transition-all">
                                                Explore Course <ArrowRight className="w-3 h-3 text-red-500" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                {/* Empty Side (for balance) */}
                                <div className="md:w-1/2"></div>
                            </div>
                        ))}

                        {/* End Node */}
                        <div className="flex justify-center pt-8">
                            <div className="inline-flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Flag className="w-5 h-5 text-red-600" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Mastery Achieved</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CertificationPathway;
