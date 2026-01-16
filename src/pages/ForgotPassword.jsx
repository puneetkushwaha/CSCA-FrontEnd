import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Loader2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ForgotPassword() {
    const [identifier, setIdentifier] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Determine if identifier is email or phone
        const isEmail = identifier.includes('@');
        const payload = isEmail ? { email: identifier } : { phone: identifier };

        try {
            const res = await fetch(`${BASE_URL}/api/auth/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || 'Request failed');
                setIsLoading(false);
                return;
            }

            setIsSent(true);
        } catch (error) {
            console.error(error);
            alert('Server error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen w-screen relative font-['Inter'] overflow-hidden flex flex-col">
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

            <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden p-6">
                <div className="min-h-full flex flex-col items-center justify-center py-10">

                    <div className="text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="inline-flex items-center gap-3 mb-2">
                            <Shield className="w-10 h-10 text-red-600 fill-red-600/20" />
                            <span className="text-3xl font-black text-white tracking-tight uppercase">CSCA <span className="text-red-600">Secure</span></span>
                        </div>
                    </div>

                    <div className="w-full max-w-xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_80px_-20px_rgba(220,38,38,0.4)] overflow-hidden animate-in zoom-in-95 duration-500">
                        <div className="h-1 w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>

                        <div className="p-8 md:p-10">
                            {!isSent ? (
                                <>
                                    <h1 className="text-2xl font-black text-white mb-4 uppercase tracking-wider text-center">Reset Password</h1>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed text-center mb-8">
                                        Enter your email or mobile number and we'll send you instructions to reset your password.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-1.5 animate-in fade-in duration-300">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Email or Mobile Number</label>
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    required
                                                    value={identifier}
                                                    onChange={(e) => setIdentifier(e.target.value)}
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                                    placeholder="Phone number or email"
                                                />
                                                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-red-500 transition-colors" />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 hover:shadow-red-600/20 hover:-translate-y-0.5 disabled:opacity-50"
                                        >
                                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Reset Link"}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-4 space-y-6 animate-in zoom-in-95 duration-500">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600/10 border border-red-600/20 mb-2">
                                        <CheckCircle2 className="w-10 h-10 text-red-600" />
                                    </div>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">Instructions Sent</h2>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                        Check your {identifier.includes('@') ? 'email' : 'mobile messages'} for instructions on how to reset your password. If you don't receive anything within a few minutes, please check your spam folder.
                                    </p>
                                    <button
                                        onClick={() => setIsSent(false)}
                                        className="text-xs font-bold text-red-500 hover:text-white transition-colors uppercase tracking-widest"
                                    >
                                        Didn't receive instructions? Try again
                                    </button>
                                </div>
                            )}

                            <div className="mt-8 pt-6 border-t border-white/5 text-center">
                                <Link to="/login" className="inline-flex items-center gap-2 text-xs text-gray-400 font-bold hover:text-white transition-colors uppercase tracking-widest">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Login
                                </Link>
                            </div>
                        </div>
                    </div>

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
