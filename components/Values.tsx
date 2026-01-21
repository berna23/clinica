import React from 'react';
import { motion } from 'framer-motion';

const Values: React.FC = () => {
  return (
    <section id="valores" className="bg-primary-50 py-32 md:py-48 scroll-mt-28 border-b border-primary-100">
      <div className="container mx-auto px-6 md:px-16 max-w-4xl"> {/* Adjusted max-w to match Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Removed the 'Os Nossos Pilares' span */}
          <h2 className="font-serif text-4xl md:text-5xl text-primary-900 mb-8 leading-tight">
            Valores
          </h2>
          <p className="text-primary-600 font-light text-lg leading-relaxed max-w-3xl mx-auto">
            Promovemos e acreditamos que a ética, a inovação, a colaboração multidisciplinar e
            multifatorial, a excelência, a transparência, a honestidade, a integridade e a
            solidariedade são os valores pelos quais a humanidade se deve reger e são, por isso,
            indubitavelmente, os valores pelos quais toda a equipa CCIAPM se rege.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;