import React from 'react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { ShieldCheck } from 'lucide-react';

const CertificateVerification = () => {
    return (
        <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <RedGeometricBackground height={6} jaggednessScale={2.5} opacity={0.5} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10"></div>
            </div>
            <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <div className="inline-flex p-4 rounded-full bg-red-600/10 border border-red-600/30 mb-8">
                    <ShieldCheck className="w-12 h-12 text-red-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">Verify Credential</h1>
                <p className="text-xl text-white/60 mb-12 font-light">
                    Enter the credential ID to verify the authenticity of a CSCA certification.
                </p>

                <div className="max-w-md mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex">
                        <input
                            type="text"
                            placeholder="CSCA-XXXXXXXX"
                            className="block w-full px-4 py-4 bg-black border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-red-500 rounded-l-lg tracking-widest font-mono uppercase"
                        />
                        <button className="px-8 py-4 bg-red-600 text-white font-black uppercase tracking-wider rounded-r-lg hover:bg-red-700 transition-colors">
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateVerification;
