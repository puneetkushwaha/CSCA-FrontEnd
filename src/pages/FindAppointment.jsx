import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
    Shield, ChevronLeft, Menu, User, MessageSquare, LogOut, Calendar, Clock, Globe, Check, XCircle, ChevronRight
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
            <span className="text-base font-black text-white uppercase tracking-[0.5em] animate-pulse">Initializing Calendar...</span>
        </div>
    </div>
);

const FindAppointment = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { examName, temporaryCountry, hasAuthorization, proctorLanguage } = location.state || {}; // Receive previous state

    // Default to passed exam name or fallback
    const displayExamName = examName || "220-1201: CSCA Security Certification Exam: Core 1";

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [detectedTimeZone, setDetectedTimeZone] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    // New States
    const [isChangingTimeZone, setIsChangingTimeZone] = useState(false);
    const [isTimeZoneConfirmed, setIsTimeZoneConfirmed] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isTimeFormat24, setIsTimeFormat24] = useState(true);
    const [showTimeModal, setShowTimeModal] = useState(false);

    useEffect(() => {
        // Detect Time Zone
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setDetectedTimeZone(tz);

        // Update current time for that zone
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);

        const timer = setTimeout(() => setIsPageLoading(false), 800);
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    const handleConfirmTimeZone = () => {
        setIsTimeZoneConfirmed(true);
    };

    const handleBookAppointment = () => {
        navigate('/find-test-center', {
            state: {
                examName: displayExamName,
                temporaryCountry,
                hasAuthorization,
                proctorLanguage,
                confirmedTimeZone: detectedTimeZone,
                appointmentDate: selectedDate ? `2026-01-${selectedDate}` : null
            }
        });
    };

    const timeGroups = [
        { label: '00:00 - 05:00', available: 2, icon: 'moon', color: 'from-indigo-900 to-slate-900' },
        { label: '05:15 - 09:00', available: 5, icon: 'sunrise', color: 'from-orange-400 to-yellow-300' },
        { label: '09:15 - 13:00', available: 0, icon: 'sun', color: 'from-sky-400 to-blue-300' },
        { label: '13:15 - 17:00', available: 0, icon: 'sunset', color: 'from-orange-500 to-pink-500' },
        { label: '17:15 - 20:00', available: 0, icon: 'moon-cloud', color: 'from-indigo-600 to-purple-600' }
    ];

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden find-appointment">
            <style>{`.find-appointment * { font-family: 'Inter', sans-serif; }`}</style>
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
                    <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Find Appointment</span>
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

                    <div className="p-6 border-t border-white/5">
                        <button
                            onClick={handleSignOut}
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-600 hover:bg-red-600/10 transition-all ${isSidebarCollapsed ? 'justify-center px-0' : ''}`}
                        >
                            <LogOut className="w-4 h-4 shrink-0" />
                            {!isSidebarCollapsed && <span className="text-xs font-bold uppercase tracking-wider">Sign out</span>}
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="max-w-[1000px] mx-auto py-12 px-8 space-y-10">

                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-sm font-bold transition-all text-gray-500 hover:text-white group"
                            >
                                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back
                            </button>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Find an <span className="text-red-600">appointment</span></h2>
                            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
                        </div>

                        {/* Exam Header Bar */}
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-between">
                            <h3 className="text-base font-bold text-white">{displayExamName}</h3>
                        </div>

                        <PrecisionPanel className="p-8 border-white/5">
                            <div className="space-y-12">
                                {/* Section 1: Time Zone */}
                                <div className={`transition-all duration-500 ${isTimeZoneConfirmed ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                                    <div className="flex items-center gap-4 border-b border-white/5 pb-6 mb-6">
                                        <div className="p-2 bg-red-600/10 rounded-lg">
                                            <Globe className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">1. Confirm your preferred time zone</h4>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pl-4 md:pl-16">
                                        <h5 className="text-sm font-bold text-gray-400">
                                            Is this your preferred time zone?
                                        </h5>

                                        {!isChangingTimeZone ? (
                                            <>
                                                <div className="flex items-center gap-4 text-xl font-bold text-white">
                                                    <span className="text-red-500 bg-red-500/10 px-2 py-1 rounded">{detectedTimeZone}</span>
                                                    <span className="text-gray-500 text-sm font-normal">({currentTime})</span>
                                                </div>
                                                <p className="text-xs text-gray-500 max-w-lg">
                                                    Your test appointment will be scheduled using this time zone.
                                                </p>

                                                <div className="flex flex-col md:flex-row gap-4 pt-4">
                                                    <button
                                                        onClick={() => setIsChangingTimeZone(true)}
                                                        className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all text-center"
                                                    >
                                                        No, change time zone
                                                    </button>
                                                    <button
                                                        onClick={() => setIsTimeZoneConfirmed(true)}
                                                        className="px-6 py-2 rounded-lg text-xs font-bold transition-all bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:scale-105 flex items-center justify-center gap-2"
                                                    >
                                                        <Check className="w-4 h-4" />
                                                        Yes, that's right!
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="space-y-4 max-w-md animate-in fade-in slide-in-from-top-4 duration-300">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={detectedTimeZone}
                                                        onChange={(e) => setDetectedTimeZone(e.target.value)}
                                                        className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                                                        placeholder="Search time zones..."
                                                        autoFocus
                                                    />
                                                    <button
                                                        onClick={() => setDetectedTimeZone('')}
                                                        className="absolute right-3 top-3 text-gray-500 hover:text-white"
                                                    >
                                                        <XCircle className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={() => setIsChangingTimeZone(false)}
                                                        className="px-6 py-2 rounded-lg text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition-all"
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        onClick={() => setIsChangingTimeZone(false)}
                                                        className="px-6 py-2 rounded-lg text-xs font-bold bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Section 2: Date Selection */}
                                {isTimeZoneConfirmed && (
                                    <div className={`transition-all duration-500 ${selectedDate ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                                        <div className="flex items-center gap-4 border-b border-white/5 pb-6 mb-6">
                                            <div className="p-2 bg-red-600/10 rounded-lg">
                                                <Calendar className="w-5 h-5 text-red-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white">2. Select your date</h4>
                                            </div>
                                        </div>

                                        <div className="pl-4 md:pl-16 space-y-6">
                                            <p className="text-sm text-gray-400">Select a date from the calendar. Only dates with appointment availability can be selected.</p>

                                            {/* Custom Calendar Implementation */}
                                            <div className="max-w-md bg-white/5 rounded-2xl border border-white/10 p-6">
                                                <div className="flex items-center justify-between mb-6">
                                                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                                        <ChevronLeft className="w-4 h-4" />
                                                    </button>
                                                    <span className="text-base font-bold text-white">January 2026</span>
                                                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                        <div key={day} className="text-xs font-bold text-gray-500 uppercase tracking-wider py-2">
                                                            {day}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="grid grid-cols-7 gap-2">
                                                    {[...Array(4)].map((_, i) => (
                                                        <div key={`empty-${i}`} className="p-2"></div>
                                                    ))}

                                                    {[...Array(31)].map((_, i) => {
                                                        const day = i + 1;
                                                        const isAvailable = [15, 16, 20, 21, 22, 27, 28, 29].includes(day);
                                                        const isSelected = selectedDate === day;

                                                        return (
                                                            <button
                                                                key={day}
                                                                disabled={!isAvailable}
                                                                onClick={() => setSelectedDate(day)}
                                                                className={`
                                                                    relative h-10 w-10 mx-auto flex items-center justify-center rounded-lg text-sm font-bold transition-all
                                                                    ${isSelected ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' : ''}
                                                                    ${!isSelected && isAvailable ? 'bg-white/5 text-white hover:bg-white/10 cursor-pointer' : ''}
                                                                    ${!isSelected && !isAvailable ? 'text-gray-700 cursor-not-allowed' : ''}
                                                                `}
                                                            >
                                                                {day}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {selectedDate && (
                                                <button className="text-xs font-bold text-red-500 hover:text-white transition-colors flex items-center gap-2" onClick={() => setSelectedDate(null)}>
                                                    <XCircle className="w-4 h-4" /> Change Date
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Section 3: Time Selection */}
                                {selectedDate && (
                                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                                        <div className="flex items-center gap-4 border-b border-white/5 pb-6 mb-6">
                                            <div className="p-2 bg-red-600/10 rounded-lg">
                                                <Clock className="w-5 h-5 text-red-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white">3. Select your appointment start time</h4>
                                            </div>
                                        </div>

                                        <div className="pl-4 md:pl-16 space-y-8">
                                            {/* 12/24 Hr Toggle */}
                                            <div className="space-y-3">
                                                <p className="text-sm font-bold text-white">How would you like times displayed?</p>
                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={() => setIsTimeFormat24(false)}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${!isTimeFormat24 ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/20'}`}
                                                    >
                                                        {!isTimeFormat24 && <Check className="w-4 h-4" />}
                                                        <span className="text-sm font-bold">12 hr (e.g., 2:00 PM)</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setIsTimeFormat24(true)}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${isTimeFormat24 ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/20'}`}
                                                    >
                                                        {isTimeFormat24 && <Check className="w-4 h-4" />}
                                                        <span className="text-sm font-bold">24 hr (e.g., 14:00)</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Recommended Time */}
                                            <div className="space-y-3">
                                                <p className="text-sm font-bold text-gray-300">Recommended time:</p>
                                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-start gap-6">
                                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 overflow-hidden relative shrink-0">
                                                        <div className="absolute inset-0 bg-white/20"></div>
                                                        {/* Simple visual for 'morning/day' */}
                                                        <div className="absolute bottom-0 w-full h-1/2 bg-white/10"></div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p className="text-xs text-gray-500 font-bold uppercase">Wednesday, January 28, 2026</p>
                                                        <h3 className="text-2xl font-bold text-white">
                                                            {isTimeFormat24 ? '06:15 - 08:30' : '06:15 AM - 08:30 AM'}
                                                            <span className="text-lg text-gray-400 ml-2 font-normal">{detectedTimeZone}</span>
                                                        </h3>
                                                        <p className="text-xs text-gray-400">
                                                            Your check-in time will be {isTimeFormat24 ? '05:45' : '05:45 AM'} {detectedTimeZone}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex flex-col md:flex-row gap-4 pt-4">
                                                <button
                                                    onClick={() => setShowTimeModal(true)}
                                                    className="px-6 py-3 bg-transparent border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white/5 transition-all"
                                                >
                                                    Explore more times
                                                </button>
                                                <button
                                                    onClick={handleBookAppointment}
                                                    className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-lg text-sm font-bold text-white shadow-[0_5px_15px_rgba(20,184,166,0.3)] hover:shadow-[0_5px_20px_rgba(20,184,166,0.5)] hover:scale-105 transition-all"
                                                >
                                                    Book this appointment
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                                <button
                                    onClick={() => isTimeZoneConfirmed ? setIsTimeZoneConfirmed(false) : navigate(-1)}
                                    className="px-10 py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    Previous
                                </button>

                                {isTimeZoneConfirmed && selectedDate && (
                                    <button
                                        onClick={handleBookAppointment}
                                        className="px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105 animate-in fade-in zoom-in duration-300"
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        </PrecisionPanel>

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

            {/* Explore Times Modal */}
            {showTimeModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowTimeModal(false)}></div>
                    <div className="relative bg-[#111] border border-white/10 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                            <h3 className="text-xl font-bold text-white">Select your appointment start time</h3>
                            <button
                                onClick={() => setShowTimeModal(false)}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <XCircle className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            <div className="space-y-2 mb-8">
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                    <p>Your appointment length is <span className="font-bold text-white">135 minutes</span>.</p>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                    <p>Your online testing check-in time will be 30 minutes prior to your selected appointment start time.</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {timeGroups.map((group, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-white/20 transition-all cursor-pointer">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${group.color} flex items-center justify-center shrink-0`}>
                                                {/* Simple simulated icons based on group.icon string */}
                                                {group.icon === 'moon' && <div className="w-4 h-4 rounded-full bg-white/80 shadow-[0_0_10px_white]"></div>}
                                                {group.icon === 'sunrise' && <div className="w-6 h-3 rounded-t-full bg-white/80 mt-2"></div>}
                                                {group.icon === 'sun' && <div className="w-5 h-5 rounded-full bg-yellow-100 shadow-[0_0_10px_yellow]"></div>}
                                                {group.icon === 'sunset' && <div className="w-6 h-3 rounded-b-full bg-white/80 mb-2"></div>}
                                                {group.icon === 'moon-cloud' && <div className="w-4 h-4 rounded-full bg-gray-300/80"></div>}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white">{group.label}</h4>
                                                <p className={`text-sm ${group.available > 0 ? 'text-green-400' : 'text-gray-500'}`}>
                                                    {group.available > 0 ? `${group.available} times available.` : 'No times available.'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-gray-500 group-hover:text-white transition-colors">
                                            <ChevronRight className="w-5 h-5 rotate-90" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindAppointment;
