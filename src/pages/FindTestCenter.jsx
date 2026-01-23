import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Shield, ChevronLeft, Menu, User, MessageSquare, LogOut, CheckCircle, XCircle } from 'lucide-react';
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
        </div>
        <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] animate-pulse">Loading Test Centers...</span>
    </div>
);

// Sample test center data – in a real app this would come from an API
const SAMPLE_CENTERS = [
    {
        id: 1,
        name: 'Sushant University',
        address: 'Golf Course Road, Sector - 55, Gurugram, Haryana 122003, India',
        distance: '255.7 mi',
    },
    {
        id: 2,
        name: 'Talent Study Circle',
        address: '3rd Floor, Gaurav Plaza, Opposite Metro Pillar No. 50, Sikanderpur, Gurugram, Haryana 122002, India',
        distance: '257.1 mi',
    },
    {
        id: 3,
        name: 'Positive Solutions',
        address: '5, 2nd Floor Kapil Vihar ICA Building, Main Road, Pitampura Metro Pillar 347, Near Bandhan Bank, New Delhi 110034, India',
        distance: '261.2 mi',
    },
    {
        id: 4,
        name: 'Matraex Coretech Private Limited',
        address: '1001 F, 11th Floor, Westend Mall, Janakpuri West, New Delhi 110058, India',
        distance: '262.3 mi',
    },
    {
        id: 5,
        name: 'Ideal Management Group',
        address: '1521, Ist Floor, Bharat Sevashram Sangha, Near Dr. Johari Hospital, Jabalpur, Madhya Pradesh 482001, India',
        distance: '269.6 mi',
    },
];

const FindTestCenter = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const examName = location.state?.examName || "CSCA Certification Exam";
    const temporaryCountry = location.state?.temporaryCountry;
    const hasAuthorization = location.state?.hasAuthorization;

    const [selectedCenters, setSelectedCenters] = useState([]);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const toggleCenter = (id) => {
        setSelectedCenters((prev) => {
            if (prev.includes(id)) {
                return prev.filter((c) => c !== id);
            }
            // limit to 3 selections
            if (prev.length >= 3) return prev;
            return [...prev, id];
        });
    };

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white text-lg flex flex-col font-['Inter'] relative overflow-hidden testing-policies">
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
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">FIND TEST CENTER</span>
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
                    <div className="max-w-[1000px] mx-auto py-12 px-8 space-y-10">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-[10px] font-black transition-all text-gray-600 hover:text-white uppercase tracking-widest group"
                            >
                                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                back to previous step
                            </button>
                        </div>

                        <h2 className="text-3xl font-black italic uppercase tracking-tighter">Find a test center</h2>
                        <div className="h-1 w-20 bg-red-600 rounded-full mb-4"></div>

                        <PrecisionPanel className="p-8 border-white/5">
                            <div className="space-y-6">
                                <p className="text-base text-gray-400">Select up to three test centers to compare availability for <strong>{examName}</strong>.</p>

                                <table className="w-full text-left border-collapse">
                                    <thead className="text-sm font-black uppercase tracking-widest text-white bg-white/5">
                                        <tr>
                                            <th className="p-3">Select</th>
                                            <th className="p-3">Test Center</th>
                                            <th className="p-3">Address</th>
                                            <th className="p-3">Distance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {SAMPLE_CENTERS.map((center) => (
                                            <tr key={center.id} className="border-b border-white/5">
                                                <td className="p-3">
                                                    <button
                                                        onClick={() => toggleCenter(center.id)}
                                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedCenters.includes(center.id) ? 'bg-red-600 border-red-600' : 'border-white/20'}`}
                                                    >
                                                        {selectedCenters.includes(center.id) && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                                                    </button>
                                                </td>
                                                <td className="p-3 text-white font-black">{center.name}</td>
                                                <td className="p-3 text-gray-400 text-sm">{center.address}</td>
                                                <td className="p-3 text-gray-400">{center.distance}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="flex gap-4 mt-6">
                                    <button
                                        disabled={selectedCenters.length === 0}
                                        onClick={() => navigate('/exam-schedule', { state: { examName, selectedCenters, temporaryCountry, hasAuthorization } })}
                                        className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${selectedCenters.length > 0 ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105' : 'bg-white/5 text-gray-800 cursor-not-allowed'}`}
                                    >
                                        Continue
                                    </button>
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </PrecisionPanel>

                        {/* Footer */}
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

export default FindTestCenter;
