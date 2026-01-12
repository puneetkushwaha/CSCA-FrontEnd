import React from 'react';
import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Progress</h3>
                    <p className="text-3xl font-bold text-slate-900">12%</p>
                    <div className="w-full bg-slate-100 rounded-full h-2 mt-4">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Enrolled Courses</h3>
                    <p className="text-3xl font-bold text-slate-900">1</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Certifications</h3>
                    <p className="text-3xl font-bold text-slate-900">0</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center py-16">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pick up where you left off</h3>
                <p className="text-slate-500 mb-6">No active sessions found. Start learning today!</p>
                <Link to="/programs" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                    Browse Catalog
                </Link>
            </div>
        </div>
    );
};

export default DashboardHome;
