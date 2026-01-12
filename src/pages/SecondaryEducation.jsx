import React, { useState } from "react";
import {
  BookOpen,
  Wrench,
  FolderOpen,
  Map,
  Briefcase,
} from "lucide-react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const SecondaryEducation = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black"></div>
      </div>

      {/* Header Section */}
      <header className="relative z-10 py-16 px-6 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-sm font-mono text-red-500 mb-4 tracking-widest uppercase">
            Explore Academics &gt; Secondary Education
          </div>
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight mb-10">
            Secondary{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Education
            </span>
          </h1>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-1 border-b border-white/10">
            {[
              { name: "Overview", icon: <BookOpen className="w-5 h-5" /> },
              { name: "Solutions", icon: <Wrench className="w-5 h-5" /> },
              { name: "Resources", icon: <FolderOpen className="w-5 h-5" /> },
              { name: "CSCA Pathways", icon: <Map className="w-5 h-5" /> },
              { name: "Case Studies", icon: <Briefcase className="w-5 h-5" /> },
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group ${activeTab === tab.name
                    ? "text-white bg-white/5"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
              >
                {tab.icon} {tab.name}
                {activeTab === tab.name && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8 pb-24">

        {/* ------------------ OVERVIEW TAB ------------------ */}
        {activeTab === "Overview" && (
          <div
            key="overview"
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Expand Your Tech Programs */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Expand your tech programs
                </h2>
                <p className="text-gray-400 mb-6">
                  CSCA empowers districts and schools to strengthen tech programs by
                  aligning with state standards, supporting educators, and equipping
                  students with job-ready skills through:
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                  <li>Comprehensive training</li>
                  <li>Interactive curriculum</li>
                  <li>Assessments</li>
                  <li>Industry-recognized certifications</li>
                </ul>
                <p className="text-gray-400 mb-6">
                  CSCA's all-in-one solutions help enable scalable success for tech
                  programs.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000"
                  alt="teacher and students working on computers"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Let's Connect CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden mb-24"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
    <p className="text-lg mb-8 text-white/90">
      Ready to take the next step? Prepare your students for their next step
      with job-ready and market-aligned tech skills.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Connect with us
    </button>
  </div>
</section>



            {/* Client Proctored Exams */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                  alt="client proctor system"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Offer Client Proctored Exams</h3>
                <p className="text-gray-400 mb-6">
                  The CSCA Client Proctor Test Delivery System provides a streamlined
                  and convenient solution for delivering select CSCA certification
                  exams.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Learn more
                </button>
              </div>
            </section>

            {/* Certification Pathways */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-4">Certification pathways</h3>
                <p className="text-gray-400 mb-6">
                  CSCA's certification pathways guide learners from basic to advanced
                  skills in Core, Infrastructure, Cybersecurity, Data & Analytics, and
                  Professional fields, preparing them for successful tech careers.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View pathways
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                  alt="students working"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Blog Section */}
            <section className="mb-24">
              <h3 className="text-4xl font-bold mb-10 text-center">CSCA Blog</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "What Are Useful IT Certifications for High School Students?",
                    tag: "Academic | Secondary Ed | Students",
                    image:
                      "https://images.unsplash.com/photo-1584697964403-85b3d4d9eac0?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title: "How to Learn Tech Skills: 5 Things to Practice at Home",
                    tag: "Digital Foundations",
                    image:
                      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title: "The New CSCA A+: Your Questions Answered",
                    tag: "A+ | Tech Support",
                    image:
                      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000",
                  },
                ].map((blog, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-xl mb-4 h-48 w-full object-cover"
                    />
                    <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{blog.tag}</p>
                    <button className="text-red-500 font-semibold hover:underline">
                      Read more
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Expand Program CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Expand your tech program</h2>
    <p className="text-lg mb-8 text-white/90">
      Ready to see how CSCA can help grow your tech-focused CTE program?
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </div>
        )}


        {/* ------------------ SOLUTIONS TAB ------------------ */}
        {activeTab === "Solutions" && (
          <div
            key="solutions"
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Future-Ready Tech Pathways */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Future-ready tech pathways
                </h2>
                <p className="text-gray-400 mb-6">
                  Enhance your CTE program with our curriculum and certifications,
                  designed to support learning and develop industry-ready skills.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="students working in a classroom"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Flexible Learning Solutions */}
            <section className="text-center mb-24">
              <h3 className="text-4xl font-extrabold mb-6">
                Flexible learning solutions
              </h3>
              <p className="text-gray-400 max-w-3xl mx-auto mb-8">
                Learn more about our solutions designed to empower, educate and unlock
                potential.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Get started with an expert
                </button>
                <button className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all">
                  Connect with an expert
                </button>
              </div>
            </section>

            {/* Build Your Own Solutions */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000"
                  alt="teacher and students in lab"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Build your own solutions</h3>
                <p className="text-gray-400 mb-6">
                  CSCA’s flexible learning solutions, including curriculum and industry
                  certifications, empower you to choose the tools and resources that
                  best align with your tech program goals.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    Try a CertMaster lab
                  </button>
                  <button className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all">
                    Buy today
                  </button>
                </div>
              </div>
            </section>

            {/* Industry-Recognized Certifications */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Industry-recognized certifications
                </h3>
                <p className="text-gray-400 mb-6">
                  CSCA's certifications validate students' expertise, paving the way for
                  professional growth in essential technology career pathways.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View certifications
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                  alt="students with certifications"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* OnDemand Learning Products */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                  alt="student using laptop"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">OnDemand learning products</h3>
                <p className="text-gray-400 mb-6">
                  CSCA's OnDemand learning products offer flexible, anytime access to
                  industry-leading IT training and certifications, enabling learners to
                  progress at their own pace.
                </p>
                <p className="text-gray-400 mb-6">
                  OnDemand products available include Tech+, A+, Network+, Security+,
                  Linux+, and Data+.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    Watch demo video
                  </button>
                  <button className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all">
                    Try a walk through
                  </button>
                </div>
              </div>
            </section>

            {/* Expand Your Tech Program CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Expand your tech program</h2>
    <p className="text-lg mb-8 text-white/90">
      Ready to see how CSCA can help grow your tech-focused CTE program?
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </div>
        )}

        {/* ------------------ RESOURCES TAB ------------------ */}
        {activeTab === "Resources" && (
          <div
            key="resources"
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* CSCA Instructor Network */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  CSCA Instructor Network
                </h2>
                <p className="text-gray-400 mb-4 text-lg">
                  <strong>Connect with fellow instructors</strong>
                </p>
                <p className="text-gray-400 mb-6">
                  Join the CSCA Instructor Network (CIN) to connect with industry
                  leaders, access exclusive resources, and stay ahead in the
                  ever-evolving tech landscape. Discover opportunities to collaborate,
                  share insights, and drive innovation within the tech community.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Join CIN
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000"
                  alt="instructors collaboration"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* CSCA and College Board AP Kickstart */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                  alt="students learning technology"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  CSCA and College Board AP Kickstart
                </h3>
                <p className="text-gray-400 mb-6">
                  College Board and CSCA are collaborating to combine the value of
                  CSCA’s industry-leading certifications with College Board’s AP Career
                  Kickstart program to provide students with the tools and knowledge
                  they need to succeed in technology careers.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Learn more
                </button>
              </div>
            </section>

            {/* Tech Education Funding */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-4">Tech education funding</h3>
                <p className="text-gray-400 mb-6">
                  Explore funding opportunities designed to support your tech education
                  and workforce development initiatives.
                </p>
                <p className="text-gray-400 mb-6">
                  Learn how CSCA can help you access grants, scholarships, and resources
                  to fuel your mission and empower future tech talent.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Connect with an expert
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                  alt="funding opportunities"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Essential Tools for CSCA Partners */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581091870622-7c8b3f7a3f90?auto=format&fit=crop&q=80&w=1000"
                  alt="CSCA partners"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Essential tools for CSCA partners
                </h3>
                <p className="text-gray-400 mb-6">
                  Access exclusive resources designed to support and empower your
                  partnership with CSCA.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View resources
                </button>
              </div>
            </section>

            {/* CSCA Blog Section */}
            <section className="mb-24">
              <h3 className="text-4xl font-bold mb-10 text-center">CSCA Blog</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "What Are Useful IT Certifications for High School Students?",
                    tag: "Academic | Secondary Ed | Students",
                    image:
                      "https://images.unsplash.com/photo-1584697964403-85b3d4d9eac0?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title: "How to Learn Tech Skills: 5 Things to Practice at Home",
                    tag: "Digital Foundations",
                    image:
                      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title: "The New CSCA A+: Your Questions Answered",
                    tag: "A+ | Tech Support",
                    image:
                      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000",
                  },
                ].map((blog, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-xl mb-4 h-48 w-full object-cover"
                    />
                    <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{blog.tag}</p>
                    <button className="text-red-500 font-semibold hover:underline">
                      Read more
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Expand Program CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Expand your tech program</h2>
    <p className="text-lg mb-8 text-white/90">
      Ready to see how CSCA can help grow your tech-focused CTE program?
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </div>
        )}

        {/* ------------------ CSCA PATHWAYS TAB ------------------ */}
        {activeTab === "CSCA Pathways" && (
          <div
            key="pathways"
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Certification Pathways Header */}
            <section className="text-center mb-20">
              <h2 className="text-5xl font-black mb-4 leading-tight">
                Certification pathways
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                CSCA's certification pathways provide a strategic roadmap through
                diverse tech disciplines, enabling students to build a solid foundation
                and advance into specialized areas.
              </p>
            </section>

            {/* Pathway Cards Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              {[
                {
                  title: "AI",
                  description:
                    "Develop advanced skills in artificial intelligence to unlock powerful insights and fuel innovation in a rapidly evolving tech landscape.",
                  image:
                    "https://images.unsplash.com/photo-1581091870622-7c8b3f7a3f90?auto=format&fit=crop&q=80&w=1000",
                },
                {
                  title: "Cloud",
                  description:
                    "Gain the skills to manage, deploy, and secure cloud environments, preparing for careers in the rapidly growing cloud computing industry.",
                  image:
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
                },
                {
                  title: "Cyber",
                  description:
                    "Develop critical cybersecurity skills to protect systems, networks, and data from evolving threats in the digital landscape.",
                  image:
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
                },
                {
                  title: "Data",
                  description:
                    "Develop expertise in data systems and analytics, including data analysis, visualization, governance, and applying insights to drive informed business decisions.",
                  image:
                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
                },
                {
                  title: "Digital Skills",
                  description:
                    "Master essential digital tools and technologies to thrive in modern workplaces and adapt to evolving tech demands.",
                  image:
                    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000",
                },
                {
                  title: "Network",
                  description:
                    "Learn to design, implement, and manage networks, ensuring seamless communication and connectivity in IT environments.",
                  image:
                    "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1000",
                },
                {
                  title: "Tech Support",
                  description:
                    "Acquire foundational IT knowledge to troubleshoot, maintain, and support technology systems, launching a career in IT support.",
                  image:
                    "https://images.unsplash.com/photo-1581091226825-c6a7f94a59a1?auto=format&fit=crop&q=80&w=1000",
                },
              ].map((path, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)] transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={path.image}
                      alt={path.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold">
                      {path.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    <button className="bg-[#d71f28] text-white text-sm font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform">
                      Explore products
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* Expand Program CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Expand your tech program</h2>
    <p className="text-lg mb-8 text-white/90">
      Ready to see how CSCA can help grow your tech-focused CTE program?
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </div>
        )}

        {/* ------------------ CASE STUDIES TAB ------------------ */}
        {activeTab === "Case Studies" && (
          <div
            key="case-studies"
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Feature Story */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Feature Story
                </h2>
                <h3 className="text-3xl font-bold mb-4">
                  Shaping the future of tech with CSCA
                </h3>
                <p className="text-gray-400 mb-6">
                  In a world where technology is embedded in every industry, CTE
                  Administrator Snehal Bhakta with Clark County Schools in Nevada,
                  believes preparing students for the future means equipping them with
                  the technical skills and certifications needed to thrive in a
                  tech-driven world.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Read case study
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1584697964403-85b3d4d9eac0?auto=format&fit=crop&q=80&w=1000"
                  alt="case study classroom"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Educators Making a Difference */}
            <section className="mb-24">
              <h3 className="text-4xl font-bold mb-10 text-center">
                Educators making a difference
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title:
                      "Empowering students through IT education: Byron Martin ATC's success with CSCA",
                    description:
                      "Discover how the Byron Martin Advanced Technology Center in Texas empowers students through CertMaster curriculum and the Instructor Network to earn certifications and pursue high-paying tech jobs.",
                    image:
                      "https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title:
                      "Snehal Bhakta in Clark County School District is shaping the future of tech with CSCA",
                    description:
                      "Learn how Clark County Schools in Nevada, led by CTE Administrator Snehal Bhakta, prepare students for high-demand careers using CSCA certifications that validate skills and boost confidence.",
                    image:
                      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title:
                      "Empowering students to launch cybersecurity careers",
                    description:
                      "Discover how Culpeper Technical Education Center prepares students for cybersecurity careers with CSCA certifications, helping them achieve success and secure high-paying jobs.",
                    image:
                      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title:
                      "Gwinnett County's Cybersecurity Program is unlocking potential for students",
                    description:
                      "Learn how Gwinnett County Schools in Georgia are preparing students for cybersecurity careers through Career Pathway programs and CSCA certifications like Security+.",
                    image:
                      "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title:
                      "Building a cybersecurity future: Empowering teachers and students with CSCA",
                    description:
                      "A dedicated program supported by CSCA resources is helping non-technical teachers gain the confidence and skills to teach cybersecurity — empowering students to pursue tech careers.",
                    image:
                      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000",
                  },
                ].map((caseItem, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)] transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-semibold mb-3">{caseItem.title}</h4>
                      <p className="text-gray-400 text-sm mb-6 flex-grow">
                        {caseItem.description}
                      </p>
                      <button className="text-red-500 font-semibold hover:underline mt-auto">
                        Learn more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Student Success Stories */}
            <section className="mb-24">
              <h3 className="text-4xl font-bold mb-10 text-center">
                Student success stories
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Brandon Howell's journey to a cybersecurity career",
                    description:
                      "Discover how Brandon Howell used CSCA certifications like Security+ and IT Fundamentals to launch his cybersecurity career and gain real-world skills.",
                    image:
                      "https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title:
                      "IT certifications have brightened Jason Pucilowski's future",
                    description:
                      "High school student Jason Pucilowski turned his passion for IT into a promising career using CSCA A+, Network+, and Security+ certifications.",
                    image:
                      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title: "Kendra discovers a passion for tackling tech problems",
                    description:
                      "Kendra Cole from Mississippi is building her IT future with CSCA A+ and Network+ certifications, and has even won the SkillsUSA state championship.",
                    image:
                      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
                  },
                ].map((student, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={student.image}
                        alt={student.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-semibold mb-3">{student.title}</h4>
                      <p className="text-gray-400 text-sm mb-6 flex-grow">
                        {student.description}
                      </p>
                      <button className="text-red-500 font-semibold hover:underline mt-auto">
                        Learn more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Expand Program CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Expand your tech program</h2>
    <p className="text-lg mb-8 text-white/90">
      Ready to see how CSCA can help grow your tech-focused CTE program?
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>
          </div>
        )}

      </main>
    </div>
  );
};

export default SecondaryEducation;
