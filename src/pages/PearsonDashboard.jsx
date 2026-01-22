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
    Info,
    Menu,
    MessageSquare,
    LogOut,
    Globe,
    ExternalLink,
    ChevronDown,
    ShoppingCart,
    HelpCircle,
    X,
    ChevronLeft
} from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import RedGeometricBackground from '../components/RedGeometricBackground';

const PrecisionPanel = ({ children, className = "" }) => (
    <div className={`relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-700 ${className}`}>
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="relative z-10">{children}</div>
    </div>
);

const SidebarLink = ({ icon: Icon, label, active, onClick, external }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${active
            ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.2)]'
            : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
            }`}
    >
        <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-red-500'}`} />
        <span className="flex-1 text-left">{label}</span>
        {external && <ExternalLink className="w-3 h-3 opacity-40" />}
    </button>
);

const PearsonDashboard = () => {
    const { logout, user } = useAuth();
    const { toggleCart, cartCount } = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col font-['Inter'] relative overflow-hidden">
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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            </div>

            {/* Hero Pill Navbar - Centered/Glassmorphic (as requested) */}
            <header className="fixed top-8 left-0 right-0 z-50 px-8 flex justify-center">
                <div className={`flex items-center gap-8 h-16 px-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-500 w-fit`}>

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 group/logo relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600 blur-md opacity-20 group-hover/logo:opacity-50 transition-opacity animate-pulse"></div>
                            <Shield className="h-6 w-6 text-red-600 relative z-10 fill-red-600/10" />
                        </div>
                        <span className="font-black text-xl tracking-tighter text-white leading-none">CSCA</span>
                    </Link>

                    {/* Conditional Return Button */}
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all hover:bg-white/5"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Return
                    </Link>

                    {/* Navigation Container */}
                    <nav className="hidden lg:flex items-center h-full">
                        <Link
                            to="/dashboard"
                            className={`px-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-red-500 ${isActive('/dashboard') ? 'text-red-500' : 'text-gray-300'}`}
                        >
                            Home
                        </Link>

                        <div className="relative group/cert h-full flex items-center">
                            <button className={`px-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-red-500 flex items-center gap-1 ${location.pathname.includes('/pearson') || location.pathname.includes('/dashboard/certifications') ? 'text-red-500' : 'text-gray-300'}`}>
                                Certification
                                <ChevronRight className="w-3 h-3 rotate-90 opacity-40 group-hover/cert:text-red-500 transition-colors" />
                            </button>
                            {/* Dropdown with website design */}
                            <div className="absolute top-[calc(100%+10px)] left-0 w-56 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)] overflow-hidden opacity-0 invisible group-hover/cert:opacity-100 group-hover/cert:visible transition-all duration-300 translate-y-2 group-hover/cert:translate-y-0 z-50">
                                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                                <div className="p-2">
                                    <Link to="/exam" className="block px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">My Exams</Link>
                                    <Link to="/certifications" className="block px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Certifications</Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="flex items-center gap-6 pl-6 border-l border-white/10">
                        {/* Functional Cart */}
                        <button
                            onClick={toggleCart}
                            className="relative group text-gray-400 hover:text-white transition-colors"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-black w-3.5 h-3.5 flex items-center justify-center rounded-full border border-black group-hover:scale-110 transition-transform">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <button className="p-1 text-gray-400 hover:text-white transition-colors">
                            <HelpCircle className="w-4 h-4" />
                        </button>

                        {/* Auth / Profile with Hero style */}
                        <div className="relative group/user">
                            <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5 hover:border-white/20">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center border border-white/10 shadow-lg shadow-red-900/20">
                                    <span className="text-[9px] text-white font-black">
                                        {user?.firstName ? user.firstName[0] : 'U'}
                                    </span>
                                </div>
                                <span className="max-w-[100px] truncate">{user?.firstName || 'Operator'}</span>
                            </button>

                            <div className="absolute right-0 top-[calc(100%+8px)] w-56 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] opacity-0 invisible group-hover/user:opacity-100 group-hover/user:visible transition-all duration-300 z-[100] translate-y-2 group-hover/user:translate-y-0">
                                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                                <div className="p-4 border-b border-white/5">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Signed in as</p>
                                    <p className="text-xs font-bold text-white truncate">{user?.email}</p>
                                </div>
                                <div className="p-2">
                                    <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-[10px] font-bold uppercase text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        <User className="w-3.5 h-3.5" /> Identity Settings
                                    </Link>
                                    <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-3 py-2 text-[10px] font-bold uppercase text-red-500 hover:text-red-400 hover:bg-red-500/5 rounded-lg transition-colors">
                                        <X className="w-3.5 h-3.5" /> Terminate Session
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area - Adjusted for fixed header */}
            <main className="flex-1 relative z-10 w-full pt-32 h-full overflow-y-auto">
                <div className="max-w-[1540px] mx-auto flex gap-8 p-8 items-start">

                    {/* LEFT COLUMN: Navigation Sidebar */}
                    <aside className={`transition-all duration-500 ease-in-out flex-shrink-0 ${isSidebarCollapsed ? 'w-20' : 'w-80'}`}>
                        <PrecisionPanel className="p-6 h-full">
                            {/* Search Simulation / Menu Button */}
                            <div className={`flex items-center mb-8 p-2 border border-red-600/30 rounded-lg bg-black/20 transition-all ${isSidebarCollapsed ? 'justify-center' : 'justify-end'}`}>
                                <button
                                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                                    className="p-2 hover:bg-white/5 rounded-md transition-colors text-red-500"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Profile Portal */}
                            <div className={`flex flex-col items-center pb-8 border-b border-white/10 mb-6 transition-all duration-500 ${isSidebarCollapsed ? 'opacity-0 scale-75 overflow-hidden h-0 mb-0 pb-0' : 'opacity-100 scale-100'}`}>
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full"></div>
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-600 to-red-400 p-0.5 relative z-10">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/10 shadow-lg">
                                            <span className="text-2xl text-white font-black italic">
                                                {user?.firstName ? user.firstName[0] : 'P'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-black text-white uppercase tracking-widest leading-none mb-1">
                                        {user?.firstName || 'Puneet'} {user?.lastName || 'Kushwaha'}
                                    </h3>
                                    <p className="text-[9px] font-bold text-red-500 uppercase tracking-[0.4em] mb-2 font-mono">CompTIA OPERATOR</p>
                                    <p className="text-[8px] text-gray-400 font-bold tracking-widest uppercase">ID: COMP001022973310</p>
                                </div>
                            </div>

                            {/* Navigation Stack */}
                            <nav className="space-y-4">
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${isActive('/dashboard') ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.2)]' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'} ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}
                                >
                                    <Shield className={`w-5 h-5 shrink-0 transition-transform duration-500 ${isSidebarCollapsed ? 'scale-110' : ''}`} />
                                    {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap animate-in fade-in duration-700">Dashboard</span>}
                                </button>

                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}
                                >
                                    <User className={`w-5 h-5 shrink-0 text-red-500 transition-transform duration-500 ${isSidebarCollapsed ? 'scale-110' : ''}`} />
                                    {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em] flex-1 text-left whitespace-nowrap animate-in fade-in duration-700">Return to Account</span>}
                                    {!isSidebarCollapsed && <ExternalLink className="w-3 h-3 opacity-40 ml-auto" />}
                                </button>

                                <button
                                    onClick={() => navigate('/dashboard/certifications')}
                                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}
                                >
                                    <MessageSquare className={`w-5 h-5 shrink-0 text-red-500 transition-transform duration-500 ${isSidebarCollapsed ? 'scale-110' : ''}`} />
                                    {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em] flex-1 text-left whitespace-nowrap animate-in fade-in duration-700">Feedback Survey</span>}
                                </button>

                                <div className={`pt-4 border-t border-white/5 mt-4 transition-all duration-500 ${isSidebarCollapsed ? 'border-none' : ''}`}>
                                    <button
                                        onClick={handleSignOut}
                                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 text-red-500 hover:bg-red-500/10 ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}
                                    >
                                        <LogOut className={`w-5 h-5 shrink-0 transition-transform duration-500 ${isSidebarCollapsed ? 'scale-110' : ''}`} />
                                        {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap animate-in fade-in duration-700">Terminate Session</span>}
                                    </button>
                                </div>
                            </nav>

                            {/* Language Protocol */}
                            {!isSidebarCollapsed && (
                                <div className="mt-8 pt-6 border-t border-white/10 animate-in fade-in duration-1000">
                                    <div className="flex items-center gap-3 text-[9px] font-black text-gray-500 uppercase tracking-widest mb-4">
                                        <Globe className="w-4 h-4 text-red-500" />
                                        Language Port
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 pl-7">
                                        <button className="flex items-center gap-2 text-[10px] font-bold text-red-500 text-left">
                                            English <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse shadow-[0_0_5px_rgba(220,38,38,1)]"></div>
                                        </button>
                                        <button className="text-[10px] font-bold text-gray-600 text-left hover:text-white transition-colors">日本語</button>
                                    </div>
                                </div>
                            )}
                        </PrecisionPanel>
                    </aside>

                    {/* CENTER COLUMN: Core Dashboard Functionality */}
                    <div className="flex-1 space-y-8">
                        {/* Header Text Overlay */}
                        <div className="mb-4">
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></div>
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em]">Operational_Registry_v6.0</span>
                            </div>
                            <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic px-2">
                                Command Dashboard
                            </h1>
                        </div>

                        {/* Schedule an Exam Module */}
                        <PrecisionPanel className="p-10 border-red-600/20">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Schedule an Exam</h3>
                            </div>

                            <div className="mb-10">
                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Exam Catalog Queue</p>
                                <button
                                    onClick={() => navigate('/dashboard/certifications')}
                                    className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-full transition-all duration-500 shadow-[0_0_40px_rgba(220,38,38,0.3)] transform hover:scale-105 active:scale-95"
                                >
                                    View Available Exams
                                </button>
                            </div>

                            <div className="pt-8 border-t border-white/5 cursor-pointer group/access">
                                <div className="flex items-center justify-between">
                                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest group-hover/access:text-red-400 transition-colors">Do you have a private access code?</p>
                                    <ChevronDown className="w-4 h-4 text-gray-600 group-hover/access:text-red-500 transition-colors" />
                                </div>
                                <p className="text-[8px] text-gray-600 font-bold uppercase tracking-[0.4em] mt-2 group-hover/access:text-gray-400 transition-colors">SUBMIT_AUTHORIZATION_KEY</p>
                            </div>
                        </PrecisionPanel>

                        {/* Upcoming Appointments Module */}
                        <PrecisionPanel className="p-10 border-white/10">
                            <div className="flex items-center gap-3 mb-8">
                                <Calendar className="w-6 h-6 text-red-500" />
                                <h3 className="text-xl font-black italic uppercase tracking-tight text-white">View Upcoming test center appointments</h3>
                            </div>

                            <div className="p-10 border border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center text-center bg-black/5">
                                <History className="w-12 h-12 text-gray-800 mb-4 opacity-50" />
                                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed max-w-sm">
                                    No active appointment sequences detected in the operational registry.
                                </p>
                            </div>
                        </PrecisionPanel>
                    </div>

                    {/* RIGHT COLUMN: Account Intelligence */}
                    <aside className="w-80 space-y-6 flex-shrink-0">
                        <PrecisionPanel className="p-8">
                            <h3 className="text-[11px] font-black text-red-500 uppercase tracking-[0.4em] mb-8 pb-4 border-b border-white/10 italic">
                                My Account intel
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    { label: 'Additional information', path: '/profile' },
                                    { label: 'Registry Preferences', path: '/dashboard/settings' },
                                    { label: 'Exam Mission History', path: '/dashboard/exam' },
                                    { label: 'View score reports', path: '/dashboard/exam' },
                                    { label: 'Protocol Receipts', path: '/dashboard/settings' }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={() => navigate(item.path)}
                                            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all group/item text-left"
                                        >
                                            <div className="flex items-center gap-3">
                                                <ChevronRight className="w-4 h-4 text-red-600 group-hover/item:translate-x-1 transition-transform" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover/item:text-white transition-colors">{item.label}</span>
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </PrecisionPanel>

                        {/* CompTIA Marketplace Ad Simulation */}
                        <div className="relative rounded-[2rem] overflow-hidden group/ad h-[320px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-950"></div>
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <div className="inline-block bg-white text-black px-3 py-1 font-black italic text-sm uppercase tracking-tighter mb-4">
                                        CompTIA
                                    </div>
                                    <h4 className="text-4xl font-black italic uppercase tracking-tighter leading-[0.9] mb-3">Marketplace Protocol</h4>
                                    <p className="text-[9px] font-bold text-white/70 uppercase tracking-widest leading-relaxed">
                                        Your primary source for everything required for certification excellence.
                                    </p>
                                </div>

                                <button className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                                    Access Market
                                </button>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute bottom-[-20%] right-[-10%] w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Unified Bottom Bar */}
            <footer className="relative z-10 px-12 py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[8px] font-black uppercase tracking-[0.4em] text-gray-600">
                <div className="flex gap-12 mb-4 md:mb-0">
                    <a href="#" className="hover:text-red-500 transition-colors">Protocol_Terms</a>
                    <a href="#" className="hover:text-red-500 transition-colors">Privacy_Shield</a>
                    <a href="#" className="hover:text-red-500 transition-colors">Field_Support</a>
                </div>

                <div className="flex items-center gap-10">
                    <button className="flex items-center gap-2 hover:text-white transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full border border-red-600/50 flex items-center justify-center p-0.5">
                            <div className="w-full h-full bg-red-600 rounded-full blur-[2px]"></div>
                        </div>
                        Privacy_Settings
                    </button>
                    <div className="flex items-center gap-2 italic">
                        <span className="opacity-40 font-normal mr-1 not-italic">PEARSON</span>
                        <span className="text-red-500">VUE</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PearsonDashboard;
