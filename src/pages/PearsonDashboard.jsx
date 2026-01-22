import React from 'react';
import {
    Menu,
    User,
    LayoutDashboard,
    MessageSquare,
    LogOut,
    Globe,
    ChevronRight,
    ChevronDown,
    ExternalLink,
    Shield,
    Activity,
    CreditCard,
    FileText,
    Settings
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import RedGeometricBackground from '../components/RedGeometricBackground';

const GlassPanel = ({ children, className = "" }) => (
    <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group transition-all duration-500 hover:border-red-500/30 ${className}`}>
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="relative z-10">{children}</div>
    </div>
);

const PearsonDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter'] relative overflow-hidden">
            {/* Background Layer */}
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

            {/* Main Container */}
            <div className="relative z-10 max-w-[1440px] mx-auto min-h-screen flex flex-col">

                {/* Top Navigation Bar */}
                <header className="px-8 py-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group/logo">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600 blur-md opacity-20 group-hover/logo:opacity-50 transition-opacity animate-pulse"></div>
                            <Shield className="h-8 w-8 text-red-600 relative z-10 fill-red-600/10" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-2xl tracking-tighter text-white leading-none">CSCA</span>
                            <span className="text-[8px] font-black text-red-600 uppercase tracking-[0.3em]">Operational_Registry</span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-black text-white">{user?.firstName || 'Operator'} {user?.lastName || ''}</span>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">ID: COMP001022973310</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center border border-white/20 shadow-lg shadow-red-900/20">
                            <span className="text-xs text-white font-black">
                                {user?.firstName ? user.firstName[0] : 'U'}
                            </span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 flex gap-8 p-8 pt-4">

                    {/* Left Sidebar - High Tech Navigation */}
                    <aside className="w-72 flex flex-col gap-6">
                        <GlassPanel className="p-4">
                            <div className="space-y-1">
                                {[
                                    { icon: LayoutDashboard, label: 'Control Center', active: true, path: '/dashboard' },
                                    { icon: Activity, label: 'Active Missions', path: '/dashboard/exam' },
                                    { icon: MessageSquare, label: 'Field Reports', path: '/feedback' },
                                    { icon: Settings, label: 'Identity Settings', path: '/profile' },
                                ].map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => navigate(item.path)}
                                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${item.active
                                                ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.2)]'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.label}
                                    </button>
                                ))}

                                <div className="pt-4 mt-4 border-t border-white/10">
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all duration-300"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Terminate Session
                                    </button>
                                </div>
                            </div>
                        </GlassPanel>

                        <GlassPanel className="p-6">
                            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Registry Language</h4>
                            <div className="flex flex-col gap-3">
                                <button className="flex items-center justify-between text-[11px] font-bold text-red-500">
                                    <span>English (Global)</span>
                                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                                </button>
                                <button className="text-left text-[11px] font-bold text-gray-500 hover:text-gray-300 transition-colors uppercase">日本語 (Regional)</button>
                            </div>
                        </GlassPanel>
                    </aside>

                    {/* Main Workspace */}
                    <main className="flex-1 flex flex-col gap-8">

                        {/* Mission Critical: Schedule an Exam */}
                        <GlassPanel className="p-10 border-red-600/20">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></div>
                                        <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em]">Operational_Entry_Active</span>
                                    </div>
                                    <h2 className="text-4xl font-black italic tracking-tighter uppercase text-white">Initialize Certification</h2>
                                    <p className="text-gray-400 text-sm font-medium max-w-xl">
                                        Deploy your expertise in our high-fidelity cloud environments. Select your certification pathway to begin.
                                    </p>
                                </div>
                                <button className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_0_50px_rgba(220,38,38,0.3)] transform hover:scale-105 active:scale-95 whitespace-nowrap">
                                    View Available Exams
                                </button>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3 cursor-pointer group/code">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/code:border-red-500/50 transition-colors">
                                        <CreditCard className="w-4 h-4 text-gray-400 group-hover/code:text-red-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Private Access Code</p>
                                        <p className="text-[9px] text-gray-600 font-bold uppercase group-hover/code:text-gray-400 transition-colors">Apply Authorization Key</p>
                                    </div>
                                </div>
                                <ChevronDown className="w-5 h-5 text-gray-600" />
                            </div>
                        </GlassPanel>

                        {/* Upcoming Appointments */}
                        <GlassPanel className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black uppercase italic tracking-wider text-white">Scheduled Node appointments</h3>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Operational Queue</p>
                                </div>
                            </div>
                            <div className="p-6 border border-dashed border-white/10 rounded-xl text-center">
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">No active deployments detected.</p>
                            </div>
                        </GlassPanel>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Secondary Actions */}
                            <GlassPanel className="p-8 group/stat">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Total Score Reports</h4>
                                    <FileText className="w-4 h-4 text-red-500" />
                                </div>
                                <div className="text-4xl font-black italic text-white mb-2">00</div>
                                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover/stat:text-red-500 transition-colors cursor-pointer">View Records <ChevronRight className="w-3 h-3 inline ml-1" /></p>
                            </GlassPanel>

                            <GlassPanel className="p-8 group/stat">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Achieved Ranks</h4>
                                    <Shield className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="text-4xl font-black italic text-white mb-2">00</div>
                                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover/stat:text-green-500 transition-colors cursor-pointer">Verification Portal <ChevronRight className="w-3 h-3 inline ml-1" /></p>
                            </GlassPanel>
                        </div>
                    </main>

                    {/* Right Intel Panel */}
                    <aside className="w-80 flex flex-col gap-8">
                        <GlassPanel className="p-8">
                            <h3 className="text-[11px] font-black text-red-500 uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-4">Operator Intel</h3>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Additional Information', icon: ChevronRight },
                                    { label: 'System Preferences', icon: Settings },
                                    { label: 'Mission History', icon: Activity },
                                    { label: 'Resource Receipts', icon: CreditCard }
                                ].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="flex items-center justify-between group/item p-2 rounded-lg hover:bg-white/5 transition-all">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover/item:text-white transition-colors">{item.label}</span>
                                            <item.icon className="w-4 h-4 text-gray-600 group-hover/item:text-red-500 transition-colors" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </GlassPanel>

                        {/* Marketplace Promo Card */}
                        <div className="relative rounded-3xl overflow-hidden group/promo h-[300px]">
                            <div className="absolute inset-0 bg-red-600 transition-transform duration-700 group-hover/promo:scale-110"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-60"></div>
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:16px_16px]"></div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-fit bg-black px-3 py-1 rounded-sm mb-4">
                                        <span className="text-red-600 font-black text-xl italic tracking-tighter">CSCA</span>
                                    </div>
                                    <h4 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-2">Supply Depot</h4>
                                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest leading-relaxed">
                                        Equip yourself for upcoming engagements with official training modules and gear.
                                    </p>
                                </div>

                                <button className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-black hover:text-white transition-all transform group-hover/promo:translate-y-[-4px]">
                                    Access Marketplace
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Global Footer */}
                <footer className="px-8 py-4 border-t border-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-red-500 transition-colors">Legal_Terms</a>
                        <a href="#" className="hover:text-red-500 transition-colors">Privacy_Protocol</a>
                        <a href="#" className="hover:text-red-500 transition-colors">Field_Support</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="opacity-50">Operational_Status:</span>
                        <span className="text-green-500">Optimal</span>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default PearsonDashboard;
