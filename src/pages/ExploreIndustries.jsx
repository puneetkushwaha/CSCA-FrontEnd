import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Shield,
  Cloud,
  Database,
  Wifi,
  Users,
  TrendingUp,
  Lock,
  Server,
  Brain,
  Code,
  Globe,
  BookOpen, // ✅ Added missing import
} from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const ExploreIndustries = () => {
  const [activeTab, setActiveTab] = useState('All Technology');

  const sectorsData = {
    'All Technology': {
      icon: <Globe className="w-5 h-5" />,
      heroTitle: (
        <>
          Technology drives <span className="text-red-500">innovation</span>
        </>
      ),
      heroText:
        'Technology drives innovation and shapes the way we live, work, and connect. From cybersecurity and networking to AI, data, and cloud computing, tech professionals play a vital role in building and maintaining the systems that power our digital world.',
      stats: [
        { value: '6M', label: 'Tech workforce size', sub: 'Professionals across all sectors' },
        { value: '$2T', label: 'Economic Impact', sub: 'Annual contribution to economy' },
      ],
      heroImage:
        'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000',
      jobs: [
        { id: 'tech-support-specialist', title: 'Tech Support Specialist', description: 'Solves technical issues and sets up workspaces.', icon: <Monitor className="w-6 h-6 text-red-500" /> },
        { id: 'network-administrator', title: 'Network Administrator', description: 'Manages and maintains existing networks.', icon: <Wifi className="w-6 h-6 text-red-500" /> },
        { id: 'software-developer', title: 'Software Developer', description: 'Designs and builds software applications.', icon: <Code className="w-6 h-6 text-red-500" /> },
        { id: 'it-project-manager', title: 'IT Project Manager', description: 'Plans and oversees technical projects.', icon: <Users className="w-6 h-6 text-red-500" /> },
      ],
    },
    'Cybersecurity': {
      icon: <Shield className="w-5 h-5" />,
      heroTitle: (
        <>
          Secure the <span className="text-red-500">Digital Frontier</span>
        </>
      ),
      heroText:
        'Cybersecurity professionals are the digital bodyguards of the modern world. They protect networks, devices, and data from unauthorized access and criminal use, ensuring the confidentiality, integrity, and availability of information.',
      stats: [
        { value: '3.5M', label: 'Unfilled Jobs', sub: 'Global cybersecurity shortage' },
        { value: '32%', label: 'Job Growth', sub: 'Faster than average growth' },
      ],
      heroImage:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      jobs: [
        { id: 'cybersecurity-analyst', title: 'Security Analyst', description: 'Monitors networks for security breaches.', icon: <Shield className="w-6 h-6 text-red-500" /> },
        { id: 'penetration-tester', title: 'Penetration Tester', description: 'Simulates cyberattacks to find weaknesses.', icon: <Lock className="w-6 h-6 text-red-500" /> },
        { id: 'cybersecurity-engineer', title: 'Security Engineer', description: 'Builds and maintains security systems.', icon: <Server className="w-6 h-6 text-red-500" /> },
        { id: 'cybersecurity-manager', title: 'CISO', description: 'Executive responsible for information security.', icon: <Users className="w-6 h-6 text-red-500" /> },
      ],
    },
    'Networking': {
      icon: <Wifi className="w-5 h-5" />,
      heroTitle: (
        <>
          Connect the <span className="text-red-500">World</span>
        </>
      ),
      heroText:
        'Networking is the backbone of the internet. Professionals in this field design, implement, and manage the wired and wireless networks that allow computers and devices to communicate and share resources across the globe.',
      stats: [
        { value: '5B+', label: 'Connected Users', sub: 'Global internet users' },
        { value: '$60B', label: 'Market Size', sub: 'Network infrastructure market' },
      ],
      heroImage:
        'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1000',
      jobs: [
        { id: 'network-engineer', title: 'Network Engineer', description: 'Designs and implements network solutions.', icon: <Wifi className="w-6 h-6 text-red-500" /> },
        { id: 'network-administrator', title: 'Network Architect', description: 'Plans and designs data communication networks.', icon: <Server className="w-6 h-6 text-red-500" /> },
        { id: 'systems-engineer', title: 'Systems Administrator', description: 'Manages daily operations of networks.', icon: <Monitor className="w-6 h-6 text-red-500" /> },
        { id: 'tech-support-specialist', title: 'Network Technician', description: 'Troubleshoots and repairs network issues.', icon: <Code className="w-6 h-6 text-red-500" /> },
      ],
    },
    'Cloud': {
      icon: <Cloud className="w-5 h-5" />,
      heroTitle: (
        <>
          Powering the <span className="text-red-500">Future</span>
        </>
      ),
      heroText:
        'Cloud computing enables on-demand access to computing resources. Cloud professionals design, deploy, and manage applications and services in cloud environments like AWS, Azure, and Google Cloud.',
      stats: [
        { value: '$600B', label: 'Public Cloud', sub: 'Projected market value' },
        { value: '94%', label: 'Adoption Rate', sub: 'Enterprises using cloud services' },
      ],
      heroImage:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      jobs: [
        { id: 'cloud-architect', title: 'Cloud Architect', description: 'Designs cloud computing strategies.', icon: <Cloud className="w-6 h-6 text-red-500" /> },
        { id: 'devops-engineer', title: 'DevOps Engineer', description: 'Bridges gap between development and operations.', icon: <Code className="w-6 h-6 text-red-500" /> },
        { id: 'cybersecurity-specialist', title: 'Cloud Security Specialist', description: 'Secures cloud-based applications.', icon: <Shield className="w-6 h-6 text-red-500" /> },
        { id: 'linux-administrator', title: 'Cloud Administrator', description: 'Manages cloud infrastructure instances.', icon: <Server className="w-6 h-6 text-red-500" /> },
      ],
    },
    'AI/Data': {
      icon: <Brain className="w-5 h-5" />,
      heroTitle: (
        <>
          Unlock <span className="text-red-500">Intelligence</span>
        </>
      ),
      heroText:
        'Data and AI are transforming industries. Professionals in this field analyze complex data to find trends, build machine learning models, and create intelligent systems that solve difficult problems.',
      stats: [
        { value: '35%', label: 'AI Adoption', sub: 'Global business adoption rate' },
        { value: '11.5M', label: 'New Jobs', sub: 'AI/Data roles by 2026' },
      ],
      heroImage:
        'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000',
      jobs: [
        { id: 'data-scientist', title: 'Data Scientist', description: 'Analyzes data to extract actionable insights.', icon: <Database className="w-6 h-6 text-red-500" /> },
        { id: 'ai-engineer', title: 'AI/ML Engineer', description: 'Builds artificial intelligence models.', icon: <Brain className="w-6 h-6 text-red-500" /> },
        { id: 'data-analyst', title: 'Data Analyst', description: 'Interprets data sets for business decisions.', icon: <TrendingUp className="w-6 h-6 text-red-500" /> },
        { id: 'data-engineer', title: 'Data Engineer', description: 'Builds systems for collecting and validating data.', icon: <Server className="w-6 h-6 text-red-500" /> },
      ],
    },
  };

  const currentData = sectorsData[activeTab];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-red-900 selection:text-white overflow-hidden font-sans">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RedGeometricBackground
          height={30}
          jaggednessScale={2.5}
          opacity={0.4}
          planeSize={[60, 40]}
          cameraPos={[0, 0, 15]}
          ashCount={200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="text-sm font-mono text-red-500 mb-4 tracking-widest uppercase">
              Cybersecurity Isn’t One-Size-Fits-All &gt; Industries Need Specialists
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
              Industry{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Sectors
              </span>
            </h1>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 border-b border-white/10 mb-16">
              {Object.keys(sectorsData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group ${
                    activeTab === tab
                      ? 'text-white bg-white/5'
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {sectorsData[tab].icon}
                    {tab}
                  </span>
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Section */}
          <div
            key={activeTab}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {currentData.heroTitle}
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {currentData.heroText}
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                {currentData.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-xs font-mono text-red-500 mb-1 uppercase tracking-widest">
                      {stat.label}
                    </div>
                    <div className="text-5xl font-black text-white mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-500">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10"></div>
              <img
                src={currentData.heroImage}
                alt={activeTab}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>
          </div>

          {/* === Explore Industries === */}
          <section id="industries" className="min-h-screen px-6 md:px-12 py-20 bg-black">
            <h2 className="text-4xl font-bold text-red-500 mb-10 text-center">
              Explore Industries
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-gray-200 max-w-6xl mx-auto">
              {[
                {
                  title: 'Finance & Banking',
                  roles: 'SOC Analyst, Detection Engineer, Fraud Investigator',
                  risks: 'Financial fraud, transactional abuse, APT threats',
                  rec: 'CJDE, CSA, CTI',
                },
                {
                  title: 'Healthcare',
                  roles: 'IR Analyst, Forensics Analyst',
                  risks: 'Ransomware, PHI breaches, critical systems compromise',
                  rec: 'CIRA, CDFP',
                },
                {
                  title: 'SaaS & IT',
                  roles: 'Cloud Security Engineer, Threat Hunter',
                  risks: 'Cloud misconfiguration, token hijacking',
                  rec: 'CCSP, CTH',
                },
                {
                  title: 'Government & Defense',
                  roles: 'Threat Intel Analyst, Forensics Lead',
                  risks: 'APT, espionage, critical infrastructure breaches',
                  rec: 'CTIP, CDFP',
                },
                {
                  title: 'E-Commerce / Retail',
                  roles: 'Vulnerability Analyst',
                  risks: 'Payment fraud, API threats',
                  rec: 'CVA, CJDE',
                },
                {
                  title: 'Critical Infrastructure (ICS/SCADA)',
                  roles: 'ICS Security Engineer',
                  risks: 'OT disruption, industrial control compromise',
                  rec: 'CICS, CTI',
                },
              ].map((ind, i) => (
                <div
                  key={i}
                  className="bg-[#0a0a0a] border border-red-900/30 p-6 rounded-xl hover:border-red-500/40 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {ind.title}
                  </h3>
                  <p>
                    <strong>Roles:</strong> {ind.roles}
                  </p>
                  <p>
                    <strong>Risks:</strong> {ind.risks}
                  </p>
                  <p>
                    <strong>Recommended:</strong> {ind.rec}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* === Explore Tech Careers === */}
          <section id="tech-careers" className="min-h-screen px-6 md:px-12 py-20 bg-black/90">
            <h2 className="text-4xl font-bold text-red-500 mb-12 text-center">
              Explore Tech Careers
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-gray-200 max-w-6xl mx-auto">
              {/* Entry Level */}
              <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-white mb-3">Entry Level</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>SOC Analyst L1</li>
                  <li>Junior Detection Engineer</li>
                  <li>Cybersecurity Support Technician</li>
                </ul>
              </div>

              {/* Intermediate */}
              <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-white mb-3">Intermediate</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>SOC Analyst L2</li>
                  <li>Incident Response Analyst</li>
                  <li>Threat Hunter</li>
                  <li>Vulnerability Analyst</li>
                </ul>
              </div>

              {/* Advanced */}
              <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-white mb-3">Advanced</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Detection Engineer</li>
                  <li>Threat Intelligence Analyst</li>
                  <li>Cloud Security Engineer</li>
                  <li>Malware Analyst</li>
                  <li>Senior SOC Engineer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* === Each Career Page Includes === */}
          <section
            id="career-details"
            className="min-h-screen px-6 md:px-12 py-20 bg-[#0a0a0a] text-center"
          >
            <h2 className="text-4xl font-bold text-red-500 mb-10">
              Each Career Page Includes
            </h2>
            <ul className="text-gray-200 space-y-4 text-lg max-w-2xl mx-auto">
              <li>• Role Overview</li>
              <li>• Required Skills</li>
              <li>
                • Tools You Use{' '}
                <span className="text-gray-400 text-sm">
                  (SIEM, EDR, Sigma, Suricata, YARA, Splunk, ELK)
                </span>
              </li>
              <li>• Growth Path</li>
              <li>• Salary Benchmarks</li>
              <li>• Recommended CSCA Certifications</li>
            </ul>
          </section>

          {/* === Additional Resources === */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Research */}
              <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <TrendingUp className="w-32 h-32 text-white" />
                </div>
                <h4 className="text-lg font-bold text-red-500 uppercase tracking-widest mb-4">
                  Research Highlight
                </h4>
                <p className="text-xl font-medium text-white mb-6 leading-relaxed relative z-10">
                  CSCA’s Tech Jobs Report provides a monthly snapshot of IT employment trends across
                  occupations and industry verticals.
                </p>
                <Link
                  to="/resources/research"
                  className="inline-flex items-center px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors rounded-lg"
                >
                  Learn more
                </Link>
              </div>

              {/* Blogs */}
              <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <BookOpen className="w-32 h-32 text-white" />
                </div>
                <h4 className="text-lg font-bold text-red-500 uppercase tracking-widest mb-4">
                  Explore Our Blogs
                </h4>
                <p className="text-xl font-medium text-white mb-6 leading-relaxed relative z-10">
                  CSCA’s Career Pathways offer structured and comprehensive roadmaps for learners to
                  excel in high-demand cybersecurity and IT roles.
                </p>
                <Link
                  to="/resources/blog"
                  className="inline-flex items-center px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors rounded-lg"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreIndustries;
