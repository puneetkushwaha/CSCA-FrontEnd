import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import Certifications from './pages/Certifications';
import CertificationDetail from './pages/CertificationDetail';
import CertificationPathway from './pages/CertificationPathway';
import ExamSystem from './pages/ExamSystem';
import Exam from './pages/Exam';
import CertificateVerification from './pages/CertificateVerification';
import DigitalBadges from './pages/DigitalBadges';
import CorporateTraining from './pages/CorporateTraining';
import Resources from './pages/Resources';
import PartnersEcosystem from './pages/PartnersEcosystem';
import Accreditation from './pages/Accreditation';
import CareerOpportunities from './pages/CareerOpportunities';
import ExploreCareers from './pages/ExploreCareers';
import ExploreIndustries from './pages/ExploreIndustries';
import ExploreTechCareers from './pages/ExploreTechCareers';
import CareersPlus from './pages/CareersPlus';
import TechCareerDetail from './pages/TechCareerDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import HigherEducation from './pages/HigherEducation';
import SecondaryEducation from './pages/SecondaryEducation';
import Instructors from './pages/Instructors';
import Students from './pages/Students';
import Enterprise from './pages/Enterprise';
import Profile from './pages/Profile';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import CursorFollower from './components/CursorFollower';
import CartDrawer from './components/CartDrawer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <CursorFollower />
      <CartDrawer />
      <AnnouncementBar />
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

import Blog from './pages/Blog';
import Research from './pages/Research';
import CaseStudies from './pages/CaseStudies';
import DashboardHome from './pages/DashboardHome';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <Routes>
            {/* Public Routes with Navbar/Footer */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/certification/:id" element={<CertificationDetail />} />

              {/* New Sitemap Routes */}
              <Route path="/explore-careers" element={<ExploreCareers />} />
              <Route path="/certification-pathway" element={<CertificationPathway />} />
              <Route path="/exam-system" element={<ExamSystem />} />
              <Route path="/certificate-verification" element={<CertificateVerification />} />
              <Route path="/digital-badges" element={<DigitalBadges />} />
              <Route path="/career-opportunities" element={<CareerOpportunities />} />
              <Route path="/explore-industries" element={<ExploreIndustries />} />
              <Route path="/explore-tech-careers" element={<ExploreTechCareers />} />
              <Route path="/careers-plus" element={<CareersPlus />} />
              <Route path="/explore-tech-careers/:careerId" element={<TechCareerDetail />} />
              <Route path="/partners-ecosystem" element={<PartnersEcosystem />} />
              <Route path="/accreditation" element={<Accreditation />} />
              {/* Academic Routes */}
              <Route path="/academic/higher-education" element={<HigherEducation />} />
              <Route path="/academic/secondary-education" element={<SecondaryEducation />} />
              <Route path="/academic/instructors" element={<Instructors />} />
              <Route path="/academic/students" element={<Students />} />
              <Route path="/enterprise" element={<Enterprise />} />

              <Route path="/corporate-training" element={<CorporateTraining />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/blog" element={<Blog />} />
              <Route path="/resources/research" element={<Research />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />

            {/* Protected Dashboard Area */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardHome />} />
                <Route path="courses" element={<DashboardHome />} />
                <Route path="certifications" element={<DashboardHome />} />
                <Route path="settings" element={<DashboardHome />} />
                <Route path="exam" element={<Exam />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="/exam" element={<Exam />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
