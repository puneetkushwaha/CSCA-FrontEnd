import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ChevronDown, Search, ArrowRight } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const FAQItem = ({ question, answer, isOpen, toggle, index }) => {
  return (
    <div
      className={`group border-b border-white/10 transition-all duration-500 backdrop-blur-md
        ${isOpen ? 'bg-black/60 border-red-600/50' : 'hover:bg-black/40 bg-black/20'}`}
    >
      <button
        onClick={toggle}
        className="w-full py-6 px-6 sm:px-8 flex items-center justify-between gap-6 text-left relative overflow-hidden"
      >
        {/* Active Indicator Line */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-red-600 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded border transition-all duration-300
                  ${isOpen ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-white/5 border-white/10 text-white/30'}`}>
              Q: {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8
            ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
            {question}
          </h3>
        </div>

        <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 relative z-10 bg-black/50
          ${isOpen ? 'border-red-500 text-red-500 rotate-180 shadow-[0_0_15px_rgba(220,38,38,0.3)]' : 'border-white/10 text-white/30 group-hover:border-white/30 group-hover:text-white'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out px-6 sm:px-8
          ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
      >
        <div className="overflow-hidden">
          <div className="text-gray-400 leading-relaxed text-sm md:text-base space-y-4 max-w-3xl border-t border-white/5 pt-6">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "What is CSCA?",
      answer: "Codevirus Security Certification Authority (CSCA) is an independent cybersecurity certification authority that provides skill-based, practical, and globally applicable certifications for students and professionals."
    },
    {
      question: "Are CSCA certifications global or international?",
      answer: (
        <>
          <p className="font-bold text-white mb-2">Yes.</p>
          <p>CSCA certifications are globally valid skill certifications designed to be:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2 marker:text-red-500">
            <li>Accepted for international job applications</li>
            <li>Useful for global freelancing platforms</li>
            <li>Relevant for remote cybersecurity roles</li>
            <li>Aligned with global cybersecurity job roles and frameworks</li>
          </ul>
          <p className="mt-2">CSCA focuses on skills and practical validation, which is globally valued across industries.</p>
        </>
      )
    },
    {
      question: "Who can apply for CSCA certifications?",
      answer: (
        <>
          <p>CSCA certifications are suitable for:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2 marker:text-red-500">
            <li>Students (BCA, BTech, MCA, Diploma, IT & CS background)</li>
            <li>Fresh graduates</li>
            <li>Working professionals</li>
            <li>Career switchers</li>
            <li>Freelancers and security enthusiasts</li>
          </ul>
          <p className="mt-4 inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm font-semibold">
            No prior certification is required for Level-1.
          </p>
        </>
      )
    },
    {
      question: "What certification levels does CSCA offer?",
      answer: (
        <>
          <p>CSCA follows a two-level international certification framework:</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-black border border-white/10 p-5 rounded-xl hover:border-red-600/30 transition-colors">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Level 1 – Foundation
              </h4>
              <p className="text-xs text-red-400 font-bold uppercase tracking-wider mb-3">Global Entry-Level</p>
              <ul className="list-disc pl-4 space-y-1 text-gray-400 text-sm marker:text-white/20">
                <li>Beginner-friendly</li>
                <li>Core cybersecurity concepts + skills</li>
                <li>Ideal for global profile building</li>
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-5 rounded-xl">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Level 2 – Professional
              </h4>
              <p className="text-xs text-red-400 font-bold uppercase tracking-wider mb-3">Advanced & Global</p>
              <ul className="list-disc pl-4 space-y-1 text-gray-400 text-sm marker:text-red-500">
                <li>Domain-specific and job-role oriented</li>
                <li>Practical exams, projects, case studies</li>
                <li>Designed for corporate roles</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      question: "Are CSCA certifications free?",
      answer: (
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white"></span>
            <span><span className="text-white font-semibold">Level-1 certifications</span> may be available through limited global promotional or academic vouchers.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span><span className="text-white font-semibold">Level-2 certifications</span> are paid, premium, and professionally evaluated.</span>
          </li>
        </ul>
      )
    },
    {
      question: "Are CSCA certificates internationally recognized?",
      answer: (
        <>
          <p>CSCA certificates are:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2 marker:text-red-500">
            <li>Skill-focused (not country-restricted)</li>
            <li>Designed by active cybersecurity professionals</li>
            <li>Valid for global resumes, LinkedIn, GitHub, and portfolios</li>
            <li>Suitable for international companies, startups, and remote teams</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500 italic border-l-2 border-white/10 pl-3">They demonstrate practical competency, which is globally valued more than theory-only certifications.</p>
        </>
      )
    },
    {
      question: "Is training mandatory to appear for CSCA exams?",
      answer: (
        <>
          <p className="text-xl font-black text-white mb-2">NO.</p>
          <p>CSCA follows an open and global certification model:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2 marker:text-red-500">
            <li>You can prepare through self-study or any institute worldwide</li>
            <li>Certification depends only on passing the CSCA assessment</li>
          </ul>
        </>
      )
    },
    {
      question: "How are CSCA exams conducted?",
      answer: (
        <>
          <p>Depending on the certification:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Online Proctored', 'MCQs + Scenario', 'Practical Labs', 'Assignments'].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-300 uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-4 text-white">All exams are conducted via the official CSCA online examination system, accessible globally.</p>
        </>
      )
    },
    {
      question: "Is global certificate verification available?",
      answer: (
        <>
          <p className="font-bold text-white mb-2">Yes.</p>
          <p>Each CSCA certificate includes:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2 marker:text-red-500">
            <li>A unique global Certificate ID</li>
            <li>Online verification portal</li>
            <li>Candidate and certification details for international verification</li>
          </ul>
          <p className="mt-2 text-red-400/80">Employers worldwide can verify authenticity instantly.</p>
        </>
      )
    },
    {
      question: "Do CSCA certificates expire?",
      answer: (
        <div className="space-y-3">
          <div className="p-3 bg-white/5 rounded-lg border-l-2 border-white">
            <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Level-1</span>
            <span className="text-white font-bold">Lifetime Validity</span>
          </div>
          <div className="p-3 bg-red-950/20 rounded-lg border-l-2 border-red-500">
            <span className="block text-xs uppercase text-red-400/70 font-bold mb-1">Level-2</span>
            <span className="text-white font-bold">Renewal may apply</span>
            <span className="text-sm text-gray-400 ml-2">(to keep skills aligned with global updates)</span>
          </div>
        </div>
      )
    },
    {
      question: "Can international institutes or companies partner with CSCA?",
      answer: (
        <>
          <p className="font-bold text-white mb-2">Yes.</p>
          <p>CSCA supports partnerships with:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2 marker:text-red-500">
            <li>Indian and international training institutes</li>
            <li>Corporates and startups</li>
            <li>Government, PSU, and global organizations</li>
          </ul>
          <p className="mt-2 text-sm text-gray-500">All partnerships follow quality and compliance standards.</p>
        </>
      )
    },
    {
      question: "Does CSCA provide global job placement?",
      answer: (
        <>
          <p>CSCA is a certification authority, <span className="text-red-400 font-bold underline decoration-red-500/30 underline-offset-4">not a placement agency.</span></p>
          <p className="mt-2">However, CSCA certifications help candidates:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2 marker:text-red-500">
            <li>Improve global job eligibility</li>
            <li>Apply for remote and international roles</li>
            <li>Strengthen freelancing and consulting profiles</li>
          </ul>
        </>
      )
    },
    {
      question: "Why choose CSCA as a global certification?",
      answer: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {['Globally applicable skill validation', 'Practical and industry-driven exams', 'International verification system', 'Open learning model', 'Designed for modern cybersecurity careers'].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-300 bg-white/[0.03] p-3 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
              <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-red-500 text-[10px] font-bold">✔</span>
              </div>
              {item}
            </div>
          ))}
        </div>
      )
    }
  ];

  const filteredFaqs = faqs.filter(f =>
    f.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-red-500/30 overflow-hidden font-['Inter']">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RedGeometricBackground
          height={40}
          jaggednessScale={2.5}
          opacity={0.4}
          planeSize={[60, 40]}
          cameraPos={[0, 0, 15]}
          ashCount={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/80 to-black"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-6 leading-none">
            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Queries</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Straight answers to your questions about CSCA certifications, global validity, and examination processes.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-full flex items-center p-1.5 w-full group-focus-within:border-red-500/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="bg-transparent border-none outline-none text-white text-sm px-3 w-full placeholder:text-white/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ List - Accordion/List Style */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact Strip */}
        <div className="mt-24 text-center">
          <p className="text-gray-400 mb-6">
            Still have questions? Our team is ready to assist.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-red-600/50">
            Contact Support <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
