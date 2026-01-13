import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Eye, EyeOff, Mail, Loader2, Phone } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';


const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'phone'
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });

    const socialLogin = (provider) => {
        window.location.href = `https://csca.onrender.com/api/auth/${provider}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        try {
            const res = await fetch(`${BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                navigate('/login');
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Server error');
        } finally {
            setIsLoading(false);
        }


    };

    return (
        // Fixed Viewport Wrapper
        <div className="h-screen w-screen relative font-['Inter'] overflow-hidden flex flex-col">

            {/* Background Layer - Preserving the Aggressive Mountain */}
            <RedGeometricBackground
                height={30}
                jaggednessScale={2.5}
                opacity={0.4}
                planeSize={[60, 40]}
                cameraPos={[0, 0, 15]}
                ashCount={200}
                showPoints={false}
                wireframeOpacity={0.2}
            />

            {/* Main Scrollable Area */}
            <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden p-6">

                <div className="min-h-full flex flex-col items-center justify-center py-10">

                    {/* Logo / Header */}
                    <div className="text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="inline-flex items-center gap-3 mb-2">
                            <Shield className="w-10 h-10 text-red-600 fill-red-600/20" />
                            <span className="text-3xl font-black text-white tracking-tight uppercase">CSCA <span className="text-red-600">Secure</span></span>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="w-full max-w-xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_80px_-20px_rgba(220,38,38,0.4)] overflow-hidden animate-in zoom-in-95 duration-500">

                        {/* Red Accent Line */}
                        <div className="h-1 w-full bg-gradient-to-r from-red-900 via-red-500 to-red-900"></div>

                        <div className="p-8 md:p-10">

                            {/* Heading */}
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-black text-white mb-2 uppercase tracking-wider">Create Account</h1>
                                <p className="text-sm text-gray-400 font-medium tracking-wide">Join the elite cybersecurity network.</p>
                            </div>

                            {/* Auth Method Toggle */}
                            <div className="flex p-1 bg-white/[0.03] border border-white/10 rounded-xl mb-6">
                                <button
                                    onClick={() => setAuthMethod('email')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${authMethod === 'email' ? 'bg-red-600 text-white shadow-lg shadow-red-900/40' : 'text-gray-500 hover:text-white'}`}
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    Email Signup
                                </button>
                                <button
                                    onClick={() => setAuthMethod('phone')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${authMethod === 'phone' ? 'bg-red-600 text-white shadow-lg shadow-red-900/40' : 'text-gray-500 hover:text-white'}`}
                                >
                                    <Phone className="w-3.5 h-3.5" />
                                    Mobile Signup
                                </button>
                            </div>

                            {/* Main Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Name Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">First Name</label>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                                placeholder="First Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Last Name</label>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {authMethod === 'email' ? (
                                    <div className="space-y-1.5 animate-in fade-in slide-in-from-left-2 duration-300">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                                placeholder="name@company.com"
                                            />
                                            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-red-500 transition-colors" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-1.5 animate-in fade-in slide-in-from-right-2 duration-300">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Mobile Number</label>
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                                placeholder="+91 00000 00000"
                                            />
                                            <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-red-500 transition-colors" />
                                        </div>
                                    </div>
                                )}

                                {/* Password */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Password</label>
                                    <div className="relative group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 pr-12 font-bold"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-3 pt-1">
                                    <div className="relative flex items-center h-5">
                                        <input type="checkbox" className="w-4 h-4 rounded bg-white/[0.05] border-white/10 checked:bg-red-600 checked:border-red-600 transition-all focus:ring-0 focus:ring-offset-0 cursor-pointer" />
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-wide">
                                        I agree to the <Link to="/terms" className="text-white hover:text-red-500 transition-colors underline decoration-white/30 decoration-1 underline-offset-4 hover:decoration-red-500">Terms</Link> & <Link to="/privacy" className="text-white hover:text-red-500 transition-colors underline decoration-white/30 decoration-1 underline-offset-4 hover:decoration-red-500">Privacy Policy</Link>.
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 hover:shadow-red-600/20 hover:-translate-y-0.5"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Initiate Profile"}
                                </button>
                            </form>

                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-white/5"></div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    className="w-full h-12 flex items-center justify-center gap-3 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all text-white font-bold group"
                                    onClick={() => socialLogin("google")}
                                >
                                    <span className="text-xs uppercase tracking-widest">Continue with</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="white">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                </button>
                            </div>

                            {/* Login Link */}
                            <div className="mt-8 text-center pt-2 border-t border-white/5">
                                <p className="text-xs text-gray-500 font-medium mt-4">
                                    Already have an account? <Link to="/login" className="text-white font-bold hover:text-red-500 transition-colors uppercase tracking-wider ml-1">Log In</Link>
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
                        <Link to="/partners" className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Partners</Link>
                        <Link to="/legal" className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Legal</Link>
                        <Link to="/contact" className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Contact</Link>
                        <Link to="/privacy" className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}