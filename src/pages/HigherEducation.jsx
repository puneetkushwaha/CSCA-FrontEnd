import React, { useState } from "react";
import { BookOpen, Wrench, FolderOpen, Map, Briefcase } from "lucide-react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const HigherEducation = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { name: "Overview", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Solutions", icon: <Wrench className="w-5 h-5" /> },
    { name: "Resources", icon: <FolderOpen className="w-5 h-5" /> },
    { name: "CSCA Pathways", icon: <Map className="w-5 h-5" /> },
    { name: "Case Studies", icon: <Briefcase className="w-5 h-5" /> },
  ];

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

      {/* Header */}
      <header className="relative z-10 py-16 px-6 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-sm font-mono text-red-500 mb-4 tracking-widest uppercase">
            Explore Academics &gt; Higher Education
          </div>

          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              HIGHER EDUCATION
            </span>
          </h1>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1 border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group flex items-center gap-2
                  ${activeTab === tab.name
                    ? "text-white bg-white/5"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
              >
                {tab.icon}
                {tab.name}
                {activeTab === tab.name && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-20 pb-20 max-w-[1440px] mx-auto px-6 lg:px-8">
        {/* ------------------ OVERVIEW TAB ------------------ */}
        {activeTab === "Overview" && (
          <>
            {/* Hero Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                  Prepare your students for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    tech-driven careers
                  </span>
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  CSCA’s certifications and resources uniquely bridge the gap
                  between education and industry, meeting the soaring tech skills
                  demand beyond traditional degrees.
                </p>
                <p className="text-gray-400 mb-6">
                  CSCA's comprehensive industry-aligned tools, curriculum,
                  assessments, and certifications equip students with the skills
                  needed for today's dynamic tech job market.
                </p>
                <ul className="space-y-2 text-gray-400 mb-8 list-disc list-inside">
                  <li>
                    Validate in-demand tech skills with certifications that enhance
                    student employability.
                  </li>
                  <li>
                    Seamlessly integrate CSCA's solutions into your curriculum with
                    tailored resources and support.
                  </li>
                  <li>
                    Provide students with practical, hands-on learning experiences
                    aligned with real-world industry needs.
                  </li>
                  <li>
                    Our higher education experts will partner with you to build the
                    right solution for your program.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="Teacher teaching students"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Let's Connect */}
            <section className="text-center mb-24">
              <h3 className="text-4xl font-bold mb-6">LET'S CONNECT</h3>
              <p className="text-gray-400 mb-4 text-lg">
                Ready to take the next step? Give your students the tech skills
                they need to succeed in today's market.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Connect with us
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                  Offer Client Proctored Exams
                </button>
              </div>
            </section>

            {/* Client Proctor */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <h3 className="text-4xl font-bold mb-4">
                  CSCA Client Proctor Test Delivery System
                </h3>
                <p className="text-gray-400 mb-4">
                  The CSCA Client Proctor Test Delivery System provides a streamlined
                  and convenient solution for delivering select CSCA certification
                  exams.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Learn more
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581091870622-7c8b3f7a3f90?auto=format&fit=crop&q=80&w=1000"
                  alt="Proctoring system"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Career Pathways */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1603575448366-3a3b91c41b6e?auto=format&fit=crop&q=80&w=1000"
                  alt="Career Pathways"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-4">Career Pathways</h3>
                <p className="text-gray-400 mb-4">
                  CSCA's career pathways provide a comprehensive and structured
                  approach to IT education, guiding students from foundational
                  knowledge to advanced expertise.
                </p>
                <p className="text-gray-400 mb-6">
                  These pathways equip learners with the skills needed to excel in
                  various technology fields, ensuring they are well-prepared for
                  rewarding careers in tech.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#d71f28] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    View CSCA pathways
                  </button>
                  <button className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                    View IT roadmap
                  </button>
                </div>
              </div>
            </section>

            {/* Partner */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <h3 className="text-4xl font-bold mb-4">
                  Unlock the value of partnering with CSCA
                </h3>
                <p className="text-gray-400 mb-4">
                  Empower Instructors, Improve Learner Success with CertMaster.
                </p>
                <p className="text-gray-400 mb-6">
                  Request instructor access and see how CSCA can support your
                  institution.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Learn more
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                  alt="Instructor presenting"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Meet With Us */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Meet with us</h2>
    <p className="text-lg mb-8 text-white/90">
      Request instructor access and see how CSCA can support your institution in
      empowering students and advancing tech education.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </>
        )}

        {/* ------------------ SOLUTIONS TAB ------------------ */}
        {activeTab === "Solutions" && (
          <>
            {/* Industry-aligned Solutions */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                  Industry-aligned{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                    tech education solutions
                  </span>
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  CSCA's comprehensive industry-aligned tools, curriculum,
                  assessments, and certifications equip students with the skills
                  needed for today's dynamic tech job market.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="Teacher talking with student"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Flexible Learning */}
            <section className="text-center mb-24">
              <h2 className="text-4xl font-extrabold mb-6">
                Flexible learning solutions
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto mb-8">
                Learn more about our solutions designed to empower, educate and
                unlock potential.
              </p>
              <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Connect with an expert
              </button>
            </section>

            {/* OnDemand Learning */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-4">
                  OnDemand learning products
                </h2>
                <p className="text-gray-400 mb-4">
                  CSCA's OnDemand learning products offer flexible, anytime
                  access to industry-leading IT training and certifications,
                  enabling learners to progress at their own pace.
                </p>
                <p className="text-gray-400 mb-6">
                  OnDemand products available include Tech+, A+, Network+,
                  Security+, Linux+, and Data+.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    Watch demo video
                  </button>
                  <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                    Try a walk through
                  </button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                  alt="Person working"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Industry Certifications */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                  alt="Student certification"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Industry-recognized certifications
                </h2>
                <p className="text-gray-400 mb-6">
                  CSCA's globally recognized certifications set the standard for
                  excellence in the IT industry. They validate students' expertise,
                  open doors to professional growth, and provide access to
                  industry-leading resources to keep your programs competitive.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View certifications
                </button>
              </div>
            </section>

            {/* Meet With Us CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Meet with us</h2>
    <p className="text-lg mb-8 text-white/90">
      Request instructor access and see how CSCA can support your institution in
      empowering students and advancing tech education.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </>
        )}

        {/* ------------------ RESOURCES TAB ------------------ */}
        {activeTab === "Resources" && (
          <>
            {/* Careers+ Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <h2 className="text-5xl font-black mb-6 leading-tight">
                  CSCA Careers+
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  Discover real-world career success stories that inspire students to explore their future paths confidently. Our Careers+ tool provides localized job data and insights, helping students uncover exciting opportunities.
                </p>
                <p className="text-gray-400 mb-6">
                  Visit the Careers+ page today to guide your students toward informed career decisions.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Explore now
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1603575451625-c4084dc1e29d?auto=format&fit=crop&q=80&w=1000"
                  alt="Teacher smiling in classroom"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Instructor Network Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-4">
                  CSCA Instructor Network
                </h2>
                <h3 className="text-xl font-semibold text-red-500 mb-3">
                  Connect with professional educators
                </h3>
                <p className="text-gray-400 mb-6">
                  Join the CSCA Instructor Network (CIN) to connect with industry leaders, access exclusive resources, and stay ahead in the ever-evolving tech landscape. Discover opportunities to collaborate, share insights, and drive innovation within the tech community.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Learn more
                </button>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1603570413909-7e705e53cbd7?auto=format&fit=crop&q=80&w=1000"
                  alt="Female on laptop"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Funding Opportunities */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Fueling innovation through tech education funding
                </h2>
                <p className="text-gray-400 mb-6">
                  Explore funding opportunities designed to support your tech education and workforce development initiatives. Learn how CSCA can help you access grants, scholarships, and resources to fuel your mission and empower future tech talent.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Connect with an expert
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1593642533144-3d62bd63b759?auto=format&fit=crop&q=80&w=1000"
                  alt="Male on laptop"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Essential Tools for Partners */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-4">
                  Essential tools for CSCA partners
                </h2>
                <p className="text-gray-400 mb-6">
                  Access exclusive resources designed to support and empower your partnership with CSCA.
                </p>
                <p className="text-gray-400 mb-8">
                  Explore our extensive library of IT training resources and guides.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View resources
                </button>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1581092335096-3afdd3aa23ff?auto=format&fit=crop&q=80&w=1000"
                  alt="Teacher assisting student"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Blog Highlights */}
            <section className="mb-24">
              <h3 className="text-3xl font-bold mb-10 text-center">
                Featured Resources & Articles
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Blog 1 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-transform">
                  <h4 className="text-xl font-bold mb-2">
                    The New CSCA A+: Your Questions Answered
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    A+ • Tech Support
                  </p>
                  <p className="text-gray-400 text-sm">
                    Learn everything about the new CSCA A+ certification and how it sets the foundation for your IT journey.
                  </p>
                </div>

                {/* Blog 2 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-transform">
                  <h4 className="text-xl font-bold mb-2">
                    Cybersecurity Certificates, Certifications, and Degrees: How to Choose
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    CySA+ • Security+ • Cyber
                  </p>
                  <p className="text-gray-400 text-sm">
                    Find out how to pick the right cybersecurity pathway for your education or career advancement.
                  </p>
                </div>

                {/* Blog 3 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-transform">
                  <h4 className="text-xl font-bold mb-2">
                    Certifications vs. Certificates
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Understand the key differences between certifications and certificates — and which one best fits your career goals.
                  </p>
                </div>
              </div>
            </section>

            {/* Meet With Us CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Meet with us</h2>
    <p className="text-lg mb-8 text-white/90">
      Request instructor access and see how CSCA can support your institution in
      empowering students and advancing tech education.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </>
        )}


        {/* ------------------ CSCA PATHWAYS TAB ------------------ */}
        {activeTab === "CSCA Pathways" && (
          <>
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6">
                Explore{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                  Career Pathways
                </span>
              </h2>
              <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
                CSCA Career Pathways guide learners through AI, Data, Cloud, Cyber,
                Digital Skills, Networking, and Tech Support careers, with
                certifications that build progressively to align with IT job roles and
                provide essential knowledge and hands-on skills for the workforce.
              </p>
            </section>

            {/* Pathways Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
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

            {/* Meet With Us CTA */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Meet with us</h2>
    <p className="text-lg mb-8 text-white/90">
      Request instructor access and see how CSCA can support your institution in
      empowering students and advancing tech education.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </>
        )}

        {/* ------------------ CASE STUDIES TAB ------------------ */}
        {/* ------------------ CASE STUDIES TAB ------------------ */}
        {activeTab === "Case Studies" && (
          <>
            {/* ---------------- Feature Story ---------------- */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                  Feature Story
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-4">
                  From medicine to cybersecurity: Shikirra’s success story
                </h3>
                <p className="text-gray-400 mb-6">
                  Discover Shakirra's journey from aspiring medical professional to
                  cybersecurity analyst, balancing motherhood, education, and a tech
                  career with CSCA certifications and WGU's flexible learning.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Watch success story
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1603570413909-7e705e53cbd7?auto=format&fit=crop&q=80&w=1000"
                  alt="Shikirra success story"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* ---------------- Proven Success Header ---------------- */}
            <section className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
                Proven success: CSCA case studies
              </h2>
            </section>

            {/* ---------------- Case Studies Grid ---------------- */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
              {/* Case 1 */}
              <article className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Transforming careers in Romania: How CSCA certifications open doors
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Adrian Savu-Jivanov, of Savnet Training Center in Romania, has spent
                  nearly 20 years bridging academic skills with industry demands,
                  leveraging CSCA certifications like Linux+, Security+, and
                  Penetration Testing to create clear career paths and transform lives
                  across the EMEA region.
                </p>
                <button className="text-red-500 font-semibold hover:underline">
                  Learn more
                </button>
              </article>

              {/* Case 2 */}
              <article className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Passion meets innovation: College of DuPage prepares IT students for success
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  The College of DuPage equips IT students with industry-relevant skills
                  and knowledge through passionate instruction and CSCA certifications.
                  This partnership helps students stay current with technology trends and launch successful careers in IT.
                </p>
                <button className="text-red-500 font-semibold hover:underline">
                  Learn more
                </button>
              </article>

              {/* Case 3 */}
              <article className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Transforming lives through technology and CSCA certifications
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  The Latin American Youth Center (LAYC) partnered with CSCA to transform lives
                  by equipping low-income students with affordable, high-quality technology training
                  and certifications. Through CSCA certifications like Tech+ and A+, students
                  have secured meaningful employment, supported their families, and built
                  sustainable career pathways—breaking the cycle of poverty and empowering educators.
                </p>
                <button className="text-red-500 font-semibold hover:underline">
                  Learn more
                </button>
              </article>
            </section>

            {/* ---------------- Student Success Stories ---------------- */}
            <section className="mb-24">
              <h3 className="text-3xl font-bold mb-10 text-center">
                Student Success Stories
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Story 1 */}
                <article className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">
                    Workforce training, CSCA certifications, and determination: Zachary Caudle’s path to systems administrator
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Zachary Caudle used Laurel Ridge Community College’s workforce training
                    and a full CSCA certification pathway to move from warehouse work
                    into a systems administrator role, earning statewide recognition for his achievement.
                  </p>
                  <button className="text-red-500 font-semibold hover:underline">
                    Learn more
                  </button>
                </article>

                {/* Story 2 */}
                <article className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">
                    Cybersecurity, certifications, and adventure: The multifaceted life of Alif Ancheita
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Discover how Alif Ancheita earned 8 IT certifications, led cybersecurity projects,
                    and showcased perseverance for career success.
                  </p>
                  <button className="text-red-500 font-semibold hover:underline">
                    Learn more
                  </button>
                </article>

                {/* Story 3 */}
                <article className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">
                    Resilience and certifications: How Dominic Eldridge landed his dream job at GE
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Learn how Dominic Eldridge’s passion for IT and certifications helped
                    him excel in cybersecurity and achieve career success at GE.
                  </p>
                  <button className="text-red-500 font-semibold hover:underline">
                    Learn more
                  </button>
                </article>

                {/* Story 4 */}
                <article className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-1">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">
                    Certifications, flexibility, and determination: Shikirra’s path to thriving in cybersecurity
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Shikirra’s story is a testament to the power of perseverance, passion, and
                    the right tools for success. Her journey from struggling in chemistry
                    to thriving in cybersecurity proves that with determination and the right support, anything is possible.
                  </p>
                  <button className="text-red-500 font-semibold hover:underline">
                    Learn more
                  </button>
                </article>
              </div>
            </section>

            {/* ---------------- Meet With Us CTA ---------------- */}
            <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Meet with us</h2>
    <p className="text-lg mb-8 text-white/90">
      Request instructor access and see how CSCA can support your institution in
      empowering students and advancing tech education.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Learn more
    </button>
  </div>
</section>

          </>
        )}

      </main>
    </div>
  );
};

export default HigherEducation;
