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
    ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PearsonDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-[#f4f4f4] text-[#333] font-sans">
            {/* Top Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-[#ba0c2f] flex items-center gap-1">
                        <span className="text-[#ba0c2f]">CompTIA</span>
                    </div>
                </div>
                <div className="flex-1 text-center">
                    <h1 className="text-3xl font-light text-gray-600">Dashboard</h1>
                </div>
                <div className="w-24"></div> {/* Spacer for symmetry */}
            </header>

            <div className="flex max-w-[1400px] mx-auto mt-6 px-4 gap-6">
                {/* Left Sidebar */}
                <aside className="w-64 flex flex-col gap-6">
                    <div className="bg-white border border-gray-200 rounded shadow-sm">
                        {/* Search/Menu Toggle Header */}
                        <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-white">
                            <div className="w-full border border-yellow-500 h-8 flex items-center justify-end px-2">
                                <button className="text-[#007c91]">
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="p-6 flex flex-col items-center border-b border-gray-200">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                <User className="w-10 h-10 text-gray-400" />
                            </div>
                            <h2 className="text-center font-semibold text-gray-700">{user?.firstName || 'Puneet'} {user?.lastName || 'Kushwaha'}</h2>
                            <p className="text-center text-sm text-gray-500">CompTIA</p>
                            <p className="text-center text-xs text-gray-400 mt-1">ID: COMP001022973310</p>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col py-2">
                            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-50 text-[#007c91] border-l-4 border-[#007c91] font-semibold text-sm">
                                <LayoutDashboard className="w-4 h-4" />
                                Dashboard
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 text-sm">
                                <div className="w-4 h-4 flex items-center justify-center">
                                    <User className="w-4 h-4" />
                                </div>
                                Return to my CompTIA account
                                <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 text-sm">
                                <MessageSquare className="w-4 h-4" />
                                Feedback survey
                            </a>
                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 text-sm w-full text-left"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign out
                            </button>
                        </nav>

                        {/* Language Selector */}
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                <Globe className="w-4 h-4" />
                                Language
                            </div>
                            <div className="flex flex-col gap-1 ml-6 text-sm">
                                <div className="flex items-center gap-2 text-[#007c91]">
                                    English <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                </div>
                                <div className="text-gray-400">日本語</div>
                            </div>
                        </div>

                        {/* Pearson VUE Logo Footer */}
                        <div className="p-6 border-t border-gray-200 flex justify-center">
                            <div className="text-xl font-bold text-[#007c91] flex items-center gap-1 italic">
                                <span className="not-italic text-gray-500 text-sm font-normal mr-1">PEARSON</span>
                                VUE
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col gap-6">
                    {/* Schedule an exam */}
                    <section className="bg-white border border-gray-200 rounded shadow-sm">
                        <div className="p-6">
                            <h3 className="text-2xl font-light text-gray-600 mb-4">Schedule an exam</h3>
                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Exam catalog</p>
                                <button className="bg-[#007c91] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-[#006a7c] transition-colors">
                                    View exams
                                </button>
                            </div>

                            <div className="border-t border-gray-100 pt-4 cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <p className="text-[#007c91] text-sm font-semibold">Do you have a private access code?</p>
                                    <ChevronDown className="w-5 h-5 text-[#007c91]" />
                                </div>
                                <p className="text-[#007c91] text-xs hover:underline mt-1">What is this?</p>
                            </div>
                        </div>
                    </section>

                    {/* Upcoming Appointment */}
                    <section className="bg-white border border-gray-200 rounded shadow-sm">
                        <div className="p-6">
                            <h3 className="text-xl font-light text-gray-600 mb-4">View an upcoming test center appointment</h3>
                            <p className="text-sm text-gray-500">You do not have any appointments scheduled.</p>
                        </div>
                    </section>
                </main>

                {/* Right Sidebar */}
                <aside className="w-72 flex flex-col gap-6">
                    <div className="bg-white border border-gray-200 rounded shadow-sm p-6">
                        <h3 className="text-xl font-light text-gray-600 mb-4">My account</h3>
                        <ul className="flex flex-col gap-2">
                            {[
                                'Additional information',
                                'Preferences',
                                'Exam history',
                                'View score reports',
                                'My receipts'
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="flex items-center gap-2 text-[#007c91] text-sm hover:underline decoration-1">
                                        <ChevronRight className="w-3 h-3" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Marketplace Ad */}
                    <div className="bg-[#007c91] rounded shadow-sm overflow-hidden relative min-h-[250px] flex flex-col">
                        <div className="p-6 z-10">
                            <div className="bg-white px-2 py-1 w-fit mb-4">
                                <span className="text-[#ba0c2f] font-bold text-lg italic">CompTIA</span>
                            </div>
                            <h4 className="text-white text-3xl font-bold leading-tight mb-2">Marketplace</h4>
                            <p className="text-white text-sm opacity-90">Your source for</p>
                            <p className="text-white text-lg font-bold italic">everything you need</p>
                            <p className="text-white text-sm opacity-90">for CompTIA certification</p>
                        </div>
                        {/* Simple graphical elements to mimic the ad background */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mb-16"></div>
                        <div className="absolute top-1/2 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12"></div>
                    </div>
                </aside>
            </div>

            {/* Footer */}
            <footer className="bg-[#007c91] text-white mt-12 py-3 px-6 flex items-center justify-between text-xs font-semibold">
                <div className="flex gap-6">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline flex items-center gap-1">
                        <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                        Privacy settings
                    </a>
                </div>
                <div className="flex items-center gap-1 italic">
                    <span className="not-italic opacity-70 font-normal mr-1">PEARSON</span>
                    VUE
                </div>
            </footer>
        </div>
    );
};

export default PearsonDashboard;
