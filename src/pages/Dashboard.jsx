import React from 'react';
import { Home, Book, Award, Settings, LogOut, User, Shield } from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { logout, user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Dashboard', path: '/dashboard', icon: Home },
        { name: 'My Courses', path: '/dashboard/courses', icon: Book },
        { name: 'Certifications', path: '/dashboard/certifications', icon: Award },
        { name: 'Exam Center', path: '/dashboard/exam', icon: Shield },
        { name: 'Settings', path: '/dashboard/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-slate-900 border-r border-slate-800">
                <div className="p-6">
                    <span className="text-xl font-bold text-white tracking-wider">CSCA ACADEMY</span>
                </div>
                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive(link.path)
                                    ? 'text-white bg-blue-600 shadow-lg shadow-blue-900/20'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-slate-800">
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-white transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen overflow-y-auto">
                <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 sticky top-0 z-20">
                    <h1 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
                        {navLinks.find(l => isActive(l.path))?.name || 'Overview'}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200">
                            <User className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 leading-none">John Doe</span>
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-1">Student Account</span>
                        </div>
                    </div>
                </header>

                <div className="flex-grow">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
