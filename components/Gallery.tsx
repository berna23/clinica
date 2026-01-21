import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Import the X icon for closing
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerCarouselRef = useRef<HTMLDivElement>(null);

  // State for lightbox
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const calculateWidth = () => {
    if (carouselRef.current && innerCarouselRef.current) {
      const contentScrollWidth = innerCarouselRef.current.scrollWidth;
      const viewportWidth = carouselRef.current.offsetWidth;
      setWidth(Math.max(0, contentScrollWidth - viewportWidth));
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    const timer = setTimeout(calculateWidth, 100);
    return () => {
      window.removeEventListener('resize', calculateWidth);
      clearTimeout(timer);
    };
  }, []);

  // Handle image tap to open lightbox
  const handleImageTap = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowLightbox(true);
  };

  // Handle closing lightbox
  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };

  // Effect to manage body scroll and Escape key for lightbox
  useEffect(() => {
    if (showLightbox) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeLightbox();
        }
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        window.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; // Ensure cleanup on unmount
    };
  }, [showLightbox]);


  return (
    <section id="galeria" className="py-32 md:py-48 bg-primary-50 scroll-mt-28">
      <div className="container mx-auto px-6 md:px-16 mb-20">

      </div>

      {/* Image Carousel - Now acting as a full-bleed component within the section */}
      <div
        ref={carouselRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing pb-12"
      >
        <motion.div
          ref={innerCarouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-8 w-fit px-6 md:px-16"
        >
          {GALLERY_IMAGES.map((imageSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              className="relative group overflow-hidden bg-primary-100 rounded-2xl shadow-soft border border-primary-200 shrink-0 w-[280px] sm:w-[350px] md:w-[400px] cursor-zoom-in"
              onClick={() => handleImageTap(imageSrc)}
              role="button"
              tabIndex={0}
              aria-label={`Abrir imagem ${index + 1} em tamanho real`}
            >
              <img
                src={imageSrc}
                alt={`Galeria de Imagens ${index + 1}`}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

          ))}
        </motion.div>
      </div>

      {/* Lightbox Component */}
      <AnimatePresence>
        {showLightbox && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-4 cursor-zoom-out"
            onClick={closeLightbox} // Close lightbox on backdrop click
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador de imagem em tamanho real"
          >
            <motion.img
              src={selectedImage}
              alt="Imagem em tamanho real"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[90vh] object-contain cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors z-[1001]"
              aria-label="Fechar visualizador de imagem"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
