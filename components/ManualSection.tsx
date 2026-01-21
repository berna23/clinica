import React from 'react';
import { motion } from 'framer-motion';
import { FOUR_FACTORS_DIAGRAM_IMAGE } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManualSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="manual" className="bg-white py-32 md:py-48 scroll-mt-28 border-b border-primary-100">
      <div className="w-full px-6 md:px-16 mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-accent-dark font-bold block mb-6">
            O Nosso Guia
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-900 leading-tight">
            Manual da Abordagem CCIAPM de 4 Fatores
          </h2>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 flex justify-center"
        >
          <div className="relative">
            <img 
              src={FOUR_FACTORS_DIAGRAM_IMAGE} 
              alt="Diagrama Abordagem CCIAPM de 4 Fatores" 
              className="w-full max-w-[360px] h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[90%] md:max-w-[95%] mx-auto text-primary-600 font-light text-lg leading-relaxed space-y-8"
        >
          <p>
            Com base na formação académica e de investigação (PhD), bem como na formação e experiência profissional de mais de 15 anos,
            compilámos estratégias e abordagens que direcionam a nossa avaliação/intervenção para os pilares aparentemente essenciais na prevenção/intervenção individual:
            <span className="font-bold text-primary-900 block mt-2 text-xl text-center">
              Nível psicoafetivo; Nível sensorial, Nível físico; e Nível intelectual.
            </span>
          </p>

          <p>
            O que a investigação científica corrobora e a experiência clínica nos parece demonstrar é que trabalhar isoladamente em apenas uma destas esferas pode não ser suficiente para conduzir a uma eficácia robusta e sustentada no tempo, não obstante à melhoria circunstancial muitas vezes encontrada. O equilíbrio sustentado e consistente das 4 esferas parece ser um aspeto que precede uma eficácia terapêutica global e contínua no tempo. Neste Manual o foco é essencialmente interno e individual e não externo. Cada esfera é um nível de avaliação/intervenção, que por sua vez, apresenta pelo menos 3 subníveis de análise, reconhecidos como essenciais para o equilíbrio global final.
          </p>
          
          <button 
            onClick={() => navigate('/loja')} 
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            Descobrir o Manual <ArrowRight size={14} />
          </button>

          <div className="p-8 bg-primary-50 border border-primary-100 rounded-2xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-4 bg-accent-dark"></span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary-900 font-bold">
                Notas Importantes: Aviso Ético
              </h4>
            </div>
            <p className="text-[11px] text-primary-500 font-light leading-relaxed">
              Este manual obedece aos pressupostos e bases normativas da intervenção psicológica de acordo com as abordagens cognitivo-comportamentais de 2ª e de 3ª geração (sendo uma compilação dos mesmos), bem como, obedece a todos os pressupostos éticos e deontológicos definidos pela Ordem dos Psicólogos Portugueses. Salvaguardamos ainda que, a intervenção com base neste conjunto de estratégias não pretende substituir o acompanhamento e orientações terapêuticas dos respetivos profissionais de saúde (psiquiatras, outros médicos e psicólogos ou outros profissionais) nem deve ser dissociada do acompanhamento regular previamente existente. Este Manual de análise e intervenção é apenas uma compilação de estratégias cognitivo comportamentais, para utilização como suporte de estratégias e ferramentas complementares. Em momento algum, as estratégias propostas devem substituir o(s) tratamento(s) já existentes, devendo ser previamente refletidas e negociadas com os terapeutas/psicólogos e psiquiatras/médicos de referência.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManualSection;
