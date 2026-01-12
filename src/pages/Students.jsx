import React, { useState } from "react";
import { BookOpen, Map, FolderOpen, ShoppingCart } from "lucide-react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const Students = () => {
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
            Explore Students &gt; Resources
          </div>
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight mb-10">
            Student{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Resources
            </span>
          </h1>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-1 border-b border-white/10">
            {[
              { name: "Overview", icon: <BookOpen className="w-5 h-5" /> },
              { name: "Pathways", icon: <Map className="w-5 h-5" /> },
              { name: "Resources", icon: <FolderOpen className="w-5 h-5" /> },
              {
                name: "Student Purchasing",
                icon: <ShoppingCart className="w-5 h-5" />,
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
        {/* ---------------- Overview Section ---------------- */}
        {activeTab === "Overview" && (
          <section className="space-y-16 max-w-6xl mx-auto">

            {/* Unlock your potential */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Unlock your potential
                </h2>
                <h3 className="text-3xl font-semibold text-red-500 mb-6">
                  Thrive in tech with CSCA
                </h3>
                <p className="text-gray-400 mb-6">
                  CSCA’s certifications and resources uniquely bridge the gap between education and industry, meeting the soaring demand for tech skills beyond traditional degrees.
                </p>
                <p className="text-gray-400 mb-6">
                  Learning with CSCA will provide you with practical skills and certifications to thrive in today's tech-driven industry.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View pathways
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="student on laptop"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </div>

            {/* Resources Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581092795368-afe8c5e53e88?auto=format&fit=crop&q=80&w=1000"
                  alt="student learning"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  The resources you need to succeed
                </h3>
                <p className="text-gray-400 mb-6">
                  CSCA provides industry-recognized certifications, tailored curricula, and hands-on training resources that align with real-world tech skills.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  View resources
                </button>
              </div>
            </div>

            {/* Careers+ Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Discover your future career</h3>
                <p className="text-gray-400 mb-6">
                  CSCA's Careers+ page is designed to help students like you explore exciting career opportunities in technology. Whether you're just starting to think about your future or ready to take the next step, this page offers tools, resources, and actionable advice to help you succeed.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Explore Careers+
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1603570413909-7e705e53cbd7?auto=format&fit=crop&q=80&w=1000"
                  alt="career guidance"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </div>

            {/* CSCA Blog Section */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">CSCA Blog</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Best IT Certifications for Beginners",
                    desc: "Digital Foundations, Tech Support, A+, a+ Cyber, a+ Network, Tech+, 10 min read",
                    img: "https://images.unsplash.com/photo-1581092795368-afe8c5e53e88?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title: "Most Popular IT Certifications",
                    desc: "A+, Cloud+, Data+, Security+, Network+, 9 min read",
                    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
                  },
                  {
                    title: "Best Tech Jobs for Remote Work in 2023",
                    desc: "Cloud+, Project+, CySA+, Data+, A+",
                    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=1000",
                  },
                ].map((blog, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">{blog.title}</h4>
                      <p className="text-gray-400 text-sm">{blog.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Help CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Need additional help?</p>
              <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Contact our help desk
              </button>
            </div>
          </section>
        )}


        {/* ---------------- Pathways Section ---------------- */}
        {activeTab === "Pathways" && (
          <section className="space-y-16 max-w-6xl mx-auto">

            {/* Certification Pathways Intro */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4">Certification Pathways</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                CSCA certifications are designed to help you build a strong foundation in tech and guide you through a clear career progression. Whether you're just starting out or looking to specialize in a specific area, CSCA offers a pathway that aligns with your goals.
              </p>
            </div>

            {/* Pathway Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "AI", desc: "Develop advanced skills in artificial intelligence to unlock powerful insights and fuel innovation in a rapidly evolving tech landscape." },
                { title: "Cloud", desc: "Gain the skills to manage, deploy, and secure cloud environments, preparing for careers in the rapidly growing cloud computing industry." },
                { title: "Cyber", desc: "Develop critical cybersecurity skills to protect systems, networks, and data from evolving threats in the digital landscape." },
                { title: "Data", desc: "Develop expertise in data systems and analytics, including data analysis, visualization, governance, and applying insights to drive informed business decisions." },
                { title: "Digital Skills", desc: "Master essential digital tools and technologies to thrive in modern workplaces and adapt to evolving tech demands." },
                { title: "Network", desc: "Learn to design, implement, and manage networks, ensuring seamless communication and connectivity in IT environments." },
                { title: "Tech Support", desc: "Acquire foundational IT knowledge to troubleshoot, maintain, and support technology systems, launching a career in IT support." },
              ].map((pathway, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:-translate-y-1 transition-transform">
                  <h3 className="text-xl font-bold mb-2">{pathway.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pathway.desc}</p>
                  <button className="bg-[#d71f28] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
                    Explore products
                  </button>
                </div>
              ))}
            </div>

            {/* Need Help CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Need additional help?</p>
              <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Contact our help desk
              </button>
            </div>
          </section>
        )}

        {/* ---------------- Resources Section ---------------- */}
        {activeTab === "Resources" && (
          <section className="space-y-16 max-w-6xl mx-auto">

            {/* Welcome Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-5xl font-black mb-4 leading-tight">
                  Welcome! We're glad you're here
                </h2>
                <p className="text-gray-400 mb-6">
                  CSCA is excited to be part of your journey. As you start on your path, here is a guide to help you get started.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Get started
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581092795368-afe8c5e53e88?auto=format&fit=crop&q=80&w=1000"
                  alt="student learning"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </div>

            {/* Find Your Future / Careers+ Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Find Your Future</h3>
                <p className="text-gray-400 mb-6">
                  Hear stories from current tech pros, experience what it’s like to be in tech, learn about salaries in regions you’re interested in, and much more.
                </p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Explore Careers+
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1603570413909-7e705e53cbd7?auto=format&fit=crop&q=80&w=1000"
                  alt="career guidance"
                  className="rounded-2xl border border-white/10 shadow-lg object-cover h-[400px] w-full"
                />
              </div>
            </div>

            {/* Need Help CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Need additional help?</p>
              <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Contact our help desk
              </button>
            </div>
          </section>
        )}

        {/* ---------------- Student Purchasing Section ---------------- */}
        {activeTab === "Student Purchasing" && (
          <section className="mt-12 max-w-6xl mx-auto space-y-16">

            {/* Student Purchasing Content Card */}
            <div className="bg-gray-100/10 border border-white/10 rounded-2xl p-10 text-gray-300 space-y-12 backdrop-blur-sm">
              {/* How to Purchase */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold mb-4 text-white">How to Purchase</h2>
                <p className="mb-2">
                  CSCA uses the SheerID student verification process to ensure academic pricing.
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>If you have a CSCA account, log in first. Otherwise, create a new account.</li>
                  <li>Click on Login in the navigation menu, then choose 'My Shopping Account'.</li>
                  <li>Log in via your CSCA SSO credentials, or create an account.</li>
                  <li>Go to the CSCA Certifications shopping page and add desired products to your cart.</li>
                  <li>Click 'View Cart' when ready to checkout.</li>
                  <li>At Checkout, click the link 'Student? See if you qualify for a discount.'</li>
                  <li>
                    Enter Country, School, First Name, Last Name, DOB, and student email to verify via SheerID.
                  </li>
                  <li>If validated, academic pricing is applied. No other discounts apply.</li>
                  <li>Enter or confirm contact and payment information and click 'Place order'.</li>
                  <li>Your product access keys and exam vouchers will be sent to your email.</li>
                  <li>Activate your access keys in the training platform and associate them with your academic institution.</li>
                </ol>
              </div>

              {/* Redeeming Keys */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-4 text-white">How to Redeem Your Access Key(s)</h3>
                <h4 className="text-xl font-semibold mb-2">New Users</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>For LMS users (Canvas, Blackboard, D2L, Moodle), click any CertMaster link and enter your access key.</li>
                  <li>Non-LMS users: go to login.csca.org and click 'Sign up now' to create an account.</li>
                  <li>Fill in all fields; email must be unique and verified.</li>
                  <li>If part of an institution, set up your account; otherwise skip this step.</li>
                  <li>Click 'Finish' to create your account.</li>
                  <li>Click '+ Add Course' and enter your access key, then 'Redeem'.</li>
                </ol>

                <h4 className="text-xl font-semibold mb-2">Returning Users</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Go to login.csca.org and log in to your account.</li>
                  <li>In 'My Courses', click '+ Add Course'.</li>
                  <li>Enter your access key and click 'Redeem'.</li>
                </ol>

                <h4 className="text-xl font-semibold mb-2">Accessing Your Training Product</h4>
                <p>
                  To access your training product, go to login.csca.org. Bookmark this page for convenience!
                </p>
              </div>

              {/* Return Policy */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-4 text-white">Return Policy</h3>
                <p>
                  Courses purchased directly from CSCA may be returned up to 30 days if the access key or exam voucher has not been redeemed/activated. Full refund issued to the credit card used. Refer to the CSCA Return Policy for details.
                </p>
              </div>

              {/* Need Help CTA */}
              <div className="text-center mt-12">
                <p className="mb-4">Need additional help?</p>
                <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Contact our help desk
                </button>
              </div>
            </div>


          </section>
        )}

      </main>
    </div>
  );
};

export default Students;
