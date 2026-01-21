import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { INSIGHT_CARDS } from '../constants'; // Certifica-te de que esta constante existe
import { InsightCard as InsightCardType } from '../types';

interface InsightCardProps {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
  index: number;
  onCardClick: (insight: InsightCardType) => void; // Função para abrir detalhes
  insightData: InsightCardType; // Objeto completo do insight
}

const InsightCard: React.FC<InsightCardProps> = ({ id, image, title, shortDescription, index, onCardClick, insightData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="bg-white rounded-2xl border border-primary-100 shadow-soft flex flex-col text-left group relative overflow-hidden"
    >
      {/* Imagem no topo do card */}
      <div className="w-full h-48 md:h-56 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Conteúdo do card */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-serif text-2xl mb-3 leading-tight font-bold" style={{ color: 'rgb(216 189 114)' }}>
          {title}
        </h3>

        {/* Texto com truncamento visual */}
        <p className="text-primary-600 font-light text-base leading-relaxed mb-6 h-36 line-clamp-6 relative overflow-hidden">
          {shortDescription}
          <span className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></span>
        </p>

        <button
          onClick={() => onCardClick(insightData)}
          className="mt-auto text-[#d8bd72] font-bold text-sm flex items-center gap-2 group-hover:underline"
        >
          Ler Mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
        </button>
      </div>
    </motion.div>
  );
};

interface InsightCardsProps {
  onCardClick: (insight: InsightCardType) => void; // Função para abrir modal ou detalhe
}

const InsightCards: React.FC<InsightCardsProps> = ({ onCardClick }) => {
  return (
    <section
      id="insights"
      className="py-40 md:py-40 scroll-mt-28 border-b border-primary-100"
      style={{ backgroundColor: 'rgb(166 255 230)' }}
    >
      <div className="container mx-auto px-6 md:px-16 max-w-screen-2xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {INSIGHT_CARDS.map((insight, index) => (
            <InsightCard
              key={insight.id}
              id={insight.id}
              image={insight.image}
              title={insight.title}
              shortDescription={insight.shortDescription}
              index={index}
              onCardClick={onCardClick}
              insightData={insight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightCards;
