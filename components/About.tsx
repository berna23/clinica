import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const ABOUT_IMAGE_URL = "https://cciapm.pt/wp-content/uploads/2024/10/Diagrama-CCIAPM-Atualizado-01-1.png";

  return (
    <section id="sobre" className="bg-white py-32 md:py-48 scroll-mt-28">
      <div className="container mx-auto px-6 md:px-16">

        {/* Título ocupa toda a largura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-accent-dark font-bold block mb-8">
            Descrição do Manual
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-primary-900 leading-[1.1]">
            Manual da Abordagem CCIAPM de 4 Fatores
          </h2>
        </motion.div>

        {/* Conteúdo abaixo do título */}
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">

          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8 text-primary-500 font-light leading-relaxed text-lg"
          >
            <p>
              Com base na formação académica e de investigação (PhD), bem como, com base na formação e experiência profissional de mais de 15 anos, tentamos compilar estratégias e abordagens e direcionar a nossa avaliação/intervenção para os pilares aparentemente essenciais na prevenção/intervenção individual: 
              <span className="font-serif italic text-primary-900 block mt-2 text-xl">
                Nível psicoafetivo; Nível sensorial, Nível físico; e Nível intelectual. 
              </span>
            </p>
            
            <p>
              O que a investigação científica corrobora e a experiência clínica nos parece demonstrar é que trabalhar isoladamente em apenas uma destas esferas pode não ser suficiente para conduzir a uma eficácia robusta e sustentada no tempo, não obstante à melhoria circunstancial muitas vezes encontrada. 
              O equilíbrio sustentado e consistente das 4 esferas parece ser um aspeto que precede uma eficácia terapêutica global e contínua no tempo. 
              Neste Manual o foco é essencialmente interno e individual e não externo. Cada esfera é um nível de avaliação/intervenção, que por sua vez, apresenta pelo menos 3 subníveis de análise, reconhecidos como essenciais para o equilíbrio global final. 
            </p>

            <div className="mt-12 p-8 bg-primary-50 border border-primary-100 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1 h-4 bg-accent-dark"></span>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary-900 font-bold">Notas importantes:</h4>
              </div>
              <p className="text-[11px] text-primary-500 font-light leading-relaxed">
                Este manual obedece aos pressupostos e bases normativas da intervenção psicológica de acordo com as abordagens cognitivo-comportamentais de 2ª e de 3ª geração (sendo uma compilação dos mesmos), bem como, obedece a todos os pressupostos éticos e deontológicos definidos pela Ordem dos Psicólogos Portugueses. Salvaguardamos ainda que, a intervenção com base neste conjunto de estratégias não pretende substituir o acompanhamento e orientações terapêuticas dos respetivos profissionais de saúde (psiquiatras, outros médicos e psicólogos ou outros profissionais) nem deve ser dissociada do acompanhamento regular previamente existente. Este Manual de análise e intervenção é apenas uma compilação de estratégias cognitivo comportamentais, para utilização como suporte de estratégias e ferramentas complementares. Em momento algum, as estratégias propostas devem substituir o(s) tratamento(s) já existentes, devendo ser previamente refletidas e negociadas com os terapeutas/psicólogos e psiquiatras/médicos de referência.
              </p>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-full flex justify-center">
  <img 
    src={ABOUT_IMAGE_URL} 
    alt="Diagrama CCIAPM" 
    className="w-full max-w-[400px] h-auto object-contain transition-transform duration-700 hover:scale-105"
  />
</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
