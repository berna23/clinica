import React, { useState, useRef, useEffect } from 'react';
import { Quote, X } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const MAX_LINES = 6;

const Testimonials: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerCarouselRef = useRef<HTMLDivElement>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showFade, setShowFade] = useState<{ [key: string]: boolean }>({});

  const calculateWidth = () => {
    if (carouselRef.current && innerCarouselRef.current) {
      setWidth(innerCarouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  const textRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

  useEffect(() => {
    TESTIMONIALS.forEach((t) => {
      const el = textRefs.current[t.id];
      if (el) {
        const needsFade = el.scrollHeight > el.clientHeight;
        setShowFade((prev) => ({ ...prev, [t.id]: needsFade }));
      }
    });
  }, []);

  return (
    <section id="testemunhos" className="py-32 md:py-48 bg-primary-50 scroll-mt-28 border-t border-primary-100">
      <div className="container mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent-dark font-bold mb-6 block">
              Vozes de Confiança
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-primary-900">
              Testemunhos
            </h2>
          </div>
          <Quote size={40} strokeWidth={1} className="text-primary-300" />
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            ref={innerCarouselRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
            className="flex gap-12 w-fit"
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[320px] md:w-[450px] shrink-0 bg-white p-12 rounded-3xl border border-primary-100 shadow-soft flex flex-col justify-between cursor-pointer"
                onClick={() => !isDragging && setSelectedTestimonial(testimonial.id)}
              >
                <div className="relative mb-10">
                  <p
                    ref={(el) => (textRefs.current[testimonial.id] = el)}
                    className="text-primary-800 text-lg md:text-xl leading-relaxed font-serif italic overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: MAX_LINES,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {testimonial.text}
                  </p>

                  {showFade[testimonial.id] && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-accent"></div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary-900">
                      {testimonial.name}
                    </span>
                    <span className="block text-[9px] uppercase tracking-widest text-primary-400">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-12 rounded-3xl max-w-2xl w-full relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <button
                className="absolute top-4 right-4 text-primary-900 hover:text-accent-dark"
                onClick={() => setSelectedTestimonial(null)}
              >
                <X size={24} />
              </button>

              {TESTIMONIALS.filter(t => t.id === selectedTestimonial).map(t => (
                <div key={t.id}>
                  <p className="text-primary-800 text-lg md:text-xl leading-relaxed font-serif italic mb-10">
                    “{t.text}”
                  </p>

                  {/* Nome e cargo SEM imagem */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-accent"></div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-primary-900">
                        {t.name}
                      </span>
                      <span className="block text-[9px] uppercase tracking-widest text-primary-400">
                        {t.role} · Verificado
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
