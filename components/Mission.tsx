import React from 'react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  return (
    <section id="missao" className="bg-white py-32 md:py-48 scroll-mt-28 border-b border-primary-100">
      <div className="container mx-auto px-6 md:px-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Removed the 'A Nossa Missão' span */}
          <h2 className="font-serif text-4xl md:text-5xl text-primary-900 mb-8 leading-tight">
            Missão
          </h2>
          <p className="text-primary-600 font-light text-lg leading-relaxed max-w-3xl mx-auto">
            Na CCIAPM, acreditamos que o bem-estar nasce do equilíbrio entre todas as
            dimensões da vida. Por isso, desenvolvemos a Abordagem CCIAPM de 4 Fatores, um
            modelo multidisciplinar que atua em 4 Níveis essenciais (Psicoafetivo, Sensorial,
            Físico e Intelectual).
            Esta abordagem global permite-nos avaliar e intervir de forma integrada, respondendo
            às necessidades únicas de cada pessoa e apoiando-a na reconstrução da sua melhor
            versão, física, emocional e mental.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;