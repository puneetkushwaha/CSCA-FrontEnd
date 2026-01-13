import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Eye, EyeOff, Mail, AlertTriangle, Loader2, Phone } from 'lucide-react';
// import RedGeometricBackground from '../components/RedGeometricBackground';
import { useAuth } from '../context/AuthContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Helper for Apple Icon
export default function Login() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'phone'
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Invalid credentials');
        setIsLoading(false);
        return;
      }

      // ✅ SAVE REAL JWT + USER using AuthContext
      login(data.user, data.token || data.access_token);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Server error');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLogin = (provider) => {
    window.location.href = `https://csca.onrender.com/api/auth/${provider}`;
  };



  return (
    // Fixed Viewport Wrapper
    <div className="h-screen w-screen relative font-['Inter'] overflow-hidden flex flex-col">

      {/* Background Layer - Commented out for debugging */}
      {/* <RedGeometricBackground
        height={30}
        jaggednessScale={2.5}
        opacity={0.4}
        planeSize={[60, 40]}
        cameraPos={[0, 0, 15]}
        ashCount={200}
        showPoints={false}
        wireframeOpacity={0.2}
      /> */}

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
            <div className="h-1 w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>

            <div className="p-8 md:p-10">

              {/* Heading */}
              <h1 className="text-2xl font-black text-white mb-6 uppercase tracking-wider text-center">Log in</h1>

              {/* Important Alert */}
              <div className="mb-6 space-y-4">
                <p className="text-sm text-gray-300 font-medium leading-relaxed text-center">
                  We are unifying your CSCA accounts under a single login.
                </p>

                <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400 leading-relaxed">
                      If you recently received an email with a temporary password, it is part of our new site launch. Ensure the sender is Verified.
                    </p>
                  </div>
                </div>
              </div>

              {/* Auth Method Toggle */}
              <div className="flex p-1 bg-white/[0.03] border border-white/10 rounded-xl mb-6">
                <button
                  onClick={() => setAuthMethod('email')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${authMethod === 'email' ? 'bg-red-600 text-white shadow-lg shadow-red-900/40' : 'text-gray-500 hover:text-white'}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Access
                </button>
                <button
                  onClick={() => setAuthMethod('phone')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${authMethod === 'phone' ? 'bg-red-600 text-white shadow-lg shadow-red-900/40' : 'text-gray-500 hover:text-white'}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Mobile Access
                </button>
              </div>

              {/* Main Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {authMethod === 'email' ? (
                  <div className="space-y-1.5 animate-in fade-in slide-in-from-left-2 duration-300">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Email</label>
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

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center pl-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Password</label>
                  </div>
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
                  <div className="flex justify-end pt-1">
                    <Link to="/forgot-password" className="text-[10px] font-bold text-red-500 hover:text-white transition-colors uppercase tracking-wider">Reset password</Link>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 hover:shadow-red-600/20 hover:-translate-y-0.5"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Log in"}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black/50 text-gray-600 uppercase text-[10px] font-black tracking-widest backdrop-blur-sm">Or log in with</span>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className="w-full h-12 flex items-center justify-center gap-3 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all text-white font-bold"
                  onClick={() => socialLogin("google")}
                >
                  <span className="text-xs uppercase tracking-widest">Continue with Google</span>
                </button>
              </div>

              <div className="pt-6 text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account? <Link to="/register" className="text-red-500 font-bold hover:text-white transition-colors transition-all pl-1">Create one</Link>
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