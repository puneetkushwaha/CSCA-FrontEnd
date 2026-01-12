import React, { useState } from 'react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { ArrowRight, FileText, Download, BarChart2, Globe, Shield, Cpu, Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Research = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const researchReports = [
        {
            title: "CSCA Tech Jobs Report",
            description: "CSCA’s Tech Jobs Report provides a monthly snapshot of IT employment trending at the occupation and industry levels.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop",
            icon: <BarChart2 className="w-6 h-6" />
        },
        {
            title: "IT Industry Outlook 2026",
            description: "CSCA's IT Industry Outlook 2026 highlights the major trends that will drive technology adoption and workforce development over the next twelve months.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "State of Cybersecurity 2025",
            description: "CSCA’s 2025 State of Cybersecurity report explores the many variables that must be considered in balancing the cybersecurity equation.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "AI's Impact on Productivity and the Workforce",
            description: "This quantitative survey, commissioned by CSCA, seeks to corroborate established patterns of AI use while exploring new facets of the challenges companies face in navigating the many moving parts of AI deployments in the enterprise.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: "CSCA AI Framework",
            description: "The CSCA AI Framework provides strategic guidance for understanding the way that skills will change as organizations implement AI in systems and workflow.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            title: "State of the Tech Workforce 2025",
            description: "CSCA’s State of the Tech Workforce, is the definitive guide to tech workforce trends, the number of available jobs in technology, and tech industry employment statistics by state, metro area, and nationwide.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "State of the Tech Workforce UK 2025",
            description: "CSCA's State of the Tech Workforce UK provides an in depth look at employment, economic impact, technology trends and more.",
            image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=2670&auto=format&fit=crop",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Job Seeker Trends 2025",
            description: "CSCA’s Job Seeker Trends provides insights into the desired career pathways of job seekers and the strategies they use to get ahead.",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
            icon: <BarChart2 className="w-6 h-6" />
        },
        {
            title: "State of the Tech Workforce Canada 2025",
            description: "CSCA’s State of the Tech Workforce Canada 2025 explores employment, trends, salaries, hiring, and economic impact.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Workforce and Learning Trends 2025",
            description: "CSCA’s 6th annual Workforce and Learning Trends provides an inside look at how HR leaders prioritize talent management, and more.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2670&auto=format&fit=crop",
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            title: "Community College Student Trends",
            description: "CSCA's Community College Student Trends explores student pathways, outcomes, and career readiness.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Industry Workforce Trends",
            description: "CSCA's Industry Workforce Trends reviews talent, skills, and training across industry sectors.",
            image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2574&auto=format&fit=crop",
            icon: <BarChart2 className="w-6 h-6" />
        },
        {
            title: "IT Industry Outlook 2025",
            description: "Discover the latest IT industry trends and insights with CSCA. Learn more about careers in IT, emerging trends, and the business of IT.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "State of Cybersecurity 2024",
            description: "CSCA’s 2024 State of Cybersecurity report explores the many variables that must be considered in balancing the cybersecurity equation.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "State of the Tech Workforce 2024",
            description: "CSCA’s State of the Tech Workforce, is the definitive guide to tech workforce trends, the number of available jobs in technology, and tech industry employment statistics by state, metro area and nationwide.",
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Workforce and Learning Trends 2024",
            description: "CSCA's Workforce and Learning Trends 2024 edition presents a data-driven look at the key developments shaping the future of work and future of learning.",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            title: "State of Cybersecurity 2023",
            description: "CSCA’s 2023 State of Cybersecurity report explores the many variables that must be considered in balancing the cybersecurity equation.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "State of the Tech Workforce UK 2024",
            description: "CSCA's State of the Tech Workforce UK provides an in depth look at employment, economic impact, technology trends and more.",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "CSCA IT Industry Outlook 2024",
            description: "CSCA’s IT Industry Outlook 2024 explores various aspects of the strategic and tactical sides of the technology industry, workplace and society today.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "The Role of Emerging Technology in Digital Transformation",
            description: "This whitepaper describes how emerging technology is impacting strategy for IT leaders and skill development for all IT professionals.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: "Using Strategic IT for Competitive Advantage",
            description: "CSCA’s whitepaper explores IT's strategic role, key milestones, and metrics, helping businesses plan for transformation and growth.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            icon: <BarChart2 className="w-6 h-6" />
        },
        {
            title: "A Functional IT Framework",
            description: "CSCA’s IT framework helps businesses adapt to tech trends, innovation, and systems by outlining key pillars, skills, and strategies.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: "Building AI Strategy",
            description: "AI, a transformative force like the internet, holds vast potential. CSCA’s research helps shape balanced strategies for its future.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: "Closing the Data Skills Gap",
            description: "Data drives the digital economy, but poor management and siloed systems limit its potential, impacting business decisions and growth.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            icon: <BarChart2 className="w-6 h-6" />
        },
        {
            title: "Workforce and Learning Trends 2023",
            description: "CSCA’s Workforce and Learning Trends 2023 edition presents a data-driven look at the key developments shaping the future of work and future of learning.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            title: "IT Industry Outlook 2023",
            description: "CSCA’s official industry analysis on 2023 trends in information technology.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "State of the Tech Workforce Canada 2023",
            description: "CSCA’s State of the Tech Workforce Canada 2023 explores employment, trends, salaries, hiring, and economic impact.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Workforce and Learning Trends 2022",
            description: "CSCA’s Workforce and Learning Trends 2022 edition presents a data-driven look at the key developments shaping the future of work and future of learning.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2670&auto=format&fit=crop",
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            title: "State of Cybersecurity 2022",
            description: "CSCA’s 2022 State of Cybersecurity report examines the disconnect between root cause and symptoms.",
            image: "https://images.unsplash.com/photo-1563986768427-1c591cd6b9d8?q=80&w=2670&auto=format&fit=crop",
            icon: <Shield className="w-6 h-6" />
        }
    ];

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = researchReports.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(researchReports.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const setPage = (pageNumber) => setCurrentPage(pageNumber);

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
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Data & Research</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                        CSCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Research</span>
                        <span className="block text-2xl md:text-3xl text-gray-500 font-bold mt-4 tracking-normal">Reports & Whitepapers</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        In-depth analysis, workforce trends, and strategic insights for IT professionals and industry leaders.
                    </p>
                </div>

                {/* Research Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {currentItems.map((report, index) => (
                        <div
                            key={index}
                            className="group bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] flex flex-col"
                        >
                            {/* Image */}
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={report.image}
                                    alt={report.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 text-red-500">
                                    {report.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                                    {report.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {report.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <button className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all hover:text-red-500">
                                        Learn more
                                        <ArrowRight className="w-4 h-4 text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 mb-20">
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

                        {Array.from({ length: totalPages }).map((_, i) => (
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

                {/* CTA */}
                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <h2 className="text-2xl font-bold text-white mb-4">Looking for data on a specific topic?</h2>
                    <p className="text-gray-400 mb-8">
                        Our research library spans over a decade of industry analysis. Contact our research team for specific inquiries.
                    </p>
                    <Link to="/contact">
                        <button className="px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wider rounded-full hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                            Contact Research Team
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Research;
