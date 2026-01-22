import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Globe, Clock, Ruler, Save, Loader2, ChevronLeft, ArrowRight, Info } from 'lucide-react';
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
            <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] animate-pulse">Initializing Portal...</span>
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Please wait while we sync with the registry</span>
        </div>
    </div>
);

const languages = [
    "English", "Hindi", "Spanish", "French", "German", "Japanese", "Chinese (Simplified)",
    "Chinese (Traditional)", "Portuguese", "Russian", "Arabic", "Korean", "Italian",
    "Dutch", "Turkish", "Polish", "Vietnamese", "Thai", "Indonesian"
];

const timezones = [
    "(UTC-12:00) International Date Line West",
    "(UTC-11:00) Coordinated Universal Time-11",
    "(UTC-10:00) Hawaii",
    "(UTC-09:00) Alaska",
    "(UTC-08:00) Pacific Time (US & Canada)",
    "(UTC-07:00) Mountain Time (US & Canada)",
    "(UTC-06:00) Central Time (US & Canada)",
    "(UTC-05:00) Eastern Time (US & Canada)",
    "(UTC-04:00) Atlantic Time (Canada)",
    "(UTC-03:00) Buenos Aires",
    "(UTC+00:00) Dublin, Edinburgh, Lisbon, London",
    "(UTC+01:00) Amsterdam, Berlin, Rome, Vienna",
    "(UTC+02:00) Cairo",
    "(UTC+03:00) Moscow, St. Petersburg, Volgograd",
    "(UTC+04:00) Abu Dhabi, Muscat",
    "(UTC+05:00) Islamabad, Karachi",
    "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    "(UTC+06:00) Almaty, Novosibirsk",
    "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    "(UTC+09:00) Osaka, Sapporo, Tokyo",
    "(UTC+10:00) Brisbane",
    "(UTC+11:00) Vladivostok",
    "(UTC+12:00) Auckland, Wellington"
];

const RegistryPreferences = () => {
    const { user, token, updateUser } = useAuth();
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [loading, setLoading] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [prefs, setPrefs] = useState({
        correspondenceLanguage: user?.correspondenceLanguage || 'English',
        timezone: user?.timezone || '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
        timeDisplay: user?.timeDisplay || '12 hour',
        distanceDisplay: user?.distanceDisplay || 'kilometers'
    });

    React.useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSave = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/users/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(prefs),
            });

            if (!res.ok) {
                const data = await res.json();
                alert(data.message || 'Update failed');
                return;
            }

            updateUser(prefs);
            alert('Preferences synchronized with operational registry.');
            navigate('/pearson-dashboard');
        } catch (err) {
            console.error(err);
            alert('Server error while saving preferences');
        } finally {
            setLoading(false);
        }
    };

    if (isPageLoading) return <GlobalPageLoader />;

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter'] relative overflow-hidden flex flex-col items-center justify-center p-8">
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

            <div className="relative z-10 max-w-[1000px] w-full">
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-3 mb-6 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
                        <Shield className="w-5 h-5 text-red-600" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">System_Registry_v4.2</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-4">
                        Registry <span className="text-red-600">Preferences</span>
                    </h1>
                </div>

                <PrecisionPanel className="p-12 border-white/10">
                    <div className="space-y-12">
                        {/* communication section */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                                <Globe className="w-6 h-6 text-red-600" />
                                <h2 className="text-2xl font-black italic uppercase tracking-tight">Communication</h2>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] pl-1">
                                    Correspondence Language <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={prefs.correspondenceLanguage}
                                    onChange={(e) => setPrefs({ ...prefs, correspondenceLanguage: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-red-600 transition-all font-bold appearance-none cursor-pointer"
                                >
                                    {languages.map(lang => (
                                        <option key={lang} value={lang} className="bg-[#0a0a0a]">{lang}</option>
                                    ))}
                                </select>
                            </div>
                        </section>

                        {/* time and distance section */}
                        <section className="space-y-10">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                                <Clock className="w-6 h-6 text-red-600" />
                                <h2 className="text-2xl font-black italic uppercase tracking-tight">Time and Distance</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4 md:col-span-2">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] pl-1">
                                        Time Zone <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={prefs.timezone}
                                        onChange={(e) => setPrefs({ ...prefs, timezone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-red-600 transition-all font-bold appearance-none cursor-pointer"
                                    >
                                        {timezones.map(tz => (
                                            <option key={tz} value={tz} className="bg-[#0a0a0a]">{tz}</option>
                                        ))}
                                    </select>
                                    <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest pl-1 mt-2">
                                        Only applies if you are taking an exam at your home or office
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] pl-1">
                                        Time Display
                                    </label>
                                    <div className="flex gap-4">
                                        {['12 hour', '24 hour'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setPrefs({ ...prefs, timeDisplay: opt })}
                                                className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${prefs.timeDisplay === opt
                                                    ? 'bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]'
                                                    : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'
                                                    }`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] pl-1">
                                        Distance Display
                                    </label>
                                    <div className="flex gap-4">
                                        {['miles', 'kilometers'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setPrefs({ ...prefs, distanceDisplay: opt })}
                                                className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${prefs.distanceDisplay === opt
                                                    ? 'bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]'
                                                    : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'
                                                    }`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* action footer */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all group/back"
                            >
                                <ChevronLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
                                Discard Changes
                            </button>

                            <button
                                onClick={handleSave}
                                disabled={loading}
                                className="px-16 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-full transition-all duration-500 shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95 flex items-center gap-3 disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Syncing Registry...
                                    </>
                                ) : (
                                    <>
                                        Save Operational Prefs
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </PrecisionPanel>

                <div className="mt-12 flex justify-center items-center gap-8 opacity-40">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-400">Registry_Encryption_Active</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistryPreferences;
