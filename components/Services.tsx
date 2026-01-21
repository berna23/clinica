import React from 'react';
import { SERVICES, FOUR_FACTORS_DIAGRAM_IMAGE } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 md:py-48 bg-primary-50 scroll-mt-28 border-y border-primary-100">
      <div className="container mx-auto px-6 md:px-16">
        
        <div className="max-w-4xl mx-auto text-center mb-32">
           <span className="text-[10px] uppercase tracking-[0.5em] text-accent-dark font-bold mb-6 block">Metodologia Própria</span>
           <h2 className="font-serif text-4xl md:text-6xl text-primary-900 mb-8">O Modelo dos 4 Fatores</h2>
           <p className="text-primary-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
             Um ecossistema de saúde que integra medicina, psicologia e bem-estar sensorial para resultados sustentáveis e duradouros.
           </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 flex justify-center"
        >
          <div className="relative p-4 bg-white rounded-3xl shadow-soft border border-white">
            <img 
              src={FOUR_FACTORS_DIAGRAM_IMAGE} 
              alt="Diagrama 4 Fatores" 
              className="w-full max-w-lg h-auto"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-primary-100 hover:border-accent-dark transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="mb-10 w-20 h-20 p-5 rounded-2xl bg-primary-50 group-hover:bg-accent-light/30 transition-colors">
                <img src={service.iconImage} alt={service.title} className="w-full h-full object-contain opacity-80" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">{service.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary-400 font-bold mb-8 h-8 flex items-center">{service.factor}</p>
              
              <div className="w-full pt-8 border-t border-primary-50 text-left">
                <ol className="space-y-3 text-primary-500 font-light text-xs">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent-dark font-bold">{i+1}.</span> {item.split('. ')[1]}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;