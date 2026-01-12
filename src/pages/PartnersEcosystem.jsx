import React, { useState } from "react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const PartnersEcosystem = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Career Pathways", "Solutions", "Resources"];

  const careerPathways = [
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
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-8">
          Partner With CSCA
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                    Build the Cyber Nation Together</span>
          </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Collaborating with industry leaders to define the future of cyber
              defense and IT education.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-white/10 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group ${activeTab === tab
                    ? "text-white bg-white/5"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span className="relative z-10">{tab}</span>
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            key={activeTab}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* OVERVIEW TAB */}
            {activeTab === "Overview" && (
              <section>
                {/* Overview Content */}
                <div className="grid lg:grid-cols-3 gap-10 mb-20">
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                      Harness the power of{" "}
                      <span className="text-red-500">CSCA</span>
                    </h2>
                    <p className="text-gray-400 mb-6 text-lg">
                      CSCA is the go-to organization for the global IT world,
                      supporting 75 million pros with collaboration, education,
                      certifications, and more.
                    </p>
                    <ul className="space-y-3 text-gray-400 mb-10">
                      <li>
                        • Top-notch training and certifications for all skill
                        levels.
                      </li>
                      <li>
                        • Sales enablement to guide learners to career-boosting
                        paths.
                      </li>
                      <li>
                        • Up-to-date tools for instructors to enhance
                        curriculum.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                      <p className="text-red-500 text-sm font-semibold mb-2">
                        LET’S CONNECT
                      </p>
                      <h3 className="text-2xl font-bold mb-4">
                        Ready to take the next step?
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Let’s partner together to elevate your portfolio and
                        prepare your learners for roles in tech.
                      </p>
                      <button className="bg-[#d71f28] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                        Connect with us
                      </button>
                    </div>

                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                      <p className="text-red-500 text-sm font-semibold mb-2">
                        Offer Client Proctored Exams
                      </p>
                      <h3 className="text-2xl font-bold mb-4">
                        CSCA Client Proctor Test Delivery System
                      </h3>
                      <p className="text-gray-400 mb-6">
                        The CSCA Client Proctor Test Delivery System provides
                        a streamlined and convenient solution for delivering
                        select CSCA certification exams.
                      </p>
                      <button className="bg-[#d71f28] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>

                {/* Career Pathways teaser */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Career Pathways</h2>
                    <p className="text-gray-400 mb-4">
                      CSCA's career pathways provide a structured approach to IT
                      education, guiding students from foundational knowledge to
                      advanced expertise.
                    </p>
                    <p className="text-gray-400 mb-6">
                      These pathways—Core, Infrastructure, Cybersecurity, Data &
                      Analytics, and Professional—equip learners with the skills
                      needed to excel in various technology fields.
                    </p>
                    <button className="bg-[#d71f28] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                      Learn more
                    </button>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                      alt="Career Pathways"
                      className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                    />
                  </div>
                </div>

                {/* Unlock Partner Value */}
                <div className="text-center mb-20">
                  <h2 className="text-4xl font-extrabold text-red-500 mb-12">
                    Unlock the value of partnering with CSCA
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1581091870622-7c8b3f7a3f90?auto=format&fit=crop&q=80&w=1000"
                        alt=""
                        className="rounded-lg mb-4 h-40 w-full object-cover"
                      />
                      <h3 className="text-lg font-bold mb-2">
                        Empower Instructors, Improve Learner Success with
                        CertMaster
                      </h3>
                      <span className="text-sm border border-white/20 rounded px-3 py-1">
                        Partner
                      </span>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000"
                        alt=""
                        className="rounded-lg mb-4 h-40 w-full object-cover"
                      />
                      <h3 className="text-lg font-bold mb-2">
                        The Value of CSCA Authorized Partners
                      </h3>
                      <span className="text-sm border border-white/20 rounded px-3 py-1">
                        Partner
                      </span>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                        alt=""
                        className="rounded-lg mb-4 h-40 w-full object-cover"
                      />
                      <h3 className="text-lg font-bold mb-2">
                        What 8140 Means for Companies Working with DoD
                      </h3>
                      <div className="flex gap-2 mt-3">
                        <span className="text-sm border border-white/20 rounded px-3 py-1">
                          Cyber
                        </span>
                        <span className="text-sm border border-white/20 rounded px-3 py-1">
                          Government
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">
      Partner with CSCA—let’s build IT futures together
    </h2>
    <p className="text-lg mb-8 text-white/90">
      Interested in becoming a CSCA Training Delivery Partner? Connect with our
      experienced team to learn how CSCA certifications and solutions can
      enhance your training portfolio and help your learners succeed in IT
      careers.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Contact us
    </button>
  </div>
</section>

              </section>


            )}
            {/*******************************************         CTA        *************************************/}
            {/* CAREER PATHWAYS TAB */}
            {activeTab === "Career Pathways" && (
              <section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                  {careerPathways.map((path, idx) => (
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
                </div>

                {/* CTA Section */}
                <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">
      Partner with CSCA—let’s build IT futures together
    </h2>
    <p className="text-lg mb-8 text-white/90">
      Interested in becoming a CSCA Training Delivery Partner? Connect with our
      experienced team to learn how CSCA certifications and solutions can
      enhance your training portfolio and help your learners succeed in IT
      careers.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Contact us
    </button>
  </div>
</section>

              </section>
            )}

            {/* SOLUTIONS TAB */}
            {activeTab === "Solutions" && (
              <section>
                {/* Hero Section */}
                <section className="grid md:grid-cols-2 gap-10 mb-24 items-center">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                      Solutions for{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                        IT training companies
                      </span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-6">
                      Flexible training solutions, including instructor resources,
                      student guides, and interactive labs.
                    </p>
                    <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                      Get started with an expert
                    </button>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                      alt="Team members working at desk"
                      className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                    />
                  </div>
                </section>

                {/* Flexible learning solutions */}
                <section className="text-center mb-24">
                  <h2 className="text-4xl font-extrabold mb-6">
                    Flexible learning solutions
                  </h2>
                  <p className="text-gray-400 max-w-3xl mx-auto mb-8">
                    Learn more about our solutions designed to empower, educate
                    and unlock potential.
                  </p>
                  <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    Connect with an expert
                  </button>
                </section>

                {/* Industry-recognized IT certifications */}
                <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000"
                      alt="IT Pro holding laptop"
                      className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold mb-4">
                      Industry-recognized IT certifications
                    </h2>
                    <p className="text-gray-400 mb-6">
                      Help your learners achieve their career goals with CSCA
                      certifications. From foundational certifications like
                      CSCA A+ to advanced pathways in cybersecurity,
                      infrastructure, and data, each certification builds on the
                      last, deepening expertise and validating skills.
                    </p>
                    <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                      Learn more
                    </button>
                  </div>
                </section>

                {/* OnDemand solutions */}
                <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
                  <div className="order-2 md:order-1">
                    <h2 className="text-4xl font-bold mb-4">OnDemand solutions</h2>
                    <p className="text-gray-400 mb-4">
                      CSCA’s OnDemand products offer your customers maximum
                      schedule flexibility and a structured learning environment, with
                      high-quality learning materials, performance feedback, skills
                      development, and robust support.
                    </p>
                    <p className="text-gray-400 mb-6">
                      OnDemand products available include CSCA Tech+, A+, Network+,
                      Security+, Linux+, CySA+, PenTest+ and Data+.
                    </p>
                    <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                      Try a walk through
                    </button>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
                      alt="Person working at computer"
                      className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                    />
                  </div>
                </section>

                {/* CTA Section */}
                <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">
      Partner with CSCA—let’s build IT futures together
    </h2>
    <p className="text-lg mb-8 text-white/90">
      Interested in becoming a CSCA Training Delivery Partner? Connect with our
      experienced team to learn how CSCA certifications and solutions can
      enhance your training portfolio and help your learners succeed in IT
      careers.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Contact us
    </button>
  </div>
</section>

              </section>
            )}

            {/* RESOURCES TAB */}
            {activeTab === "Resources" && (
              <section className="relative z-10 space-y-24">
                {/* Hero Section */}
                <section className="text-center">
                  <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                    Explore real-world success and transformative outcomes with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                      CSCA’s training partners
                    </span>
                  </h1>
                  <p className="text-red-500 font-semibold uppercase tracking-wide text-lg">
                    Partner Resource Hub
                  </p>
                </section>

                {/* Essential Tools Section */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-4xl font-bold mb-4">
                      Essential tools for CSCA partners
                    </h2>
                    <p className="text-gray-400 mb-6">
                      Access exclusive resources designed to support and empower your partnership with CSCA.
                    </p>
                    <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                      View resources
                    </button>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                    alt="Team working at desk"
                    className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                  />
                </section>

                {/* Drive Career Success Section */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1603575448366-3a3b91c41b6e?auto=format&fit=crop&q=80&w=1000"
                      alt="New Horizons"
                      className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold mb-4">
                      Drive Career Success With CSCA Training
                    </h2>
                    <p className="text-gray-400 mb-6">
                      Learn how New Horizons leverages CSCA as a platinum partner to make a difference and help IT pros achieve career success.
                    </p>
                    <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                      Learn more
                    </button>
                  </div>
                </section>

                {/* Instructor Network Section */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/CSCA_logo.svg"
                    alt="CSCA Instructor Network (CIN) Logo"
                    className="w-40 mx-auto mb-6"
                  />
                  <h2 className="text-3xl font-bold mb-4">
                    Join the CSCA Instructor Network
                  </h2>
                  <p className="text-gray-400 max-w-3xl mx-auto mb-6">
                    The CSCA Instructor Network (CIN) is a worldwide community for instructors who provide CSCA certification training. Join hundreds of other instructors to collaborate, share best practices and receive valuable resources from CSCA.
                  </p>
                  <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    Learn more
                  </button>
                </section>

                {/* Certifications & Learning Pathways Section */}
                <section>
                  <h2 className="text-4xl font-extrabold text-center mb-12">
                    Explore certifications and learning pathways to empower your learners
                  </h2>
                  <div className="grid md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 shadow-lg hover:-translate-y-2 transition-transform">
                      <img
                        src="https://images.unsplash.com/photo-1581091870622-7c8b3f7a3f90?auto=format&fit=crop&q=80&w=1000"
                        alt="Man at desk"
                        className="w-full h-44 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2">Understanding the CSCA Xpert Series</h3>
                      <div className="flex gap-2 mb-3">
                        <span className="text-sm border border-white/20 px-3 py-1 rounded">Cyber</span>
                        <span className="text-sm border border-white/20 px-3 py-1 rounded">Data</span>
                        <span className="text-sm border border-white/20 px-3 py-1 rounded">Network</span>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 shadow-lg hover:-translate-y-2 transition-transform">
                      <img
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000"
                        alt="Woman at laptop"
                        className="w-full h-44 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2">Enhance Training Solutions with the CSCA Data Pathway</h3>
                      <span className="text-sm border border-white/20 px-3 py-1 rounded">Data</span>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 shadow-lg hover:-translate-y-2 transition-transform">
                      <img
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                        alt="Blog Image"
                        className="w-full h-44 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2">Creating Practical Pathways with DoDM 8140.03</h3>
                      <span className="text-sm border border-white/20 px-3 py-1 rounded">Government</span>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section
  className="relative py-20 text-center text-white rounded-2xl overflow-hidden"
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #000000 15%, #ff0000 50%, #000000 85%, #000000 100%)",
  }}
>
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">
      Partner with CSCA—let’s build IT futures together
    </h2>
    <p className="text-lg mb-8 text-white/90">
      Interested in becoming a CSCA Training Delivery Partner? Connect with our
      experienced team to learn how CSCA certifications and solutions can
      enhance your training portfolio and help your learners succeed in IT
      careers.
    </p>
    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
      Contact us
    </button>
  </div>
</section>

              </section>
            )}

             
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersEcosystem;
