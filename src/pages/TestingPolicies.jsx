import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
    Shield, ChevronLeft, Menu, User, MessageSquare, LogOut, FileText, CheckCircle2, AlertCircle
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
            <span className="text-base font-bold text-white uppercase tracking-widest animate-pulse">Loading Policies...</span>
        </div>
    </div>
);

const TestingPolicies = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const examName = location.state?.examName || "CSCA Security+ Certification Exam";
    const temporaryCountry = location.state?.temporaryCountry;
    const hasAuthorization = location.state?.hasAuthorization;

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);

    // Policy Agreement States
    const [agreedOnlinePolicy, setAgreedOnlinePolicy] = useState(false);
    const [agreedCSCAPolicy, setAgreedCSCAPolicy] = useState(false);

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
        <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden testing-policies">
            <style>{`.testing-policies * { font-family: 'Inter', sans-serif; }`}</style>
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
                    <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Policies</span>
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
                                back to previous step
                            </button>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight">Agree to <span className="text-red-600">Online Exam and CSCA Testing Policies</span></h2>
                        <div className="h-1 w-20 bg-red-600 rounded-full mb-4"></div>

                        {/* Exam Header Bar */}
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-between">
                            <h3 className="text-base font-bold text-white">{examName}</h3>
                        </div>

                        <PrecisionPanel className="p-8 border-white/5">
                            <div className="space-y-12">

                                {/* Section 1: Online Exam Policies */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-red-600/10 border border-red-600/20">
                                            <FileText className="w-5 h-5 text-red-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Online exam policies</h3>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 text-gray-300 text-sm leading-relaxed space-y-4">
                                        <p>
                                            By checking the boxes below, you agree to each term as described. To take this exam in an online environment, please agree to the following terms and conditions.
                                        </p>
                                        <p>
                                            By accessing this website you understand and agree to the terms set forth in this Candidate Agreement ("Agreement"). This Agreement is entered into by and between you as a test taker, Pearson VUE, a business of NCS Pearson, Inc., and your testing program owner ("Test Sponsor"). This Agreement represents your understanding and acceptance of Pearson VUE’s Privacy and Cookies Policy ("Privacy Policy"), Terms and Conditions, and use of cookies to support your testing experience. You also understand, acknowledge, and agree that the testing program sponsor has its own, possibly different, privacy policy.
                                        </p>

                                        <h4 className="font-bold text-white pt-2">OnVUE Data Processing</h4>
                                        <p>
                                            By providing your personal information, as described in our Privacy and Cookies Policy, you acknowledge and agree to the video and audio recording of your entire testing session and you agree to the processing of such personal information and test data by Pearson VUE and the transfer of such data to Pearson VUE’s hub server in the USA for processing and secure storage.
                                        </p>
                                        <p>
                                            If you choose to take the test through our online-proctoring platform, your face, voice, desk, and workspace will be monitored and possibly recorded for exam integrity. Any inappropriate conduct, as determined by Pearson VUE or the proctor, will be reported to the Test Sponsor and possibly to legal authorities.
                                        </p>

                                        <h4 className="font-bold text-white pt-2">Third Party Prohibition</h4>
                                        <p>If any third party is:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>detected in your physical testing space</li>
                                            <li>overheard in any form, even indirectly</li>
                                        </ul>
                                        <p className="text-red-400 font-medium">Your exam will be terminated with no score and no refund.</p>

                                        <h4 className="font-bold text-white pt-2">Limited License</h4>
                                        <p>
                                            You receive a limited license to use the OnVUE application only during your testing session. You may not record, copy, download, photograph, or reproduce the platform. You agree to use OnVUE lawfully and without interfering with others.
                                        </p>

                                        <h4 className="font-bold text-white pt-2">Facial Comparison Policy</h4>
                                        <p>
                                            Pearson VUE may use facial comparison technology to verify your identity during check-in and testing. If you do not agree to this, you must register by phone and cannot proceed with online registration.
                                        </p>

                                        <h4 className="font-bold text-white pt-2">Testing Space Verification Policy</h4>
                                        <p>
                                            You must take photos of your testing room and desk during check-in and submit them to the proctor for security verification. A mobile phone is recommended for this step.
                                        </p>
                                    </div>

                                    <label className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-all group">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={agreedOnlinePolicy}
                                                onChange={(e) => setAgreedOnlinePolicy(e.target.checked)}
                                                className="peer sr-only"
                                            />
                                            <div className="w-6 h-6 rounded-md border-2 border-gray-500 peer-checked:border-red-600 peer-checked:bg-red-600 transition-all flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">I agree to the Online Exam Policies</span>
                                            <p className="text-xs text-gray-400 mt-1">I have read and accept the terms regarding data processing, monitoring, and third-party prohibitions.</p>
                                        </div>
                                    </label>
                                </div>

                                {/* Section 2: CSCA Testing Policies */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-red-600/10 border border-red-600/20">
                                            <Shield className="w-5 h-5 text-red-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">CSCA Testing Policies</h3>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 text-gray-300 text-sm leading-relaxed space-y-4">
                                        <h4 className="font-bold text-white">Admission Policy</h4>

                                        <div className="pl-0 space-y-2">
                                            <p className="font-bold text-gray-200">Before exam day</p>
                                            <p>Test your system - Use the same device, room, and network planned for exam day.</p>
                                            <p className="text-gray-400 text-xs">Recommended: Personal computer with webcam, No office networks or VPN, Stable high-speed internet.</p>
                                        </div>

                                        <div className="pl-0 space-y-2 pt-2">
                                            <p className="font-bold text-gray-200">ID Requirements</p>
                                            <p>One valid, unexpired, government-issued ID with name, signature, and photo matching the registration name.</p>
                                            <p className="text-xs text-gray-400 font-bold">Acceptable IDs:</p>
                                            <ul className="list-disc pl-5 text-xs text-gray-400">
                                                <li>Passport</li>
                                                <li>Driver’s license</li>
                                                <li>National/local ID card</li>
                                                <li>Residency/visa card</li>
                                                <li>Non-US military ID</li>
                                            </ul>
                                            <p className="text-xs text-gray-400 font-bold">Unacceptable IDs:</p>
                                            <ul className="list-disc pl-5 text-xs text-gray-400">
                                                <li>Expired IDs</li>
                                                <li>Renewal forms</li>
                                                <li>Restricted IDs that cannot legally be photographed</li>
                                            </ul>
                                        </div>

                                        <div className="pl-0 space-y-2 pt-2">
                                            <p className="font-bold text-gray-200">Prepare your testing space</p>
                                            <ul className="list-disc pl-5 text-xs text-gray-400">
                                                <li>Quiet, isolated, and well-lit</li>
                                                <li>Avoid backlighting</li>
                                                <li>Four pictures required during check-in</li>
                                                <li>Only one monitor allowed</li>
                                                <li>Desk must be completely clear</li>
                                            </ul>
                                            <p className="text-xs italic">For complete details, please review CSCA’s online-proctored exam policies.</p>
                                        </div>

                                        <div className="pl-0 space-y-2 pt-2">
                                            <p className="font-bold text-gray-200">On exam day</p>
                                            <ul className="list-disc pl-5 text-xs text-gray-400">
                                                <li>Log into your CSCA Exam Portal 30 minutes early</li>
                                                <li>Early login does not guarantee early start</li>
                                                <li>Being more than 15 minutes late may result in loss of exam and fee</li>
                                            </ul>
                                        </div>

                                        <div className="pl-0 space-y-2 pt-2">
                                            <p className="font-bold text-gray-200">Check-in steps</p>
                                            <ul className="list-disc pl-5 text-xs text-gray-400">
                                                <li>Click "Check in to start exam" on your exam email Or log into your CSCA Exam Portal</li>
                                                <li>Navigate to Manage Exams → My Exams</li>
                                                <li>Follow on-screen instructions for check-in</li>
                                            </ul>
                                        </div>

                                        <div className="pl-0 space-y-2 pt-2">
                                            <p className="font-bold text-gray-200">Exam rules during testing</p>
                                            <ul className="list-disc pl-5 text-xs text-gray-400">
                                                <li>No unauthorized items (phones, watches, notes)</li>
                                                <li>No other person may appear or be heard</li>
                                                <li>No speaking aloud</li>
                                            </ul>
                                        </div>

                                        <div className="pt-2">
                                            <p className="font-bold text-white">Reschedule Policy (Updated for CSCA Website)</p>
                                            <p>To reschedule your online-proctored exam, log in to your CSCA Exam Portal account and use the reschedule option provided for your appointment before the scheduled start time. Failure to do so results in forfeiture of your exam fee.</p>
                                        </div>

                                        <div className="pt-2">
                                            <p className="font-bold text-white">Cancellation Policy (Updated for CSCA Website)</p>
                                            <p>To cancel your exam, log in to your CSCA Exam Portal account and cancel before the scheduled start time. Failure to cancel results in forfeiture of your exam fee.</p>
                                        </div>

                                        <div className="pt-2">
                                            <p className="font-bold text-white">Additional Information</p>
                                            <ul className="list-disc pl-5 text-xs text-gray-400 mt-1">
                                                <li>CSCA does not allow breaks during online exams</li>
                                                <li>Leaving the computer ends the session and forfeits the fee</li>
                                                <li>Water in a glass is allowed</li>
                                                <li>Eating, smoking, and chewing gum are not allowed</li>
                                            </ul>
                                        </div>

                                        <div className="pt-2">
                                            <p className="font-bold text-white">Appointment Length</p>
                                            <p>The total "Appointment Length" may include tutorials, agreements, and end-of-exam surveys. Visit <a href="https://csca.org/certifications" className="text-red-500 underline">https://csca.org/certifications</a> to view exam duration.</p>
                                        </div>

                                        <div className="pt-2">
                                            <p className="font-bold text-white">CSCA Candidate Agreement</p>
                                            <p>For CSCA exams, you must read and accept the Candidate Agreement within the allotted time or your exam will be forfeited. Read here: <a href="https://csca.org/test-policies/candidate-agreement" className="text-red-500 underline">https://csca.org/test-policies/candidate-agreement</a></p>
                                        </div>

                                        <div className="pt-2">
                                            <p className="font-bold text-white">Sharing Your Certification Status</p>
                                            <p>If a third party (employer, institute, military, etc.) paid for your CSCA exam or CE program, CSCA may share your certification status and CE progress with them upon request.</p>
                                        </div>
                                    </div>

                                    <label className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-all group">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={agreedCSCAPolicy}
                                                onChange={(e) => setAgreedCSCAPolicy(e.target.checked)}
                                                className="peer sr-only"
                                            />
                                            <div className="w-6 h-6 rounded-md border-2 border-gray-500 peer-checked:border-red-600 peer-checked:bg-red-600 transition-all flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">I agree to the CSCA Testing Policies</span>
                                            <p className="text-xs text-gray-400 mt-1">I have read and accept all admission, rescheduling, cancellation, and exam day rules.</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="px-10 py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    Previous
                                </button>
                                <button
                                    disabled={!agreedOnlinePolicy || !agreedCSCAPolicy}
                                    onClick={() => navigate('/select-proctor-language', { state: { examName, temporaryCountry, hasAuthorization } })}
                                    className={`px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] ${(!agreedOnlinePolicy || !agreedCSCAPolicy) ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50 shadow-none' : 'bg-red-600 text-white hover:scale-105'}`}
                                >
                                    I Agree - Continue
                                </button>
                            </div>
                        </PrecisionPanel>

                        {/* Footer Sub-links */}
                        <footer className="pt-20 pb-10 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-700 border-t border-white/5">
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

export default TestingPolicies;
