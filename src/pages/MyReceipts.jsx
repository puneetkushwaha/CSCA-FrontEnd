import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {
    Shield, History, ArrowLeft, Info, FileText,
    Menu, User, MessageSquare, LogOut, Globe,
    ExternalLink, ShoppingCart, HelpCircle, X,
    ChevronLeft, Loader2, CreditCard, Receipt
} from 'lucide-react';
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

const MyReceipts = () => {
    const { logout, user } = useAuth();
    const { toggleCart, cartCount } = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isAppLoading, setIsAppLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsAppLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    if (isAppLoading) return <GlobalPageLoader />;

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
            </div>

            {/* Standard Dashboard Header */}
            <header className="fixed top-8 left-0 right-0 z-50 px-8 flex justify-center">
                <div className="flex items-center gap-8 h-16 px-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-500 w-fit">
                    <Link to="/" className="flex items-center gap-2 group/logo relative">
                        <Shield className="h-6 w-6 text-red-600 relative z-10 fill-red-600/10" />
                        <span className="font-black text-xl tracking-tighter text-white uppercase">CSCA</span>
                    </Link>
                    <Link to="/pearson-dashboard" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all hover:bg-white/5">
                        <ChevronLeft className="w-4 h-4" /> Return
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-4 h-full border-l border-white/10 pl-4 text-gray-400">
                        <button className="p-1 hover:text-white transition-colors"><ShoppingCart className="w-4 h-4" /></button>
                        <button className="p-1 hover:text-white transition-colors"><HelpCircle className="w-4 h-4" /></button>
                    </nav>
                </div>
            </header>

            {/* Main Layout Area */}
            <main className="flex-1 relative z-10 w-full pt-32 h-full overflow-y-auto">
                <div className="max-w-[1540px] mx-auto flex gap-8 p-8 items-start">

                    {/* LEFT COLUMN: Navigation Sidebar */}
                    <aside className={`transition-all duration-500 ease-in-out flex-shrink-0 ${isSidebarCollapsed ? 'w-20' : 'w-80'}`}>
                        <PrecisionPanel className="p-6 h-full">
                            <div className={`flex items-center mb-8 p-2 border border-red-600/30 rounded-lg bg-black/20 transition-all ${isSidebarCollapsed ? 'justify-center' : 'justify-end'}`}>
                                <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="p-2 hover:bg-white/5 rounded-md transition-colors text-red-500">
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>

                            <div className={`flex flex-col items-center pb-8 border-b border-white/10 mb-6 transition-all duration-500 ${isSidebarCollapsed ? 'opacity-0 scale-75 overflow-hidden h-0' : 'opacity-100'}`}>
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-600 to-red-400 p-0.5 mb-4">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/10">
                                        <span className="text-2xl text-white font-black italic">{user?.firstName?.[0] || 'P'}</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-black text-white uppercase tracking-widest leading-none mb-1">{user?.firstName || 'Puneet'} {user?.lastName || 'Kushwaha'}</h3>
                                    <p className="text-[9px] font-bold text-red-500 uppercase tracking-[0.4em] mb-2 font-mono">CompTIA ID: COMP001022973310</p>
                                    <button className="text-[8px] text-gray-500 hover:text-white font-black uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full transition-colors">Edit Profile</button>
                                </div>
                            </div>

                            <nav className="space-y-4">
                                <button onClick={() => navigate('/pearson-dashboard')} className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}>
                                    <Shield className="w-5 h-5 shrink-0" />
                                    {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em]">Dashboard</span>}
                                </button>
                                <button onClick={() => navigate('/dashboard')} className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}>
                                    <User className="w-5 h-5 shrink-0 text-red-500" />
                                    {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return to Account</span>}
                                </button>
                                <button className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}>
                                    <MessageSquare className="w-5 h-5 shrink-0 text-red-500" />
                                    {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em]">Feedback survey</span>}
                                </button>
                                <div className="pt-4 border-t border-white/5 mt-4">
                                    <button onClick={handleSignOut} className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 text-red-500 hover:bg-red-500/10 ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}>
                                        <LogOut className="w-5 h-5 shrink-0" />
                                        {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-[0.2em]">Sign out</span>}
                                    </button>
                                </div>
                            </nav>
                        </PrecisionPanel>
                    </aside>

                    {/* RIGHT COLUMN: Receipts Content */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2 px-2">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></div>
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em]">Financial_Registry_Access</span>
                            </div>
                            <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic px-2">My receipts</h1>
                        </div>

                        <PrecisionPanel className="p-20 flex flex-col items-center justify-center text-center">
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full"></div>
                                <div className="w-24 h-24 rounded-full bg-black border-2 border-white/5 flex items-center justify-center relative z-10">
                                    <Receipt className="w-10 h-10 text-gray-800" />
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-white italic uppercase tracking-tight mb-4">No Transaction Data</h3>
                            <p className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em] max-w-sm leading-relaxed">
                                You do not currently have any receipts available in the operational database.
                            </p>
                            <div className="mt-10 pt-10 border-t border-white/5 w-full">
                                <p className="text-[9px] text-gray-700 font-bold uppercase tracking-widest">
                                    SESSION_VERIFIED: NO_DATA_DETECTED
                                </p>
                            </div>
                        </PrecisionPanel>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-auto py-10 px-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-[8px] font-black uppercase tracking-[0.4em] text-gray-600">
                <div className="flex gap-10 justify-center md:justify-start">
                    <button className="hover:text-red-500 transition-colors">Terms</button>
                    <button className="hover:text-red-500 transition-colors">Privacy</button>
                    <button className="hover:text-red-500 transition-colors">Contact</button>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-10">
                    <button className="hover:text-white transition-colors">Privacy settings</button>
                    <p className="text-gray-800 not-italic">© 1996-2026 Pearson Education Inc. or its affiliate(s). All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MyReceipts;
