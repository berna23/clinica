import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Sparkles } from 'lucide-react'; // Removed ArrowRight as the link is removed

interface VisionCardProps {
  icon: React.ElementType; // Type for Lucide React icon components
  title: string;
  description: string;
  index: number;
}

const VisionCard: React.FC<VisionCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="bg-white p-8 rounded-[2rem] shadow-soft border border-primary-100 hover:shadow-elegant hover:scale-[1.01] transition-all duration-300 flex flex-col items-start"
    >
      <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
        <Icon size={40} className="text-accent-dark" strokeWidth={1.5} /> {/* Adjusted size and color */}
      </div>
      <h3 className="font-serif text-2xl text-primary-900 mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-primary-600 font-light text-base leading-relaxed flex-1">
        {description}
      </p>
      {/* Removed the "Saber Mais" link as the full description is now provided directly */}
    </motion.div>
  );
};

const visionData = [
  {
    icon: Target,
    title: "Bem-estar Integral",
    description: "Contribuir para o bem-estar integral das pessoas e organizações, promovendo mudanças duradouras que potenciem o seu desenvolvimento e qualidade de vida."
  },
  {
    icon: Lightbulb,
    title: "Referência no Cuidado",
    description: "Ser uma referência no cuidado integrado e multidisciplinar, ajudando pessoas e organizações a alcançar a sua melhor versão e a criar um impacto positivo na comunidade onde se inserem."
  },
  {
    icon: Sparkles,
    title: "Abordagem Multidimensional",
    description: "Tornar acessível uma abordagem de cuidado multidimensional, que integra corpo, mente e vida, permitindo que cada pessoa e organização evolua com equilíbrio e propósito."
  },
  {
    icon: Target, // Reusing Target for consistency or can be another icon like 'HandHeart' or 'Users'
    title: "Impacto Multiplicador",
    description: "Partilhar e promover que as nossas iniciativas/doações tenham um efeito multiplicador na comunidade/sociedade."
  }
];

const Vision: React.FC = () => {
  return (
    <section id="visao" className="bg-white py-32 md:py-48 scroll-mt-28">
      <div className="container mx-auto px-6 md:px-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-accent-dark font-bold mb-6 block">
            O Nosso Horizonte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-900 leading-tight">
            Visão
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
          {visionData.map((data, index) => (
            <VisionCard
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;