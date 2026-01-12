import React, { useState } from "react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const Exam = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeSubTab, setActiveSubTab] = useState("My Exams");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Reset sub-tab to default when Certification tab is clicked
    if (tab === "Certification") setActiveSubTab("My Exams");
  };

  const certificationTabs = ["My Exams", "Certifications", "Continuing Education"];

  return (
    <div className="relative min-h-screen font-sans text-gray-900 overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RedGeometricBackground
          height={30}
          jaggednessScale={2.5}
          opacity={0.3}
          planeSize={[60, 40]}
          cameraPos={[0, 0, 15]}
          ashCount={200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80"></div>
      </div>

      {/* Main Tabs */}
      <div className="relative z-10 flex justify-center pt-20 gap-8">
        {["Home", "Certification"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-6 py-3 font-semibold text-lg rounded-t-md transition-all ${
              activeTab === tab
                ? "text-white bg-red-600"
                : "text-gray-300 hover:text-white hover:bg-red-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Certification Sub-Tabs */}
      {activeTab === "Certification" && (
        <div className="relative z-10 flex justify-center mt-6 gap-4">
          {certificationTabs.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubTab(sub)}
              className={`px-6 py-2 font-semibold rounded-md transition-all ${
                activeSubTab === sub
                  ? "text-white bg-red-600"
                  : "text-gray-300 hover:text-white hover:bg-red-500"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto mt-12 px-6 space-y-12">
        {/* Home Page */}
        {activeTab === "Home" && (
  <section className="space-y-12 text-center max-w-5xl mx-auto px-6">
    {/* Welcome Heading */}
    <h1 className="text-5xl font-bold">
      <span className="text-white">Welcome to CSCA Central, </span>
      <span className="text-red-500">Satyam!</span>
    </h1>

    {/* Training / Redeem Access Key */}
    <div className="bg-white/10 p-8 rounded-2xl border border-white/20 space-y-4 text-left">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold">
          <span className="text-white">Training  </span>
        </h2>
        <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
        Redeem Access Key
        </button>
      </div>
      <p className="text-gray-300 mt-2">
        You currently have no courses. Redeem an Access Key to get started
      </p>
      <button className="bg-[#d71f28] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
          Get Started
        </button>
      <p className="text-gray-400 text-sm mt-2">
        For store purchases, access keys are sent by email following order completion, and may also be retrieved from your store account's Order History. For instructor-led training, access keys are typically distributed by an instructor or institution admin.
        <br />
        Not seeing a course? Find it by linking this CSCA account to an unlinked account you own.{" "}
        <span className="underline text-red-500 cursor-pointer">Link accounts here</span>.
      </p>
    </div>

    {/* Exams and Certification */}
    <div className="bg-white/10 p-8 rounded-2xl border border-white/20 space-y-4 text-left">
      {/* Manage Exams */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold">
          <span className="text-white">Exams and </span>
          <span className="text-red-500">Certification</span>
        </h2>
        
      </div>

      <p className="text-gray-300 mt-2">
      <h2 className="text-3xl font-bold">
          <span className="text-white">Manage </span>
          <span className="text-red-500">Exams</span>
        </h2> Schedule or change your exam, launch your online exam, and view score reports.
      </p>
      <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {[
            "Schedule and Manage Exams",
            "View Testing Options",
            "Request Test Accommodations",
          ].map((btn) => (
            <button
              key={btn}
              className="bg-[#d71f28] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              {btn}
            </button>
          ))}
      </div>

      {/* Access Certifications */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
        <p className="text-gray-300 text-lg md:text-left">
          Access Certifications: View certification status, pay CE fees, submit CEUs, and download PDFs of your certificates.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {["Certifications", "Continuing Education"].map((btn) => (
            <button
              key={btn}
              className="bg-[#d71f28] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              {btn}
            </button>
          ))}
        </div>
    </div>
  </section>
)}


        {/* Certification Pages */}
        {activeTab === "Certification" && (
          <section className="space-y-12">
            <h1 className="text-5xl font-bold text-center">
              <span className="text-white">Exams and </span>
              <span className="text-red-500">Certification</span>
            </h1>

            {/* My Exams */}
            {activeSubTab === "My Exams" && (
  <div className="bg-white/10 p-8 rounded-2xl border border-white/20 space-y-8">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center">
      <span className="text-white">Schedule and </span>
      <span className="text-red-500">Manage Exams</span>
    </h2>
    <p className="text-gray-300 text-center max-w-3xl mx-auto">
      Please confirm or complete the information below to begin the exam scheduling process.
    </p>

    {/* Important Note */}
    <div className="bg-red-600/20 border border-red-600/50 rounded-xl p-4 text-left">
      <p className="text-red-400 font-semibold">IMPORTANT NOTE:</p>
      <p className="text-gray-300 text-sm mt-2">
        Your legal name below must match the first name and last name as it appears on the ID you will present for exam check-in.
        If they do not match, you will not be able to take your exam and your exam fee will not be refunded.
      </p>
    </div>

    {/* Form Section */}
    <form className="space-y-8">
      {/* Legal Name */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-white">Legal </span>
          <span className="text-red-500">Name</span> <span className="text-red-500">*</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-1">First Name*</label>
            <input
              type="text"
              defaultValue="Satyam"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Middle Name</label>
            <input
              type="text"
              defaultValue=""
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Last Name*</label>
            <input
              type="text"
              defaultValue="Yadav"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Suffix</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Preferred Name */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-white">Preferred </span>
          <span className="text-red-500">Name</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-1">First Name</label>
            <input
              type="text"
              defaultValue="Satyam"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Middle Name</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Last Name</label>
            <input
              type="text"
              defaultValue="Yadav"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Suffix</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Citizenship Questions */}
      <div className="space-y-4">
        <p className="text-gray-300">
          Are you a US Citizen and at least 18 years of age?
        </p>
        <p className="text-gray-300">
          Do you consent to CSCA collecting your month and year of birth?
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Birth Month</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Birth Year</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-white">Contact </span>
          <span className="text-red-500">Information</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Country Code*</label>
            <input
              type="text"
              defaultValue="+1"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Phone*</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="flex items-center gap-2 text-gray-300 text-sm">
            <input type="checkbox" className="accent-red-600" />
            I consent to receive SMS text messages from CSCA and affiliates for updates, promotions, and important information.
          </label>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-white">Mailing </span>
          <span className="text-red-500">Address</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Country*</label>
            <input
              type="text"
              defaultValue="United States"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Address 1*</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Address 2</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">City*</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">State/Province*</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Zip Code*</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-white">Correspondence </span>
          <span className="text-red-500">Language</span>
        </h3>
        <input
          type="email"
          defaultValue="yadavsatya1004@gmail.com"
          className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
        />
      </div>

      {/* Alternate Contact */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-white">Alternate </span>
          <span className="text-red-500">Contact Information</span>
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          We encourage you to provide an alternate email and alternate phone for future account recovery options.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Alternate Email</label>
            <input
              type="email"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Alternate Phone</label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-lg p-2 text-white focus:border-red-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Authorization */}
      <div className="mt-6">
        <label className="flex items-start gap-2 text-gray-300 text-sm">
          <input type="checkbox" className="accent-red-600 mt-1" />
          I authorize CSCA to release information pertaining to my credentials to third party organizations,
          government entities, and academic institutions. I understand that in no event shall CSCA, its officers,
          directors, or employees be liable for any special, indirect, incidental, or consequential damages or any
          damages resulting from the release of this information. I reserve the right to change my opt-in selections
          at any time.
        </label>
      </div>

      {/* Submit Button */}
      <div className="text-center pt-6">
        <button className="bg-[#d71f28] text-white px-10 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
          Save Updates
        </button>
      </div>
    </form>
  </div>
)}

            {/* Certifications */}
            {activeSubTab === "Certifications" && (
  <div className="bg-white/10 p-8 rounded-2xl border border-white/20 space-y-12">
    {/* Hero Section */}
    <div className="text-center space-y-4">
      <h2 className="text-5xl font-bold">
        <span className="text-white">Discover Our </span>
        <span className="text-red-500">Certifications</span>
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto">
        Build the skills employers need and showcase your ability to excel in high-demand roles.
        Explore industries and uncover the CSCA certification or learning product that aligns
        with your career aspirations.
      </p>
    </div>

    {/* Filter Tabs */}
    <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-4">
      {[
        "Overview",
        "All",
        "AI",
        "Cloud",
        "Cyber",
        "Data",
        "Digital Skills",
        "Network",
        "Tech Support",
      ].map((tab) => (
        <button
          key={tab}
          className="px-5 py-2 rounded-full border border-white/20 text-gray-300 hover:bg-red-600 hover:text-white transition-all"
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Overview Paragraphs */}
    <div className="space-y-6 text-gray-300 text-center max-w-4xl mx-auto">
      <p>
         
        <h2 className="text-3xl font-bold">
          <span className="text-white">Take your next step with certifications and </span>
          <span className="text-red-500">skills-based training courses.</span>
        </h2> From entry
        level to advanced, unlock new career opportunities with industry-leading certifications
        in IT support, cybersecurity, networking, cloud, and data. Build in-demand skills fast
        with flexible courses in artificial intelligence, soft skills, and more.
      </p>
      <p>
        Whether you’re learning on your own or seeking training for your organization, we’re here
        to support your goals. Take the next step toward your future with confidence.
      </p>
      <div className="flex flex-wrap justify-center gap-6 pt-4">
        <button className="bg-[#d71f28] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
          Browse all credentials
        </button>
        
      </div>
    </div>

    {/* Skill Area Cards */}
    <h2 className="text-3xl font-bold">
          <span className="text-white">Explore products </span>
          <span className="text-red-500">by skill area</span>
        </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
      {[
        "AI",
        "Cloud",
        "Cyber",
        "Data",
        "Digital Skills",
        "Network",
        "Tech Support",
      ].map((skill) => (
        <div
          key={skill}
          className="bg-white/10 border border-white/20 p-6 rounded-xl hover:border-red-500 transition-all"
        >
          <h3 className="text-2xl font-bold mb-2 text-white">{skill}</h3>
          <p className="text-gray-400 text-sm">
            Explore certifications and resources to boost your expertise in {skill}.
          </p>
        </div>
      ))}
    </div>

    {/* Top Certifications Section */}
    <div className="space-y-8 pt-12">
      <h3 className="text-4xl font-bold text-center">
        <span className="text-white">Accelerate Your Career with Our </span>
        <span className="text-red-500">Top 10 Certifications</span>
      </h3>

      {/* Certification Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Security+",
            subtitle: "Plus Security+ Certification",
            desc: "CSCA Security+ is the most trusted entry into cybersecurity, proving you have real-world, hands-on skills to protect networks, apps, and data.",
          },
          {
            title: "Network+",
            subtitle: "Plus Network+ Certification",
            desc: "CSCA Network+ gives you the confidence to connect, configure, and secure networks of any size, preparing you for roles in support, operations, and administration.",
          },
          {
            title: "A+",
            subtitle: "Plus A+ Certification",
            desc: "CSCA A+ is the starting point for your IT career, validating the core skills in hardware, software, and troubleshooting needed for support roles.",
          },
          {
            title: "CySA+",
            subtitle: "Plus CySA+ Certification",
            desc: "CSCA CySA+ proves you can detect, analyze, and stop threats in real time—covering vulnerability management and incident response.",
          },
          {
            title: "Linux+",
            subtitle: "Plus Linux+ Certification",
            desc: "CSCA Linux+ validates your ability to manage, secure, and troubleshoot Linux systems across cloud and hybrid environments.",
          },
          {
            title: "Data+",
            subtitle: "Plus Data+ Certification",
            desc: "CSCA Data+ shows you can translate data into insights, analyze and visualize information to drive data-driven decisions.",
          },
          {
            title: "Tech+",
            subtitle: "Plus Tech+ Certification",
            desc: "CSCA Tech+ helps you build foundational skills in computing, networks, software, and security before pursuing a specialized certification.",
          },
          {
            title: "PenTest+",
            subtitle: "Plus PenTest+ Certification",
            desc: "CSCA PenTest+ proves you can think like an attacker to strengthen defenses, covering penetration testing for modern IT systems.",
          },
          {
            title: "Cloud+",
            subtitle: "Plus Cloud+ Certification",
            desc: "CSCA Cloud+ proves you can design, secure, and optimize multi-cloud environments across architectures and DevOps operations.",
          },
          {
            title: "Project+",
            subtitle: "Plus Project+ Certification",
            desc: "CSCA Project+ proves you can manage IT projects from start to finish, validating skills in planning, leadership, and delivery.",
          },
        ].map((cert) => (
          <div
            key={cert.title}
            className="bg-white/10 border border-white/20 p-6 rounded-xl hover:border-red-500 transition-all flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold text-white">{cert.title}</h4>
              <h5 className="text-lg text-red-500 mb-2">{cert.subtitle}</h5>
              <p className="text-gray-400 text-sm mb-4">{cert.desc}</p>
            </div>
            <button className="mt-auto bg-[#d71f28] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
              Shop {cert.title} products
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Footer Links */}
    <div className="text-center pt-12 border-t border-white/10 mt-8">
      <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
        {[
          "Shop",
          "About Us",
          "Careers at CSCA",
          "Newsroom",
          "Share your Expertise",
          "Help",
          "Contact Us",
          "Return Policy",
          "Legal and Privacy",
        ].map((link) => (
          <span key={link} className="hover:text-red-500 cursor-pointer transition-colors">
            {link}
          </span>
        ))}
      </div>
    </div>
  </div>
)}

            {/* Continuing Education */}
            {activeSubTab === "Continuing Education" && (
  <div className="bg-white/10 p-8 rounded-2xl border border-white/20 space-y-12">
    {/* Hero Section */}
    <div className="text-center space-y-4">
      <h2 className="text-5xl font-bold">
        <span className="text-white">Discover Our </span>
        <span className="text-red-500">Certifications</span>
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto">
        Build the skills employers need and showcase your ability to excel in high-demand roles.
        Explore industries and uncover the CSCA certification or learning product that aligns
        with your career aspirations.
      </p>
    </div>

    {/* Filter Tabs */}
    <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-4">
      {[
        "Overview",
        "All",
        "AI",
        "Cloud",
        "Cyber",
        "Data",
        "Digital Skills",
        "Network",
        "Tech Support",
      ].map((tab) => (
        <button
          key={tab}
          className="px-5 py-2 rounded-full border border-white/20 text-gray-300 hover:bg-red-600 hover:text-white transition-all"
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Overview Paragraphs */}
    <div className="space-y-6 text-gray-300 text-center max-w-4xl mx-auto">
      <p>
         
        <h2 className="text-3xl font-bold">
          <span className="text-white">Take your next step with certifications and </span>
          <span className="text-red-500">skills-based training courses.</span>
        </h2> From entry
        level to advanced, unlock new career opportunities with industry-leading certifications
        in IT support, cybersecurity, networking, cloud, and data. Build in-demand skills fast
        with flexible courses in artificial intelligence, soft skills, and more.
      </p>
      <p>
        Whether you’re learning on your own or seeking training for your organization, we’re here
        to support your goals. Take the next step toward your future with confidence.
      </p>
      <div className="flex flex-wrap justify-center gap-6 pt-4">
        <button className="bg-[#d71f28] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
          Browse all credentials
        </button>
        
      </div>
    </div>

    {/* Skill Area Cards */}
    <h2 className="text-3xl font-bold">
          <span className="text-white">Explore products </span>
          <span className="text-red-500">by skill area</span>
        </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
      {[
        "AI",
        "Cloud",
        "Cyber",
        "Data",
        "Digital Skills",
        "Network",
        "Tech Support",
      ].map((skill) => (
        <div
          key={skill}
          className="bg-white/10 border border-white/20 p-6 rounded-xl hover:border-red-500 transition-all"
        >
          <h3 className="text-2xl font-bold mb-2 text-white">{skill}</h3>
          <p className="text-gray-400 text-sm">
            Explore certifications and resources to boost your expertise in {skill}.
          </p>
        </div>
      ))}
    </div>

    {/* Top Certifications Section */}
    <div className="space-y-8 pt-12">
      <h3 className="text-4xl font-bold text-center">
        <span className="text-white">Accelerate Your Career with Our </span>
        <span className="text-red-500">Top 10 Certifications</span>
      </h3>

      {/* Certification Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Security+",
            subtitle: "Plus Security+ Certification",
            desc: "CSCA Security+ is the most trusted entry into cybersecurity, proving you have real-world, hands-on skills to protect networks, apps, and data.",
          },
          {
            title: "Network+",
            subtitle: "Plus Network+ Certification",
            desc: "CSCA Network+ gives you the confidence to connect, configure, and secure networks of any size, preparing you for roles in support, operations, and administration.",
          },
          {
            title: "A+",
            subtitle: "Plus A+ Certification",
            desc: "CSCA A+ is the starting point for your IT career, validating the core skills in hardware, software, and troubleshooting needed for support roles.",
          },
          {
            title: "CySA+",
            subtitle: "Plus CySA+ Certification",
            desc: "CSCA CySA+ proves you can detect, analyze, and stop threats in real time—covering vulnerability management and incident response.",
          },
          {
            title: "Linux+",
            subtitle: "Plus Linux+ Certification",
            desc: "CSCA Linux+ validates your ability to manage, secure, and troubleshoot Linux systems across cloud and hybrid environments.",
          },
          {
            title: "Data+",
            subtitle: "Plus Data+ Certification",
            desc: "CSCA Data+ shows you can translate data into insights, analyze and visualize information to drive data-driven decisions.",
          },
          {
            title: "Tech+",
            subtitle: "Plus Tech+ Certification",
            desc: "CSCA Tech+ helps you build foundational skills in computing, networks, software, and security before pursuing a specialized certification.",
          },
          {
            title: "PenTest+",
            subtitle: "Plus PenTest+ Certification",
            desc: "CSCA PenTest+ proves you can think like an attacker to strengthen defenses, covering penetration testing for modern IT systems.",
          },
          {
            title: "Cloud+",
            subtitle: "Plus Cloud+ Certification",
            desc: "CSCA Cloud+ proves you can design, secure, and optimize multi-cloud environments across architectures and DevOps operations.",
          },
          {
            title: "Project+",
            subtitle: "Plus Project+ Certification",
            desc: "CSCA Project+ proves you can manage IT projects from start to finish, validating skills in planning, leadership, and delivery.",
          },
        ].map((cert) => (
          <div
            key={cert.title}
            className="bg-white/10 border border-white/20 p-6 rounded-xl hover:border-red-500 transition-all flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold text-white">{cert.title}</h4>
              <h5 className="text-lg text-red-500 mb-2">{cert.subtitle}</h5>
              <p className="text-gray-400 text-sm mb-4">{cert.desc}</p>
            </div>
            <button className="mt-auto bg-[#d71f28] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
              Shop {cert.title} products
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Footer Links */}
    <div className="text-center pt-12 border-t border-white/10 mt-8">
      <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
        {[
          "Shop",
          "About Us",
          "Careers at CSCA",
          "Newsroom",
          "Share your Expertise",
          "Help",
          "Contact Us",
          "Return Policy",
          "Legal and Privacy",
        ].map((link) => (
          <span key={link} className="hover:text-red-500 cursor-pointer transition-colors">
            {link}
          </span>
        ))}
      </div>
    </div>
  </div>
)}

          </section>
        )}
      </div>
    </div>
  );
};

export default Exam;
