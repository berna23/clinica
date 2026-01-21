import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="precario" className="py-32 bg-primary-100/50 scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <div className="text-center mb-20">
            <span className="text-accent-dark font-bold tracking-[0.2em] uppercase text-xs">Investimento</span>
            <h2 className="font-serif text-4xl text-primary-900 mt-6">Tabela de Honorários</h2>
        </div>

        <div className="bg-white border border-primary-200 p-8 md:p-16 shadow-elegant">
           <div className="space-y-0">
              
              {/* Header */}
              <div className="hidden md:flex justify-between pb-6 border-b border-primary-900 mb-6">
                 <span className="font-bold text-xs uppercase tracking-widest text-primary-900">Especialidade / Serviço</span>
                 <span className="font-bold text-xs uppercase tracking-widest text-primary-900">Valor</span>
              </div>

              {/* Items */}
              {[
                { name: 'Nível Psicoafetivo (Psicologia/TCC)', detail: 'Consulta Individual', price: '75€' },
                { name: 'Nível Sensorial (Yoga/Mindfulness)', detail: 'Sessão Individual', price: '75€' },
                { name: 'Nível Físico (Medicina Geral)', detail: 'Consulta Médica', price: '55€ - 85€' },
                { name: 'Nível Intelectual (Consultoria/Formação)', detail: 'Valor Hora', price: '100€' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between md:items-center py-6 border-b border-primary-100 group hover:bg-primary-50 px-4 -mx-4 transition-colors">
                   <div>
                      <h4 className="font-serif text-xl text-primary-900">{item.name}</h4>
                      <p className="text-xs text-primary-500 uppercase tracking-wider mt-1">{item.detail}</p>
                   </div>
                   <div className="mt-4 md:mt-0">
                      <span className="font-serif text-xl text-primary-900 group-hover:text-accent-dark transition-colors">{item.price}</span>
                   </div>
                </div>
              ))}

           </div>

           <div className="mt-12 pt-8 border-t border-primary-100 text-center">
              <p className="text-sm text-primary-600 font-light leading-relaxed mb-6">
                Para orçamentos personalizados, workshops ou serviços corporativos, por favor contacte a direção.
              </p>
              <a href="mailto:direcao@cciapm.pt" className="text-xs font-bold uppercase tracking-widest text-primary-900 border-b border-primary-900 pb-0.5 hover:text-accent-dark hover:border-accent-dark transition-colors">
                Pedir Orçamento Personalizado
              </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;