import React, { useState } from 'react';
import { Book, Clock, Award, ChevronRight, Search, Shield, Target, Binary, Activity, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import RedGeometricBackground from './RedGeometricBackground';

const OurCourses = () => {
    const [activeTab, setActiveTab] = useState('Certifications');

    const tabs = ['Certifications', 'Free Courses', 'Popular'];

    const allCourses = {
        'Certifications': [
            {
                title: 'BLUE TEAM LEVEL 1 (BTL1)',
                level: 'JUNIOR',
                domains: '8 domains',
                hours: 'approximately 30 hours to complete',
                certType: 'with professional certificate',
                price: '£399.00',
                desc: 'Our Junior Security Operations training and certification covers Phishing Analysis, Digital Forensics, Threat Intelligence, SIEM, and Incident Response.',
                icon: <Search className="w-10 h-10 text-white" />
            },
            {
                title: 'CERTIFIED JUNIOR DETECTION ENGINEER (CJDE)',
                level: 'JUNIOR',
                domains: '20 domains',
                hours: 'approximately 40 hours to complete',
                certType: 'with professional certificate',
                price: '£399.00',
                desc: 'Our Junior Detection Engineering training and certification covers Git workflows, Zeek, Sigma, YARA, and AI.',
                icon: <Target className="w-10 h-10 text-white" />
            },
            {
                title: 'BLUE TEAM LEVEL 2 (BTL2)',
                level: 'INTERMEDIATE',
                domains: '6 domains',
                hours: 'approximately 50 hours to complete',
                certType: 'with professional certificate',
                price: '£1,999.00',
                desc: 'Our Advanced Security Operations training and certification covers Malware Analysis, Threat Hunting, Vulnerability Management, and Advanced SIEM and Emulation.',
                icon: <Shield className="w-10 h-10 text-white" />
            },
            {
                title: 'CERTIFIED SECURITY OPERATIONS MANAGER (CSOM)',
                level: 'ADVANCED',
                domains: '6 domains',
                hours: 'approximately 30 hours to complete',
                certType: 'with professional certificate',
                price: '£1,999.00',
                desc: 'Our Security Operations Management training and certification covers how to plan, build, and mature security operations teams.',
                icon: <Activity className="w-10 h-10 text-white" />
            }
        ],
        'Free Courses': [
            {
                title: 'MENTAL HEALTH IN CYBERSECURITY',
                level: 'BEGINNER',
                domains: '6 domains',
                hours: 'approximately 1 hours to complete',
                certType: 'with certificate of completion',
                price: 'FREE',
                desc: 'Looking after your mental health is extremely important, especially in an ever-changing industry such as cybersecurity.',
                icon: <BookOpen className="w-10 h-10 text-white" />
            },
            {
                title: 'CYBERSECURITY INTERVIEW PREPARATION',
                level: 'BEGINNER',
                domains: '3 domains',
                hours: 'approximately 5 hours to complete',
                certType: 'with certificate of completion',
                price: 'FREE',
                desc: 'Prepare for cybersecurity interviews (or just test your knowledge!) with our free quiz-based course!',
                icon: <Sparkles className="w-10 h-10 text-white" />
            },
            {
                title: 'INTRODUCTION TO PENETRATION TESTING',
                level: 'BEGINNER',
                domains: '6 domains',
                hours: 'approximately 2 hours to complete',
                certType: 'with certificate of completion',
                price: 'FREE',
                desc: 'This free Introduction to Penetration Testing taster course offers a beginner-friendly overview of ethical hacking.',
                icon: <Target className="w-10 h-10 text-white" />
            },
            {
                title: 'INTRODUCTION TO VIRTUAL MACHINES',
                level: 'BEGINNER',
                domains: '4 domains',
                hours: 'approximately 5 hours to complete',
                certType: 'with certificate of completion',
                price: 'FREE',
                desc: 'This course will help you understand what virtual machines are, what hypervisors are, and how to create and configure your own VMs.',
                icon: <Binary className="w-10 h-10 text-white" />
            }
        ],
        'Popular': [
            {
                title: 'RANSOMWARE: NEGOTIATION & THREAT INTELLIGENCE',
                level: 'ADVANCED',
                domains: '8 domains',
                hours: 'approximately 55 hours to complete',
                certType: 'with certificate of completion',
                price: '£499.00',
                desc: 'This course is designed to equip professionals with the knowledge and skills to effectively handle ransomware incidents.',
                icon: <Target className="w-10 h-10 text-white" />
            },
            {
                title: 'CERTIFIED JUNIOR DETECTION ENGINEER (CJDE)',
                level: 'JUNIOR',
                domains: '20 domains',
                hours: 'approximately 40 hours to complete',
                certType: 'with professional certificate',
                price: '£399.00',
                desc: 'Our Junior Detection Engineering training and certification covers Git workflows, Zeek, Sigma, YARA, and AI.',
                icon: <Activity className="w-10 h-10 text-white" />
            },
            {
                title: 'MENTAL HEALTH IN CYBERSECURITY',
                level: 'BEGINNER',
                domains: '6 domains',
                hours: 'approximately 1 hours to complete',
                certType: 'with certificate of completion',
                price: 'FREE',
                desc: 'Looking after your mental health is extremely important, especially in an ever-changing industry such as cybersecurity.',
                icon: <BookOpen className="w-10 h-10 text-white" />
            },
            {
                title: 'CYBERSECURITY INTERVIEW PREPARATION',
                level: 'BEGINNER',
                domains: '3 domains',
                hours: 'approximately 5 hours to complete',
                certType: 'with certificate of completion',
                price: 'FREE',
                desc: 'Prepare for cybersecurity interviews (or just test your knowledge!) with our free quiz-based course!',
                icon: <Sparkles className="w-10 h-10 text-white" />
            }
        ]
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Red-Noir Glowing Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-red-900/5 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

            <RedGeometricBackground
                height={35}
                jaggednessScale={2}
                opacity={0.3}
                reverse={true}
                planeSize={[80, 60]}
                cameraPos={[0, 5, 25]}
                meshPos={[0, -15, -10]}
                ashCount={300}
                ashSize={0.035}
            />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.2) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center mb-20 space-y-10 w-full">
                    <div className="inline-flex items-center gap-3 mb-2 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <div className="h-px w-8 bg-red-600"></div>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em]">Training Excellence</span>
                        <div className="h-px w-8 bg-red-600"></div>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                        <span>OUR</span>
                        <span
                            className="text-outline-red drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '1.5px #dc2626',
                            }}
                        >
                            COURSES
                        </span>
                    </h2>

                    {/* Navigation Tabs - Red Noir Style */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 pt-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`group relative text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 pb-3
                                    ${activeTab === tab
                                        ? 'text-red-500'
                                        : 'text-white/30 hover:text-white/60'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <>
                                        {/* Premium Neon Underline */}
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 shadow-[0_0_15px_#dc2626]"></div>
                                        <div className="absolute -inset-x-4 -inset-y-1 bg-red-600/5 blur-xl -z-10 rounded-full animate-pulse"></div>
                                    </>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {allCourses[activeTab].map((course, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#080808] border border-white/5 rounded-2xl hover:border-red-600/40 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full ring-1 ring-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                        >
                            {/* Visual Header Area */}
                            <div className="relative h-44 bg-black flex items-center justify-center overflow-hidden border-b border-white/5">
                                {/* Moving Embers Background */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-red-600/10 to-transparent"></div>
                                </div>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl rounded-full group-hover:bg-red-600/20 transition-all duration-700"></div>

                                {/* Icon Container with Glassmorphism */}
                                <div className="relative z-10 p-6 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 group-hover:border-red-600/30 group-hover:bg-red-600/5 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                                    {course.icon}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col h-full space-y-5">
                                <div className="flex justify-between items-center">
                                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[9px] font-black text-white/40 group-hover:text-red-500/80 group-hover:border-red-600/20 transition-all uppercase tracking-[0.2em]">
                                        {course.level}
                                    </span>
                                </div>

                                <h3 className="text-base font-black text-white group-hover:text-red-500 transition-colors duration-300 leading-snug min-h-[48px] uppercase tracking-wide">
                                    {course.title}
                                </h3>

                                <p className="text-[12px] text-white/40 leading-relaxed font-medium line-clamp-4 group-hover:text-white/60 transition-colors">
                                    {course.desc}
                                </p>

                                {/* Feature Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>

                                {/* Stats List */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 group/stat">
                                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover/stat:border-red-600/30 transition-all">
                                            <Book className="w-3.5 h-3.5 text-white/30 group-hover/stat:text-red-500" />
                                        </div>
                                        <span className="text-[11px] text-white/50 font-bold uppercase tracking-wider">{course.domains}</span>
                                    </div>
                                    <div className="flex items-center gap-3 group/stat">
                                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover/stat:border-red-600/30 transition-all">
                                            <Clock className="w-3.5 h-3.5 text-white/30 group-hover/stat:text-red-500" />
                                        </div>
                                        <span className="text-[11px] text-white/50 font-bold uppercase tracking-wider lowercase first-letter:uppercase">{course.hours}</span>
                                    </div>
                                    <div className="flex items-center gap-3 group/stat">
                                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover/stat:border-red-600/30 transition-all">
                                            <Award className="w-3.5 h-3.5 text-white/30 group-hover/stat:text-red-500" />
                                        </div>
                                        <span className="text-[11px] text-white/50 font-bold uppercase tracking-wider">{course.certType}</span>
                                    </div>
                                </div>

                                {/* Price Footer */}
                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <div className="flex justify-between items-end">
                                        <button className="group/details flex items-center gap-2 text-[10px] font-black text-white/30 hover:text-red-500 transition-all uppercase tracking-[0.2em]">
                                            Details <ChevronRight className="w-3 h-3 group-hover/details:translate-x-1 transition-transform" />
                                        </button>
                                        <div className="text-right">
                                            <div className="text-lg font-black text-white group-hover:text-red-500 transition-colors">{course.price}</div>
                                            {course.price !== 'FREE' && (
                                                <div className="text-[8px] font-bold text-red-600/60 tracking-tight mt-0.5">Discounts Available*</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Buttons - Consistent with Navbar Style */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">

                    {/* View All Courses (Register Style) */}
                    <button className="relative group overflow-hidden">
                        <div className="px-10 py-3.5 bg-white hover:bg-black rounded-full transition-all duration-200 flex items-center gap-3">
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                            <span className="relative z-10 text-[10px] font-black text-black group-hover:text-white uppercase tracking-[0.25em] transition-colors">View All Courses</span>
                            <ArrowRight className="h-3 w-3 text-black group-hover:text-red-500 transition-colors group-hover:translate-x-1 duration-300" />
                        </div>
                        <div className="absolute inset-0 rounded-full border border-black/5 group-hover:border-red-500/50 transition-colors duration-500"></div>
                    </button>

                    {/* Corporate Training (Login Style) */}
                    <button className="relative group px-10 py-3.5 rounded-full border border-white hover:border-red-600/50 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                            <span className="text-[10px] font-black text-white uppercase tracking-[0.25em] transition-all">Corporate Training</span>
                        </div>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default OurCourses;
