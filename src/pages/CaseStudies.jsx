import React, { useState, useEffect } from 'react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { ArrowRight, ChevronLeft, ChevronRight, Briefcase, GraduationCap, Building2, Globe, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const categories = [
        "All", "Academic", "Delivery partner", "Enterprise", "Government"
    ];

    const caseStudies = [
        // Academic (Higher Education & Secondary Education)
        {
            title: "Workforce training, CSCA certifications, and determination: Zachary Caudle’s path to systems administrator",
            description: "Zachary Caudle used Laurel Ridge Community College’s workforce training and a full CSCA certification pathway to move from warehouse work into a systems administrator role, earning statewide recognition for his achievement.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <GraduationCap className="w-5 h-5" />
        },
        {
            title: "Transforming careers in Romania: How CSCA certifications open doors",
            description: "Adrian Savu-Jivanov, of Savnet Training Center in Romania, has spent nearly 20 years bridging academic skills with industry demands, leveraging CSCA certifications like Linux+, Security+, and Penetration Testing to create clear career paths and transform lives across the EMEA region.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <Globe className="w-5 h-5" />
        },
        {
            title: "Cybersecurity, certifications, and adventure: The multifaceted life of Alif Ancheita",
            description: "Discover how Alif Ancheita earned 8 IT certifications, led cybersecurity projects, and showcased perseverance for career success.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: "Passion meets innovation: College of DuPage prepares IT students for success",
            description: "The College of DuPage equips IT students with industry-relevant skills and knowledge through passionate instruction and CSCA certifications. This partnership helps students stay current with technology trends and launch successful careers in IT.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2670&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <GraduationCap className="w-5 h-5" />
        },
        {
            title: "Resilience and certifications: How Dominic Eldridge landed his dream job at GE",
            description: "Learn how Dominic Eldridge’s passion for IT and certifications helped him excel in cybersecurity and achieve career success at GE.",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop",
            categories: ["Academic"], // User requested in Academic list
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: "Transforming lives through technology and CSCA certifications",
            description: "The Latin American Youth Center (LAYC) partnered with CSCA to transform lives by equipping low-income students with affordable, high-quality technology training and certifications. Through CSCA certifications like Tech+ and A+, students have secured meaningful employment, supported their families, and built sustainable career pathways.",
            image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2574&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <Users className="w-5 h-5" />
        },
        {
            title: "Certifications, flexibility, and determination: Shikirra’s path to thriving in cybersecurity",
            description: "Shikirra’s story is a testament to the power of perseverance, passion, and the right tools for success. Her journey from struggling in chemistry to thriving in cybersecurity proves that with determination and the right support, anything is possible.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop",
            categories: ["Academic"], // User requested in Academic list
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: "Brandon Howell's journey to a cybersecurity career",
            description: "Discover how Brandon Howell turned his passion for technology into a promising cybersecurity career. Learn how CSCA certifications like Security+ and IT Fundamentals, along with hands-on learning at Grayson Technical School, empowered him to build confidence, gain skills, and pursue his dreams in the tech industry.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <GraduationCap className="w-5 h-5" />
        },
        {
            title: "Empowering students through IT education: Byron Martin ATC's success with CSCA",
            description: "Discover how the Byron Martin Advanced Technology Center in Lubbock, Texas, is preparing students for successful IT careers. Learn how CSCA’s CertMaster curriculum and Instructor Network have helped expand the program, empower students to earn certifications, and open doors to high-paying tech jobs.",
            image: "https://images.unsplash.com/photo-1577896333243-5d51372cf52a?q=80&w=2574&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <GraduationCap className="w-5 h-5" />
        },
        {
            title: "Snehal Bhakta in Clark County School District is shaping the future of tech with CSCA",
            description: "Learn how Clark County Schools in Nevada, led by CTE Administrator Snehal Bhakta, are preparing students for high-demand tech careers through Career and Technical Education (CTE) programs. Discover how CSCA certifications validate students' skills, boost confidence, and provide a competitive edge in the workforce.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2670&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <Building2 className="w-5 h-5" />
        },
        {
            title: "Empowering students to launch cybersecurity careers",
            description: "Discover how the Culpeper Technical Education Center (CTEC) is preparing high school students for cybersecurity careers. Learn how passionate instruction, CSCA certifications, and robust resources empower students to achieve success, secure high-paying jobs, and pursue their dreams in technology.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <GraduationCap className="w-5 h-5" />
        },
        {
            title: "Gwinnett County's Cybersecurity Program is unlocking potential for students",
            description: "Discover how Gwinnett County Schools in Georgia are preparing students for high-demand cybersecurity careers through a robust Career Pathway program. Learn how Grayson Tech and other schools are equipping students with foundational skills, hands-on experience, and industry-recognized certifications like CSCA Security+.",
            image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2670&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <GraduationCap className="w-5 h-5" />
        },
        {
            title: "IT certifications have brightened Jason Pucilowski's future",
            description: "Discover how high school student Jason Pucilowski turned his passion for IT into a promising career path. With certifications like CSCA A+, Network+, and Security Pro, plus hands-on experience as a network administrator, Jason is paving the way for a bright future in technology.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <GraduationCap className="w-5 h-5" />
        },
        {
            title: "Kendra discovers a passion for tackling tech problems",
            description: "Discover how Kendra Cole, a high school student from Vancleave, Mississippi, is building a bright future in IT. With certifications like CSCA A+ and Network+, and achievements like winning the SkillsUSA state championship, Kendra is on her way to becoming a network administrator.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            categories: ["Academic"],
            icon: <GraduationCap className="w-5 h-5" />
        },

        // Delivery Partner
        {
            title: "Applied Technology Academy and CSCA are shaping the future of IT and cybersecurity education",
            description: "Applied Technology Academy's partnership with CSCA has been instrumental in equipping diverse learners with the skills needed to excel in IT and cybersecurity. By leveraging CSCA's certifications and training materials, they are advancing their mission to strengthen the workforce and national security.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
            categories: ["Delivery partner"],
            icon: <Building2 className="w-5 h-5" />
        },
        {
            title: "Dion Training Solutions & CSCA: Global leaders in IT & cybersecurity training",
            description: "Discover Dion Training Solutions' partnership with CSCA, offering A+, Security+, and cybersecurity certifications. Learn at your own pace with remote learning and hands-on labs. Join over 2 million learners worldwide!",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
            categories: ["Delivery partner"],
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: "Learning Tree International & CSCA: 20+ years of IT certification excellence",
            description: "Partner with Learning Tree International, a CSCA Authorized Partner for over 20 years. Explore A+, Network+, Security+, and more certifications to advance your IT career with cutting-edge training programs.",
            image: "https://images.unsplash.com/photo-1565514020176-db792f4b6d80?q=80&w=2574&auto=format&fit=crop",
            categories: ["Delivery partner"],
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: "QA & CSCA: Leading IT training delivery partners for over a decade",
            description: "Discover QA's 10+ year partnership with CSCA, delivering industry-leading IT training and certifications in technology, cloud, data, AI, and more. Empower your workforce with QA's comprehensive training solutions.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
            categories: ["Delivery partner"],
            icon: <Building2 className="w-5 h-5" />
        },

        // Enterprise
        {
            title: "Google empowers IT teams with CSCA certifications",
            description: "Discover how Google leverages CSCA certifications to upskill employees, bridge IT skill gaps, and drive enterprise workforce development.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
            categories: ["Enterprise"],
            icon: <Building2 className="w-5 h-5" />
        },
        {
            title: "How a system director leveled up his team with CSCA",
            description: "As a System Director at Clear Blue Insurance Group, Harry Rosario knows the importance of accurate data processing and analysis. To ensure his team had the tools and skills needed to excel, Harry turned to CSCA Data+ training.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
            categories: ["Enterprise"],
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: "How CSCA training transformed Thomson Reuters' customer support team",
            description: "Discover how CSCA’s training program helped Thomson Reuters enhance employee technical skills, improve customer satisfaction, and boost retention.",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop",
            categories: ["Enterprise"],
            icon: <Building2 className="w-5 h-5" />
        },

        // Government
        {
            title: "How Utah leads in cybersecurity training with CSCA certifications",
            description: "The State of Utah has emerged as a cybersecurity training and workforce development leader, implementing a forward-thinking program that prioritizes data privacy, cybersecurity certifications, and employee upskilling.",
            image: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=2670&auto=format&fit=crop",
            categories: ["Government"],
            icon: <Building2 className="w-5 h-5" />
        },
        {
            title: "DC3 Cyber Training Academy: Empowering the DoD Workforce with CSCA Certifications",
            description: "Learn more about how the DoD Cyber Crime Center (DC3) Cyber Training Academy (DC3/CTA) is a cornerstone of the Department of Defense’s (DoD) efforts to build a skilled and resilient cyber workforce with CSCA certifications.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
            categories: ["Government"],
            icon: <Shield className="w-5 h-5" />
        },
        {
            title: "Transforming the Mission, Texas workforce through CSCA certifications",
            description: "Despite its underdog status in attracting businesses and developing a skilled workforce, Mission, TX has proven that innovation and collaboration can drive meaningful change. Through a groundbreaking partnership with CSCA, the city is addressing the cybersecurity skills gap.",
            image: "https://images.unsplash.com/photo-1562504208-03d85cc8c23e?q=80&w=2670&auto=format&fit=crop", // Texas/community feeling image
            categories: ["Government"],
            icon: <Globe className="w-5 h-5" />
        }
    ];

    const filteredStories = activeCategory === "All"
        ? caseStudies
        : caseStudies.filter(story => story.categories.includes(activeCategory));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredStories.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredStories.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const setPage = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-black text-white font-['Inter'] relative selection:bg-red-500/30 overflow-hidden pt-20">
            {/* Background Layer (Temporarily Disabled for Debugging) */}
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
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Success Stories</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                        CSCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Case Studies</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Discover how CSCA empowers individuals and organizations through success stories and impactful solutions.
                    </p>
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

                {/* Grid */}
                {currentItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {currentItems.map((story, index) => (
                            <div
                                key={index}
                                className="group bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] flex flex-col animate-in fade-in slide-in-from-bottom-8"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Image */}
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 text-red-500">
                                        {story.icon}
                                    </div>
                                    <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                                        {story.categories.slice(0, 2).map((tag, idx) => (
                                            <span key={idx} className="bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                                        {story.description}
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
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        No case studies found in this category.
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

            </div>
        </div>
    );
};

export default CaseStudies;
