import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
    Shield, ChevronLeft, Menu, User, MessageSquare, LogOut, Calendar, Clock, MapPin, Check
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
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
            <span className="text-base font-black text-white uppercase tracking-[0.5em] animate-pulse">Finalizing Schedule...</span>
        </div>
    </div>
);

const ExamSchedule = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        examName,
        selectedCenters,
        temporaryCountry,
        hasAuthorization,
        proctorLanguage,
        confirmedTimeZone,
        appointmentDate
    } = location.state || {};

    // Default to passed exam name or fallback
    const displayExamName = examName || "220-1201: CSCA Security Certification Exam: Core 1";

    // Mock time slots
    const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    const handleCheckout = () => {
        navigate('/checkout', {
            state: {
                examName: displayExamName,
                temporaryCountry,
                hasAuthorization,
                proctorLanguage,
                confirmedTimeZone,
                appointmentDate,
                selectedSlot,
                center: selectedCenters ? selectedCenters[0] : null // Assuming single center selection for final booking
            }
        });
    };

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white text-lg flex flex-col font-['Inter'] relative overflow-hidden exam-schedule">
            <style>{`.exam-schedule * {font-size: 1.125rem !important;}`}</style>
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
                        <span className="font-black text-xl tracking-tighter text-white uppercase italic">CSCA</span>
                    </Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">SCHEDULE</span>
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
                                <span className="text-xl font-black italic">{user?.firstName?.[0] || 'P'}</span>
                            </div>
                            <h3 className="text-sm md:text-base font-black uppercase tracking-widest text-white mb-1">{user?.firstName} {user?.lastName}</h3>
                            <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">ID: COMP001022973310</p>
                            <button className="text-xs md:text-sm font-black uppercase text-red-500 hover:text-white transition-colors">Edit Profile</button>
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
                                    {!isSidebarCollapsed && <span className="text-[9px] font-black uppercase tracking-[0.2em]">{item.label}</span>}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="p-6 border-t border-white/5">
                        <button
                            onClick={handleSignOut}
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-600 hover:bg-red-600/10 transition-all ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}
                        >
                            <LogOut className="w-4 h-4 shrink-0" />
                            {!isSidebarCollapsed && <span className="text-[9px] font-black uppercase tracking-[0.2em]">Sign out</span>}
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="max-w-[1000px] mx-auto py-12 px-8 space-y-10">

                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-sm md:text-base font-black transition-all text-gray-600 hover:text-white uppercase tracking-widest group"
                            >
                                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                back to previous step
                            </button>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Review & <span className="text-red-600">Select Time</span></h2>
                            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
                        </div>

                        {/* Exam Header Bar */}
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-between">
                            <h3 className="text-lg font-black uppercase tracking-tight text-white">{displayExamName}</h3>
                        </div>

                        <PrecisionPanel className="p-8 border-white/5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h4 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-4">Exam Details</h4>
                                    <div className="space-y-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-red-600" />
                                            <span className="text-white font-bold">Date:</span> {appointmentDate || 'Not selected'}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-4 h-4 text-red-600" />
                                            <span className="text-white font-bold">Time Zone:</span> {confirmedTimeZone || 'Default'}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-4 h-4 text-red-600" />
                                            <span className="text-white font-bold">Language:</span> {proctorLanguage || 'English'}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-lg font-black uppercase tracking-tight text-white border-b border-white/5 pb-4">Available Slots</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {timeSlots.map(slot => (
                                            <button
                                                key={slot}
                                                onClick={() => setSelectedSlot(slot)}
                                                className={`p-3 rounded-xl border text-sm font-bold transition-all ${selectedSlot === slot ? 'bg-red-600 border-red-600 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    Previous
                                </button>
                                <button
                                    disabled={!selectedSlot}
                                    onClick={handleCheckout}
                                    className={`px-10 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedSlot ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105' : 'bg-white/5 text-gray-500 cursor-not-allowed'}`}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </PrecisionPanel>

                        {/* Footer Sub-links */}
                        <footer className="pt-20 pb-10 flex flex-col md:flex-row items-center justify-between text-[8px] font-black uppercase tracking-[0.4em] text-gray-700 border-t border-white/5">
                            <div className="flex gap-8 mb-6 md:mb-0">
                                <button className="hover:text-red-500 transition-colors">Terms</button>
                                <button className="hover:text-red-500 transition-colors">Privacy</button>
                                <button className="hover:text-red-500 transition-colors">Contact</button>
                            </div>
                            <div className="flex items-center gap-8">
                                <button className="hover:text-white transition-colors">Privacy settings</button>
                                <p className="not-italic">© 1996-2026 CSCA Registry Node / Pearson Education Inc.</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamSchedule;
