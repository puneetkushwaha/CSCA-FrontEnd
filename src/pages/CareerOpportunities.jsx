import React from 'react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const CareerOpportunities = () => {
    return (
        <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <RedGeometricBackground height={6} jaggednessScale={2.5} opacity={0.5} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10"></div>
            </div>
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Career & Opportunities</h1>
                <div className="h-1 w-20 bg-red-600 mb-8"></div>
                <p className="text-xl text-white/60 max-w-2xl font-light">
                    Explore job roles, internships, and hiring partner opportunities mapped to CSCA certifications.
                </p>
            </div>
        </div>
    );
};

export default CareerOpportunities;
