import React, { useState } from "react";
import { BookOpen, Wrench, GraduationCap, School } from "lucide-react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const Instructors = () => {
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
            Explore Academics &gt; Instructors
          </div>
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight mb-10">
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Instructors
            </span>
          </h1>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-1 border-b border-white/10">
            {[
              { name: "Overview", icon: <BookOpen className="w-5 h-5" /> },
              { name: "Solutions", icon: <Wrench className="w-5 h-5" /> },
              {
                name: "Getting Started Higher Ed",
                icon: <GraduationCap className="w-5 h-5" />,
              },
              {
                name: "Getting Started Secondary Ed",
                icon: <School className="w-5 h-5" />,
              },
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
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Getting started with CSCA learning products
                </h2>
                <p className="text-gray-400 mb-6">
                  CSCA equips educators and institutions with certifications,
                  curriculum, and tools to prepare students for IT and cybersecurity
                  careers. Aligned with academic standards, our industry-recognized
                  certifications validate real-world skills, providing students a proven
                  pathway to success in the tech industry.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View learning solutions
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="teacher with students on computer"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Let's Connect CTA */}
            <section
              className="relative py-20 text-center text-white rounded-2xl overflow-hidden mb-20"
              style={{
                background:
                  "linear-gradient(90deg, #d71f28 0%, #9b1f4d 50%, #6a2a9b 100%)",
              }}
            >
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">LET’S CONNECT</h2>
                <p className="text-lg mb-8 text-white/90">
                  Ready to take the next step? Get the resources and tools you need to
                  help your students succeed in tech careers.
                </p>
                <button className="bg-white text-[#9b1f4d] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                  Connect with us
                </button>
              </div>
            </section>

            {/* Instructor Resources */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                  alt="instructor with student"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Instructor resources</h3>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2 text-left">
                  <li>Access to learning & certification content resources.</li>
                  <li>
                    Network, share resources, and get help from other instructors in the
                    CSCA Instructor Network.
                  </li>
                  <li>Help with LMS Integration.</li>
                  <li>Get expert guidance on funding for your tech programs.</li>
                </ul>
                <p className="text-gray-400 mb-6">
                  Explore how CSCA’s resources support educators and help enhance your
                  teaching experience.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Learn more about resources
                </button>
              </div>
            </section>

            {/* Be the Instructor You Want to Be CTA */}
            <section
              className="relative py-20 text-center text-white rounded-2xl overflow-hidden mb-20"
              style={{
                background:
                  "linear-gradient(90deg, #d71f28 0%, #9b1f4d 50%, #6a2a9b 100%)",
              }}
            >
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">
                  Be the Instructor You Want to Be
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  See how CSCA's resources support educators in building engaging,
                  high-quality, and future-ready tech programs for their students.
                </p>
                <button className="bg-white text-[#9b1f4d] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                  Learn more about resources
                </button>
              </div>
            </section>
          </div>
        )}


        {/* ------------------ SOLUTIONS TAB ------------------ */}
        {activeTab === "Solutions" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Transform education with academic solutions
                </h2>
                <p className="text-gray-400 mb-6">
                  CSCA’s academic solutions help higher education institutions build
                  programs, engage students, measure success, and validate skills with
                  certifications.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Get started with an expert
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="teacher talking with student on computer"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Flexible Learning Solutions */}
            <section className="text-center mb-24">
              <h2 className="text-4xl font-extrabold mb-6">
                Flexible learning solutions
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto mb-8">
                Learn more about our solutions designed to empower, educate, and unlock
                potential.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Connect with an expert
                </button>
              </div>
            </section>

            {/* OnDemand Learning Products */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                  alt="female on laptop working"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">OnDemand learning products</h3>
                <p className="text-gray-400 mb-4">
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
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-4">Certifications</h3>
                <p className="text-gray-400 mb-6">
                  CSCA's globally recognized certifications set the standard for
                  excellence in the IT industry. They validate students' expertise, open
                  doors to professional growth in critical technology career paths, and
                  provide access to industry-leading data, resources, and tools to keep
                  you and your students current and competitive.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View certifications
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                  alt="CSCA student showing certification"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Be the Instructor CTA */}
            <section
              className="relative py-20 text-center text-white rounded-2xl overflow-hidden mb-20"
              style={{
                background:
                  "linear-gradient(90deg, #d71f28 0%, #9b1f4d 50%, #6a2a9b 100%)",
              }}
            >
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">
                  Be the Instructor You Want to Be
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  See how CSCA's resources support educators and help them deliver
                  high-quality, industry-aligned tech education.
                </p>
                <button className="bg-white text-[#9b1f4d] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                  Learn more about resources
                </button>
              </div>
            </section>

             
          </div>
        )}

        {/* ------------------ GETTING STARTED HIGHER ED ------------------ */}
        {activeTab === "Getting Started Higher Ed" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Simplify Purchasing Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Simplify your academic purchasing with CSCA
                </h2>
                <p className="text-gray-400 mb-6">
                  You can easily purchase CSCA certifications and learning resources
                  directly from the CSCA Store.
                </p>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  Academic Pricing & Support:
                </h3>
                <p className="text-gray-400 mb-6">
                  Learn more about academic pricing, obtaining your institution’s price
                  code, or requesting temporary student access by contacting us below.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Contact us
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="female on computer with headphones"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* Getting Started with CertMaster */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                  alt="person typing on computer"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Getting started with CertMaster
                </h3>
                <p className="text-gray-400 mb-6">
                  We're thrilled to collaborate with you! Starting a class can feel
                  overwhelming, but we're here to help make the process smooth and
                  successful. With CertMaster’s powerful tools, you can easily manage
                  your class and support your students. Get started with these
                  resources:
                </p>

                <h4 className="text-xl font-semibold mb-2 text-white">
                  Here are some steps to help you get started:
                </h4>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                  <li>Platform login</li>
                  <li>Create your class</li>
                  <li>Invite students to class</li>
                  <li>Get acquainted with the course material</li>
                  <li>View your class reports (gradebook)</li>
                </ul>

                <h4 className="text-xl font-semibold mb-2 text-white">
                  Here are a few tips:
                </h4>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                  <li>Use the student view</li>
                  <li>Create a custom quiz</li>
                  <li>Teaching aids, PowerPoints, lesson plans, etc.</li>
                </ul>
              </div>
            </section>

            {/* Pathways to Certification */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-4">Pathways to certification</h3>
                <p className="text-gray-400 mb-6">
                  CSCA's career pathways provide a comprehensive and structured approach
                  to IT education, guiding students from foundational knowledge to
                  advanced expertise. These pathways equip learners with the skills
                  needed to excel in various technology fields, ensuring they are
                  well-prepared for successful and rewarding careers in the tech
                  industry.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View product catalog
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
                  alt="Students smiling while on computers"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* CSCA’s Impact in Higher Education */}
            <section className="mb-24">
              <h2 className="text-4xl font-extrabold mb-12 text-center">
                CSCA’s impact in higher education
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Blog 1 */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                    alt="Cybersecurity blog"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <p className="text-sm text-red-500 mb-2 uppercase tracking-widest">
                      Cyber
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Cybersecurity’s Maturity: CSCA’s State of Cybersecurity 2024 Report
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Discover insights into cybersecurity readiness and trends shaping
                      the future of IT defense across industries.
                    </p>
                  </div>
                </div>

                {/* Blog 2 */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
                  <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=1000"
                    alt="Higher Ed classroom"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <p className="text-sm text-red-500 mb-2 uppercase tracking-widest">
                      Higher Ed
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      The Changing Landscape of Higher Education: Is College Still Worth It?
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Explore evolving academic models and how CSCA programs adapt to
                      modern student and employer needs.
                    </p>
                  </div>
                </div>

                {/* Blog 3 */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
                  <img
                    src="https://images.unsplash.com/photo-1531537571171-35ebd07ed5b3?auto=format&fit=crop&q=80&w=1000"
                    alt="Tech+ blog"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <p className="text-sm text-red-500 mb-2 uppercase tracking-widest">
                      Tech+
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      What is CSCA Tech+?
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Learn how Tech+ builds foundational digital literacy and IT
                      proficiency for tomorrow’s workforce.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Be the Instructor CTA */}
            <section
              className="relative py-20 text-center text-white rounded-2xl overflow-hidden mb-20"
              style={{
                background:
                  "linear-gradient(90deg, #d71f28 0%, #9b1f4d 50%, #6a2a9b 100%)",
              }}
            >
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">
                  Be the Instructor You Want to Be
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  See how CSCA's resources support educators and help them deliver
                  engaging, effective, and future-ready tech education.
                </p>
                <button className="bg-white text-[#9b1f4d] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                  Learn more about resources
                </button>
              </div>
            </section>
          </div>
        )}


        {/* ------------------ GETTING STARTED SECONDARY ED ------------------ */}
        {activeTab === "Getting Started Secondary Ed" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* ---------------- Simplify Purchasing Section ---------------- */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Simplify purchasing
                </h2>
                <p className="text-gray-400 mb-6">
                  You can easily purchase CSCA certifications and learning resources directly on the CSCA Store.
                </p>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  Academic Pricing & Support:
                </h3>
                <p className="text-gray-400 mb-6">
                  Learn more about academic pricing, obtaining your institution’s price code, or requesting temporary student access by contacting us today.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Contact us
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="teacher and students on computers"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* ---------------- Getting Started Section ---------------- */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                  alt="students learning on laptops"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Getting Started
                </h3>
                <p className="text-gray-400 mb-6">
                  Students are being taught by teachers in classrooms. We're thrilled to collaborate with you! Beginning a class can feel overwhelming, so we've compiled a set of resources to help you get started smoothly.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-white">
                  Here are some steps to help you get started:
                </h4>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                  <li>Platform login</li>
                  <li>Create your class</li>
                  <li>Invite students to class</li>
                  <li>Get acquainted with the course material</li>
                  <li>View your class reports (gradebook)</li>
                </ul>

                <h4 className="text-xl font-semibold mb-2 text-white">
                  Here are a few tips:
                </h4>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                  <li>Use the student view</li>
                  <li>Create a custom quiz</li>
                  <li>Teaching aids, PowerPoints, lesson plans, etc.</li>
                </ul>
              </div>
            </section>

            {/* ---------------- Certification Pathways Section ---------------- */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-4">Certification Pathways</h3>
                <p className="text-gray-400 mb-6">
                  CSCA's career pathways provide a comprehensive and structured approach to IT education, guiding students from foundational knowledge to advanced expertise. These pathways equip learners with the skills needed to excel in various technology fields, ensuring they are well-prepared for successful and rewarding careers in the tech industry.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View pathways
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
                  alt="students smiling on laptops"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </section>

            {/* ---------------- CSCA’s Impact Section ---------------- */}
            <section className="mb-24">
              <h2 className="text-4xl font-extrabold mb-12 text-center">
                CSCA’s impact in secondary education
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Blog 1 */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                    alt="cybersecurity classroom"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <p className="text-sm text-red-500 mb-2 uppercase tracking-widest">
                      Cyber
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Cybersecurity’s Maturity: CSCA’s State of Cybersecurity 2024 Report
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Discover insights into cybersecurity readiness and trends shaping the future of IT defense across industries.
                    </p>
                  </div>
                </div>

                {/* Blog 2 */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
                  <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=1000"
                    alt="higher ed classroom"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <p className="text-sm text-red-500 mb-2 uppercase tracking-widest">
                      Higher Ed
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      The Changing Landscape of Higher Education: Is College Still Worth It?
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Explore evolving academic models and how CSCA programs adapt to modern student and employer needs.
                    </p>
                  </div>
                </div>

                {/* Blog 3 */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
                  <img
                    src="https://images.unsplash.com/photo-1531537571171-35ebd07ed5b3?auto=format&fit=crop&q=80&w=1000"
                    alt="tech+ classroom"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <p className="text-sm text-red-500 mb-2 uppercase tracking-widest">
                      Tech+
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      What is CSCA Tech+?
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Learn how Tech+ builds foundational digital literacy and IT proficiency for tomorrow’s workforce.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ---------------- Be the Instructor CTA ---------------- */}
            <section
              className="relative py-20 text-center text-white rounded-2xl overflow-hidden mb-20"
              style={{
                background:
                  "linear-gradient(90deg, black 0%, red 50%, black 100%)",
              }}
            >
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">
                  Be the Instructor You Want to Be
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  See how CSCA's resources support educators.
                </p>
                <button className="bg-white text-[#9b1f4d] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                  Learn more about resources
                </button>
              </div>
            </section>


          </div>
        )}

      </main>
    </div>
  );
};

export default Instructors;
