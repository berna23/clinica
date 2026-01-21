import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CARD_FACTORS, ACCORDION_FACTORS, CardFactor, AccordionFactor } from '../constants';



const Manual: React.FC = () => {
    // Estado para abrir/fechar acordeons
    const [openIds, setOpenIds] = useState<number[]>([]);

    const toggleAccordion = (id: number) => {
        setOpenIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 scroll-mt-28">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                    <span className="text-accent-dark font-bold tracking-[0.2em] uppercase text-xs mb-4">
                        Manual CCIAPM
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl text-primary-900 mb-6">
                        Abordagem Multidisciplinar 360º
                    </h1>
                    <p className="text-primary-500 text-sm leading-relaxed">
                        Aqui detalhamos os fatores e subníveis de análise para avaliação e intervenção em diferentes áreas.
                    </p>
                </div>

                {/* Cards redesenhados */}
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8">
                    {CARD_FACTORS.map((factor, index) => (
                        <motion.div
                            key={factor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
                            className="relative bg-gradient-to-b from-white to-gray-50/30 rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(201,165,59,0.3)] transition-all duration-700 border border-gray-100 overflow-hidden group hover:-translate-y-2"
                        >
                            {/* Accent bar no topo */}
                            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ backgroundColor: '#c9a53b' }}
                            ></div>

                            {/* Conteúdo */}
                            <div className="relative z-10">
                                {/* Ícone/Imagem no topo */}
                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        <img
                                            src={factor.image}
                                            alt={factor.title}
                                            className="w-20 h-20 object-contain relative z-10"
                                        />
                                        {/* Glow effect atrás da imagem */}
                                        <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                                            style={{ backgroundColor: '#c9a53b' }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Título */}
                                <h2 className="font-serif text-2xl text-center text-gray-900 mb-2 tracking-tight">
                                    {factor.title}
                                </h2>

                                {/* Linha decorativa minimalista */}
                                <div className="flex justify-center gap-1 mb-6">
                                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#c9a53b' }}></span>
                                    <span className="w-8 h-0.5 rounded-full mt-0.5" style={{ backgroundColor: '#c9a53b' }}></span>
                                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#c9a53b' }}></span>
                                </div>

                                {/* Subtítulo */}
                                <p className="text-center text-[10px] font-semibold mb-1 tracking-[0.15em] uppercase opacity-70"
                                    style={{ color: '#c9a53b' }}
                                >
                                    Avaliação/Intervenção Psicoafetivo
                                </p>

                                {/* Subníveis */}
                                <p className="text-center text-[9px] text-black mb-8 opacity-50">
                                    3 níveis de subanálise
                                </p>

                                {/* Lista de itens com design clean */}
                                <ul className="space-y-3">
                                    {factor.description.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-gray-700 group/item"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 opacity-60 group-hover/item:opacity-100 transition-all duration-300"
                                                style={{ backgroundColor: '#c9a53b' }}
                                            ></span>
                                            <span className="text-[13px] leading-relaxed font-light">
                                                {item.replace(/^[•\-]\s*/, '')}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Decorative corner gradient */}
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700"
                                style={{ backgroundColor: '#c9a53b' }}
                            ></div>
                        </motion.div>
                    ))}
                </div>


                {/* Nova seção de acordeons */}
                <div className="mt-32 max-w-[1000px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase opacity-70 mb-3 block"
                            style={{ color: '#c9a53b' }}
                        >
                            Detalhamento Completo
                        </span>
                        <h2 className="font-serif text-3xl text-gray-900 mb-3">
                            Abordagem Multidisciplinar CCIAPM 360º
                        </h2>
                        <div className="flex justify-center gap-1">
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#c9a53b' }}></span>
                            <span className="w-8 h-0.5 rounded-full mt-0.5" style={{ backgroundColor: '#c9a53b' }}></span>
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#c9a53b' }}></span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {ACCORDION_FACTORS.map((factor, index) => {
                            const isOpen = openIds.includes(factor.id);
                            return (
                                <motion.div
                                    key={factor.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500"
                                >
                                    <button
                                        onClick={() => toggleAccordion(factor.id)}
                                        className="w-full flex justify-between items-center px-8 py-5 hover:bg-gray-50 transition-colors text-left group"
                                    >
                                        <span className="font-serif text-lg text-gray-900 group-hover:text-gray-700 transition-colors">
                                            {factor.title}
                                        </span>
                                        <span className="transition-transform duration-300"
                                            style={{
                                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                color: '#c9a53b'
                                            }}
                                        >
                                            <ChevronDown size={20} />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-gray-100"
                                        >
                                            <div className="px-8 py-6 bg-gradient-to-b from-gray-50/50 to-white">
                                                {factor.content.map((item, i) => {
                                                    const isBullet = item.trim().startsWith('•');
                                                    const isSubBullet = item.startsWith('  •');
                                                    const cleanText = item.replace(/^[•\s]+/, '');

                                                    return (
                                                        <div
                                                            key={i}
                                                            className={`flex items-start gap-3 mb-3 ${isSubBullet
                                                                    ? 'ml-8'
                                                                    : isBullet
                                                                        ? 'ml-0'
                                                                        : ''
                                                                }`}
                                                        >
                                                            {isBullet && (
                                                                <span
                                                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                                                                    style={{ backgroundColor: '#c9a53b' }}
                                                                ></span>
                                                            )}
                                                            <p className="text-[13px] leading-relaxed text-gray-700 font-light">
                                                                {cleanText}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manual;