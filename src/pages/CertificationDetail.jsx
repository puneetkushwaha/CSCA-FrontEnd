import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Clock, Shield, ShieldCheck, BookOpen, CheckCircle, ExternalLink,
    Download, PlayCircle, Users, Award, Briefcase,
    Target, Zap, Globe, FileCheck, Lock
} from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const CertificationDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const certData = {
        'cysa': {
            id: 'CS0-003',
            title: 'CySA+',
            subtitle: 'CSCA Cybersecurity Analyst',
            description: "CSCA Cybersecurity Analyst (CySA+) is the premier certification for cyber professionals tasked with incident detection, prevention, and response through continuous security monitoring. It validates a tech professional's expertise in incident response and vulnerability management processes, emphasizing the critical communication skills necessary for effective security analysis and compliance.",
            price: '$392.00',
            currency: 'USD',
            level: 'Intermediate',
            experience: '4+ Years Recommended',
            time: '165 Minutes',
            access: 'Lifetime Certification',
            role: 'Security Analyst',
            stats: {
                students: '30,000+',
                countries: 'Global',
                community: 'CSCA'
            },
            skills: [
                'Security Operations', 'Threat Hunting', 'Vulnerability Management',
                'Incident Response', 'Threat Intelligence', 'Compliance',
                'Application Security', 'Digital Forensics', 'Log Analysis'
            ],
            modules: [
                { title: 'Security Operations', desc: 'System & network architecture, malicious activity indicators, tools & techniques (33%)' },
                { title: 'Vulnerability Management', desc: 'Scanning, prioritization, mitigation controls, and response (30%)' },
                { title: 'Incident Response Management', desc: 'Attack methodologies, detection, analysis, containment, and recovery (20%)' },
                { title: 'Reporting & Communication', desc: 'Compliance reporting, metrics, KPIs, and stakeholder communication (17%)' }
            ],
            examDetails: {
                version: 'V3 (CS0-003)',
                launchDate: 'June 6, 2023',
                questions: 'Max 85 (Multiple choice & Performance-based)',
                passingScore: '750 (Scale of 100-900)',
                languages: 'English, Japanese, Portuguese, Spanish',
                retirement: 'Estimated 2026'
            },
            dodRoles: [
                'All Source Analyst', 'Warning Analyst', 'Forensics Analyst',
                'Cyber Defense Forensics Analyst', 'Cyber Crime Investigator',
                'Systems Security Analyst', 'Cyber Defense Analyst',
                'Cyber Defense Incident Responder', 'Vulnerability Assessment Analyst',
                'Security Control Assessor'
            ]
        },
        'btl1': {
            id: 'BTL1',
            title: 'BLUE TEAM LEVEL 1',
            subtitle: 'JUNIOR SECURITY OPERATIONS CERTIFICATION',
            description: "BTL1 is our leading certification, designed to train technical defenders who can defend networks and respond to real-world cyber incidents. The skills and tools you learn apply directly to security roles and are used by defenders worldwide.",
            price: '£399.00',
            currency: 'GBP',
            level: 'Level 1 (Junior)',
            experience: '0-2 Years Experience',
            time: 'Approx 30 Hours',
            access: '4 Months On-Demand',
            role: 'Security Analyst',
            stats: {
                students: '10,000+',
                countries: '80+',
                community: '100,000+'
            },
            skills: [
                'Phishing Analysis', 'Digital Forensics', 'SIEM',
                'Incident Response', 'Threat Intelligence', 'Network Analysis',
                'Splunk', 'Wireshark', 'Autopsy', 'Volatility',
                'DeepBlueCLI', 'CyberChef', 'Suricata', 'KAPE'
            ],
            modules: [
                { title: 'Security Fundamentals', desc: 'Core networking and security concepts.' },
                { title: 'Phishing Analysis', desc: 'Analyzing malicious emails and attachments.' },
                { title: 'Digital Forensics', desc: 'Disk and memory forensics investigation.' },
                { title: 'Network Security', desc: 'Traffic analysis and intrusion detection.' },
                { title: 'Threat Intelligence', desc: 'Collecting and applying threat data.' },
                { title: 'Incident Response', desc: 'Handling live security incidents.' }
            ],
            niceMapping: {
                role: 'Cyber Defense Analyst',
                distribution: [
                    { name: 'Topics', val: '60%' },
                    { name: 'Knowledge', val: '60%' },
                    { name: 'Ability', val: '67%' }
                ]
            }
        },
        'btl2': {
            id: 'BTL2',
            title: 'BLUE TEAM LEVEL 2',
            subtitle: 'ADVANCED SECURITY OPERATIONS CERTIFICATION',
            description: "BTL2 is the advanced follow-up to BTL1, focusing on advanced intrusion detection, malware analysis, and threat hunting. Designed for experienced defenders looking to master their craft and take on senior roles.",
            price: '£1999.00',
            currency: 'GBP',
            level: 'Level 2 (Senior)',
            experience: '2-5 Years Experience',
            time: 'Approx 120 Hours',
            access: '12 Months On-Demand',
            role: 'Senior SOC Analyst',
            stats: {
                students: '2,500+',
                countries: '60+',
                community: '50,000+'
            },
            skills: [
                'Advanced Malware Analysis', 'Reverse Engineering', 'Threat Hunting',
                'Advanced Forensics', 'Memory Analysis', 'C2 Frameworks',
                'Ghidra', 'x64dbg', 'Remnux', 'ELK Stack',
                'Velociraptor', 'Sysmon', 'YARA', 'Sigma'
            ],
            modules: [
                { title: 'Advanced Malware Analysis', desc: 'Static and dynamic analysis of complex malware.' },
                { title: 'Threat Hunting', desc: 'Proactive searching for threats in networks.' },
                { title: 'Advanced Incident Response', desc: 'Large-scale compromise remediation.' },
                { title: 'Vulnerability Management', desc: 'Identifying and mitigating enterprise risks.' }
            ],
            niceMapping: {
                role: 'Vulnerability Assessment Analyst',
                distribution: [
                    { name: 'Topics', val: '80%' },
                    { name: 'Knowledge', val: '85%' },
                    { name: 'Ability', val: '90%' }
                ]
            }
        }
    };

    // Default to 'cysa' if ID not found, ensuring new content is visible
    const cert = certData[id?.toLowerCase()] || certData['cysa'];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-500/30 font-['Inter'] relative">
            {/* Extended Background Layer */}
            <div className="absolute top-0 left-0 right-0 h-[1200px] z-0 pointer-events-none">
                <RedGeometricBackground
                    height={8}
                    jaggednessScale={2}
                    opacity={0.6}
                    planeSize={[50, 40]} // Increased depth
                    cameraPos={[0, 0, 10]}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
            </div>

            {/* Hero Section */}
            <div className="relative pt-48 pb-20 overflow-hidden border-b border-white/5 z-10">
                {/* Lighter gradient for hero visibility */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/40 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <ShieldCheck className="h-3 w-3" />
                        {cert.level}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase">
                        {cert.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/40 font-bold uppercase tracking-widest max-w-2xl mb-8">
                        {cert.subtitle}
                    </p>

                    {cert.examDetails && (
                        <div className="flex flex-wrap gap-4 lg:hidden justify-center text-xs font-bold text-gray-500">
                            <span className="bg-white/5 px-3 py-1 rounded">Code: {cert.id}</span>
                            <span className="bg-white/5 px-3 py-1 rounded">Ver: {cert.examDetails.version}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-16 pt-0">

                        {/* Description */}
                        <section className="animate-in slide-in-from-bottom-8 duration-700 delay-100">
                            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-red-600"></span>
                                Overview
                            </h2>
                            <p className="text-lg leading-relaxed text-white/70 font-medium">
                                {cert.description}
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/5">
                                {cert.examDetails ? (
                                    <>
                                        <div>
                                            <div className="text-2xl font-black text-white mb-1">{cert.examDetails.passingScore.split(' ')[0]}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Passing Score</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-white mb-1">{cert.time.split(' ')[0]}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Duration (Mins)</div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="text-xl font-black text-white mb-1">{cert.examDetails.questions.split(' ')[1]}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Max Questions</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <div className="text-3xl font-black text-white mb-1">{cert.stats.students}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Students Certified</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black text-white mb-1">{cert.stats.countries}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Countries</div>
                                        </div>
                                        <div className="col-span-2 md:col-span-2">
                                            <div className="text-3xl font-black text-white mb-1">{cert.stats.community}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Community Members</div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="animate-in slide-in-from-bottom-8 duration-700 delay-200">
                            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-red-600"></span>
                                Skills You'll Learn
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {cert.skills.map((skill, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wide rounded-md hover:bg-white/10 hover:border-red-500/30 transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Syllabus / Objectives */}
                        <section className="animate-in slide-in-from-bottom-8 duration-700 delay-300">
                            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-red-600"></span>
                                {cert.examDetails ? 'Exam Objectives' : 'Course Syllabus'}
                            </h2>
                            <div className="grid gap-4">
                                {cert.modules.map((mod, i) => (
                                    <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 hover:border-red-500/20 rounded-xl transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 font-bold text-xs">{i + 1}</div>
                                            <div>
                                                <h3 className="text-sm font-black text-white uppercase tracking-wider group-hover:text-red-500 transition-colors">{mod.title}</h3>
                                                <p className="text-xs text-white/40 mt-2 font-medium leading-relaxed">{mod.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Exam Details (Specifically for CySA+) */}
                        {cert.examDetails && (
                            <section className="animate-in slide-in-from-bottom-8 duration-700 delay-300">
                                <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-red-600"></span>
                                    Exam Specifications
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Exam Code</h4>
                                        <p className="text-white font-bold">{cert.id}</p>
                                    </div>
                                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Launch Date</h4>
                                        <p className="text-white font-bold">{cert.examDetails.launchDate}</p>
                                    </div>
                                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Languages</h4>
                                        <p className="text-white font-bold">{cert.examDetails.languages}</p>
                                    </div>
                                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Retirement</h4>
                                        <p className="text-white font-bold">{cert.examDetails.retirement}</p>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Career Mapping / DoD Roles */}
                        <section className="animate-in slide-in-from-bottom-8 duration-700 delay-300">
                            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-red-600"></span>
                                Career Mapping
                            </h2>

                            {cert.dodRoles ? (
                                <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Briefcase className="w-24 h-24 text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">DoD 8140 Work Roles</div>
                                        <div className="flex flex-wrap gap-2">
                                            {cert.dodRoles.map((role, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-black/40 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-wide rounded hover:text-white transition-colors">
                                                    {role}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Briefcase className="w-24 h-24 text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-2">NICE Framework Mapping</div>
                                        <div className="text-2xl font-black text-white uppercase tracking-tight mb-8">{cert.niceMapping?.role}</div>

                                        <div className="grid grid-cols-3 gap-4">
                                            {cert.niceMapping?.distribution.map((item, i) => (
                                                <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5 text-center">
                                                    <div className="text-xl font-black text-red-500">{item.val}</div>
                                                    <div className="text-[8px] uppercase tracking-widest text-white/40 mt-1">{item.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>

                    </div>

                    {/* Right Column: Sticky Sidebar - Moved Up with negative margin */}
                    <div className="lg:col-span-1 relative">
                        <div className="sticky top-24 -mt-72 space-y-6 animate-in slide-in-from-right-8 duration-700 delay-500 z-20">

                            {/* Enrollment Card */}
                            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-3xl font-black text-white tracking-tighter">{cert.price}</span>
                                        <span className="text-xs font-bold text-white/30 uppercase tracking-widest">{cert.currency}</span>
                                    </div>
                                    <div className="text-[10px] text-red-500 font-bold uppercase tracking-wider mb-8">One-time payment • Lifetime access</div>

                                    <button className="w-full py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-red-600 hover:text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-red-900/50 mb-4 flex items-center justify-center gap-2 group/btn">
                                        {cert.examDetails ? 'Buy Bundle' : 'Enroll Now'}
                                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>

                                    <button className="w-full py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/5 hover:border-white/40 transition-all duration-300 rounded-lg flex items-center justify-center gap-2">
                                        Download Syllabus
                                        <Download className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Details Card */}
                            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 shadow-xl">
                                <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-6 pb-2 border-b border-white/5">Course Details</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <Users className="w-4 h-4 text-red-500 mt-1" />
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Experience Level</div>
                                            <div className="text-xs font-bold text-white uppercase tracking-wide">{cert.experience}</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Clock className="w-4 h-4 text-red-500 mt-1" />
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Est. Time</div>
                                            <div className="text-xs font-bold text-white uppercase tracking-wide">{cert.time}</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Lock className="w-4 h-4 text-red-500 mt-1" />
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Access</div>
                                            <div className="text-xs font-bold text-white uppercase tracking-wide">{cert.access}</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Award className="w-4 h-4 text-red-500 mt-1" />
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Certificate</div>
                                            <div className="text-xs font-bold text-white uppercase tracking-wide">Included (Digital + Physical)</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Employer Funding Helper */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-500/20 hover:border-blue-500/40 transition-colors group cursor-pointer">
                                <h4 className="text-xs font-black text-blue-400 uppercase tracking-wider mb-2 group-hover:text-blue-300">Ask your employer</h4>
                                <p className="text-[10px] text-blue-200/60 leading-relaxed font-medium mb-4">
                                    Need help with funding? Download our template letter to send to your manager.
                                </p>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                                    Get Template <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

// Helper Icon
function ArrowRight({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

export default CertificationDetail;
