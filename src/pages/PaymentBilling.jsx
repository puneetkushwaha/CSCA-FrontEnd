import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Shield, Menu, User, MessageSquare, LogOut, ChevronLeft, CreditCard, ChevronDown, Check } from 'lucide-react';
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
            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] animate-pulse">Initializing Secure Gateway...</span>
        </div>
    </div>
);

const PaymentBilling = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Default values if state is missing (for direct access testing)
    const {
        subtotal = 273.00,
        taxAmount = 49.14,
        totalDue = 322.14
    } = location.state || {};

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [isVoucherExpanded, setIsVoucherExpanded] = useState(false);
    const [paymentType, setPaymentType] = useState('');
    const [voucherCode, setVoucherCode] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden payment-billing">
            <style>{`.payment-billing * { font-family: 'Inter', sans-serif; }`}</style>
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
                    <div className="max-w-[1200px] mx-auto py-12 px-8 space-y-6">

                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-bold tracking-tight">Enter payment and billing</h2>
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-xs font-bold text-red-500 hover:text-white transition-colors w-fit uppercase tracking-widest"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Back to previous step
                            </button>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Left Column - Payment Details */}
                            <div className="lg:col-span-2 space-y-6">

                                {/* Order Total Box */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-4">Order Total</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm text-gray-400">
                                            <span>Subtotal:</span>
                                            <span className="text-white font-bold">{formatCurrency(subtotal)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-400">
                                            <span>Estimated Tax:</span>
                                            <span className="text-white font-bold">{formatCurrency(taxAmount)}</span>
                                        </div>
                                        <div className="h-px bg-white/10 my-2"></div>
                                        <div className="flex justify-between text-lg font-black">
                                            <span className="text-white uppercase tracking-tight">ESTIMATED TOTAL DUE:</span>
                                            <span className="text-red-500">{formatCurrency(totalDue)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Voucher Section */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => setIsVoucherExpanded(!isVoucherExpanded)}
                                        className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
                                    >
                                        <span className="text-lg font-bold text-blue-400 flex items-center gap-2">
                                            Add Voucher or Promo Code
                                            <span className="text-xs font-normal text-gray-500 ml-2">(Optional)</span>
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isVoucherExpanded ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isVoucherExpanded && (
                                        <div className="p-6 pt-0 animate-in slide-in-from-top-2 fade-in">
                                            <div className="flex flex-col gap-2">
                                                <a href="#" className="text-xs text-red-500 hover:underline w-fit mb-2">What is this?</a>
                                                <label className="text-sm font-bold text-white">Voucher/Promotion Code:</label>
                                                <div className="flex gap-4">
                                                    <input
                                                        type="text"
                                                        value={voucherCode}
                                                        onChange={(e) => setVoucherCode(e.target.value)}
                                                        className="flex-1 bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                                                    />
                                                    <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold text-white transition-all">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="text-xs text-gray-500 italic">
                                    Required information is marked with an asterisk (*). Enter information on this page in the single byte alphanumeric characters.
                                </div>

                                {/* Payment Section */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                                    <h3 className="text-lg font-bold text-white border-b border-white/10 pb-4">Payment</h3>

                                    {/* Card Logos */}
                                    <div className="flex flex-wrap gap-3 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
                                        {['JCB', 'American Express', 'Discover / UnionPay', 'MasterCard', 'VISA'].map((card) => (
                                            <div key={card} className="px-3 py-2 bg-white rounded flex items-center justify-center min-w-[60px]">
                                                <span className="text-[10px] font-bold text-black uppercase">{card}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-4 max-w-md">
                                        <label className="block text-sm font-bold text-white">
                                            <span className="text-red-500 mr-1">*</span>
                                            Payment type:
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={paymentType}
                                                onChange={(e) => setPaymentType(e.target.value)}
                                                className="w-full appearance-none bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors cursor-pointer"
                                            >
                                                <option value="" disabled>Select one...</option>
                                                <option value="credit_card">Credit Card</option>
                                                <option value="debit_card">Debit Card</option>
                                                <option value="paypal">PayPal</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-6">
                                    <button className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-xl shadow-[0_5px_20px_rgba(220,38,38,0.4)] hover:scale-105 transition-all">
                                        Next
                                    </button>
                                </div>

                            </div>

                            {/* Right Column - Help / Info (Optional, keeping empty to focus on user request) */}
                            <div className="hidden lg:block lg:col-span-1">
                                {/* Could add FAQ or help text here */}
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

export default PaymentBilling;
