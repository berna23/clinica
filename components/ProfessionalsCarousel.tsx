import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROFESSIONALS } from '../constants';
import { motion } from 'framer-motion';

const ProfessionalsCarousel: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerCarouselRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="profissionais" className="py-32 md:py-48 bg-white overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6 md:px-16 mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-accent-dark font-bold mb-6 block">Corpo Clínico</span>
          <h2 className="font-serif text-4xl md:text-6xl text-primary-900">Especialistas ao seu lado</h2>
      </div>

      <div ref={carouselRef} className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div 
          ref={innerCarouselRef}
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-10 w-fit px-6 md:px-16"
        >
          {PROFESSIONALS.map((prof) => (
            <motion.div 
              key={prof.id}
              className="w-[220px] md:w-[280px] shrink-0 group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-primary-100 mb-8 border border-primary-50">
                 <img 
                    src={prof.image} 
                    alt={prof.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="px-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-dark block mb-2">
                  {prof.role}
                </span>
                <h3 className="font-serif text-xl text-primary-900 mb-4 h-14 leading-tight">
                  {prof.name}
                </h3>
                <Link 
                  to={`/professional/${prof.id}`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-500 hover:text-primary-900 transition-all group/link"
                >
                  Perfil Completo 
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalsCarousel;