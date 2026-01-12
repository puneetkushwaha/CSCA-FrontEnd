import React from 'react';
import { Play, Monitor, Shield, Globe, Database, Brain, Cloud, Users, ArrowRight } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { Link } from 'react-router-dom';

const CareersPlus = () => {
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
            id: "cloud-architect",
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
                        <span className="text-red-500 font-mono text-xs uppercase tracking-[0.3em]">Interactive Scenarios</span>
                        <span className="h-px w-8 bg-red-600"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                    More Than Careers <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">— A Cybersecurity Ecosystem</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        Inspire the next first step in your career with these immersive role scenarios.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {careersPlusStories.map((story, idx) => (
                        <Link
                            to={`/explore-tech-careers/${story.id}`}
                            key={idx}
                            className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                        >
                            {/* Top Gradient Bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-red-600 to-red-900 absolute top-0 left-0"></div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-white/5 rounded-lg text-white group-hover:text-red-500 transition-colors">
                                        {story.icon}
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-2 py-1 rounded">
                                        <Play className="w-3 h-3 fill-red-500" />
                                        Scenario
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-red-400 transition-colors">
                                    {story.tagline}
                                </h3>

                                <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-4">
                                    {story.desc}
                                </p>

                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors">
                                    Watch & Explore
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareersPlus;
