import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
    Shield, ChevronLeft, Menu, User, MessageSquare, LogOut, FileText, AlertCircle
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
            <span className="text-base font-black text-white uppercase tracking-[0.5em] animate-pulse">Loading Policies...</span>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Retrieving CSCA testing protocols</span>
        </div>
    </div>
);

const TestingPolicies = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const examName = location.state?.examName || "CSCA Certification Exam";

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white text-lg flex flex-col font-['Inter'] relative overflow-hidden testing-policies">
            <style>{`.testing-policies * {font-size: 1.125rem !important;}`}</style>
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
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">TESTING_POLICIES</span>
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
                            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Agree to CSCA <span className="text-red-600">Testing policies</span></h2>
                            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
                        </div>

                        <PrecisionPanel className="p-8 border-white/5">
                            <div className="flex items-center gap-4 border-b border-white/5 pb-8 mb-8">
                                <div className="p-3 bg-red-600/10 rounded-xl">
                                    <Shield className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black uppercase tracking-tight text-white">{examName}</h4>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-xl font-black uppercase tracking-widest text-white border-b border-white/5 pb-4">CSCA Testing Policies</h3>

                                {/* Admission Policy */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-red-500 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Admission Policy
                                    </h4>
                                    <div className="pl-6 space-y-3 text-[10px] text-gray-400 leading-relaxed">
                                        <p>We ask that you arrive at the test center 15 minutes before your scheduled appointment time. This will give you adequate time to complete the necessary sign-in procedures. If you arrive more than 15 minutes late for an exam appointment and are refused admission, this will result in the forfeiture of your exam fee.</p>

                                        <p>Please be prepared to present two forms of original (no photo copies), valid (unexpired) IDs; one form as a primary ID (government issued with name, recent recognizable photo, and signature) and one form as a secondary ID (with at least a name and signature, or name and recent recognizable photo). The first and last name on the registration must match exactly the first and last name on both of the IDs that are presented on test day. For full details visit <a href="https://www.comptia.org/en-us/resources/test-policies/candidate-id-policy/" className="text-red-500 hover:text-white underline transition-colors">https://www.comptia.org/en-us/resources/test-policies/candidate-id-policy/</a></p>

                                        <p>For candidates who are minors (17 years of age and under), please note the minor must have guardian authorization for each testing event. In addition, the minor must have a single form of photo ID (e.g school ID) and must be accompanied at the testing center by an adult who has proper government-issued ID. For full details visit <a href="https://www.comptia.org/en-us/resources/test-policies/candidate-id-policy/" className="text-red-500 hover:text-white underline transition-colors">https://www.comptia.org/en-us/resources/test-policies/candidate-id-policy/</a></p>

                                        <p>Prior to taking a CSCA exam at a test center the capture of a digital photo and signature is required.</p>

                                        <p>You will not be allowed to take any personal items with you into the testing room. This includes all bags, books not authorized by the testing program, notes, calculators, cell phones, pagers, watches and wallets.</p>

                                        <p>For additional information regarding the Aadhaar ID, please visit Aadhaar ID Policy for Pearson VUE</p>
                                    </div>
                                </div>

                                {/* Reschedule Policy */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-red-500 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Reschedule Policy
                                    </h4>
                                    <div className="pl-6 text-[10px] text-gray-400 leading-relaxed">
                                        <p>Candidates must reschedule exam appointments at least one full business day (24 hours) before the appointment via the candidate website or the call center. Rescheduling an exam less than 24 hours prior to your appointment or failure to appear for your appointment will result in the forfeiture of your exam fee. Exams scheduled with certain accommodations may take up to three days to reschedule.</p>
                                    </div>
                                </div>

                                {/* Cancellation Policy */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-red-500 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Cancellation Policy
                                    </h4>
                                    <div className="pl-6 text-[10px] text-gray-400 leading-relaxed">
                                        <p>Candidates must cancel exam appointments at least one full business day (24 hours) before the appointment via the candidate website or the call center. Cancelling an exam less than 24 hours prior to your appointment or failure to appear for your appointment will result in the forfeiture of your exam fee.</p>
                                    </div>
                                </div>

                                {/* Additional Information */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-red-500 flex items-center gap-2">
                                        <FileText className="w-4 h-4" />
                                        Additional Information
                                    </h4>
                                    <div className="pl-6 space-y-4 text-[10px] text-gray-400 leading-relaxed">
                                        <div>
                                            <p className="font-black text-white mb-2">Appointment Length</p>
                                            <p>PLEASE NOTE: The total "Appointment Length" does not reflect the actual amount of time allotted for the exam ("Length of Test"). Your "Appointment Length" may include time for non-scored sections such as tutorials, the Candidate Agreement and post exam surveys. Visit <a href="https://www.comptia.org/en-us/certifications/" className="text-red-500 hover:text-white underline transition-colors">https://www.comptia.org/en-us/certifications/</a> for the exact "Length of Test" allotted for your exam.</p>
                                        </div>

                                        <div>
                                            <p className="font-black text-white mb-2">CSCA Candidate Agreement</p>
                                            <p>For CSCA exams there is a Candidate Agreement that must be read and agreed to in the allotted time period or you will forfeit your exam fee. We strongly suggest you log into their website at <a href="https://www.comptia.org/en-us/resources/test-policies/comptia-candidate-agreement/" className="text-red-500 hover:text-white underline transition-colors">https://www.comptia.org/en-us/resources/test-policies/comptia-candidate-agreement/</a> and read this agreement prior to taking your exam.</p>
                                        </div>

                                        <div>
                                            <p className="font-black text-white mb-2">Sharing Your Certification Status</p>
                                            <p>If a 3rd party (employer, academic institution, military etc.) has paid for you to take a CSCA exam or to participate in the CSCA Continuing Education (CE) program, upon request CSCA will share your certification status and/or progress in completing your CE requirements with the 3rd party.</p>
                                        </div>
                                    </div>
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
                                    onClick={() => navigate('/select-proctor-language', { state: { examName, temporaryCountry, hasAuthorization } })}
                                    className="px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105"
                                >
                                    I Agree - Continue
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

export default TestingPolicies;
