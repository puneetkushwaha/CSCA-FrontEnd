import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Info, ArrowRight, ChevronLeft, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import RedGeometricBackground from '../components/RedGeometricBackground';

const PrecisionPanel = ({ children, className = "" }) => (
    <div className={`relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-700 ${className}`}>
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="relative z-10">{children}</div>
    </div>
);

const AdditionalInfo = () => {
    const { user, token, updateUser } = useAuth();
    const navigate = useNavigate();
    const [isIndian, setIsIndian] = useState(user?.isIndian === true ? 'Yes' : (user?.isIndian === false ? 'No' : null));
    const [loading, setLoading] = useState(false);
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const handleSave = async () => {
        if (!isIndian) return;
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/users/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    isIndian: isIndian === 'Yes',
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                alert(data.message || 'Update failed');
                return;
            }

            // Update local context
            updateUser({ isIndian: isIndian === 'Yes' });

            // Navigate to Dashboard or next step
            navigate('/pearson-dashboard');
        } catch (err) {
            console.error(err);
            alert('Server error while saving data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Inter'] relative overflow-hidden flex flex-col items-center justify-center p-8">
            {/* Background Layer */}
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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            </div>

            <div className="relative z-10 max-w-[900px] w-full">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-3 mb-6 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
                        <Shield className="w-5 h-5 text-red-600" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">CompTIA_Testing_Registry</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-4">
                        Additional <span className="text-red-600">Information</span>
                    </h1>
                </div>

                <PrecisionPanel className="p-12 border-white/10 shadow-[0_0_80px_rgba(220,38,38,0.15)]">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-xs font-black text-red-500 uppercase tracking-[0.3em] flex items-center gap-2">
                                <Info className="w-4 h-4" /> Required Registry Input
                            </h3>
                            <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-2xl">
                                The following information is being collected on behalf of CompTIA Testing. Enter information exactly as it appears on your official legal identification.
                            </p>
                        </div>

                        {/* Question Block */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Shield className="w-24 h-24 text-white" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <p className="text-xl font-black text-white italic tracking-tight uppercase">
                                    Are you an Indian Citizen and at least 18 years of age? <span className="text-red-500">*</span>
                                </p>

                                <div className="flex flex-col md:flex-row gap-6">
                                    {['Yes', 'No'].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => setIsIndian(option)}
                                            className={`flex-1 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 border relative overflow-hidden group/opt ${isIndian === option
                                                ? 'bg-red-600 border-red-500 text-white shadow-[0_0_40px_rgba(220,38,38,0.4)] scale-[1.02]'
                                                : 'bg-white/5 border-white/10 text-gray-500 hover:border-red-600/30 hover:text-white'
                                                }`}
                                        >
                                            <div className="relative z-10 flex items-center justify-center gap-3">
                                                <div className={`w-3 h-3 rounded-full border-2 transition-all ${isIndian === option ? 'bg-white border-white' : 'border-gray-600 grupo-hover/opt:border-red-500'}`}></div>
                                                {option}
                                            </div>
                                            {isIndian !== option && (
                                                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover/opt:opacity-100 transition-opacity"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <div className="flex gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                            <Info className="w-5 h-5 text-gray-500 shrink-0" />
                            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                                Please contact our customer service team for any information that cannot be updated online. Operational registries are legally binding.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all group/back"
                            >
                                <ChevronLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
                                Cancel Operation
                            </button>

                            <button
                                onClick={handleSave}
                                disabled={!isIndian || loading}
                                className={`px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-3 group/save ${isIndian && !loading
                                    ? 'bg-red-600 text-white shadow-[0_0_50px_rgba(220,38,38,0.4)] hover:shadow-[0_0_70px_rgba(220,38,38,0.6)] hover:scale-105 active:scale-95'
                                    : 'bg-white/5 text-gray-700 cursor-not-allowed border border-white/5'
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        SYNCING REGISTRY...
                                    </>
                                ) : (
                                    <>
                                        Save and Continue
                                        <ArrowRight className="w-4 h-4 group-hover/save:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </PrecisionPanel>

                {/* Secure Status Footer */}
                <div className="mt-12 flex justify-center items-center gap-8 opacity-40">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-400">ENCRYPTION_ACTIVE</span>
                    </div>
                    <div className="h-4 w-px bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-400 italic">PEARSON_NODE_CSCA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfo;
