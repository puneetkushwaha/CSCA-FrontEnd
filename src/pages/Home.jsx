import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import OurCourses from '../components/OurCourses';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Puneet Kushwaha",
      role: "Tier 2 SOC Analyst",
      quote: "Back in 2024 I decided to transition from DevOps into a role with more focus on cyber security, in particular Red Teaming. I took BTL1 after months of decision making and was glad I did. The hands-on training gave me everything I needed to gain the coveted gold.",
      color: "red"
    },
    {
      name: "Aditi Sharma",
      role: "Threat Hunter",
      quote: "The practical nature of the exams is what sets CSCA apart. Unlike multiple-choice certifications, I actually had to demonstrate my skills in a live environment. It gave me the confidence to tackle real-world ransomware incidents immediately after hiring.",
      color: "blue"
    },
    {
      name: "Rahul Verma",
      role: "Security Consultant",
      quote: "CSCA's content is constantly updated to reflect the latest threat landscape. Transitioning from a network admin role was challenging, but the structured learning path and community support made it actionable and achievable.",
      color: "orange"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <TrustedBy />
      <OurCourses />

      {/* Featured Certifications / Career Impact Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        {/* Background Elements */}
        {/* REVERTING TO SIMPLE BACKGROUND HERE */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Content & Stats */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-6">
                  Your Career <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                    On The Red Team
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                  Our academic content is overseen by our Academic Advisory Board, with a combined total of over 100 years' experience in the security industry.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/10">
                <div>
                  <div className="text-4xl font-black text-white stroke-text-red mb-1">100K+</div>
                  <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Students</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">19</div>
                  <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Courses</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">4</div>
                  <div className="text-xs font-bold text-red-500 uppercase tracking-widest">Certifications</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/success-stories"
                  className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded hover:bg-gray-200 transition-colors"
                >
                  Read Success Stories
                </Link>
                <Link
                  to="/about-us"
                  className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-white/5 transition-colors"
                >
                  Meet The Board
                </Link>
              </div>
            </div>

            {/* Right Column: Testimonial Card */}
            <div className="relative">
              {/* Decorative Hexagon Pattern */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600/10 opacity-50 blur-2xl rounded-full"></div>

              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-red-900/10 transition-all duration-500 min-h-[400px] flex flex-col justify-between group hover:border-red-600/30">

                {/* Content Container with Key for Animation */}
                <div key={activeTestimonial} className="animate-in fade-in slide-in-from-right-4 duration-500">
                  {/* Quote Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8 leading-none">
                    My Experience With <br />
                    <span className="text-red-500">CSCA Red Team</span>
                  </h3>

                  {/* Quote Text */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-10 min-h-[80px]">
                    "{testimonials[activeTestimonial].quote}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-6">
                    {/* Avatar / Polygon Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                      <span className="text-2xl font-black text-white">{testimonials[activeTestimonial].name.charAt(0)}</span>
                    </div>

                    <div>
                      <div className="text-lg font-black text-white uppercase">{testimonials[activeTestimonial].name}</div>
                      <div className="text-xs font-bold text-red-500 uppercase tracking-widest">{testimonials[activeTestimonial].role}</div>
                    </div>
                  </div>
                </div>

                {/* Slider Dots */}
                <div className="flex gap-2 mt-8 justify-end">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'bg-red-500 w-6' : 'bg-white/10 hover:bg-white/30'}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>

      {/* Compact Contact / CTA Section */}
      <section className="py-12 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                Still have questions?
              </h2>
              <p className="text-gray-400 text-sm">
                Our advisors are ready to help you choose the right path.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              {/* Contact Button */}
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded hover:bg-gray-200 transition-colors"
              >
                <span>Contact Support</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>

              {/* FAQ Link */}
              <Link
                to="/faq"
                className="flex items-center gap-2 px-6 py-3 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-white/5 transition-colors"
              >
                <span>Read FAQ</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
