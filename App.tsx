import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Transition } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Professionals from './components/Professionals';
import ProfessionalsCarousel from './components/ProfessionalsCarousel';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfessionalDetail from './components/ProfessionalDetail';
import Booking from './components/Booking';
import Store from './components/Store';
import Checkout from './components/Checkout';
import About from './components/About';
import Gallery from './components/Gallery';
import Manual from './components/Manual';
import ManualSection from './components/ManualSection';
import InsightCards from './components/InsightCards';
import InsightDetail from './components/InsightDetail';
import { CartProvider } from './components/CartContext';
import CartSidebar from './components/CartSidebar';
import { InsightCard as InsightCardType } from './types';

interface HomePageProps {
  onInsightCardClick: (insight: InsightCardType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onInsightCardClick }) => {
  return (
    <>
      <Hero />
      <ManualSection />
      <InsightCards onCardClick={onInsightCardClick} />
      {/* <About /> */}
      <Gallery />
      <ProfessionalsCarousel />
      <Testimonials />
      <Contact />
    </>
  );
};

// Scroll instantâneo ao trocar de rota, sem animação
// Scroll suave e invisível ao trocar de rota
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll imediato mas invisível - acontece durante o fade out
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  const [showInsightDetail, setShowInsightDetail] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState<InsightCardType | null>(null);

  const handleInsightCardClick = (insight: InsightCardType) => {
    setSelectedInsight(insight);
    setShowInsightDetail(true);
  };

  const handleCloseInsightDetail = () => {
    setShowInsightDetail(false);
    setSelectedInsight(null);
  };

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const pageTransition: Transition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.4,
  };

  return (
    <CartProvider>
      <div className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col">
        <Header />
        <CartSidebar />

        <ScrollToTop />

        <main className="flex-grow relative">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <HomePage onInsightCardClick={handleInsightCardClick} />
                  </motion.div>
                }
              />
              <Route
                path="/servicos"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Services />
                  </motion.div>
                }
              />
              <Route
                path="/manual"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Manual />
                  </motion.div>
                }
              />
              <Route
                path="/profissionais"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Professionals onCardClick={(professional) => console.log(professional)} />
                  </motion.div>
                }
              />
              <Route
                path="/loja"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Store />
                  </motion.div>
                }
              />
              <Route
                path="/contactos"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Contact />
                  </motion.div>
                }
              />

              <Route
                path="/checkout"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Checkout />
                  </motion.div>
                }
              />
              <Route
                path="/professional/:id"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <ProfessionalDetail />
                  </motion.div>
                }
              />
              <Route
                path="/agendar"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Booking />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        <AnimatePresence>
          {showInsightDetail && selectedInsight && (
            <InsightDetail insight={selectedInsight} onClose={handleCloseInsightDetail} />
          )}
        </AnimatePresence>
      </div>
    </CartProvider>
  );
};

export default App;
