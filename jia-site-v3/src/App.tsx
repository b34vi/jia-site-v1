import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import FloatingActions from './components/FloatingActions';
import MobileStickyBar from './components/MobileStickyBar';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import InvoiceFactoring from './pages/InvoiceFactoring';
import SupplyChainFinancing from './pages/SupplyChainFinancing';
import JiaAccount from './pages/JiaAccount';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Apply from './pages/Apply';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Placeholder = ({ name }: { name: string }) => (
  <div className="pt-40 pb-20 px-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
    <h1 className="text-4xl font-display font-black text-secondary-900 mb-4">{name}</h1>
    <p className="text-secondary-500 max-w-md mx-auto mb-8 font-medium">This page is part of our V1 scope and is currently being polished for the May 14 launch.</p>
    <a href="/" className="px-6 py-3 bg-primary-600 text-white rounded-xl font-bold">Back to Home</a>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50">
          <AnnouncementBar />
          <Navbar />
        </header>
        <main className="flex-grow pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/invoice-factoring" element={<InvoiceFactoring />} />
            <Route path="/supply-chain-financing" element={<SupplyChainFinancing />} />
            <Route path="/jia-account" element={<JiaAccount />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Placeholder name="Careers" />} />
            <Route path="/privacy" element={<Placeholder name="Privacy Policy" />} />
            <Route path="/terms" element={<Placeholder name="Terms of Service" />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
        <MobileStickyBar />
      </div>
    </Router>
  );
}
