import { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider } from './components/ThemeContext';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Programs = lazy(() => import('./pages/Programs'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Fees = lazy(() => import('./pages/Fees'));
const Scholarships = lazy(() => import('./pages/Scholarships'));
const CampusLife = lazy(() => import('./pages/CampusLife'));
const FAQ = lazy(() => import('./pages/FAQ'));
const VirtualTour = lazy(() => import('./pages/VirtualTour'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence>
          {loading && <LoadingScreen key="loader" />}
        </AnimatePresence>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="h-screen w-full bg-navy flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/fees" element={<Fees />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/campus-life" element={<CampusLife />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/virtual-tour" element={<VirtualTour />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
