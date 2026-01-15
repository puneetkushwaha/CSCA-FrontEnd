import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, enroll in a certification course, or contact us for support. This includes your name, email address, payment information, and certification records.'
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process your certifications, communicate with you, and ensure the security and integrity of our platform and certification programs.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment data is encrypted and processed through secure, PCI-compliant payment processors.'
    },
    {
      icon: Eye,
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information at any time. You can also opt out of marketing communications while still receiving important service-related notifications.'
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
              Privacy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use,
              and protect your personal information.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Last Updated: January 15, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/10 rounded-xl p-8 hover:border-red-600/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                  <section.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{section.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy Content */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Codevirus Security Certification Authority ("CSCA," "we," "us," or "our") respects your privacy and is committed
                to protecting your personal data. This privacy policy will inform you about how we look after your personal data
                and tell you about your privacy rights.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">2. Data We Collect</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We collect and process the following types of personal data:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Identity data (name, username, date of birth)</li>
                <li>Contact data (email address, phone number, mailing address)</li>
                <li>Financial data (payment card details, billing information)</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (how you use our website and services)</li>
                <li>Certification data (exam results, course progress, certificates earned)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">3. How We Use Your Data</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we use your data to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Provide and administer certification services</li>
                <li>Process payments and manage billing</li>
                <li>Communicate with you about courses, exams, and certifications</li>
                <li>Improve our website and services</li>
                <li>Maintain security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">4. Data Sharing</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We do not sell your personal data. We may share your data with:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Service providers who help us operate our platform</li>
                <li>Payment processors to handle transactions securely</li>
                <li>Employers or organizations (only when you explicitly authorize us)</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">5. Data Retention</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required by law. Certification records are maintained indefinitely
                for verification purposes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">6. Your Rights</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Under data protection laws, you have rights including:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure of your data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">7. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have questions about this privacy policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <p className="text-white font-bold mb-2">Privacy Team</p>
                <p className="text-gray-400 text-sm">Email: privacy@csca.com</p>
                <p className="text-gray-400 text-sm">Address: New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
