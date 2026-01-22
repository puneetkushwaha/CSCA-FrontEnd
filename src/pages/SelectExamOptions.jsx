import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
    Shield, ArrowLeft, Monitor, MapPin, ChevronLeft,
    Menu, User, MessageSquare, LogOut, Info, Clock, CheckCircle2,
    FileText, HelpCircle
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
            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] animate-pulse">Configuring Session...</span>
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Bridging secure connection to Pearson VUE nodes</span>
        </div>
    </div>
);

const SelectExamOptions = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const examName = location.state?.examName || "CSCA Certification Exam";
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col font-['Inter'] relative overflow-hidden">
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
                    <Link to="/find-exam" className="flex items-center gap-2 group/logo">
                        <Shield className="h-6 w-6 text-red-600 fill-red-600/10" />
                        <span className="font-black text-xl tracking-tighter text-white uppercase italic">CSCA</span>
                    </Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">REGISTRATION_PORTAL</span>
                </div>
            </header>

            <div className="flex-1 flex w-full relative z-10 pt-32 h-screen">
                {/* Sidebar */}
                <aside className={`transition-all duration-500 ease-in-out border-r border-white/5 bg-black/20 backdrop-blur-md flex flex-col ${isSidebarCollapsed ? 'w-20' : 'w-72'}`}>
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
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-white mb-1">{user?.firstName} {user?.lastName}</h3>
                            <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-4">ID: COMP001022973310</p>
                            <button className="text-[8px] font-black uppercase text-red-500 hover:text-white transition-colors">Edit Profile</button>
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
                    <div className="max-w-[900px] mx-auto py-12 px-8 space-y-10">

                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-[10px] font-black transition-all text-gray-600 hover:text-white uppercase tracking-widest group"
                            >
                                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to catalog
                            </button>
                            <div className="px-4 py-2 bg-green-600/90 rounded text-[9px] font-bold text-white uppercase tracking-tighter">
                                <div>40.6 Kbps ↑</div>
                                <div>54.0 Kbps ↓</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-black italic uppercase tracking-tighter">Select exam <span className="text-red-600">options</span></h2>
                            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
                        </div>

                        <PrecisionPanel className="p-8 border-white/5">
                            <div className="flex items-center gap-4 border-b border-white/5 pb-8 mb-8">
                                <div className="p-3 bg-red-600/10 rounded-xl">
                                    <Shield className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1 italic">Active_Registration_Slot:</p>
                                    <h4 className="text-lg font-black uppercase tracking-tight text-white">{examName}</h4>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h5 className="text-sm font-black uppercase tracking-widest text-gray-300">How do you want to take your exam?</h5>
                                    <p className="text-[10px] text-gray-500 font-medium leading-relaxed italic uppercase tracking-widest">
                                        Select an exam option and learn additional details about the selected exam option below
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <button
                                        onClick={() => setSelectedOption('center')}
                                        className={`p-8 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center gap-4 group/opt ${selectedOption === 'center'
                                            ? 'bg-red-600 border-red-500 shadow-[0_0_40px_rgba(220,38,38,0.3)] scale-[1.02]'
                                            : 'bg-white/5 border-white/5 hover:border-white/20'
                                            }`}
                                    >
                                        <div className={`p-4 rounded-full transition-colors ${selectedOption === 'center' ? 'bg-white/20' : 'bg-white/5 group-hover/opt:bg-red-600/20'}`}>
                                            <MapPin className={`w-8 h-8 ${selectedOption === 'center' ? 'text-white' : 'text-gray-400 group-hover/opt:text-red-500'}`} />
                                        </div>
                                        <div>
                                            <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${selectedOption === 'center' ? 'text-white' : 'text-gray-400'}`}>In person at a test center</span>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setSelectedOption('online')}
                                        className={`p-8 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center gap-4 group/opt ${selectedOption === 'online'
                                            ? 'bg-red-600 border-red-500 shadow-[0_0_40px_rgba(220,38,38,0.3)] scale-[1.02]'
                                            : 'bg-white/5 border-white/5 hover:border-white/20'
                                            }`}
                                    >
                                        <div className={`p-4 rounded-full transition-colors ${selectedOption === 'online' ? 'bg-white/20' : 'bg-white/5 group-hover/opt:bg-red-600/20'}`}>
                                            <Monitor className={`w-8 h-8 ${selectedOption === 'online' ? 'text-white' : 'text-gray-400 group-hover/opt:text-red-500'}`} />
                                        </div>
                                        <div>
                                            <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${selectedOption === 'online' ? 'text-white' : 'text-gray-400'}`}>Online with OnVUE</span>
                                        </div>
                                    </button>
                                </div>

                                <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <h6 className="text-xl font-black uppercase italic tracking-tighter text-white mb-10 pb-4 border-b border-white/5">
                                        Prepare for your test center exam
                                    </h6>

                                    {selectedOption === 'center' ? (
                                        <div className="space-y-12">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                                {/* Your photo ID */}
                                                <div className="flex flex-col items-center text-center space-y-6 group/info">
                                                    <div className="w-full aspect-video bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 group-hover/info:border-red-600/30 transition-all overflow-hidden relative">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
                                                        <Shield className="w-16 h-16 text-red-600 relative z-10" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <h7 className="text-sm font-black uppercase tracking-widest text-white">Your photo ID</h7>
                                                        <p className="text-[10px] text-gray-500 font-bold leading-relaxed uppercase tracking-widest px-2">
                                                            We'll verify your government-issued identification (ID) when you arrive for your exam.
                                                        </p>
                                                        <button className="text-[9px] font-black text-red-500 hover:text-white underline transition-colors uppercase tracking-widest">
                                                            Review admission & ID policies
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* What to expect */}
                                                <div className="flex flex-col items-center text-center space-y-6 group/info">
                                                    <div className="w-full aspect-video bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover/info:border-red-600/30 transition-all overflow-hidden relative">
                                                        <div className="absolute inset-0 bg-red-600/5"></div>
                                                        <Monitor className="w-16 h-16 text-red-600 relative z-10" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <h7 className="text-sm font-black uppercase tracking-widest text-white">What to expect</h7>
                                                        <p className="text-[10px] text-gray-500 font-bold leading-relaxed uppercase tracking-widest px-2">
                                                            Familiarize yourself with the testing experience so you feel confident on test day.
                                                        </p>
                                                        <button className="text-[9px] font-black text-red-500 hover:text-white underline transition-colors uppercase tracking-widest">
                                                            Watch our short video
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Personal items */}
                                                <div className="flex flex-col items-center text-center space-y-6 group/info">
                                                    <div className="w-full aspect-video bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 group-hover/info:border-red-600/30 transition-all overflow-hidden relative">
                                                        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent"></div>
                                                        <FileText className="w-16 h-16 text-red-600 relative z-10" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <h7 className="text-sm font-black uppercase tracking-widest text-white">Personal items</h7>
                                                        <p className="text-[10px] text-gray-500 font-bold leading-relaxed uppercase tracking-widest px-2">
                                                            Review the items that you can have during testing that do not require prior approval.
                                                        </p>
                                                        <button className="text-[9px] font-black text-red-500 hover:text-white underline transition-colors uppercase tracking-widest">
                                                            View comfort aid list
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Questions Section */}
                                            <div className="pt-10 border-t border-white/5">
                                                <div className="space-y-2">
                                                    <h7 className="text-sm font-black uppercase tracking-widest text-white">Questions?</h7>
                                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-2">
                                                        Check out the <button className="text-red-500 hover:text-white underline transition-colors">FAQs</button> frequently asked questions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center animate-pulse">
                                                <Info className="w-8 h-8 text-gray-700" />
                                            </div>
                                            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] max-w-sm leading-relaxed">
                                                {selectedOption
                                                    ? `Configuring registry intel for ${selectedOption === 'online' ? 'OnVUE' : 'session'} session...`
                                                    : "Select an operational mode to initialize registration details."
                                                }
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="px-10 py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    Previous
                                </button>
                                <button
                                    disabled={!selectedOption}
                                    className={`px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedOption
                                        ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105'
                                        : 'bg-white/5 text-gray-800 cursor-not-allowed'
                                        }`}
                                >
                                    Next Registry Step
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

export default SelectExamOptions;
