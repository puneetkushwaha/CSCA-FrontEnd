import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Shield, Cloud, Database, Wifi, Users, TrendingUp, DollarSign, ChevronRight, Lock, Server, Cpu, Brain, Code, Globe } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const ExploreIndustries = () => {
    const [activeTab, setActiveTab] = useState('All Technology');

    const sectorsData = {
        'All Technology': {
            icon: <Globe className="w-5 h-5" />,
            heroTitle: <>Technology drives <span className="text-red-500">innovation</span></>,
            heroText: "Technology drives innovation and shapes the way we live, work, and connect. From cybersecurity and networking to AI, data, and cloud computing, tech professionals play a vital role in building and maintaining the systems that power our digital world.",
            stats: [
                { value: "6M", label: "Tech workforce size", sub: "Professionals across all sectors" },
                { value: "$2T", label: "Economic Impact", sub: "Annual contribution to economy" }
            ],
            heroImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
            jobs: [
                { id: "tech-support-specialist", title: "Tech Support Specialist", description: "Solves technical issues and sets up workspaces.", icon: <Monitor className="w-6 h-6 text-red-500" /> },
                { id: "network-administrator", title: "Network Administrator", description: "Manages and maintains existing networks.", icon: <Wifi className="w-6 h-6 text-red-500" /> },
                { id: "software-developer", title: "Software Developer", description: "Designs and builds software applications.", icon: <Code className="w-6 h-6 text-red-500" /> },
                { id: "it-project-manager", title: "IT Project Manager", description: "Plans and oversees technical projects.", icon: <Users className="w-6 h-6 text-red-500" /> }
            ]
        },
        'Cybersecurity': {
            icon: <Shield className="w-5 h-5" />,
            heroTitle: <>Secure the <span className="text-red-500">Digital Frontier</span></>,
            heroText: "Cybersecurity professionals are the digital bodyguards of the modern world. They protect networks, devices, and data from unauthorized access and criminal use, ensuring the confidentiality, integrity, and availability of information.",
            stats: [
                { value: "3.5M", label: "Unfilled Jobs", sub: "Global cybersecurity shortage" },
                { value: "32%", label: "Job Growth", sub: "Faster than average growth" }
            ],
            heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
            jobs: [
                { id: "cybersecurity-analyst", title: "Security Analyst", description: "Monitors networks for security breaches.", icon: <Shield className="w-6 h-6 text-red-500" /> },
                { id: "penetration-tester", title: "Penetration Tester", description: "Simulates cyberattacks to find weaknesses.", icon: <Lock className="w-6 h-6 text-red-500" /> },
                { id: "cybersecurity-engineer", title: "Security Engineer", description: "Builds and maintains security systems.", icon: <Server className="w-6 h-6 text-red-500" /> },
                { id: "cybersecurity-manager", title: "CISO", description: "Executive responsible for information security.", icon: <Users className="w-6 h-6 text-red-500" /> }
            ]
        },
        'Networking': {
            icon: <Wifi className="w-5 h-5" />,
            heroTitle: <>Connect the <span className="text-red-500">World</span></>,
            heroText: "Networking is the backbone of the internet. Professionals in this field design, implement, and manage the wired and wireless networks that allow computers and devices to communicate and share resources across the globe.",
            stats: [
                { value: "5B+", label: "Connected Users", sub: "Global internet users" },
                { value: "$60B", label: "Market Size", sub: "Network infrastructure market" }
            ],
            heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1000",
            jobs: [
                { id: "network-engineer", title: "Network Engineer", description: "Designs and implements network solutions.", icon: <Wifi className="w-6 h-6 text-red-500" /> },
                { id: "network-administrator", title: "Network Architect", description: "Plans and designs data communication networks.", icon: <Server className="w-6 h-6 text-red-500" /> }, // Assuming duplicate or should be architect
                { id: "systems-engineer", title: "Systems Administrator", description: "Manages daily operations of networks.", icon: <Monitor className="w-6 h-6 text-red-500" /> },
                { id: "tech-support-specialist", title: "Network Technician", description: "Troubleshoots and repairs network issues.", icon: <Code className="w-6 h-6 text-red-500" /> }
            ]
        },
        'Cloud': {
            icon: <Cloud className="w-5 h-5" />,
            heroTitle: <>Powering the <span className="text-red-500">Future</span></>,
            heroText: "Cloud computing enables on-demand access to computing resources. Cloud professionals design, deploy, and manage applications and services in cloud environments like AWS, Azure, and Google Cloud.",
            stats: [
                { value: "$600B", label: "Public Cloud", sub: "Projected market value" },
                { value: "94%", label: "Adoption Rate", sub: "Enterprises using cloud services" }
            ],
            heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
            jobs: [
                { id: "cloud-architect", title: "Cloud Architect", description: "Designs cloud computing strategies.", icon: <Cloud className="w-6 h-6 text-red-500" /> },
                { id: "devops-engineer", title: "DevOps Engineer", description: "Bridges gap between development and operations.", icon: <Code className="w-6 h-6 text-red-500" /> },
                { id: "cybersecurity-specialist", title: "Cloud Security Specialist", description: "Secures cloud-based applications.", icon: <Shield className="w-6 h-6 text-red-500" /> },
                { id: "linux-administrator", title: "Cloud Administrator", description: "Manages cloud infrastructure instances.", icon: <Server className="w-6 h-6 text-red-500" /> }
            ]
        },
        'AI/Data': {
            icon: <Brain className="w-5 h-5" />,
            heroTitle: <>Unlock <span className="text-red-500">Intelligence</span></>,
            heroText: "Data and AI are transforming industries. Professionals in this field analyze complex data to find trends, build machine learning models, and create intelligent systems that solve difficult problems.",
            stats: [
                { value: "35%", label: "AI Adoption", sub: "Global business adoption rate" },
                { value: "11.5M", label: "New Jobs", sub: "AI/Data roles by 2026" }
            ],
            heroImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000",
            jobs: [
                { id: "data-scientist", title: "Data Scientist", description: "Analyzes data to extract actionable insights.", icon: <Database className="w-6 h-6 text-red-500" /> },
                { id: "ai-engineer", title: "AI/ML Engineer", description: "Builds artificial intelligence models.", icon: <Brain className="w-6 h-6 text-red-500" /> },
                { id: "data-analyst", title: "Data Analyst", description: "Inteprets data sets for business decisions.", icon: <TrendingUp className="w-6 h-6 text-red-500" /> },
                { id: "data-engineer", title: "Data Engineer", description: "Builds systems for collecting and validating data.", icon: <Server className="w-6 h-6 text-red-500" /> }
            ]
        }
    };

    const currentData = sectorsData[activeTab];

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-red-900 selection:text-white overflow-hidden font-sans">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={30}
                    jaggednessScale={2.5}
                    opacity={0.4}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 15]}
                    ashCount={200}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 pt-24 pb-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-8">
                        <div className="text-sm font-mono text-red-500 mb-4 tracking-widest uppercase"> Cybersecurity Isn’t One-Size-Fits-All &gt; Industries Need Specialists</div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
                            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Sectors</span>
                        </h1>

                        {/* Top Navigation Tabs */}
                        <div className="flex flex-wrap gap-1 border-b border-white/10 mb-16">
                            {Object.keys(sectorsData).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group
                                        ${activeTab === tab
                                            ? 'text-white bg-white/5'
                                            : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {sectorsData[tab].icon}
                                        {tab}
                                    </span>
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div>

                        {/* Hero Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    {currentData.heroTitle}
                                </h2>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    {currentData.heroText}
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                    {currentData.stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div className="text-xs font-mono text-red-500 mb-1 uppercase tracking-widest">{stat.label}</div>
                                            <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                                            <p className="text-sm text-gray-500">{stat.sub}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dynamic Image */}
                            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10"></div>
                                <img
                                    src={currentData.heroImage}
                                    alt={activeTab}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                {/* Tech Overlay lines */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                            </div>
                        </div>

                        {/* Jobs Section */}
                        <div className="mt-24">
                            <h3 className="text-3xl font-black uppercase mb-12 flex items-center gap-4">
                                <span className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-black font-bold text-lg">&gt;</span>
                                Top Jobs in {activeTab}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {currentData.jobs.map((job, index) => (
                                    <div key={index} className="group bg-[#0a0a0a] border border-white/10 hover:border-red-600/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.15)] flex flex-col h-full relative overflow-hidden">
                                        <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:border-red-600/30 group-hover:text-red-500 transition-colors relative z-10">
                                            {job.icon}
                                        </div>
                                        <h4 className="text-lg font-bold mb-3 group-hover:text-red-500 transition-colors relative z-10">{job.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                                            {job.description}
                                        </p>
                                        <Link
                                            to={`/explore-tech-careers/${job.id}`}
                                            className="flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors relative z-10 hover:underline decoration-red-600 underline-offset-4"
                                        >
                                            Explore Role
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExploreIndustries;
