import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Calendar, Layers, FileText, ShieldCheck,
  Share2, Award, FileBarChart, Search, Users, RefreshCw,
  ArrowRight,
  Play
} from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const Resources = () => {
  const resourceCards = [
    {
      title: "CertMaster training products",
      description: "Explore the flexible, self-paced CSCA training solutions.",
      icon: <BookOpen className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/training"
    },
    {
      title: "Schedule an exam",
      description: "Learn how to schedule or reschedule your exam.",
      icon: <Calendar className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/exam-system"
    },
    {
      title: "Stackable certifications",
      description: "Learn how stackable certifications validate multiple CSCA certifications.",
      icon: <Layers className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/certifications"
    },
    {
      title: "Exam objectives development",
      description: "Review the exam objectives that are under development for new and/or refreshed certification exams.",
      icon: <FileText className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/certifications"
    },
    {
      title: "Exam policies",
      description: "Review certification exam policies before taking the exam.",
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/policies"
    },
    {
      title: "LMS integration",
      description: "Visit this page for questions around LMS set up or LMS integration training requests.",
      icon: <Share2 className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/lms-integration"
    },
    {
      title: "Partner resources",
      description: "This resource is exclusively for our partners and offers the latest CSCA updates, instructor resources, and more.",
      icon: <Users className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/partners-ecosystem"
    },
    {
      title: "CSCA Digital Badges",
      description: "Digital badges highlight your completed CSCA certifications on your online profiles, resume, and more.",
      icon: <Award className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/digital-badges"
    },
    {
      title: "Blog",
      description: "Browse through CSCA blogs for the latest news, product updates, and industry insights.",
      icon: <FileBarChart className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/resources/blog"
    },
    {
      title: "Research",
      description: "Explore the latest research by CSCA.",
      icon: <Search className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/resources/research"
    },
    {
      title: "Case studies",
      description: "Browse CSCA success stories.",
      icon: <Users className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/resources/case-studies"
    },
    {
      title: "Continuing education",
      description: "Understand all your renewal options to keep your certification current.",
      icon: <RefreshCw className="w-8 h-8 text-red-500" />,
      action: "Learn more",
      link: "/continuing-education"
    }
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

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Knowledge Hub</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Resources</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Explore our resources to stay informed and stay ahead.
          </p>
        </div>

        {/* Featured Section - New CSCA Experience */}
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 p-1">
            <div className="rounded-[2.4rem] bg-black/50 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full"></div>

              <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-16 relative z-10">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">New CSCA Experience</h2>
                    <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6">Unlock your potential.</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Learn about CSCA by watching a quick brand video, learn what's new on the website, and find frequently asked questions about our new experience.
                    </p>
                  </div>
                  <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] flex items-center gap-3 w-fit">
                    <Play className="w-4 h-4 fill-current" />
                    Watch Video
                  </button>
                </div>

                {/* Featured Visual */}
                <div className="h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-red-900/20 to-black border border-white/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-700 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {resourceCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.1)] flex flex-col animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-600/10 group-hover:border-red-600/20 transition-all duration-300">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-500 transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>

                <p className="text-gray-400 font-medium leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>

                <div>
                  <Link to={card.link}>
                    <button className="px-6 py-3 bg-white text-black font-black uppercase tracking-[0.15em] text-[10px] rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-2 group/btn">
                      {card.action}
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pb-12">
          <p className="text-gray-500 text-sm font-medium">
            Looking for something else? <Link to="/contact" className="text-red-500 hover:text-red-400 underline decoration-red-500/30 hover:decoration-red-500">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
