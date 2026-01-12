import React from "react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const Programs = () => {
  const sections = [
    {
      title: "Academic",
      description:
        "CSCA bridges the gap between education and industry, offering clear career pathways, hands-on learning, and the support needed to succeed in a rapidly evolving tech landscape. Explore how CSCA can help you, your students, or your institution thrive in the world of tech.",
      image:
        "https://images.unsplash.com/photo-1581091870622-7c8b3f7a3f90?auto=format&fit=crop&q=80&w=1000",
      button: "Explore",
    },
    {
      title: "Higher Education",
      description:
        "Our solutions bridge education and industry, addressing tech skills demand beyond traditional degrees",
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c76?auto=format&fit=crop&q=80&w=1000",
      button: "Explore",
    },
    {
      title: "Secondary Education",
      description:
        "We guide CTE programs by aligning with standards, supporting teachers, and equipping students with job-ready skills.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000",
      button: "Explore",
    },
    {
      title: "Instructors",
      description:
        "Access content and resources to assist your teaching experience and program outcomes.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
      button: "Explore",
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
      </div>

      {/* Page Heading */}
      <section className="relative z-10 text-center py-20">
        <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase">
          Academic Programs
        </h2>
      </section>

      {/* 2-column Grid Sections */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)] transition-all"
          >
            {/* Image */}
            <img
              src={sec.image}
              alt={sec.title}
              className="w-full h-64 object-cover rounded-t-2xl border-b border-white/10"
            />

            {/* Content below image */}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-3">{sec.title}</h3>
              <p className="text-gray-400 mb-4">{sec.description}</p>
              {sec.button && (
                <button className="bg-[#d71f28] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform self-start">
                  {sec.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
