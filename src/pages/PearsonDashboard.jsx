import React from 'react';
import {
    Shield,
    ChevronRight,
    ArrowRight,
    User,
    Calendar,
    FileText,
    Settings,
    CreditCard,
    History,
    Info
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import RedGeometricBackground from '../components/RedGeometricBackground';

const PrecisionPanel = ({ children, className = "" }) => (
    <div className={`relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-700 ${className}`}>
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="relative z-10">{children}</div>
    </div>
);

const ServiceCard = ({ title, description, icon: Icon, onClick }) => (
    <button
        onClick={onClick}
        className="w-full text-left p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-red-600/50 hover:bg-white/[0.05] transition-all duration-500 group/card relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/card:opacity-20 transition-opacity">
            <Icon className="w-16 h-16 text-white" />
        </div>
        <div className="relative z-10">
            <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 border border-red-600/20 group-hover/card:bg-red-600 group-hover/card:text-white transition-all duration-500">
                <Icon className="w-6 h-6 text-red-500 group-hover/card:text-white" />
            </div>
            <h3 className="text-lg font-black uppercase italic tracking-wider text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-xs font-bold leading-relaxed">{description}</p>
            <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-500 opacity-0 group-hover/card:opacity-100 translate-x-[-10px] group-hover/card:translate-x-0 transition-all duration-500">
                Initialize Module <ArrowRight className="w-3 h-3" />
            </div>
        </div>
    </button>
);

const PearsonDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter'] relative overflow-hidden pb-24">
            {/* Background Stays the Same for Consistency */}
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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            </div>

            <div className="relative z-10 max-w-[1240px] mx-auto px-8 pt-24">

                {/* Main Command Center Panel */}
                <PrecisionPanel className="p-12 mb-12">
                    <header className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.4)]"></div>
                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Operational_Intel_v9.0</span>
                            </div>
                            {/* Compact User Info */}
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-white uppercase">{user?.firstName || 'Operator'} {user?.lastName || ''}</p>
                                    <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">ID: COMP001022973310</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-black text-xs border border-white/20">
                                    {user?.firstName ? user.firstName[0] : 'U'}
                                </div>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 uppercase italic leading-[0.9]">
                            Command <span className="text-red-600">Dashboard</span>
                        </h1>
                        <p className="text-lg text-gray-300 font-medium max-w-2xl leading-relaxed italic opacity-80 border-l-2 border-red-600 pl-6">
                            Welcome back, Operator. Your certification modules are primed and ready for deployment.
                        </p>
                    </header>

                    {/* Core Action: Schedule Exam */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-600 to-red-900 p-12 mb-16 shadow-[0_0_60px_rgba(220,38,38,0.4)]">
                        <div className="absolute top-0 right-0 opacity-10 translate-x-12 translate-y-[-20px]">
                            <Shield className="w-96 h-96 text-white" />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
                            <div className="space-y-4">
                                <div className="bg-black/20 w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                                    Mission_Critical
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Schedule New Exam</h2>
                                <p className="text-white/80 text-sm font-medium max-w-md leading-relaxed">
                                    Access high-fidelity cloud environments and validate your expertise in live simulated engagements.
                                </p>
                            </div>
                            <button className="px-12 py-6 bg-black text-white font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-2xl whitespace-nowrap group/btn">
                                Initialize Deployment <ArrowRight className="w-4 h-4 inline ml-2 group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Grid of Intel Modules */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <ServiceCard
                            title="Intel Profile"
                            description="Review and update your operational identity and registry details."
                            icon={User}
                            onClick={() => navigate('/profile')}
                        />
                        <ServiceCard
                            title="Deployment Queue"
                            description="View your upcoming test center appointments and scheduled sessions."
                            icon={Calendar}
                            onClick={() => { }}
                        />
                        <ServiceCard
                            title="Mission History"
                            description="Analyze your past engagement results and technical performance reports."
                            icon={History}
                            onClick={() => { }}
                        />
                    </div>

                    {/* Operational Quick Links */}
                    <div className="pt-12 border-t border-white/10">
                        <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.4em] mb-8">Registry_Subroutines</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { label: 'Score Reports', icon: FileText },
                                { label: 'System Preferences', icon: Settings },
                                { label: 'My Receipts', icon: CreditCard },
                                { label: 'Contact Command', icon: Info }
                            ].map((item, idx) => (
                                <button key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-left group/sub">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover/sub:text-red-500 transition-colors">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover/sub:text-white transition-colors">
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </PrecisionPanel>

                {/* Global Registry Footer */}
                <footer className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
                    <div className="flex gap-12">
                        <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 hover:text-red-500 transition-colors">Legal_Protocols</a>
                        <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 hover:text-red-500 transition-colors">Privacy_Shield</a>
                        <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 hover:text-red-500 transition-colors">Field_Support</a>
                    </div>
                    <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 px-8 py-4 rounded-full">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic font-normal">OPERATIONAL_NODE_CSCA</span>
                        <div className="w-px h-4 bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">STATUS: OPTIMAL</span>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default PearsonDashboard;
