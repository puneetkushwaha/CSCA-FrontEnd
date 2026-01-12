import React, { useState, useEffect } from 'react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { Clock, User, Tag, ChevronRight, Search, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const categories = [
        "All", "Digital Foundations", "AI", "Cloud", "Cyber", "Data", "Network", "Tech Support"
    ];

    const blogPosts = [
        // Digital Foundations
        {
            title: "Mastering Networking: Building Meaningful Connections for Career Success",
            tags: ["Digital Foundations", "Career"],
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2587&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Sep 22, 2023"
        },
        {
            title: "Top Strategies for Tech Job Seekers: Enhancing Your Career Path",
            tags: ["Digital Foundations", "Career"],
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Sep 12, 2023"
        },
        {
            title: "What Is JavaScript?",
            tags: ["Digital Foundations"],
            image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 10, 2023"
        },
        {
            title: "Maximize Career Potential with CSCA OnDemand: IT Certification and Skills Training",
            tags: ["Digital Foundations", "A+", "Cloud+", "CySA+", "Data+", "Linux+", "Network+"],
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
            readTime: "3 min read",
            date: "Sep 05, 2023"
        },
        {
            title: "Mastering Virtual Interviews: Essential Tips for Tech Professionals",
            tags: ["Tech Support", "Network", "Data", "Cyber", "Cloud", "AI", "Digital Foundations"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Aug 29, 2023"
        },
        {
            title: "New Routes into Tech - Why Apprenticeships and Alternative Training Paths Matter More Than Ever",
            tags: ["Enterprise", "Tech Support", "Partner", "Digital Foundations"],
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Aug 25, 2023"
        },
        {
            title: "Introducing the a+ Series: Your Fast Track to Cyber and Network Tech Careers",
            tags: ["Cyber", "Network", "a+ Cyber", "a+ Network", "Digital Foundations"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Aug 22, 2023"
        },
        {
            title: "Introducing CSCA’s Network of Experts: A Community of IT Excellence",
            tags: ["AI", "Cloud", "Cyber", "Data", "Tech Support", "Network", "Digital Foundations"],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Aug 15, 2023"
        },
        {
            title: "CSCA Tech+ vs. CSCA ITF+: What’s the Difference?",
            tags: ["ITF+", "Tech+", "Digital Foundations"],
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Aug 10, 2023"
        },
        {
            title: "How to Kickstart a New Career in Tech with CSCA Tech+",
            tags: ["Tech+", "Digital Foundations"],
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Aug 05, 2023"
        },
        {
            title: "Set Yourself Up for Success: 6 More Ways to Prep For a CSCA Exam",
            tags: ["AI", "Cloud", "Cyber", "Data", "Network", "Tech Support", "Digital Foundations"],
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Jul 28, 2023"
        },
        {
            title: "How to Become an IT Project Manager",
            tags: ["Project+", "Digital Foundations"],
            image: "https://images.unsplash.com/photo-1553877607-25eaf7062954?q=80&w=2669&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Jul 20, 2023"
        },

        // AI
        {
            title: "Achieving AI Literacy: A Core Competency for IT Professionals",
            tags: ["AI", "AI Essentials"],
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Oct 08, 2023"
        },
        {
            title: "One in Three Companies Already Mandate AI Training – Businesses Warned Not to Fall Behind",
            tags: ["AI Essentials", "AI", "Enterprise", "Insights"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 20, 2023"
        },
        {
            title: "Practical Guide to Using AI for Mastering Job Interviews",
            tags: ["AI", "AI Essentials"],
            image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Sep 15, 2023"
        },
        {
            title: "Top 5 Ways to Maximize Your Year-End Employee Development Budget",
            tags: ["Enterprise", "Cyber", "Network", "Cloud", "AI"],
            image: "https://images.unsplash.com/photo-1553877607-25eaf7062954?q=80&w=2669&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Nov 15, 2023"
        },
        {
            title: "Understanding AI’s Role in Network Optimization",
            tags: ["Network", "AI"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Nov 10, 2023"
        },
        {
            title: "Future of Data Analytics: Embracing AI Technology",
            tags: ["Data", "AI"],
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2574&auto=format&fit=crop",
            readTime: "6 min read",
            date: "Nov 05, 2023"
        },
        {
            title: "How AI Benefits the State and Local Government Workforce",
            tags: ["State & Local", "Government", "AI"],
            image: "https://images.unsplash.com/photo-1563986768427-1c591cd6b9d8?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Nov 02, 2023"
        },
        {
            title: "Building Responsible AI Systems",
            tags: ["AI"],
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Oct 30, 2023"
        },
        {
            title: "Interacting with AI: From Co-Pilots to Agents and Beyond",
            tags: ["AI"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
            readTime: "8 min read",
            date: "Oct 25, 2023"
        },
        {
            title: "How AI and Machine Learning Are Transforming IT and Cybersecurity",
            tags: ["Enterprise", "Cyber", "AI"],
            image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Oct 20, 2023"
        },
        {
            title: "Benefits of AI in Business Beyond Automation",
            tags: ["Enterprise", "AI"],
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Oct 18, 2023"
        },

        // Cloud
        {
            title: "What Is Zero Trust, and Why Does It Work?",
            tags: ["Network", "Cyber", "Cloud"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Dec 01, 2023"
        },
        {
            title: "What Is Cloud Computing?",
            tags: ["Cloud Essentials+", "Cloud+", "Cloud"],
            image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Nov 28, 2023"
        },
        {
            title: "Your Next Move: Cloud Security Specialist",
            tags: ["Cloud+", "PenTest+", "Security+", "Cloud", "Cyber"],
            image: "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=2669&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Nov 25, 2023"
        },
        {
            title: "CSCA Cloud Essentials+ vs. CSCA Cloud+: How to Choose",
            tags: ["Cloud+", "Cloud Essentials+", "Cloud"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Nov 20, 2023"
        },
        {
            title: "What Is the Future of Cloud Computing?",
            tags: ["Cloud+", "Cloud"],
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Nov 18, 2023"
        },
        {
            title: "Talk Tech to Me: Automated Configuration Management with Ansible",
            tags: ["Network", "Cloud"],
            image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Nov 10, 2023"
        },
        {
            title: "Fortifying Your Cloud: Mitigation Techniques for Cloud Security Flaws",
            tags: ["Cloud+", "Cloud"],
            image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2669&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Nov 05, 2023"
        },

        // Cyber
        {
            title: "Building Cybersecurity Pathways in Schools: Lessons from the Front Lines",
            tags: ["Academic", "Instructors", "Secondary Ed", "Cyber"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Oct 12, 2023"
        },
        {
            title: "Corporate Acceptable Use Policy: A Key Part of Security Awareness Training",
            tags: ["Enterprise", "Cyber"],
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
            readTime: "3 min read",
            date: "Oct 01, 2023"
        },
        {
            title: "Government Cyber Skills Guide for State and Local IT",
            tags: ["Cyber", "State & Local", "Government"],
            image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2574&auto=format&fit=crop",
            readTime: "7 min read",
            date: "Sep 25, 2023"
        },
        {
            title: "Today’s Top Drivers for Cybersecurity Strategy",
            tags: ["Enterprise", "Cyber"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 15, 2023"
        },
        {
            title: "Top Strategies to Bridge the Cyber Skills Gap in Public Sector IT",
            tags: ["State & Local", "Government", "Cyber"],
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Sep 10, 2023"
        },
        {
            title: "6 Reasons IT Careers Offer the Ultimate Work–Life Balance",
            tags: ["Enterprise", "Academic", "Tech Support", "Network", "Data", "Cyber"],
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Sep 05, 2023"
        },
        {
            title: "Critical Skills for Enterprise Success in Cybersecurity: Insights from the Cybersecurity Study",
            tags: ["Enterprise", "Cyber"],
            image: "https://images.unsplash.com/photo-1563986768427-1c591cd6b9d8?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Aug 30, 2023"
        },
        {
            title: "Securing Critical Infrastructure Against Cyber Attacks",
            tags: ["Government", "State & Local", "Cyber"],
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
            readTime: "6 min read",
            date: "Aug 25, 2023"
        },
        {
            title: "Top 5 IT Disaster Recovery Metrics Every Systems Administrator Should Know",
            tags: ["Network", "Network+", "Enterprise", "Cyber"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Aug 20, 2023"
        },
        {
            title: "How to Build a Security-First Culture: Enterprise Guide",
            tags: ["Enterprise", "Cyber"],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Aug 15, 2023"
        },
        {
            title: "NIS2 Compliance Demands- What Skills Your Organization Needs Now",
            tags: ["Enterprise", "Network", "Cyber"],
            image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2574&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Aug 10, 2023"
        },

        // Data
        {
            title: "The New Standard: Why Organizations Need CSCA Data+",
            tags: ["Enterprise", "Data"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Dec 10, 2023"
        },
        {
            title: "23 Must-Have Data Analytics Tools for Beginners and Career Growth",
            tags: ["Data+", "DataSys+", "DataX", "Data"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Nov 30, 2023"
        },
        {
            title: "Why State & Local Agencies Need Data Analytics Certification",
            tags: ["State & Local", "Government", "Data"],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Nov 25, 2023"
        },
        {
            title: "CSCA Data+ FAQ: Your Top Questions Answered",
            tags: ["Data+", "Data"],
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Nov 20, 2023"
        },
        {
            title: "CSCA Data+ V1 vs. V2: Key Differences",
            tags: ["Data+", "Data"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Nov 15, 2023"
        },
        {
            title: "Starting Your Data Journey: The Value of CSCA Data+ Certification",
            tags: ["Data+", "Data"],
            image: "https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=2672&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Nov 10, 2023"
        },
        {
            title: "How to Study for CSCA Data+: Exam Prep, Skills Test, Training",
            tags: ["Data+", "Data"],
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Nov 05, 2023"
        },
        {
            title: "CSCA Data+: The Data Analytics Certification Empowering Enterprise Teams",
            tags: ["Enterprise", "Data"],
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Nov 02, 2023"
        },
        {
            title: "CSCA Data+ vs. Other Certifications: Is Data+ Worth the Investment?",
            tags: ["Data+", "Data"],
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Oct 28, 2023"
        },

        // Network
        {
            title: "What is an Ad Hoc Network?",
            tags: ["Network"],
            image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 18, 2023"
        },
        {
            title: "SD-WAN Facts IT Pros Need to Know Today",
            tags: ["SD-WAN", "Network"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 12, 2023"
        },
        {
            title: "Quick Start Guide to The Internet of Things: How Companies Can Profit From the IoT Revolution",
            tags: ["Cyber", "Enterprise", "Network"],
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Sep 08, 2023"
        },
        {
            title: "Future-Proof IT Careers: Why CSCA Linux+ Certification Is Essential for Higher Ed",
            tags: ["Linux+", "Higher Ed", "Network"],
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min read",
            date: "Sep 05, 2023"
        },
        {
            title: "4 Proven IT Job Hunting Tips to Simplify Your Job Search",
            tags: ["Enterprise", "Tech Support", "Data", "Cyber", "Network"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 01, 2023"
        },

        // Tech Support
        {
            title: "South Africa progresses on tech skills – but capability gaps persist",
            tags: ["Enterprise", "Tech Support", "Insights"],
            image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Oct 10, 2023"
        },
        {
            title: "20+ IT Support and Help Desk Job Titles",
            tags: ["A+", "Tech Support"],
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Oct 05, 2023"
        },
        {
            title: "How CSCA A+ Helps Build Resume-Worthy Technology Skills",
            tags: ["A+", "Tech Support"],
            image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Oct 01, 2023"
        },
        {
            title: "CSCA A+: The Essential Certification for Tech Beginners",
            tags: ["A+", "Tech Support"],
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 28, 2023"
        },
        {
            title: "What’s New on CSCA A+?",
            tags: ["A+", "Tech Support"],
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 25, 2023"
        },
        {
            title: "Your Next Move: MSP Personnel",
            tags: ["Network", "A+", "Data+", "Server+", "Security+", "Tech Support"],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop",
            readTime: "4 min read",
            date: "Sep 20, 2023"
        }
    ];

    // Filter Logic
    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.tags.some(tag => tag.includes(activeCategory) || (activeCategory === "Digital Foundations" && post.tags.includes("Digital Foundations"))));

    // Deduping posts if duplicates exist
    const uniquePosts = Array.from(new Set(filteredPosts.map(a => a.title)))
        .map(title => {
            return filteredPosts.find(a => a.title === title)
        });

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = uniquePosts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(uniquePosts.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const setPage = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1); // Reset to page 1 when category changes
    }, [activeCategory]);

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

            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Insights & Updates</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                        CSCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Blog</span>
                    </h1>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${activeCategory === category
                                    ? 'bg-red-600 border-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                                    : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                {currentItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {currentItems.map((post, index) => (
                            <div
                                key={index}
                                className="group bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] flex flex-col animate-in fade-in slide-in-from-bottom-8"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
                                    <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                                        {post.tags.slice(0, 2).map((tag, idx) => (
                                            <span key={idx} className="bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <div className="mt-auto flex items-center justify-between text-xs text-gray-500 font-medium">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                {post.date}
                                            </span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-red-500" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        No articles found in this category.
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`px-4 h-10 rounded-lg font-bold text-sm flex items-center justify-center border border-white/10 transition-all ${currentPage === 1
                                    ? 'text-gray-600 cursor-not-allowed bg-transparent'
                                    : 'text-gray-400 hover:text-white hover:border-white/30 bg-[#0a0a0a]'
                                }`}
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Prev
                        </button>

                        {Array.from({ length: totalPages }).slice(0, 5).map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setPage(i + 1)}
                                className={`w-10 h-10 rounded-lg font-bold text-sm flex items-center justify-center transition-all ${currentPage === i + 1
                                        ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                                        : 'bg-[#0a0a0a] border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        {totalPages > 5 && <span className="text-gray-500 px-2">...</span>}

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`px-4 h-10 rounded-lg font-bold text-sm flex items-center justify-center border border-white/10 transition-all group ${currentPage === totalPages
                                    ? 'text-gray-600 cursor-not-allowed bg-transparent'
                                    : 'text-gray-400 hover:text-white hover:border-white/30 bg-[#0a0a0a]'
                                }`}
                        >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
