import React from 'react';
import { Link } from 'react-router-dom';
import { Award, TrendingUp, Users, CheckCircle } from 'lucide-react';

const SuccessStories = () => {
    const stories = [
        {
            name: "Puneet Kushwaha",
            role: "Tier 2 SOC Analyst",
            previousRole: "DevOps Engineer",
            company: "CyberDefense Corp",
            image: "PK",
            story: "Back in 2024 I decided to transition from DevOps into a role with more focus on cyber security, in particular Red Teaming. I took BTL1 after months of decision making and was glad I did. The hands-on training gave me everything I needed to gain the coveted gold.",
            achievements: [
                "Transitioned from DevOps to Security",
                "Achieved BTL1 Gold Certification",
                "Now working on Tier 2 SOC team"
            ],
            salaryIncrease: "40%",
            color: "red"
        },
        {
            name: "Aditi Sharma",
            role: "Threat Hunter",
            previousRole: "Network Administrator",
            company: "SecureNet Systems",
            image: "AS",
            story: "The practical nature of the exams is what sets CSCA apart. Unlike multiple-choice certifications, I actually had to demonstrate my skills in a live environment. It gave me the confidence to tackle real-world ransomware incidents immediately after hiring.",
            achievements: [
                "Became certified Threat Hunter",
                "Detected 15+ major threats in first 6 months",
                "Promoted within 1 year"
            ],
            salaryIncrease: "55%",
            color: "blue"
        },
        {
            name: "Rahul Verma",
            role: "Security Consultant",
            previousRole: "Network Administrator",
            company: "Independent Consultant",
            image: "RV",
            story: "CSCA's content is constantly updated to reflect the latest threat landscape. Transitioning from a network admin role was challenging, but the structured learning path and community support made it actionable and achievable.",
            achievements: [
                "Started own security consultancy",
                "Serves 20+ enterprise clients",
                "Earning 3x previous salary"
            ],
            salaryIncrease: "200%",
            color: "orange"
        },
        {
            name: "Priya Malhotra",
            role: "Penetration Tester",
            previousRole: "Web Developer",
            company: "RedForce Security",
            image: "PM",
            story: "I always loved breaking things and finding vulnerabilities in my own code. CSCA gave me the structured path to turn that passion into a career. The Red Team certifications opened doors I didn't even know existed.",
            achievements: [
                "Completed 50+ penetration tests",
                "Found critical vulns for Fortune 500 companies",
                "Speaking at security conferences"
            ],
            salaryIncrease: "65%",
            color: "purple"
        },
        {
            name: "Arjun Singh",
            role: "Incident Response Lead",
            previousRole: "IT Support Specialist",
            company: "Global Tech Inc",
            image: "AS",
            story: "From answering helpdesk tickets to leading incident response for a Fortune 500 company - CSCA made this journey possible. The hands-on labs prepared me for real-world attacks that my team faces daily.",
            achievements: [
                "Led response to 100+ security incidents",
                "Reduced incident response time by 70%",
                "Built and trained IR team of 8"
            ],
            salaryIncrease: "80%",
            color: "green"
        },
        {
            name: "Sneha Patel",
            role: "Malware Analyst",
            previousRole: "QA Tester",
            company: "ThreatWatch Labs",
            image: "SP",
            story: "The malware analysis course was incredibly detailed. Starting from basic reverse engineering to advanced techniques, I learned everything needed to dissect sophisticated threats. Now I analyze nation-state malware daily.",
            achievements: [
                "Analyzed 500+ malware samples",
                "Discovered new APT techniques",
                "Published research papers"
            ],
            salaryIncrease: "70%",
            color: "red"
        }
    ];

    const stats = [
        { number: "100K+", label: "Students Certified", icon: Users },
        { number: "85%", label: "Career Advancement", icon: TrendingUp },
        { number: "60%", label: "Avg. Salary Increase", icon: Award },
        { number: "95%", label: "Job Placement Rate", icon: CheckCircle }
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
                            Real People. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                Real Success.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                            Discover how CSCA certifications transformed careers and lives. From career changers to industry veterans,
                            these are the stories of professionals who chose to level up.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#050505] border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <stat.icon className="w-10 h-10 text-red-500" />
                                </div>
                                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                                <div className="text-xs font-bold text-red-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Success Stories
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            These professionals took the leap. Now they're leading teams, hunting threats, and building the future of cybersecurity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map((story, idx) => (
                            <div
                                key={idx}
                                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-red-600/30 transition-all duration-300 group"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-xl flex items-center justify-center border border-white/10">
                                        <span className="text-2xl font-black text-white">{story.image}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-black text-white uppercase">{story.name}</h3>
                                        <p className="text-xs font-bold text-red-500 uppercase tracking-widest">{story.role}</p>
                                    </div>
                                </div>

                                {/* Career Transition */}
                                <div className="mb-6 p-4 bg-black/50 rounded-lg border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">Before</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">After</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">{story.previousRole}</span>
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                        </svg>
                                        <span className="text-sm text-white font-bold">{story.role}</span>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-black rounded-full">
                                            +{story.salaryIncrease} Salary
                                        </span>
                                    </div>
                                </div>

                                {/* Story */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    "{story.story}"
                                </p>

                                {/* Achievements */}
                                <div className="space-y-2">
                                    {story.achievements.map((achievement, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-xs text-gray-500">{achievement}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Company */}
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <span className="text-xs text-gray-600">Now at: </span>
                                    <span className="text-xs text-white font-bold">{story.company}</span>
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
                        Write Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Success Story</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join 100,000+ professionals who transformed their careers with CSCA certifications.
                        Your story could be next.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/certifications"
                            className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded hover:bg-gray-200 transition-colors"
                        >
                            Explore Certifications
                        </Link>
                        <Link
                            to="/pricing"
                            className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-white/5 transition-colors"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
