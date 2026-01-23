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
import OAuthSuccess from "./pages/OAuthSuccess";
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
import Checkout from './pages/Checkout';
import SuccessStories from './pages/SuccessStories';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Research from './pages/Research';
import CaseStudies from './pages/CaseStudies';
import DashboardHome from './pages/DashboardHome';
import CursorFollower from './components/CursorFollower';
import CartDrawer from './components/CartDrawer';
import ForgotPassword from './pages/ForgotPassword';
import PearsonDashboard from './pages/PearsonDashboard';
import AdditionalInfo from './pages/AdditionalInfo';
import RegistryPreferences from './pages/RegistryPreferences';
import ExamHistory from './pages/ExamHistory';
import ScoreReports from './pages/ScoreReports';
import MyReceipts from './pages/MyReceipts';
import FindExam from './pages/FindExam';
import SelectExamOptions from './pages/SelectExamOptions';
import SelectExamLanguage from './pages/SelectExamLanguage';
import ProvideAdditionalInfo from './pages/ProvideAdditionalInfo';
import TestingPolicies from './pages/TestingPolicies';


// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Profile - Protected but with Navbar/Footer */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/oauth-success" element={<OAuthSuccess />} />

            {/* Protected Dashboard Area */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardHome />} />
                <Route path="courses" element={<DashboardHome />} />
                <Route path="certifications" element={<Certifications />} />
                <Route path="settings" element={<DashboardHome />} />
                <Route path="exam" element={<Exam />} />
                <Route path="pearson" element={<PearsonDashboard />} />
              </Route>
              <Route path="/exam" element={<Exam />} />
              <Route path="/pearson-dashboard" element={<PearsonDashboard />} />
              <Route path="/additional-info" element={<AdditionalInfo />} />
              <Route path="/registry-preferences" element={<RegistryPreferences />} />
              <Route path="/exam-history" element={<ExamHistory />} />
              <Route path="/score-reports" element={<ScoreReports />} />
              <Route path="/my-receipts" element={<MyReceipts />} />
              <Route path="/find-exam" element={<FindExam />} />
              <Route path="/select-exam-options" element={<SelectExamOptions />} />
              <Route path="/select-exam-language" element={<SelectExamLanguage />} />
              <Route path="/provide-additional-info" element={<ProvideAdditionalInfo />} />
              <Route path="/testing-policies" element={<TestingPolicies />} />
            </Route>

          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
