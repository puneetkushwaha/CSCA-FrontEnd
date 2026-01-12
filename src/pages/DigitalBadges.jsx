import React, { useState } from 'react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { Share2, CheckCircle, Shield, Award, ChevronDown, ChevronRight, UserCheck, Linkedin, Mail, Search, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalBadges = () => {

    const [openSection, setOpenSection] = useState('core');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const benefits = [
        {
            icon: <Share2 className="w-6 h-6 text-red-500" />,
            title: "Showcase your skills",
            desc: "Showcase your certifications and skill sets to your professional network."
        },
        {
            icon: <UserCheck className="w-6 h-6 text-red-500" />,
            title: "Validate expertise",
            desc: "Enable employers to quickly validate your skills."
        },
        {
            icon: <Linkedin className="w-6 h-6 text-red-500" />,
            title: "Share everywhere",
            desc: "Share your digital badges on any online platform: social media, email signature, resume, website, online portfolio, and more."
        },
        {
            icon: <Search className="w-6 h-6 text-red-500" />,
            title: "Find opportunities",
            desc: "Search for new job opportunities and compare salaries related to your certifications."
        },
        {
            icon: <Award className="w-6 h-6 text-red-500" />,
            title: "Personalized recommendations",
            desc: "Receive personalized certification recommendations, based on your earned credentials."
        },
        {
            icon: <Gift className="w-6 h-6 text-red-500" />,
            title: "Special offers",
            desc: "Receive special offers on additional training and certifications from CSCA."
        }
    ];

    const eligibleCerts = {
        core: {
            title: "CSCA core skills certifications",
            items: [
                "CSCA Tech+",
                "CSCA A+ (GFL)",
                "CSCA A+ CE",
                "CSCA Network+ (GFL)",
                "CSCA Network+ CE",
                "CSCA Security+ (GFL)",
                "CSCA Security+ CE"
            ]
        },
        cyber: {
            title: "CSCA cybersecurity career pathway",
            items: [
                "CSCA Cybersecurity Analyst (CySA+) CE",
                "CSCA PenTest+ CE",
                "CSCA SecurityX"
            ]
        },
        infra: {
            title: "CSCA infrastructure career pathway",
            items: [
                "CSCA Linux+",
                "CSCA Linux+ pbLPI",
                "CSCA Server+",
                "CSCA Cloud+ CE",
                "CloudNetX"
            ]
        },
        data: {
            title: "CSCA data & analytics career pathway",
            items: [
                "CSCA Data+",
                "CSCA DataSys+",
                "CSCA DataX"
            ]
        },
        professional: {
            title: "CSCA additional professional certifications",
            items: [
                "CSCA Project+",
                "CSCA Cloud Essentials"
            ]
        }
    };

    const stackableCerts = {
        cyber: {
            title: "CSCA cybersecurity career pathway",
            items: [
                { name: "CSCA Secure Infrastructure Specialist (CSIS)", components: ["CSCA A+ CE", "CSCA Network+ CE", "CSCA Security+ CE"] },
                { name: "CSCA Secure Cloud Professional (CSCP)", components: ["CSCA Security+ CE", "CSCA Cloud+ CE"] },
                { name: "CSCA Security Analytics Professional (CSAP)", components: ["CSCA Security+ CE", "CSCA Cybersecurity Analyst (CySA+) CE"] },
                { name: "CSCA Network Security Professional (CNSP)", components: ["CSCA Security+ CE", "CSCA Cybersecurity Analyst (CySA+) CE", "CSCA PenTest+ CE"] },
                { name: "CSCA Network Vulnerability Assessment Professional (CNVP)", components: ["CSCA Security+ CE", "CSCA PenTest+ CE"] },
                { name: "CSCA Security Analytics Expert (CSAE)", components: ["CSCA Security+ CE", "CSCA Cybersecurity Analyst (CySA+) CE", "CSCA SecurityX"] },
                { name: "CSCA Infrastructure Security Expert (CSIE)", components: ["CSCA Security+ CE", "CSCA Cybersecurity Analyst (CySA+) CE", "CSCA PenTest+ CE", "CSCA SecurityX"] }
            ]
        },
        infra: {
            title: "CSCA infrastructure career pathway",
            items: [
                { name: "CSCA IT Operations Specialist (CIOS)", components: ["CSCA A+ CE", "CSCA Network+ CE"] },
                { name: "CSCA Systems Support Specialist (CSSS)", components: ["CSCA A+ CE", "CSCA Linux+"] },
                { name: "CSCA Cloud Admin Professional (CCAP)", components: ["CSCA Network+ CE", "CSCA Cloud+ CE"] },
                { name: "CSCA Network Infrastructure Professional (CNIP)", components: ["CSCA Network+ CE", "CSCA Server+"] },
                { name: "CSCA Linux Network Professional (CLNP)", components: ["CSCA Network+ CE", "CSCA Linux+"] }
            ]
        }
    };

    const notEligible = [
        "CSCA Certified Document Imaging Architect (CDIA+)",
        "CSCA Convergence+",
        "CSCA Convergence Technologies Professional (CTP+)",
        "CSCA Digital Home Technology Integrator (DHTI+)",
        "CSCA e-Biz+",
        "CSCA Green IT Specialist",
        "CSCA Healthcare IT Technician",
        "CSCA Home Technology Integrator (HTI+)",
        "CSCA i-Net+",
        "CSCA Instructor+",
        "CSCA IT for Sales Specialist",
        "CSCA Mobile App Security+ (Android)",
        "CSCA Mobile App Security+ (iOS)",
        "CSCA Mobility+",
        "CSCA Mobility+ CE",
        "CSCA Printing and Document Imaging (PDI+)",
        "CSCA Radio Frequency Identification (RFID+)",
        "CSCA Storage+ Powered by SNIA",
        "CSCA Storage+ Powered by SNIA CE",
        "CSCA Strata — Network Technology Engineer",
        "CSCA Strata — PC Functionality",
        "CSCA Strata — PC Hardware Technology Engineer",
        "CSCA Strata — PC Operating System Engineer",
        "CSCA Strata — PC Technology",
        "Any and all certifications created under the Examplify umbrella"
    ];

    return (
        <div className="min-h-screen bg-black text-white font-['Inter'] relative selection:bg-red-500/30 overflow-hidden pt-20">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={30}
                    jaggednessScale={2.5}
                    opacity={0.3}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 15]}
                    ashCount={150}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Verification</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                        CSCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Digital Badges</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Digital badges are an exciting way to highlight your completed CSCA certifications on your online profiles, resume, and more.
                    </p>
                </div>

                {/* What is a digital badge? */}
                <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-white mb-6">What is a digital badge?</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                CSCA has included digital badges as an additional way for you to share and validate your CSCA certification achievements. A digital badge consists of an image and metadata that are uniquely linked to you. Together, they serve as a compelling digital showcase of your certification achievements. Clicking on your digital badge grants immediate access to validated information that features your knowledge and skills.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                        <div className="mb-4">{benefit.icon}</div>
                                        <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-gray-400">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to claim */}
                <div className="grid md:grid-cols-2 gap-12 mb-24 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    <div>
                        <h2 className="text-3xl font-black text-white mb-6">How to claim your digital badge</h2>
                        <p className="text-gray-400 mb-8">
                            When you earn your CSCA certification, you’ll receive an email letting you know that you can claim your digital badge at Credly’s website. Claiming your digital badge is quick and easy when you follow these steps:
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white shrink-0">1</div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Click the link</h4>
                                    <p className="text-sm text-gray-400">Click the link you receive via email.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white shrink-0">2</div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Create an account</h4>
                                    <p className="text-sm text-gray-400">Create an account on the Credly site and confirm your email address.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white shrink-0">3</div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Claim your badge</h4>
                                    <p className="text-sm text-gray-400">Claim your digital badge.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white shrink-0">4</div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Start sharing</h4>
                                    <p className="text-sm text-gray-400">Start sharing your achievement with your network.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 relative">
                        <h3 className="text-xl font-bold text-white mb-4">Am I eligible?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Digital badges are available for active CSCA certifications and stackable certifications that have not been retired. These include both Good-for-Life (GFL) and Continuing Education (CE) certifications.
                        </p>
                        <Link to="/faq">
                            <button className="w-full py-3 border border-white/10 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white text-gray-300 hover:text-black transition-all">
                                Read FAQs
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Eligible Certifications */}
                <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">Eligible Certifications</h2>

                    <div className="space-y-4">
                        {Object.entries(eligibleCerts).map(([key, category]) => (
                            <div key={key} className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection(key)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openSection === key ? 'rotate-180' : ''}`} />
                                </button>

                                {openSection === key && (
                                    <div className="px-6 pb-6 pt-0 border-t border-white/5">
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                                            {category.items.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stackable Certifications */}
                <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">Stackable Certifications</h2>
                    <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">Stackable certifications consist of multiple, related CSCA certifications you’ve earned.</p>

                    <div className="space-y-8">
                        {Object.entries(stackableCerts).map(([key, category]) => (
                            <div key={key}>
                                <h3 className="text-xl font-bold text-red-500 mb-6 border-l-4 border-red-500 pl-4">{category.title}</h3>
                                <div className="grid gap-4">
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                                            <h4 className="text-white font-bold mb-3">{item.name}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.components.map((comp, cIdx) => (
                                                    <span key={cIdx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                                                        {comp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Not Eligible */}
                <div className="bg-red-900/10 border border-red-500/20 rounded-[2rem] p-8 md:p-12 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                    <h2 className="text-2xl font-black text-white mb-4">Certifications NOT eligible for digital badges</h2>
                    <p className="text-gray-400 mb-8 max-w-3xl">
                        CSCA certifications that have been retired or have been removed from the market otherwise are not eligible for digital badges. If you hold one of these certifications, it may still be Good for Life (GFL) even though it is not eligible for a digital badge.
                    </p>

                    <div className="h-64 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {notEligible.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DigitalBadges;
