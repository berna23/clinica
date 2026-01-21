import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { InsightCard as InsightCardType } from '../types'; // Renamed to avoid conflict with component name

interface InsightDetailProps {
  insight: InsightCardType;
  onClose: () => void;
}

const InsightDetail: React.FC<InsightDetailProps> = ({ insight, onClose }) => {

  // Effect to manage body scroll and Escape key for lightbox
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose} // Close on backdrop click
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes de ${insight.title}`}
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.5 }}
        className="relative bg-white rounded-[2rem] shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-primary-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
      >
        {/* Close Button on top right */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 bg-primary-50 hover:bg-primary-100 rounded-full text-primary-500 transition-colors z-10"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Content (retained 2-column layout) */}
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Left Column - Image */}
          <div className="lg:col-span-5 relative">
            <div className="h-[300px] lg:h-full w-full relative"> {/* Adjusted height for overlay context */}
              <img 
                src={insight.image} 
                alt={insight.title} 
                className="w-full h-full object-cover" 
              />
              {/* Optional: gradient for mobile image readability if needed, similar to professional detail */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent lg:hidden"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16">
            <h1 className="font-serif text-4xl font-bold text-primary-900 mb-6 leading-tight">
              {insight.title}
            </h1>
            <div className="prose prose-lg max-w-none text-primary-700 leading-relaxed font-light space-y-6">
              <p>{insight.fullDescription}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InsightDetail;