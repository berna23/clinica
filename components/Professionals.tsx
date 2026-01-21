import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROFESSIONALS } from '../constants';

interface ProfessionalsSectionProps { }

const Professionals: React.FC<ProfessionalsSectionProps> = () => {
  return (
    <section id="profissionais" className="py-40 md:py-48 bg-gradient-to-b from-white to-primary-50/30 scroll-mt-28 border-b border-primary-100">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-16 text-center mb-20 max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#42B8A4] font-bold block mb-4">
          Corpo Clínico
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Profissionais de Saúde
        </h2>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 md:px-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        {PROFESSIONALS.map((prof, index) => (
          <motion.div
            key={prof.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group relative"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-primary-100/50">
              {/* Imagem com overlay gradient */}
              <div className="w-full h-80 md:h-96 relative overflow-hidden">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


              </div>

              {/* Conteúdo */}
              <div className="p-8 flex flex-col flex-1 relative">
                {/* Decorative element */}
                <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-[#d8bd72] to-[#42B8A4] transform -translate-y-4"></div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-black mb-6 leading-tight group-hover:text-primary-900 transition-colors duration-300">
                  {prof.name}
                </h3>

                {/* CTA Button */}
                <Link
                  to={`/professional/${prof.id}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-[#d8bd72] hover:bg-[#c9a85f] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300"
                >
                  Ver Perfil <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Subtle shadow effect on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d8bd72]/10 to-[#42B8A4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl transform group-hover:scale-105"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Professionals;
