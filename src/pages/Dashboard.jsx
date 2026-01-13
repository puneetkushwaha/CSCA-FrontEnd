import React from 'react';
import { Shield, ChevronRight, ChevronLeft, Globe, ShoppingCart, HelpCircle, X, User } from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import RedGeometricBackground from '../components/RedGeometricBackground';

const Dashboard = () => {
    const { logout, user } = useAuth();
    const { toggleCart, cartCount } = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col font-['Inter'] relative overflow-hidden">
            {/* Restore Dark Geometric Background */}
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

            {/* Hero Pill Navbar - Centered/Glassmorphic */}
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

                    {/* Conditional Return Button - Next to Nav */}
                    {location.pathname !== '/dashboard' && (
                        <Link
                            to="/dashboard"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all hover:bg-white/5"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Return
                        </Link>
                    )}

                    {/* Navigation Container */}
                    <nav className="hidden lg:flex items-center h-full">
                        <Link
                            to="/dashboard"
                            className={`px-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-red-500 ${isActive('/dashboard') ? 'text-red-500' : 'text-gray-300'}`}
                        >
                            Home
                        </Link>

                        <div className="relative group/cert h-full flex items-center">
                            <button className={`px-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-red-500 flex items-center gap-1 ${location.pathname.includes('/dashboard/exam') || location.pathname.includes('/dashboard/certifications') ? 'text-red-500' : 'text-gray-300'}`}>
                                Certification
                                <ChevronRight className="w-3 h-3 rotate-90 opacity-40 group-hover/cert:text-red-500 transition-colors" />
                            </button>
                            {/* Dropdown with website design */}
                            <div className="absolute top-[calc(100%+10px)] left-0 w-56 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)] overflow-hidden opacity-0 invisible group-hover/cert:opacity-100 group-hover/cert:visible transition-all duration-300 translate-y-2 group-hover/cert:translate-y-0 z-50">
                                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                                <div className="p-2">
                                    <Link to="/dashboard/exam" className="block px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">My Exams</Link>
                                    <Link to="/dashboard/certifications" className="block px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Certifications</Link>
                                    <Link to="/dashboard/certifications" className="block px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Continuing Education</Link>
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

            {/* Content Area - Adjusted for fixed header */}
            <main className="flex-1 relative z-10 w-full pt-24 h-full overflow-y-auto">
                <div className="w-full h-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
