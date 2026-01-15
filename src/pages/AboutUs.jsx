import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Target, Users } from 'lucide-react';

const AboutUs = () => {
    const boardMembers = [
        {
            name: "Dr. Rajesh Kumar",
            role: "Chief Academic Officer",
            image: "RK",
            experience: "25+ years",
            expertise: ["Cybersecurity Education", "Threat Intelligence", "Red Team Operations"],
            bio: "Former CISO at Fortune 100 companies and pioneering researcher in advanced persistent threats. Dr. Kumar has trained over 10,000 security professionals worldwide.",
            credentials: ["Ph.D. Computer Security", "CISSP, OSCP, CEH"]
        },
        {
            name: "Priya Mehta",
            role: "Director of Curriculum",
            image: "PM",
            experience: "18+ years",
            expertise: ["Malware Analysis", "Digital Forensics", "Incident Response"],
            bio: "Led incident response teams for major ransomware attacks and developed cutting-edge forensics courses adopted by universities globally.",
            credentials: ["M.S. Cyber Forensics", "GCFE, EnCE, CHFI"]
        },
        {
            name: "Amit Sharma",
            role: "Head of Red Team Training",
            image: "AS",
            experience: "22+ years",
            expertise: ["Penetration Testing", "Exploit Development", "Social Engineering"],
            bio: "Veteran penetration tester who has secured critical infrastructure for governments and enterprises. Amit specializes in adversary simulation and red team tactics.",
            credentials: ["OSCP, OSCE, GXPN"]
        },
        {
            name: "Neha Gupta",
            role: "SOC Operations Lead",
            image: "NG",
            experience: "15+ years",
            expertise: ["Security Operations", "Threat Hunting", "SIEM Implementation"],
            bio: "Built and scaled SOC teams from ground up for multiple Fortune 500 companies. Neha's expertise in threat detection has prevented countless breaches.",
            credentials: ["GCIA, GCIH, CISSP"]
        },
        {
            name: "Vikram Singh",
            role: "Industry Partnerships Director",
            image: "VS",
            experience: "20+ years",
            expertise: ["Enterprise Security", "Compliance", "Security Architecture"],
            bio: "Former security executive who now bridges the gap between academic training and industry needs, ensuring CSCA graduates are job-ready.",
            credentials: ["CISM, CRISC, CGEIT"]
        },
        {
            name: "Kavya Reddy",
            role: "Research & Innovation Head",
            image: "KR",
            experience: "12+ years",
            expertise: ["Emerging Threats", "AI Security", "Blockchain Security"],
            bio: "Published researcher focusing on next-generation security challenges. Kavya ensures CSCA curriculum stays ahead of evolving threat landscapes.",
            credentials: ["Ph.D. AI Security", "Multiple Published Papers"]
        }
    ];

    const values = [
        {
            icon: Shield,
            title: "Practical Excellence",
            description: "Every course is built on real-world scenarios, not theory. Our board ensures hands-on training mirrors actual security operations."
        },
        {
            icon: Target,
            title: "Industry Alignment",
            description: "With combined 100+ years experience, our board keeps curriculum aligned with what companies actually need from security professionals."
        },
        {
            icon: Award,
            title: "Certification That Matters",
            description: "Our certifications are recognized globally because they prove actual skills, not just knowledge retention."
        },
        {
            icon: Users,
            title: "Community Driven",
            description: "We're not just educators—we're practitioners who actively work in the field and bring that experience to our students."
        }
    ];

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-red-600/10 blur-[120px] rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-6">
                            Meet The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                Advisory Board
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                            Our Academic Advisory Board brings over 100 years of combined experience in the security industry.
                            These are the experts who craft your learning journey.
                        </p>

                        {/* Experience Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
                            <div className="text-center">
                                <div className="text-4xl font-black text-white mb-2">100+</div>
                                <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Years Combined</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-white mb-2">6</div>
                                <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Board Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-white mb-2">50K+</div>
                                <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Students Trained</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-[#050505] border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            To bridge the gap between academic knowledge and industry practice, creating security professionals who are ready to defend organizations from day one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className="bg-black border border-white/10 rounded-xl p-6 hover:border-red-600/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-lg font-black text-white uppercase mb-3">{value.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Board Members */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Advisory Board
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Industry veterans and academic leaders who shape the future of cybersecurity education.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {boardMembers.map((member, idx) => (
                            <div
                                key={idx}
                                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-red-600/30 transition-all duration-300 group"
                            >
                                {/* Profile Header */}
                                <div className="flex flex-col items-center text-center mb-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center border border-white/10 mb-4 group-hover:scale-105 transition-transform">
                                        <span className="text-3xl font-black text-white">{member.image}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase mb-1">{member.name}</h3>
                                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">{member.role}</p>
                                    <div className="inline-block px-3 py-1 bg-red-600/10 text-red-400 text-xs font-black rounded-full">
                                        {member.experience}
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
                                    {member.bio}
                                </p>

                                {/* Expertise Tags */}
                                <div className="mb-6">
                                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-3">Expertise</p>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-black border border-white/10 text-white text-xs rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Credentials */}
                                <div className="pt-6 border-t border-white/10">
                                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Credentials</p>
                                    <div className="space-y-1">
                                        {member.credentials.map((cred, i) => (
                                            <p key={i} className="text-xs text-gray-500">{cred}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                        Learn From <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">The Best</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Our board doesn't just teach theory—they bring decades of real-world experience defending critical infrastructure and training the next generation of defenders.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/certifications"
                            className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded hover:bg-gray-200 transition-colors"
                        >
                            View Certifications
                        </Link>
                        <Link
                            to="/success-stories"
                            className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-white/5 transition-colors"
                        >
                            Read Success Stories
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
