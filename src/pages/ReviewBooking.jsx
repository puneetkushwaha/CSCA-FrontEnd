import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Shield, Menu, User, MessageSquare, LogOut, ChevronLeft, Calendar, Clock, MapPin, CreditCard, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import RedGeometricBackground from '../components/RedGeometricBackground';

const GlobalPageLoader = () => (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 animate-pulse"></div>
            <div className="w-16 h-16 border-t-2 border-r-2 border-red-600 rounded-full animate-spin"></div>
            <Shield className="absolute inset-0 m-auto w-6 h-6 text-red-600" />
        </div>
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] animate-pulse">Reviewing Details...</span>
        </div>
    </div>
);

const ReviewBooking = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        examName = "CV0-004: CompTIA Cloud+ Certification Exam",
        appointmentDate,
        appointmentTime,
        confirmedTimeZone = "Asia/Kolkata - IST",
        language = "English",
        length = "135 minutes"
    } = location.state || {};

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    // Pricing Logic
    const subtotal = 273.00;
    const taxRate = 0.18;
    const taxAmount = subtotal * taxRate;
    const totalDue = subtotal + taxAmount;

    // Formatting Helpers
    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const formatDate = (dateString) => {
        if (!dateString) return "Tuesday, January 27, 2026";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden review-booking">
            <style>{`.review-booking * { font-family: 'Inter', sans-serif; }`}</style>
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

            {/* Header */}
            <header className="fixed top-8 left-0 right-0 z-50 px-8 flex justify-center">
                <div className="flex items-center gap-8 h-16 px-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-500 w-fit">
                    <Link to="/pearson-dashboard" className="flex items-center gap-2 group/logo">
                        <Shield className="h-6 w-6 text-red-600 fill-red-600/10" />
                        <span className="font-bold text-xl tracking-tight text-white">CSCA</span>
                    </Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Cart</span>
                </div>
            </header>

            <div className="flex-1 flex w-full relative z-10 pt-32 h-screen">
                {/* Sidebar */}
                <aside className={`transition-all duration-500 ease-in-out border-r border-white/5 bg-black/20 backdrop-blur-md flex flex-col ${isSidebarCollapsed ? 'w-20' : 'w-48 md:w-72'}`}>
                    <div className="p-6 flex-1 space-y-8">
                        <button
                            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                            className="w-full flex justify-center p-3 hover:bg-white/5 rounded-xl text-red-600 transition-all border border-transparent hover:border-red-600/20"
                        >
                            <Menu className="w-5 h-5" />
                        </button>

                        <div className={`flex flex-col items-center transition-all duration-500 ${isSidebarCollapsed ? 'opacity-0 scale-75 h-0 overflow-hidden' : 'opacity-100'}`}>
                            <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center mb-4">
                                <span className="text-xl font-bold">{user?.firstName?.[0] || 'P'}</span>
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-white mb-1">{user?.firstName} {user?.lastName}</h3>
                            <p className="text-xs font-medium text-gray-500 mb-4">ID: COMP001022973310</p>
                            <button className="text-xs font-bold text-red-500 hover:text-white transition-colors">Edit Profile</button>
                        </div>

                        <nav className="space-y-2">
                            {[
                                { icon: Shield, label: 'Dashboard', path: '/pearson-dashboard' },
                                { icon: User, label: 'CSCA Account', path: '/dashboard' },
                                { icon: MessageSquare, label: 'Feedback', path: '#' }
                            ].map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => item.path !== '#' && navigate(item.path)}
                                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}
                                >
                                    <item.icon className="w-4 h-4 shrink-0" />
                                    {!isSidebarCollapsed && <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="max-w-[1200px] mx-auto py-12 px-8 space-y-8">

                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-bold tracking-tight">Cart</h2>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Secure Checkout
                            </div>
                        </div>

                        {/* Cart Table */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                            <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-gray-400">
                                <div className="col-span-12 md:col-span-4 p-4">Description</div>
                                <div className="col-span-12 md:col-span-4 p-4">Details</div>
                                <div className="col-span-6 md:col-span-2 p-4 text-right">Price</div>
                                <div className="col-span-6 md:col-span-2 p-4 text-center">Actions</div>
                            </div>

                            <div className="grid grid-cols-12 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors p-4 md:p-0">
                                {/* Description */}
                                <div className="col-span-12 md:col-span-4 p-4 border-b border-white/5 md:border-b-0 space-y-2">
                                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block md:hidden">Exam</span>
                                    <h3 className="text-lg font-bold text-white">{examName}</h3>
                                    <div className="space-y-1 text-sm text-gray-400">
                                        <p>Language: <span className="text-white">{language}</span></p>
                                        <p>Appointment Length: <span className="text-white">{length}</span></p>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="col-span-12 md:col-span-4 p-4 border-b border-white/5 md:border-b-0 space-y-4">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block md:hidden">Details</span>

                                    <div className="space-y-1">
                                        <p className="text-sm text-gray-400">Accommodations: <span className="text-white">None</span></p>
                                    </div>

                                    <div className="bg-black/40 rounded-xl p-4 border border-white/10 space-y-3">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-red-500" />
                                            <span className="text-sm font-bold text-white">{formatDate(appointmentDate)}</span>
                                        </div>
                                        <div className="space-y-1 pl-7">
                                            <p className="text-xs text-gray-400">
                                                Check-in time: <span className="text-white font-mono">
                                                    {/* Start time minus 30 mins approx logic or static for now */}
                                                    30 mins prior
                                                </span> {confirmedTimeZone}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Start time: <span className="text-white font-mono">{appointmentTime}</span> {confirmedTimeZone}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="col-span-6 md:col-span-2 p-4 text-right">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block md:hidden mb-1">Price</span>
                                    <span className="text-xl font-bold text-white">{formatCurrency(subtotal)}</span>
                                </div>

                                {/* Actions */}
                                <div className="col-span-6 md:col-span-2 p-4 flex flex-col items-center justify-start gap-2">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block md:hidden mb-1">Actions</span>
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="text-xs font-bold text-red-500 hover:text-white transition-colors underline"
                                    >
                                        Change Appointment
                                    </button>
                                    <button className="text-xs font-bold text-gray-500 hover:text-white transition-colors">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Financial Summary */}
                        <div className="flex flex-col md:flex-row justify-end items-start gap-8">
                            <div className="w-full md:w-1/2 p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-blue-400 mb-2">
                                    <CreditCard className="w-4 h-4" />
                                    Voucher / Promotion Code
                                </h4>
                                <p className="text-xs text-gray-400 mb-4">You can enter voucher/promotion codes on the billing screen.</p>
                            </div>

                            <div className="w-full md:w-1/3 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>Subtotal:</span>
                                    <span className="text-white font-bold">{formatCurrency(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>Estimated Tax:</span>
                                    <span className="text-white font-bold">{formatCurrency(taxAmount)}</span>
                                </div>
                                <div className="h-px bg-white/10"></div>
                                <div className="flex justify-between text-lg font-black">
                                    <span className="text-white uppercase tracking-tight">Estimated Total Due:</span>
                                    <span className="text-red-500">{formatCurrency(totalDue)}</span>
                                </div>

                                <button
                                    onClick={() => navigate('/proceed-to-checkout', { state: { ...location.state, totalDue } })}
                                    className="w-full py-4 mt-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-xl shadow-[0_5px_20px_rgba(220,38,38,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                                >
                                    Proceed to Checkout
                                    <ChevronLeft className="w-4 h-4 rotate-180" />
                                </button>
                            </div>
                        </div>

                        {/* Footer Sub-links */}
                        <footer className="pt-20 pb-10 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase font-bold text-gray-600 border-t border-white/5">
                            <div className="flex gap-8 mb-6 md:mb-0">
                                <button className="hover:text-red-500 transition-colors">Terms</button>
                                <button className="hover:text-red-500 transition-colors">Privacy</button>
                                <button className="hover:text-red-500 transition-colors">Contact</button>
                            </div>
                            <div className="flex items-center gap-8">
                                <button className="hover:text-white transition-colors">Privacy settings</button>
                                <p className="normal-case font-medium">© 1996-2026 CSCA Registry Node / Pearson Education Inc.</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewBooking;
