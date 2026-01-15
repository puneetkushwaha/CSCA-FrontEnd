import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Building the next generation of cybersecurity professionals through hands-on, practical training.'
    },
    {
      icon: Target,
      title: 'Industry Aligned',
      description: 'Our curriculum mirrors real-world scenarios that security teams face daily in the field.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join 100,000+ certified professionals who are protecting organizations worldwide.'
    },
    {
      icon: Award,
      title: 'Globally Recognized',
      description: 'CSCA certifications are trusted by employers and respected across the security industry.'
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
              About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                CSCA
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Codevirus Security Certification Authority (CSCA) is the leading provider of
              hands-on cybersecurity certifications trusted by professionals and organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              At CSCA, we believe that cybersecurity education should be <strong className="text-white">practical,
                accessible, and immediately applicable</strong>. We're committed to closing the cybersecurity skills
              gap by providing certifications that prove real-world competency, not just theoretical knowledge.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our certifications are designed by industry experts who understand what skills are needed in today's
              threat landscape. Every exam is hands-on, every course is updated regularly, and every certification
              demonstrates that you can actually do the job.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Our Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at CSCA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-red-600/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              By The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-3">100K+</div>
              <div className="text-sm font-bold text-red-500 uppercase tracking-widest">Certified Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-3">19</div>
              <div className="text-sm font-bold text-red-500 uppercase tracking-widest">Certification Courses</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-3">150+</div>
              <div className="text-sm font-bold text-red-500 uppercase tracking-widest">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-3">95%</div>
              <div className="text-sm font-bold text-red-500 uppercase tracking-widest">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            Ready To <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join the global community of cybersecurity professionals who chose CSCA to advance their careers.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/certifications"
              className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded hover:bg-gray-200 transition-colors"
            >
              Browse Certifications
            </Link>
            <Link
              to="/about-us"
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-white/5 transition-colors"
            >
              Meet The Board
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
