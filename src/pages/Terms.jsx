import React from 'react';
import { FileText, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const Terms = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: 'Fair Use',
      description: 'Use our services in good faith for legitimate certification purposes.'
    },
    {
      icon: XCircle,
      title: 'No Cheating',
      description: 'Exam fraud or cheating will result in immediate certification revocation.'
    },
    {
      icon: AlertTriangle,
      title: 'Respect IP',
      description: 'All course materials and exam content are protected by copyright.'
    },
    {
      icon: FileText,
      title: 'Agreement',
      description: 'By using CSCA services, you agree to these terms and conditions.'
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
              Terms & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using CSCA's certification services and platform.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Last Updated: January 15, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/10 rounded-xl p-6 hover:border-red-600/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider mb-2">{highlight.title}</h3>
                <p className="text-xs text-gray-500">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms Content */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                By accessing or using CSCA's services, you agree to be bound by these Terms and Conditions.
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">2. Account Registration</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                To access certain features, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">3. Certification Exams</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                When taking CSCA certification exams, you must:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Complete exams independently without unauthorized assistance</li>
                <li>Not share exam content or questions with others</li>
                <li>Not use unauthorized materials during exams</li>
                <li>Follow all exam policies and procedures</li>
                <li>Accept that exam results are final and binding</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong className="text-red-500">Violation of exam policies will result in immediate certification
                  revocation and may result in permanent ban from CSCA services.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">4. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                All course materials, exam content, certification logos, and CSCA branding are protected by copyright
                and trademark laws. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Copy, distribute, or reproduce course materials</li>
                <li>Share exam questions or answers</li>
                <li>Use CSCA logos without authorization</li>
                <li>Create derivative works from our content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">5. Payment and Refunds</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                All payments are processed securely through our payment partners. Please note:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>All prices are in USD unless otherwise stated</li>
                <li>Exam vouchers are valid for 12 months from purchase</li>
                <li>Refunds are available within 30 days of purchase (before exam attempt)</li>
                <li>No refunds after exam completion or certification issuance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">6. Certification Validity</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                CSCA certifications are valid for three (3) years from the date of issuance. To maintain your
                certification, you must complete continuing education requirements or recertify before expiration.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">7. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                CSCA provides certification services "as is" without warranties. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Career outcomes or job placement</li>
                <li>Technical issues during exam delivery</li>
                <li>Third-party service failures</li>
                <li>Indirect or consequential damages</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">8. Termination</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account if you violate these terms.
                You may terminate your account at any time by contacting support.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">9. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We may update these terms from time to time. Continued use of our services after changes
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">10. Contact Information</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                For questions about these terms, please contact us at:
              </p>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <p className="text-white font-bold mb-2">Legal Team</p>
                <p className="text-gray-400 text-sm">Email: legal@csca.com</p>
                <p className="text-gray-400 text-sm">Address: New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
